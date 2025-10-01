# Taskify - React Task List App

Taskify is a small React app built during my internship to practice React components, props, and Material UI (MUI).  
The app demonstrates a reusable TaskCard component that displays a task's title, description, and due date.  
I set up the project using Vite, installed Material UI, and organized the code with a clear folder structure:  
- components → for TaskCard  
- pages → for the Home page  
- App.jsx → main entry point  

The Home page renders a list of dummy tasks by passing props to TaskCard components.  
App.jsx uses MUI's ThemeProvider and CssBaseline for consistent styling across browsers.  
Vite’s hot reload allows real-time updates while developing.  

This project helped me understand React’s component hierarchy, how to pass data via props, and how to integrate Material UI into a React project.  
To run Taskify:  
1. Clone the repo  
2. Run `npm install`  
3. Run `npm run dev`  
4. Open the provided local link in your browser  

The app displays a clean, responsive task list, making it a simple yet practical way to practice modern React development.
