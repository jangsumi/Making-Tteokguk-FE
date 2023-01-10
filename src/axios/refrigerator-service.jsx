import baseService from "./base-service";

export const getMyFridge = async(id) => {
    try{
        const result = await baseService.get(`/fridge?kakaoId=${id}`);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}

export const getFridgeWithLink = async(link) => {
    try{
        const result = await baseService.get(`/fridge/${link}`);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}

export const createRef = async(param, args) =>{
    try{
        const result = await baseService.post(`/fridge/init?isSecret=${param}`, args);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}
