from flask import Blueprint, jsonify, request

tasks_bp = Blueprint("tasks", __name__)

# In-memory storage
tasks = ["Sample Task 1", "Sample Task 2"]

# GET /tasks
@tasks_bp.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)

# POST /tasks
@tasks_bp.route("/tasks", methods=["POST"])
def add_task():
    
    if not request.is_json:
        return jsonify({"error": "Content-Type must be application/json"}), 415

    data = request.get_json()
    task = data.get("task")
    if task:
        tasks.append(task)
        return jsonify({"message": "Task added", "tasks": tasks}), 201
    return jsonify({"error": "No task provided"}), 400
