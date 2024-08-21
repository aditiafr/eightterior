import { Col, Form, Input, message, Row } from "antd";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { postReview } from "../../API/PostData";
import { useNavigate } from "react-router-dom";
import { ButtonSubmit } from "../../components/Global/Button";

const FormReview = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const modifiedValues = {
        ...values,
        star: 5
      }
      const response = await postReview(modifiedValues);
      message.success(`${response.data.msg}`);
      navigate('/dashboard/review');
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
          <Row gutter={30} style={{ padding: "28px", paddingTop: "38px" }}>

            <Col xs={24} sm={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item
                label="Name Project"
                name="name_project"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name Project!",
                  },
                ]}
              >
                <Input placeholder="Name Project" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24}>
              <Form.Item
                label="Description"
                name="deskripsi"
                rules={[
                  {
                    required: true,
                    message: "Please input your Description!",
                  },
                ]}
              >
                <Input.TextArea placeholder="Description..." rows={4} />
              </Form.Item>
            </Col>

          </Row>

          <ButtonSubmit onReset={onReset} />
        </Form>
      </div>
    </>
  );
};

export default FormReview;
