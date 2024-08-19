import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { message } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const data = [
        {
            email: "admin@gmail.com",
            password: "123456789"
        },
        {
            email: "user@gmail.com",
            password: "123456789"
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        const user = data.find(user =>
            user.email === formData.email && user.password === formData.password
        );
        try {
            if (user) {
                const randomString = generateRandomString(50);
                Cookies.set('auth_token', randomString, { expires: 1 });
                navigate('/dashboard');
            } else {
                message.error("Email dan Password tidak sesuai!")
            }
        } catch (error) {
            console.log(error);
        }
    };

    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="h-screen max-w-screen mx-auto flex items-center justify-center bg-gray-100">
            <div className="max-h-screen-lg max-w-screen-lg w-full flex drop-shadow-md">
                <div className="bg-white py-6 lg:py-10 px-8 lg:px-14 w-full lg:w-1/2 rounded-s-md lg:rounded-s-xl mx-4 lg:mx-0">
                    <img src="/assets/images/logo.png" alt="Logo Icon" className="w-20 md:w-28 h-20 md:h-28" />
                    <div className="py-6">
                        <h1 className="text-[42px] md:text-[58px] text-primary-500 leading-none">Hello, <span className="font-bold">Welcome!</span></h1>
                    </div>
                    <div className="my-2">
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="flex flex-col gap-4">
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

                            <Link to="">
                                <p className="text-right pt-2 text-primary-500 hover:text-primary-400">Forget password?</p>
                            </Link>

                            <div className="flex gap-4">
                                <button type="submit" className=" bg-primary-500 hover:bg-primary-400 text-white py-2 max-w-32 w-full rounded-md mt-8">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-1/2 bg-cover bg-center rounded-e-xl hidden lg:block" style={{ backgroundImage: "url('/assets/images/about/tabs/img-4.png')" }}></div>
            </div>
        </div>
    );
}

export default Login;
