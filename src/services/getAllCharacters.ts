import api from "../types/api";

const getAllCharacters = async (id: number) => {
  try {
    const response = await api.get(`/episode/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products ..", error);
    throw error;
  }
};
export default getAllCharacters;
