import { Col, Form, Image, Input, message, Row, Upload } from "antd";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { postCarousel } from "../../API/PostData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { ButtonSubmit } from "../../components/Global/Button";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const FormCarousel = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
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
      message.error("Failed to submit Carousel.");
    }
    setIsLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
    setImageUrl(null);
  };

  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle title="CAROUSEL" subtitle="form data a Carousel" />
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
                      onChange={({ file }) => handleChange(file, 1)}
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
                  onChange={({ file }) => handleChange(file, 1)}
                >
                  {uploadButton}
                </Upload>
              )}
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

          <ButtonSubmit onReset={onReset} isLoading={isLoading} />
        </Form>
      </div >
    </>
  );
};

export default FormCarousel;
