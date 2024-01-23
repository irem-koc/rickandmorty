import api from "../types/api";

const getCharacter = async (id: number) => {
  try {
    const response = await api.get(`/character/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products ..", error);
    throw error;
  }
};
export default getCharacter;
