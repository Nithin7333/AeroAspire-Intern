import React, { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/tasks")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError("Database connection failed");
        } else if (data.message === "No tasks found") {
          setTasks([]);
        } else {
          setTasks(data);
        }
      })
      .catch(() => setError("Could not connect to backend"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (tasks.length === 0) return <p>No tasks available</p>;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <strong>{t.title}</strong> - {t.description || "No description"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
