import { Col, Form, Input, message, Row, Upload } from "antd";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { postCarousel } from "../../API/PostData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { ButtonSubmit } from "../../components/Global/Button";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const FormCarousel = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // const [fileImage, setFileImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = ({ file }) => {
    if (file && file.originFileObj) {
      const allowedExtensions = ['png', 'jpg', 'jpeg'];
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        getBase64(file.originFileObj, (base64) => {
          setImageUrl(base64);
        });
        // setFileImage(file);
      } else {
        message.error('The uploaded file must be an image with the extension .png, .jpg, or .jpeg');
      }
    }
  };

  // console.log(fileImage);
  // console.log(imageUrl);

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

  const onFinish = async (values) => {
    try {
      const payload = {
        ...values,
        foto: imageUrl
      }
      console.log(payload);
      
      const response = await postCarousel(payload);
      message.success(`${response.data.msg}`);
      navigate('/dashboard/carousel');
    } catch (error) {
      console.log(error);
      message.error("Failed to submit Review.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle title="REVIEW" subtitle="form data a Review" />
      </div>
      <div className="relative w-full bg-white rounded-lg">

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
                  <img
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

          <Row gutter={30} style={{ padding: "28px" }}>

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

          <ButtonSubmit onReset={onReset} />
        </Form>
      </div >
    </>
  );
};

export default FormCarousel;
