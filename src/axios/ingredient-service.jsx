import baseService from "./base-service";

export const getUnusedIngredients = async(id) => {
    try{
        const result = await baseService.get(`/ingredient/${id}/not-used`);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}