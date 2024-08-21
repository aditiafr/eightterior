import { EditFilled } from "@ant-design/icons";
import { Button, Col, Form, Input, message, Modal, Row, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { updateReview } from "../../API/UpdateData";
import { ButtonEdit } from "../../components/Global/Button";

const EditReview = ({ onData, onEdit }) => {

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
    try {
      const modifiedValues = {
        ...values,
        id: onData.id,
        star: 5
      }
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
    setIsModalOpen(false);
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
          <ButtonEdit onReset={onReset} />
        </Form>
      </Modal>
    </>
  );
};

export default EditReview;
