import React, { useState } from 'react';
import { fetchNextMessageFromQueue } from '../../services/apiService';
import { toast } from 'react-toastify';
import './QueueList.scss';

export default function QueueList({ queues, onQueueUpdate }) {
  const [selectedQueue, setSelectedQueue] = useState('');
  const [queueResponse, setQueueResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetchMessage = async (queueName) => {
    setLoading(true);
    try {
      const message = await fetchNextMessageFromQueue(queueName);

      if (!message) {
        toast.info(`Queue "${queueName}" is now empty and has been deleted.`);
        onQueueUpdate();
        return;
      }

      setSelectedQueue(queueName);
      setQueueResponse(JSON.stringify(message, null, 2));
      onQueueUpdate();
    } catch (error) {
      setQueueResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const activeQueues = Object.keys(queues).filter((queueName) => queues[queueName] > 0);

  return (
    <div className="queue-list">
      <h2>Queues</h2>
      {activeQueues.length === 0 ? (
        <p>No active queues available.</p>
      ) : (
        <ul>
          {activeQueues.map((queueName) => (
            <li key={queueName}>
              {queueName}: {queues[queueName]} messages
              <button onClick={() => handleFetchMessage(queueName)} disabled={loading}>
                {loading && selectedQueue === queueName ? 'Loading...' : 'Go'}
              </button>
            </li>
          ))}
        </ul>
      )}
      {selectedQueue && (
        <div className="response">
          <h3>Response from queue: {selectedQueue}</h3>
          <pre>{queueResponse}</pre>
        </div>
      )}
    </div>
  );
}
