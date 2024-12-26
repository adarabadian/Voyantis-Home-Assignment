import React, { useState, useEffect } from 'react';
import { fetchQueues } from '../../services/apiService';
import QueueList from '../QueueList/QueueList';
import QueueForm from '../QueueForm/QueueForm';
import './Dashboard.scss';

export default function Dashboard() {
	const [queues, setQueues] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		refreshQueues();
	}, []);

	const refreshQueues = async () => {
		setLoading(true);
		try {
			const queues = await fetchQueues();
			setQueues(queues);
		} catch (error) {
			console.error('Error fetching queues:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="dashboard">
			<h1 style={{ color: '#233746' }}>Voyantis Message Queue Management</h1>
			{loading && <p>Loading...</p>}
			<QueueList queues={queues} onQueueUpdate={refreshQueues} />
			<QueueForm onQueueSubmit={refreshQueues} />
		</div>
	);
}
