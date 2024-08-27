import { Button, Col, Form, Image, Input, Modal, Row, Select, Upload, message } from "antd";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { ExclamationCircleOutlined, PlusOutlined, RollbackOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { postProject } from "../../API/PostData";
import { getCategoryList } from "../../API/GetData";
import { Link, useNavigate } from "react-router-dom";
import { ButtonSubmit } from "../../components/Global/Button";

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const FormProject = () => {

    useEffect(() => {
        document.title = "Eightterior - Form Project";
    }, []);

    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [showDesign, setShowDesign] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [openCategory, setOpenCategory] = useState(false);

    const [imageUrl1, setImageUrl1] = useState(null);
    const [imageUrl2, setImageUrl2] = useState(null);
    const [imageUrl3, setImageUrl3] = useState(null);
    const [imageUrl4, setImageUrl4] = useState(null);

    const [errorShown, setErrorShown] = useState(false);

    const handleChange = async (file, imageNumber) => {
        if (file && file.originFileObj) {
            const allowedExtensions = ['png', 'jpg', 'jpeg'];
            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (allowedExtensions.includes(fileExtension)) {
                setErrorShown(false); // Reset error state
                getBase64(file.originFileObj, async (base64) => {
                    try {
                        switch (imageNumber) {
                            case 1:
                                setImageUrl1(base64);
                                break;
                            case 2:
                                setImageUrl2(base64);
                                break;
                            case 3:
                                setImageUrl3(base64);
                                break;
                            case 4:
                                setImageUrl4(base64);
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
                setErrorShown(true); // Set error state
                message.error('The uploaded file must be an image with the extension .png, .jpg, or .jpeg');
            }
        }
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

    const fetchCategory = async () => {
        try {
            const response = await getCategoryList();
            setCategoryData(response);
        } catch (error) {
            console.log(error);
            setCategoryData([]);
        }
    };

    useEffect(() => {
        if (openCategory) {
            fetchCategory();
            setOpenCategory(false);
        }
    }, [openCategory]);

    // console.log("Data Category", categoryData);

    const onFinish = async (values) => {
        if (!imageUrl1) {
            message.warning('Please upload Image 1!');
        }
        if (!imageUrl2) {
            message.warning('Please upload Image 2!');
        }
        if (!imageUrl3) {
            message.warning('Please upload Image 3!');
        }
        if (!imageUrl4) {
            message.warning('Please upload Image 4!');
        }
        try {
            setIsLoading(true);
            const payload = {
                ...values,
                created_by: "admin",
                foto1: imageUrl1,
                foto2: imageUrl2,
                foto3: imageUrl3,
                foto4: imageUrl4,
            };
            console.log("on Submit", payload);

            const response = await postProject(payload);
            console.log(response);
            message.success("Project successfully submitted!");
            navigate('/dashboard/project');
        } catch (error) {
            console.log(error);
            // message.error("Failed to submit project.");
        }
        setIsLoading(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onReset = () => {
        form.resetFields();
        setImageUrl1(null);
        setImageUrl2(null);
        setImageUrl3(null);
        setImageUrl4(null);
    };

    return (
        <>
            <div className="flex justify-between items-center px-2 pb-4">
                <HeaderTitle title="PROJECT" subtitle="form data a project" />
                <Button icon={<RollbackOutlined />} iconPosition="end" onClick={() => navigate("/dashboard/project")}>Back</Button>
            </div>
            <div className="relative w-full bg-white rounded-lg">

                <div className="absolute right-0 text-right pt-4 pr-4">
                    <Link onClick={setShowDesign}><ExclamationCircleOutlined /> View Design</Link>
                </div>

                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}
                >

                    <div className="flex max-w-screen-md mx-auto items-center justify-center pt-12 gap-4">

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

                    <Row gutter={30} style={{ padding: "28px", paddingTop: "38px" }}>
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
                                    onDropdownVisibleChange={() => setOpenCategory(true)}
                                    options={categoryData.map((item) => ({
                                        value: item.id,
                                        label: item.name,
                                    }))}
                                    notFoundContent={
                                        <Link to="/dashboard/category/form" target="_blank" style={{ textDecoration: 'none' }}>There is no option, click to fill in category data</Link>
                                    }
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
                    </Row>

                    <ButtonSubmit onReset={onReset} isLoading={isLoading} />
                </Form>
            </div>

            <Modal
                title="Position"
                centered
                open={showDesign}
                onOk={() => setShowDesign(false)}
                onCancel={() => setShowDesign(false)}
                width={1000}
            >
                <div className="flex flex-col w-full justify-center items-center gap-4">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h2 className="text-3xl font-bold">Project</h2>
                        <img
                            src={`/assets/dashboard/project.png`}
                            style={{ width: '80%', height: '80%', objectFit: 'cover' }}
                            alt="..."
                        />
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h2 className="text-3xl font-bold">Detail Project</h2>
                        <img
                            src={`/assets/dashboard/detail-project.png`}
                            style={{ width: '80%', height: '80%', objectFit: 'cover' }}
                            alt="..."
                        />
                    </div>
                </div>
            </Modal>

        </>
    );
};

export default FormProject;
