import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const fetchData = async (endpoint, errorMessage) => {
	try {
		const response = await axios.get(`${BASE_URL}/${endpoint}`);
		return response.data;
	} catch (error) {
		console.error(`${errorMessage}:`, error);
		throw error;
	}
};

const postData = async (endpoint, data, errorMessage) => {
	try {
		const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
		return response.data;
	} catch (error) {
		console.error(`${errorMessage}:`, error);
		throw error;
	}
};

export const fetchQueues = () => fetchData('stats', 'Error fetching queues');
export const postMessageToQueue = (queueName, message) => postData(queueName, { message }, 'Error posting message');

export const fetchNextMessageFromQueue = (queueName) => fetchData(queueName, `Error fetching message from queue ${queueName}`);
