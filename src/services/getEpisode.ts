import api from "../types/api";

const getEpisode = async (id: number) => {
  try {
    const response = await api.get(`/episode/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products ..", error);
    throw error;
  }
};
export default getEpisode;
