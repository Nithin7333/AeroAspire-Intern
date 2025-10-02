# My Task Hub
A simple React + Material UI Task Tracker to manage tasks. This project demonstrates React components, state, hooks, forms, controlled components, and validation. Users can add tasks via a form, see them displayed in a dynamic list, and enjoy input validation with a clean UI.

**Features:** Users can add tasks using a Material UI form. Task input is required and must be at least 4 characters long. Tasks are displayed in a clean list using a separate component. State management is handled with useState, and the UI updates automatically. Preloaded dummy tasks are added on component mount using useEffect. Simple styling with Material UI, including dividers between tasks, makes the interface readable and neat.

**Folder Structure:**
src/
├─ components/
│ ├─ TaskForm.jsx
│ └─ TaskList.jsx
├─ pages/
│ └─ Home.jsx
└─ App.jsx

**How It Works:** Home.jsx is the main page that keeps track of tasks and renders TaskForm and TaskList. TaskForm.jsx is a controlled component that validates input and sends new tasks to Home.jsx via props. TaskList.jsx receives tasks as props and displays them with dividers. Changes in state automatically update the UI; props pass data from parent to child.

**Screenshot:**  
![App Screenshot](./week2/day3/taskmaster/src/outputday3week2.png.)

**How to Run:** Clone the repository with `git clone <your-repo-url>`. Install dependencies using `npm install`. Run the development server with `npm run dev` and open the displayed URL (e.g., `http://localhost:5173`) in your browser.

**Technologies Used:** React 18, Material UI (MUI), Vite, JavaScript ES6+.

**Notes:** Input validation ensures tasks are not empty and have at least 4 characters. Tasks are stored in state; adding a task updates the list immediately. Preloaded dummy tasks demonstrate initial state using useEffect.
