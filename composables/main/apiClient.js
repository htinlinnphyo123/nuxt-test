import axios from 'axios';

const apiClient = async (endpoint, params = {}) => {
    // console.log(import.meta);
    const url = import.meta.env.VITE_BACKEND_URL + '/' + endpoint;

    try {
        const response = await axios.post(url, params, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error.response);
        throw error.response ? error.response.data : error; 
    }
};

export default apiClient;
