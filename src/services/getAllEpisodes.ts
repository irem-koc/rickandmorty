import api from "../types/api";

const getAllEpisodes = async (pageNumber: number) => {
  try {
    const response = await api.get(`/episode?page=${pageNumber}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products ..", error);
    throw error;
  }
};
export default getAllEpisodes;
