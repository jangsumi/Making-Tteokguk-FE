import baseService from "./base-service";

export const getMyMessage = async(id, isUsed) => {
    try{
        const result = await baseService.get(`/ingredient/${id}?isUsed=${isUsed}`);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}
export const getUnusedIngredients = async(id) => {
    try{
        const result = await baseService.get(`/ingredient/${id}/not-used`);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}