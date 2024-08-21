import { EditFilled, InboxOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, message, Modal, Row, Tooltip, Upload } from "antd";
import React, { useState, useEffect } from "react";
import HeaderTitle from "../../components/Global/HeaderTitle";
import Dragger from "antd/es/upload/Dragger";
import { ButtonEdit } from "../../components/Global/Button";

const EditProject = ({ onData, onEdit }) => {

    // console.log("DATA", onData);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    // Mengisi form input dengan data dari props onData saat modal dibuka
    useEffect(() => {
        if (isModalOpen && onData) {
            // Mengisi form fields
            form.setFieldsValue(onData);

            // Mapping onData file URLs to Upload fileList format
            const files = Object.keys(onData)
                .filter(key => key.startsWith('foto') && onData[key]) // Filter hanya yang tidak null
                .map((key, index) => ({
                    uid: index, // unique identifier
                    name: `Image ${index + 1}`, // Anda bisa menggantinya sesuai kebutuhan
                    status: 'done',
                    url: onData[key], // URL file
                }));

            setFileList(files);

            console.log(files);


        }
    }, [isModalOpen, onData, form]);

    const onFinish = async (values) => {
        const modifiedValues = {
            ...values,
            foto1: fileList[0] ? fileList[0].thumbUrl : '',
            foto2: fileList[1] ? fileList[1].thumbUrl : '',
            foto3: fileList[2] ? fileList[2].thumbUrl : '',
            foto4: fileList[3] ? fileList[3].thumbUrl : '',
        };

        console.log("on Submit", modifiedValues);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onReset = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    const handleUploadChange = ({ fileList }) => {
        if (fileList.length > 4) {
            message.error("You can only upload a maximum of 4 images.");
            return;
        }
        setFileList(fileList);
    };

    const beforeUpload = (file) => {
        if (fileList.length >= 4) {
            message.error("You can only upload a maximum of 4 images.");
            return Upload.LIST_IGNORE; // Ignore this file
        }
        setFileList((prevList) => [...prevList, file]);
        return false; // Prevent automatic upload
    };

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
                    <Row gutter={30} style={{ margin: "0px", paddingTop: "14px" }}>
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
                                    <p className="ant-upload-text">Click or drag file to this area to upload (Max 4 Images)</p>
                                </Dragger>
                            </Form.Item>
                        </Col>
                    </Row>
                    <ButtonEdit onReset={onReset} />
                </Form>
            </Modal>
        </>
    );
};

export default EditProject;
