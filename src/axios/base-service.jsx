import axios from 'axios';
const baseURL = new URL("https://makingtteokguk.cloud/api");

export const baseService = axios.create({
    baseURL: baseURL.toString(),
    'Content-Type': 'application/json',
});

export default baseService;
