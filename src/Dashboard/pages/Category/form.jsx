import { Button, Col, Form, Input, message, Row } from "antd";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { postCategory } from "../../API/PostData";
import { useNavigate } from "react-router-dom";
import { ButtonSubmit } from "../../components/Global/Button";
import { useEffect } from "react";
import { RollbackOutlined } from "@ant-design/icons";

const FormCategory = () => {

    useEffect(() => {
        document.title = "Eightterior - Form Category";
    }, []);
    
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await postCategory(values);
            message.success(`${response.data.msg}`);
            navigate('/dashboard/category');
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
    };

    return (
        <>
            <div className="flex justify-between items-center px-2 pb-4">
                <HeaderTitle title="CATEGORY" subtitle="form data a Category" />
                <Button icon={<RollbackOutlined />} iconPosition="end" onClick={() => navigate("/dashboard/category")}>Back</Button>
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
                        <Col xs={24} sm={24}>
                            <Form.Item
                                label="Name Category"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Name Category!",
                                    },
                                ]}
                            >
                                <Input placeholder="Name Category" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <ButtonSubmit onReset={onReset} />
                </Form>
            </div>
        </>
    );
};

export default FormCategory;
