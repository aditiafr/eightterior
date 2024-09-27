import { EditFilled, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, message, Modal, Row, Tooltip, Upload } from "antd";
import React, { useState, useEffect } from "react";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { updateCarousel, updateFotoCarousel } from "../../API/UpdateData";
import { ButtonEdit } from "../../components/Global/Button";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const EditCarousel = ({ onData, onEdit }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState(null);
  const [isImageChanged, setIsImageChanged] = useState(false);

  const handleChange = ({ file }) => {
    if (file && file.originFileObj) {
      const allowedExtensions = ['png', 'jpg', 'jpeg'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
  
      if (allowedExtensions.includes(fileExtension)) {
        getBase64(file.originFileObj, (base64) => {
          setImageUrl(base64);
          setIsImageChanged(true); // Set to true when image changes
        });
      } else {
        message.error('The uploaded file must be an image with the extension .png, .jpg, or .jpeg');
      }
    }
  };
  


  useEffect(() => {
    if (isModalOpen && onData) {
      form.setFieldsValue(onData);
      if (onData.foto) {
        setImageUrl(onData.foto);
      }
      setIsImageChanged(false); // Reset to false when modal opens
    }
  }, [form, isModalOpen, onData]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = async (values) => {
    try {
      setIsLoading(true);
      const payload = {
        ...values,
        id: onData.id,
      };

      if (isImageChanged) {
        const payloadFoto = {
          id: onData.id,
          foto: imageUrl
        };
        await updateFotoCarousel(payloadFoto);
      }

      const res = await updateCarousel(payload);
      message.success(`${res.data.msg}`);
      onEdit(true);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
      message.error("Failed to submit Category.");
    }
    setIsLoading(false);
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
        title={<HeaderTitle title="CAROUSEL" subtitle="Edit data a Carousel" />}
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
            <Form.Item>
              <p className="text-center text-lg font-medium mb-2">Image 1</p>
              {imageUrl ? (
                <div className="shadow-md">
                  <Image
                    src={imageUrl}
                    alt="avatar"
                    style={{ width: "140px", height: "auto", margin: "0", padding: "0" }}
                  />
                  <div className="flex w-full">
                    {/* <button type="button" className="w-full bg-white hover:bg-gray-200 py-1" onClick={() => setImageUrl1(null)}><DeleteOutlined /></button> */}
                    <Upload
                      showUploadList={false}
                      onChange={handleChange} // langsung panggil fungsi tanpa tambahan argumen
                      className="w-full bg-white hover:bg-gray-200 py-1 text-center"
                    >
                      <button type="button" className="w-32"><UploadOutlined /></button>
                    </Upload>
                  </div>
                </div>
              ) : (
                <Upload
                  name="file"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  onChange={handleChange}
                >
                  {uploadButton}
                </Upload>
              )}
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
          <ButtonEdit onReset={onReset} isLoading={isLoading} />
        </Form>
      </Modal>
    </>
  );
};

export default EditCarousel;
