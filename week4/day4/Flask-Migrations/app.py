from flask import Flask, jsonify, request
from models import db, Task
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

# GET all tasks with optional filtering and pagination
@app.route('/tasks', methods=['GET'])
def get_tasks():
    status = request.args.get('status')
    search = request.args.get('search')
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 10))

    query = Task.query

    if status:
        query = query.filter_by(status=status)
    if search:
        query = query.filter(Task.title.contains(search))

    total_tasks = query.count()
    total_pages = (total_tasks + limit - 1) // limit

    tasks = query.offset((page-1)*limit).limit(limit).all()

    return jsonify({
        "page": page,
        "tasks": [{
            "id": t.id,
            "title": t.title,
            "description": t.description,
            "status": t.status,
            "due_date": t.due_date,
            "priority": getattr(t, 'priority', None)
        } for t in tasks],
        "total_tasks": total_tasks,
        "total_pages": total_pages
    })

# POST a new task
@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    t = Task(
        title=data.get('title'),
        description=data.get('description'),
        status=data.get('status', 'pending'),
        due_date=data.get('due_date'),
        priority=data.get('priority', 'normal')
    )
    db.session.add(t)
    db.session.commit()
    return jsonify({"message": "Task added"}), 201

# Ensure Flask starts properly
if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=True)
