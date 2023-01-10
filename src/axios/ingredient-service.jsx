import baseService from "./base-service";

export const getUnusedIngredients = async(id) => {
    try{
        const result = await baseService.get(`/ingredient/${id}/not-used`);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}

export const deliveryIngredients = async(id, args) => {
    console.log(args);
    try {
        const result = await baseService.post(`/ingredient/create/${id}`, args);
        return result.status;
    } catch (e) {
        console.log('!', e.response);
    }
}