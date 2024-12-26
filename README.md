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
- **Service Design**: 
  - I opted to split the logic into separate services for better maintainability, readability, and adherence to the **Separation of Concerns (SOC)** principle.
- **Response Format**: 
  - All responses are returned in **camelCase** instead of the traditional **snake_case** for Python APIs. This decision aligns with the frontend's JavaScript convention of using camelCase.
- **Simplified Design**: 
  - The backend design prioritizes simplicity and clarity over advanced features.

### Frontend
- **Language**
  - I chose going for React, I didn't used TypeScript as I wanted to keep the app simple and short as possible.
- **Simple Design**:
  - The frontend is kept short and simple, following the assignment requirements.

---

## Features
### Backend

  
### Frontend
