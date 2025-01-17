import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export const searchAnime = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/search/${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};

export const fetchAnimeDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/details/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching anime details:', error);
    throw error;
  }
};
