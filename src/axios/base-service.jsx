import axios from 'axios';
const baseURL = new URL("http://3.35.136.13:8080/api");

export const baseService = axios.create({
    baseURL: baseURL.toString(),
    'Content-Type': 'application/json',
});

export default baseService;
