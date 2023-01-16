import baseService from "./base-service.jsx";

export const createTteokguk = async(param, args) =>{
    try{
        const result = await baseService.post(`/rice-cake-soup/${param}`, args);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}
