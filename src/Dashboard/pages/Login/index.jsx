import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { message } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthLogin } from './API-AUTH';
import { useEffect } from 'react';

const Login = () => {

    useEffect(() => {
        document.title = "Eightterior - Login";
    }, []);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const dataSession = JSON.parse(localStorage.getItem('data'));
        const authToken = Cookies.get('auth_token');
        if (authToken && dataSession) {
            navigate('/dashboard');
        }
    }, [navigate])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Form Data:', formData);
        try {
            setIsLoading(true);
            const res = await AuthLogin(formData);
            const randomString = generateRandomString(50);
            localStorage.setItem('data', JSON.stringify(res.data.data));
            Cookies.set('auth_token', randomString, { expires: 1 });
            message.success("You have successfully logged in.")
            navigate('/dashboard');
        } catch (error) {
            message.error(error.response.data.msg);
            console.log(error);
            setIsLoading(false);
        }
        setIsLoading(false);
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
                    <Link to="/">
                        <img src="/assets/images/logo.png" alt="Logo Icon" className="w-20 md:w-28 h-20 md:h-28" />
                    </Link>
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

                            {/* <Link to="">
                                <p className="text-right pt-2 text-primary-500 hover:text-primary-400">Forget password?</p>
                            </Link> */}

                            <div className="flex gap-4">
                                <button type="submit" disabled={isLoading} className={`${isLoading ? "bg-primary-400" : "bg-primary-500"} hover:bg-primary-400 text-white py-2 max-w-32 w-full rounded-md mt-8`}>
                                    {isLoading ? "Loading..." : "Log In"}
                                </button>
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
