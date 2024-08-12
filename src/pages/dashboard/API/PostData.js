import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const postProject = async (ProjectData) => {
    const response = await axios.post(`${baseUrl}/v1/project/store`, ProjectData);
    return response;
}

export const postCategory = async (CategoryData) => {
    const response = await axios.post(`${baseUrl}/v1/kategori/store`, CategoryData);
    return response;
}

export const postReview = async (ReviewData) => {
    const response = await axios.post(`${baseUrl}/v1/review/store`, ReviewData);
    return response;
}