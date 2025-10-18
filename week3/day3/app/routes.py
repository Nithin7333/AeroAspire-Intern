from flask import Blueprint, jsonify, request

task_routes = Blueprint("task_routes", __name__)

tasks = [
    {"id": 1, "title": "Finish Flask project", "completed": False},
    {"id": 2, "title": "Test error handling", "completed": True}
]

@task_routes.route("/tasks", methods=["GET"])
def get_tasks():
    completed_filter = request.args.get("completed")
    if completed_filter:
        filtered = [t for t in tasks if str(t["completed"]).lower() == completed_filter.lower()]
        return jsonify(filtered)
    return jsonify(tasks)

@task_routes.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    data = request.get_json()
    if not data or "title" not in data:
        return {"error": "Invalid input, title required"}, 400

    for task in tasks:
        if task["id"] == id:
            task["title"] = data["title"]
            task["completed"] = data.get("completed", task["completed"])
            return jsonify(task)
    return {"error": "Task not found"}, 404

@task_routes.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    global tasks
    tasks = [t for t in tasks if t["id"] != id]
    return {"message": "Task deleted"}, 200
