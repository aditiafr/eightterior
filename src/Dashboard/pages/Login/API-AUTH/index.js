import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const AuthRegister = async (dataRegister) => {
    const res = await axios.post(`${baseUrl}/v1/auth/register`, dataRegister);
    return res;
};

export const AuthLogin = async (dataLogin) => {
    const res = await axios.post(`${baseUrl}/v1/auth/login`, dataLogin);
    return res;
}