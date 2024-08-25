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

export const updateProject = async (ProjectData) => {
    const response = await axios.put(`${baseUrl}/v1/project/update`, ProjectData)
    return response;
}

export const updateFotoProject = async (FotoProject) => {
    const response = await axios.put(`${baseUrl}/v1/project/upload-photo`, FotoProject);
    return response;
}

export const updateCarousel = async (CarouselData) => {
    const response = await axios.put(`${baseUrl}/v1/carousel/update`, CarouselData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return response;
}

export const updateFotoCarousel = async (FotoCarousel) => {
    const response = await axios.put(`${baseUrl}/v1/carousel/upload-photo`, FotoCarousel);
    return response;
}