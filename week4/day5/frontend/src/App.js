import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/tasks")
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "No tasks available") {
          setTasks([]);
        } else {
          setTasks(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
        setTasks([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading tasks...</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Task Manager</h1>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <strong>{t.title}</strong> - {t.description} <br />
              Due: {t.due_date} | Priority: {t.priority}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
