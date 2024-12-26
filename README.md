# Adar Abadian - Home Assignment - Queue Management System

## Features
- Add messages to a queue.
- Fetch the next message from a queue with timeout support.
- Automatically delete queues when they become empty.
- View all available queues and their message counts.
- Voyantis-inspired UI design.

## How to Run
### Backend
1. Open the `back` folder in your terminal.
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Start the backend server:
   ```bash
   python run.py
   ```

### Frontend
1. Open the `front` folder in your terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
4. Your browser should open automatically with the webpage. If not, navigate to `http://localhost:3000`.

---

## Notes

### Backend
- **Language**
  - Although I'm more experienced wtih node, I chose using Python over Node as you guys are looking for Python as backend.
- **Simplified Design**: 
  - The backend design prioritizes simplicity and clarity over advanced features.
- **Queues Identifiers**:
  - Queue are being identified by their name. I thought of an edge case where we want to publish to the same queue but accidentaly use wrong capitalization.
  I.E. we add 1 queue named "My_Queue" and one named "my_queue", I could fix this by converting to lowercase for everything but I wasnt sure if it was on the demands.

### Frontend
- **Language**
  - I chose going for React, I didn't used TypeScript as I wanted to keep the app simple and short as possible.
- **Simple Design**:
  - The frontend is kept short and simple, following the assignment requirements.

---

## Features
### Backend
### Endpoints
1. **POST `/api/{queue_name}`**
   - Adds a message to the specified queue.
   - **Request Body**: JSON object (e.g., `{"message": "Your message here"}`).
   - **Responses**:
     - `201`: Message successfully added.
     - `400`: Invalid request (e.g., missing or invalid message body).

2. **GET `/api/{queue_name}?timeout={ms}`**
   - Fetches the next message from the specified queue.
   - Waits up to `timeout` milliseconds for a message (defaults to 10 seconds if not specified).
   - **Responses**:
     - `200`: JSON object containing the message.
     - `204`: No messages available after the timeout.

3. **GET `/api/stats`**
   - Returns statistics for all queues (queue name and message count).
   - **Response**:
     - `200`: JSON object (e.g., `{"queue1": 3, "queue2": 5}`).
  
  
### Frontend
### Project Structure
- **`src/components/Dashboard`**:
  - Main page that combines queue management features.
- **`src/components/QueueList`**:
  - Displays queues and allows fetching messages.
- **`src/components/QueueForm`**:
  - Form for adding messages to queues.
- **`src/services/apiService.js`**:
  - Contains API calls for interacting with the backend.

### Notes
- Requires the backend running at `http://localhost:5000`.