from flask import Flask, request, jsonify, render_template
from models import db, Task

app = Flask(__name__)

# Database setup
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

# Home route - show all tasks
@app.route('/')
def home():
    tasks = Task.query.all()
    return render_template('index.html', tasks=tasks)

# Add new task
@app.route('/add', methods=['POST'])
def add_task():
    data = request.json
    new_task = Task(
        title=data['title'],
        description=data['description'],
        status=data['status'],
        due_date=data['due_date']
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify({"message": "Task added successfully"})

# Update task
@app.route('/update/<int:id>', methods=['PUT'])
def update_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"})
    data = request.json
    task.status = data.get('status', task.status)
    db.session.commit()
    return jsonify({"message": "Task updated"})

# Delete task
@app.route('/delete/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"})
    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted"})

if __name__ == '__main__':
    app.run(debug=True)
