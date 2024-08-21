import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const getCategoryList = async () => {
    const response = await axios.get(`${baseUrl}/v1/kategori/list`);
    return response.data.data.map((row, index) => ({ ...row, key: index + 1 }));
}

export const getProjectList = async () => {
    const response = await axios.get(`${baseUrl}/v1/project/list`);
    return response.data.data.map((row, index) => ({ ...row, key: index + 1 }));
}

export const getReviewList = async () => {
    const response = await axios.get(`${baseUrl}/v1/review/list`);
    return response.data.data.map((row, index) => ({ ...row, key: index + 1 }));
}

export const getCarouselList = async () => {
    const response = await axios.get(`${baseUrl}/v1/carousel/list`);
    return response.data.data.map((row, index) => ({ ...row, key: index + 1 }));
}