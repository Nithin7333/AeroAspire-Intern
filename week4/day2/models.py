from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Define Task table
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(200))
    status = db.Column(db.String(20))
    due_date = db.Column(db.String(20))

    def __repr__(self):
        return f"<Task {self.title}>"
