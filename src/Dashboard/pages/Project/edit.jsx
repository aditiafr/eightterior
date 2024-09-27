import { EditFilled, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, message, Modal, Row, Select, Tooltip, Upload } from "antd";
import React, { useState, useEffect } from "react";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { ButtonEdit } from "../../components/Global/Button";
import { updateProject } from "../../API/UpdateData";
import { getCategoryList } from "../../API/GetData";

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const EditProject = ({ onData, onEdit }) => {

    // console.log("DATA", onData);

    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categoryData, setCategoryData] = useState([]);

    const [imageUrl1, setImageUrl1] = useState(null);
    const [isImageChanged1, setIsImageChanged1] = useState(false);

    const [imageUrl2, setImageUrl2] = useState(null);
    const [isImageChanged2, setIsImageChanged2] = useState(false);

    const [imageUrl3, setImageUrl3] = useState(null);
    const [isImageChanged3, setIsImageChanged3] = useState(false);

    const [imageUrl4, setImageUrl4] = useState(null);
    const [isImageChanged4, setIsImageChanged4] = useState(false);

    const [errorShown, setErrorShown] = useState(false);

    const handleChange = async (file, imageNumber) => {
        if (file && file.originFileObj) {
            const allowedExtensions = ['png', 'jpg', 'jpeg'];
            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (allowedExtensions.includes(fileExtension)) {
                setErrorShown(false);
                getBase64(file.originFileObj, async (base64) => {
                    try {
                        switch (imageNumber) {
                            case 1:
                                setImageUrl1(base64);
                                setIsImageChanged1(true);
                                break;
                            case 2:
                                setImageUrl2(base64);
                                setIsImageChanged2(true);
                                break;
                            case 3:
                                setImageUrl3(base64);
                                setIsImageChanged3(true);
                                break;
                            case 4:
                                setImageUrl4(base64);
                                setIsImageChanged4(true);
                                break;
                            default:
                                break;
                        }
                    } catch (error) {
                        console.error("Upload failed", error);
                        message.error("Upload failed. Please try again.");
                    }
                });
            } else if (!errorShown) {
                setErrorShown(true);
                message.error('The uploaded file must be an image with the extension .png, .jpg, or .jpeg');
            }
        }
    };


    const fetchCategory = async () => {
        try {
            const response = await getCategoryList();
            setCategoryData(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    // Mengisi form input dengan data dari props onData saat modal dibuka
    useEffect(() => {
        if (isModalOpen && onData) {
            // Mengisi form fields
            form.setFieldsValue(onData);

            setImageUrl1(onData.foto1);
            setIsImageChanged1(false);
            setImageUrl2(onData.foto2);
            setIsImageChanged2(false);
            setImageUrl3(onData.foto3);
            setIsImageChanged3(false);
            setImageUrl4(onData.foto4);
            setIsImageChanged4(false);

        }
    }, [isModalOpen, onData, form]);

    const onFinish = async (values) => {
        try {
            setIsLoading(true);
            const payloadData = {
                ...values,
                id: onData.id,
                updated_by: "admin",
            }

            if (isImageChanged1) {
                payloadData.foto1 = isImageChanged1 ? imageUrl1 : '';
            }
            if (isImageChanged2) {
                payloadData.foto2 = isImageChanged2 ? imageUrl2 : '';
            }
            if (isImageChanged3) {
                payloadData.foto3 = isImageChanged3 ? imageUrl3 : '';
            }
            if (isImageChanged4) {
                payloadData.foto4 = isImageChanged4 ? imageUrl4 : '';
            }

            console.log("Data", payloadData);

            const res = await updateProject(payloadData);
            message.success(res.data.msg);
            onEdit(true);
            setIsModalOpen(false);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onReset = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    // const handleUploadChange = ({ fileList }) => {
    //     if (fileList.length > 4) {
    //         message.error("You can only upload a maximum of 4 images.");
    //         return;
    //     }
    //     setFileList(fileList);
    // };

    // const beforeUpload = (file) => {
    //     if (fileList.length >= 4) {
    //         message.error("You can only upload a maximum of 4 images.");
    //         return Upload.LIST_IGNORE; // Ignore this file
    //     }
    //     setFileList((prevList) => [...prevList, file]);
    //     return false; // Prevent automatic upload
    // };

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

                    <div className="flex items-center justify-center pt-8 gap-4">

                        <Form.Item>
                            <p className="text-center text-lg font-medium mb-2">Image 1</p>
                            {imageUrl1 ? (
                                <div className="shadow-md">
                                    <Image
                                        src={imageUrl1}
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

                        <Form.Item>
                            <p className="text-center text-lg font-medium mb-2">Image 2</p>
                            {imageUrl2 ? (
                                <div className="shadow-md">
                                    <Image
                                        src={imageUrl2}
                                        alt="avatar"
                                        style={{ width: "140px", height: "auto", margin: "0", padding: "0" }}
                                    />
                                    <div className="flex w-full">
                                        {/* <button className="w-full bg-white hover:bg-gray-200 py-1" onClick={() => setImageUrl2(null)}><DeleteOutlined /></button> */}
                                        <Upload
                                            showUploadList={false}
                                            onChange={({ file }) => handleChange(file, 2)}
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
                                    onChange={({ file }) => handleChange(file, 2)}
                                >
                                    {uploadButton}
                                </Upload>
                            )}
                        </Form.Item>

                        <Form.Item>
                            <p className="text-center text-lg font-medium mb-2">Image 3</p>
                            {imageUrl3 ? (
                                <div className="shadow-md">
                                    <Image
                                        src={imageUrl3}
                                        alt="avatar"
                                        style={{ width: "140px", height: "auto", margin: "0", padding: "0" }}
                                    />
                                    <div className="flex w-full">
                                        {/* <button className="w-full bg-white hover:bg-gray-200 py-1" onClick={() => setImageUrl3(null)}><DeleteOutlined /></button> */}
                                        <Upload
                                            showUploadList={false}
                                            onChange={({ file }) => handleChange(file, 3)}
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
                                    onChange={({ file }) => handleChange(file, 3)}
                                >
                                    {uploadButton}
                                </Upload>
                            )}
                        </Form.Item>

                        <Form.Item>
                            <p className="text-center text-lg font-medium mb-2">Image 4</p>
                            {imageUrl4 ? (
                                <div className="shadow-md">
                                    <Image
                                        src={imageUrl4}
                                        alt="avatar"
                                        style={{ width: "140px", height: "auto", margin: "0", padding: "0" }}
                                    />
                                    <div className="flex w-full">
                                        {/* <button className="w-full bg-white hover:bg-gray-200 py-1" onClick={() => setImageUrl4(null)}><DeleteOutlined /></button> */}
                                        <Upload
                                            showUploadList={false}
                                            onChange={({ file }) => handleChange(file, 4)}
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
                                    onChange={({ file }) => handleChange(file, 4)}
                                >
                                    {uploadButton}
                                </Upload>
                            )}
                        </Form.Item>

                    </div>

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
                                <Input placeholder="Name Project" />
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
                                <Input placeholder="Name Client" />
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
                                <Input placeholder="Location" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item
                                label="Category"
                                name="id_category"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Category!",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select a category"
                                    onChange={handleChange}
                                    options={categoryData.map((item) => ({
                                        value: item.id,
                                        label: item.name,
                                    }))}
                                />
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
                                <Input placeholder="Area" />
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
                                <Input placeholder="Year" />
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

                        {/* <Col xs={24} sm={24}>
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
                        </Col> */}
                    </Row>

                    <ButtonEdit onReset={onReset} isLoading={isLoading} />
                </Form>
            </Modal>
        </>
    );
};

export default EditProject;
