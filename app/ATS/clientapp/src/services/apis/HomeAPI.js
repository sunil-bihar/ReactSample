import { getRequest } from "services/apis/configs/apiClient";

const HomeAPI = {
    getHomeData: async function () {
        const response = await getRequest('Home');
        return response;
    },
    putHomeData: async function () {
        const response = await getRequest('Home');
        return response;
    }
}

export default HomeAPI;