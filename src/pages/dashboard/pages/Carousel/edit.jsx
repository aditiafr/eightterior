import { EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, message, Modal, Row, Tooltip, Upload } from "antd";
import React, { useState, useEffect } from "react";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { updateReview } from "../../API/UpdateData";
import { ButtonEdit } from "../../components/Global/Button";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const EditCarousel = ({ onData, onEdit }) => {

  console.log(onData);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = ({ file }) => {
    if (file && file.originFileObj) {
      const allowedExtensions = ['png', 'jpg', 'jpeg'];
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        getBase64(file.originFileObj, (base64) => {
          setImageUrl(base64);
        });
      } else {
        message.error('The uploaded file must be an image with the extension .png, .jpg, or .jpeg');
      }
    }
  };

  useEffect(() => {
    if (isModalOpen && onData) {
      form.setFieldsValue(onData);
      // Set the image URL from onData.foto
      if (onData.foto) {
        setImageUrl(onData.foto);
      }
    }
  }, [form, isModalOpen, onData]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = async (values) => {
    try {
      const modifiedValues = {
        ...values,
        id: onData.id,
        foto: imageUrl 
      };
      console.log("on Submit", modifiedValues);

      const response = await updateReview(modifiedValues);
      message.success(`${response.data.msg}`);
      onEdit(true);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      message.error("Failed to submit Category.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
    setImageUrl(null);
    setIsModalOpen(false);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  return (
    <>
      <Tooltip title="Edit">
        <Button icon={<EditFilled />} type="text" onClick={showModal} />
      </Tooltip>

      <Modal
        title={<HeaderTitle title="PROJECT" subtitle="Edit data a Project" />}
        centered
        open={isModalOpen}
        closable={false}
        width={1000}
        styles={{
          body: {
            maxHeight: "70vh",
            overflow: "auto",
          },
        }}
        footer={false}
      >
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >

          <div className="flex items-center justify-center pt-8">
            <Form.Item name="foto">
              <Upload
                name="file"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="avatar"
                    style={{ width: '100%' }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
          </div>

          <Row gutter={30} style={{ margin: "0px", paddingTop: "14px" }}>

            <Col xs={24} sm={12}>
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input your Title!",
                  },
                ]}
              >
                <Input placeholder="Title" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  {
                    required: true,
                    message: "Please input your Subject!",
                  },
                ]}
              >
                <Input.TextArea placeholder="Subject..." rows={4} />
              </Form.Item>
            </Col>

          </Row>
          <ButtonEdit onReset={onReset} />
        </Form>
      </Modal>
    </>
  );
};

export default EditCarousel;
