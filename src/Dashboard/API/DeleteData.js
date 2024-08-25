import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const deleteCategory = async (CategoryData) => {
    const response = await axios.delete(`${baseUrl}/v1/kategori/delete/${CategoryData}`);
    return response;
}


export const deleteProject = async (ProjectData) => {
    const response = await axios.delete(`${baseUrl}/v1/project/delete/${ProjectData}`);
    return response;
}


export const deleteCarousel = async (CarouselData) => {
    const response = await axios.delete(`${baseUrl}/v1/carousel/delete/${CarouselData}`);
    return response;
}


export const deleteReview = async (ReviewData) => {
    const response = await axios.delete(`${baseUrl}/v1/review/delete/${ReviewData}`);
    return response;
}