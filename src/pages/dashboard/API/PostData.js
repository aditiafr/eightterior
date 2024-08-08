import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const postProject = async (ProjectData) => {
    const response = await axios.post(`${baseUrl}/v1/project/store`, ProjectData);
    return response;
}