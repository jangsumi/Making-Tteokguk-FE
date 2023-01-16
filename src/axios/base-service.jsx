import axios from 'axios';
const baseURL = new URL(import.meta.env.VITE_APP_BASE_URL);

export const baseService = axios.create({
    baseURL: baseURL.toString(),
    'Content-Type': 'application/json',
});

export default baseService;
