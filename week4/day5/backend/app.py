from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

# --- Flask app setup ---
app = Flask(__name__)
CORS(app)

# --- Database setup ---
basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- Task model ---
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200))
    due_date = db.Column(db.String(20))
    priority = db.Column(db.String(20))

# --- Create DB if not exists ---
with app.app_context():
    db.create_all()

    # Add sample tasks only if DB is empty
    if not Task.query.first():
        t1 = Task(title="Internship Documentation", description="Write API docs", due_date="2025-10-25", priority="High")
        t2 = Task(title="Frontend Fixes", description="Handle empty states", due_date="2025-10-26", priority="Medium")
        db.session.add_all([t1, t2])
        db.session.commit()

# --- API routes ---
@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    if not tasks:
        return jsonify({"message": "No tasks available"}), 200

    result = []
    for t in tasks:
        result.append({
            "id": t.id,
            "title": t.title,
            "description": t.description,
            "due_date": t.due_date,
            "priority": t.priority
        })
    return jsonify(result), 200

# --- Run app ---
if __name__ == "__main__":
    app.run(debug=True)
