import React, { useState } from 'react';
import { postMessageToQueue } from '../../services/apiService';
import { toast } from 'react-toastify';
import './QueueForm.scss';

export default function QueueForm({ onQueueSubmit }) {
  const [queueName, setQueueName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postMessageToQueue(queueName, message);
      setQueueName('');
      setMessage('');
      toast.success('Message added successfully!');
      onQueueSubmit(); // Refresh queues after submission
    } catch (error) {
      console.error('Error posting message:', error);
      toast.error('Error posting message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="queue-form" onSubmit={handleSubmit}>
      <h2>Add Message</h2>
      <input
        type="text"
        placeholder="Queue Name"
        value={queueName}
        onChange={(e) => setQueueName(e.target.value)}
        required
        disabled={loading}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Add Message'}
      </button>
    </form>
  );
}
