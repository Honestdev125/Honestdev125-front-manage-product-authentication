const baseURL = process.env.BASE_URL || 'http://localhost:5000';

import axios from 'axios';

export const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${baseURL}/${endpoint}`, data, {
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
};

export async function getData(endpoint, access_token) {
  console.log(`${baseURL}/${endpoint}`);
  try {
    const response = await axios.get(`${baseURL}/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error during GET request:', error);
    throw error;
  }
}
