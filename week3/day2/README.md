




PUT / DELETE; parameter passing; path vs query params

 What I Did:

In this task, I built a small Flask API that supports all basic operations for managing tasks — creating, reading, updating, and deleting.
I started a new Flask project from scratch and set up a clean folder structure with `app/` for routes and `main.py` as the entry point.

Inside `routes.py`, I implemented:

* `GET /tasks` – fetch all tasks, and optional filter using query param `?completed=true`
* `POST /tasks` – add a new task with a title
* `PUT /tasks/<id>` – update the title or completed status of a task
* `DELETE /tasks/<id>` – remove a task by ID

All data was stored temporarily in an in-memory list, just for practice.

---

🔹 What I Learned:

* How Flask handles **path parameters** (`/tasks/<id>`) and **query parameters** (`?completed=true`)
* How to send and receive JSON data properly using Postman
* The use of HTTP methods (GET, POST, PUT, DELETE) for RESTful APIs
* How to organize Flask projects into multiple files for better readability

---

 🔹 Issues Faced:

At first, Postman was giving **connection refused** and **404 errors** because the routes were not registered correctly.
After fixing imports and registering the blueprint inside `__init__.py`, everything started working.
I also faced a 415 error when sending JSON — this happened because I forgot to set **Body → raw → JSON** in Postman.

---

 🔹 Final Output:

After fixing all those issues, the API worked perfectly:

* I could view tasks
* Add new ones
* Update or delete by ID
  And even filter them using query params — for example, `GET /tasks?completed=true` shows only completed tasks.


