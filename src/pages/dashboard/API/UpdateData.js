import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const updateCategory = async (CategoryData) => {
    const response = await axios.put(`${baseUrl}/v1/kategori/update`, CategoryData);
    return response;
}

export const updateReview = async (ReviewData) => {
    const response = await axios.put(`${baseUrl}/v1/review/update`, ReviewData);
    return response;
}