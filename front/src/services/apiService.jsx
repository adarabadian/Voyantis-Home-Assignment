import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const fetchData = async (endpoint, errorMessage) => {
	try {
		const response = await axios.get(`${BASE_URL}/${endpoint}`);
		return response.data;
	} catch (error) {
		console.error(`${errorMessage}:`, error);
		throw error;
	}
};

export const fetchUser = () => fetchData('posts', 'Error fetching user');
