import axios from 'axios';
import { Constants } from 'config/Constants';

const APIClient = axios.create({
    baseURL: Constants.LOCAL_API_ENDPOINT,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 5000,
    withCredentials: false
});

APIClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status === 401) {
            console.log('Go Home');
        }
        console.error("Looks like there was a problem. Status Code: " + res.status);
        return Promise.reject(error);
    }
);

export function getRequest(URL) {
    return APIClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
    return APIClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
    return APIClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
    return APIClient.delete(`/${URL}`).then(response => response);
}