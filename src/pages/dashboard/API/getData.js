import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

export const getProjectList = async () => {
    const response = await axios.get(`${baseUrl}/v1/project/list`);

    return response.data.data.map((row, index) => ({ ...row, key: index + 1 }));
} 