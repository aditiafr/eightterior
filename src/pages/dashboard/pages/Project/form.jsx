import { Button, Col, Form, Input, Row, Upload, message } from "antd";
import HeaderTitle from "../../components/Global/HeaderTitle";
import ButtonSubmit from "../../components/Global/Button/ButtonSubmit";
import Icon, { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { postProject } from "../../API/PostData";
import Dragger from "antd/es/upload/Dragger";

const FormProject = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);

    const onFinish = async (values) => {
        const modifiedValues = {
            ...values,
            foto1: fileList[0] ? fileList[0].thumbUrl : '',
            foto2: fileList[1] ? fileList[1].thumbUrl : '',
            foto3: fileList[2] ? fileList[2].thumbUrl : '',
        };

        console.log("on Submit", modifiedValues);

        try {
            const response = await postProject(modifiedValues);
            console.log(response);
            message.success("Project successfully submitted!");
        } catch (error) {
            console.log(error);
            message.error("Failed to submit project.");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onReset = () => {
        form.resetFields();
        setFileList([]);
    };

    const handleUploadChange = ({ fileList }) => {
        if (fileList.length > 3) {
            message.error("You can only upload a maximum of 3 images.");
            return;
        }
        setFileList(fileList);
    };

    const beforeUpload = (file) => {
        if (fileList.length >= 3) {
            message.error("You can only upload a maximum of 3 images.");
            return Upload.LIST_IGNORE; // Ignore this file
        }
        setFileList((prevList) => [...prevList, file]);
        return false; // Prevent automatic upload
    };

    return (
        <>
            <div className="flex justify-between items-center px-2 pb-4">
                <HeaderTitle title="PROJECT" subtitle="form data a project" />
            </div>
            <div className="w-full bg-white rounded-lg">
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}
                >
                    <Row gutter={30} style={{ padding: "28px" }}>
                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Name Project"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Name Project!",
                                    },
                                ]}
                            >
                                <Input placeholder="Masukan Name Project" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Name Client"
                                name="name_client"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Name Client!",
                                    },
                                ]}
                            >
                                <Input placeholder="Masukan Name Client" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Area"
                                name="area"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Area!",
                                    },
                                ]}
                            >
                                <Input placeholder="Masukan Area" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Year"
                                name="year"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Year!",
                                    },
                                ]}
                            >
                                <Input placeholder="Masukan Year" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Location"
                                name="location"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Location!",
                                    },
                                ]}
                            >
                                <Input placeholder="Masukan Location" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
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
                                <Input.TextArea placeholder="Masukan Description" rows={4} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24}>
                            <Form.Item>
                                <Dragger
                                    listType="picture"
                                    fileList={fileList}
                                    beforeUpload={beforeUpload}
                                    onChange={handleUploadChange}
                                    onRemove={(file) => {
                                        setFileList((prevList) =>
                                            prevList.filter((item) => item.uid !== file.uid)
                                        );
                                    }}
                                >
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload (Max 3 Images)</p>
                                </Dragger>
                            </Form.Item>
                        </Col>
                    </Row>

                    <ButtonSubmit onReset={onReset} />
                </Form>
            </div>
        </>
    );
};

export default FormProject;
