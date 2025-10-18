from flask import Blueprint, jsonify, request

task_routes = Blueprint("task_routes", __name__)

# In-memory data
tasks = [
    {"id": 1, "title": "Read about Flask", "completed": False},
    {"id": 2, "title": "Write REST API", "completed": True}
]

# ---------- GET (with optional ?completed=true) ----------
@task_routes.route("/tasks", methods=["GET"])
def get_tasks():
    completed = request.args.get("completed")
    if completed is not None:
        completed = completed.lower() == "true"
        filtered = [t for t in tasks if t["completed"] == completed]
        return jsonify(filtered)
    return jsonify(tasks)


# ---------- POST ----------
@task_routes.route("/tasks", methods=["POST"])
def create_task():
    data = request.get_json()
    if not data or "title" not in data:
        return jsonify({"error": "Missing 'title' field"}), 400

    new_id = tasks[-1]["id"] + 1 if tasks else 1
    task = {"id": new_id, "title": data["title"], "completed": False}
    tasks.append(task)
    return jsonify(task), 201


# ---------- PUT ----------
@task_routes.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    data = request.get_json()
    for task in tasks:
        if task["id"] == task_id:
            task["title"] = data.get("title", task["title"])
            task["completed"] = data.get("completed", task["completed"])
            return jsonify(task)
    return jsonify({"error": "Task not found"}), 404


# ---------- DELETE ----------
@task_routes.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    global tasks
    tasks = [t for t in tasks if t["id"] != task_id]
    return jsonify({"message": f"Task {task_id} deleted"})
