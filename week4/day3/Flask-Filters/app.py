from flask import Flask, request, jsonify
from models import db, Task

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()


# ---------- Create Task ----------
@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    new_task = Task(
        title=data.get('title'),
        description=data.get('description'),
        status=data.get('status'),
        due_date=data.get('due_date')
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify({'message': 'Task created successfully'}), 201


# ---------- Get Tasks with Filters, Search, Pagination ----------
@app.route('/tasks', methods=['GET'])
def get_tasks():
    status = request.args.get('status')
    due_date = request.args.get('due_date')
    search = request.args.get('search')
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 5))

    query = Task.query

    if status:
        query = query.filter_by(status=status)
    if due_date:
        query = query.filter_by(due_date=due_date)
    if search:
        query = query.filter(Task.title.like(f"%{search}%"))

    tasks = query.paginate(page=page, per_page=limit, error_out=False)
    result = []
    for task in tasks.items:
        result.append({
            'id': task.id,
            'title': task.title,
            'description': task.description,
            'status': task.status,
            'due_date': task.due_date
        })
    
    return jsonify({
        'page': page,
        'total_pages': tasks.pages,
        'total_tasks': tasks.total,
        'tasks': result
    })


# ---------- Update Task ----------
@app.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    data = request.get_json()
    task = Task.query.get_or_404(id)
    task.title = data.get('title', task.title)
    task.description = data.get('description', task.description)
    task.status = data.get('status', task.status)
    task.due_date = data.get('due_date', task.due_date)
    db.session.commit()
    return jsonify({'message': 'Task updated successfully'})


# ---------- Delete Task ----------
@app.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get_or_404(id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({'message': 'Task deleted successfully'})


if __name__ == '__main__':
    app.run(debug=True)
