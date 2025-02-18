import axios from 'axios';

const API_URL = '/api/state-covid19'; // ใช้ Proxy `/api`

export const fetchCovidData = async () => {
  try {
    console.log(' Fetching from API:', API_URL);
    
    const response = await axios.get(API_URL, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.data || typeof response.data !== 'object') {
      throw new Error('Invalid API response format');
    }

    const { results } = response.data;
    if (!Array.isArray(results)) {
      throw new Error('Invalid API response format: results is not an array');
    }

    console.log(' API Sample Record:', results[0]);
    return results;
  } catch (error: any) {
    console.error(' API Fetch Error:', error.response ? error.response.data : error.message);
    throw new Error(`Failed to fetch COVID data: ${error.message}`);
  }
};
