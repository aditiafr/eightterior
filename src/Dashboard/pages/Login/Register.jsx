import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Input, message, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthRegister } from './API-AUTH';

const Register = () => {

    useEffect(() => {
        document.title = "Eightterior - Sign Up";
    }, []);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        role: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [securityCode, setSecurityCode] = useState('');


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        if (securityCode === 'Q1W2E3') {
            handleSubmit();
            setIsModalOpen(false);
        } else {
            message.error('Invalid security code. Please try again.');
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSecurityCodeChange = (text) => {
        setSecurityCode(text);
    };

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const payload = {
                ...formData,
                name: "Administrator",
                role: "SuperAdmin"
            }

            await AuthRegister(payload);
            message.success("You have successfully created an account!");
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="h-screen max-w-screen mx-auto flex items-center justify-center bg-gray-100">
                <div className="max-h-screen-lg max-w-screen-lg w-full flex drop-shadow-md">
                    <div className="bg-white py-6 lg:py-4 px-8 lg:px-14 w-full lg:w-1/2 rounded-s-md lg:rounded-s-xl mx-4 lg:mx-0">
                        <Link to="/">
                            <img src="/assets/images/logo.png" alt="Logo Icon" className="w-20 md:w-24 h-20 md:h-24" />
                        </Link>
                        <div className="py-6">
                            <h1 className="text-[42px] md:text-[44px] text-primary-500 leading-none">Sign Up <span className="font-bold">Account!</span></h1>
                        </div>
                        <div className="my-2">
                            <form onSubmit={(e) => { e.preventDefault(); showModal(); }} method="POST">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Username
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                required
                                                autoComplete="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Username"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="mt-2 relative">
                                            <input
                                                id="password"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                required
                                                autoComplete="current-password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="Password"
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="text-gray-500 hover:text-gray-700 absolute right-2 top-1.5"
                                            >
                                                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/login">
                                    <p className="text-right pt-2 text-primary-500 hover:text-primary-400">Back to Sign In!</p>
                                </Link>

                                <button type="submit" disabled={isLoading} className={`${isLoading ? "bg-primary-400" : "bg-primary-500"} hover:bg-primary-400 text-white py-2 max-w-32 w-full rounded-md mt-8`}>
                                    {isLoading ? "Loading..." : "Sign Up"}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-1/2 bg-cover bg-center rounded-e-xl hidden lg:block" style={{ backgroundImage: "url('/assets/images/about/tabs/img-4.png')" }}></div>
                </div>
            </div>

            <Modal
                title="Enter your security code!"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
            >
                <div className="flex w-full items-center justify-center py-4">
                    <Input.OTP formatter={(str) => str.toUpperCase()} value={securityCode} onChange={handleSecurityCodeChange} />
                </div>
            </Modal>
        </>
    );
}

export default Register;
