import { EditFilled } from "@ant-design/icons";
import { Button, Col, Form, Input, message, Modal, Row, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { updateCategory } from "../../API/UpdateData";
import { ButtonEdit } from "../../components/Global/Button";

const EditCategory = ({ onData, onEdit }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        if (isModalOpen && onData) {
            form.setFieldsValue(onData);
        }
    }, [form, isModalOpen, onData]);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const onFinish = async (values) => {
        console.log("on Submit", values);
        try {
            const modifiedValues = {
                ...values,
                id: onData.id
            }
                        
            const response = await updateCategory(modifiedValues);
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
        setIsModalOpen(false);
    };

    return (
        <>
            <Tooltip title="Edit">
                <Button icon={<EditFilled />} type="text" onClick={showModal} />
            </Tooltip>

            <Modal
                title={<HeaderTitle title="Category" subtitle="Edit data a Category" />}
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
                                <Input placeholder="Masukan Name Category" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <ButtonEdit onReset={onReset} />
                </Form>
            </Modal>
        </>
    );
};

export default EditCategory;
