from app import app, db
from models import Task

with app.app_context():
    tasks = [
        Task(title="Finish report", description="Complete the weekly report", status="pending", due_date="2025-10-21"),
        Task(title="Buy groceries", description="Milk, eggs, bread", status="completed", due_date="2025-10-18"),
        Task(title="Workout", description="Gym for 1 hour", status="pending", due_date="2025-10-19")
    ]
    db.session.bulk_save_objects(tasks)
    db.session.commit()
    print("Seed data inserted successfully")
