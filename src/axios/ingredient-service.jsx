import baseService from "./base-service";

export const getMyMessage = async(id, isUsed) => {
    try{
        const result = await baseService.get(`/ingredient/${id}?isUsed=${isUsed}`);
        return result.data;
    } catch (e) {
        console.error('!', e.response);
    }
}