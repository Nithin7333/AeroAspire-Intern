from flask import Flask
from .routes import tasks_bp  # import the blueprint from routes.py

def create_app():
    app = Flask(__name__)
    
    # Register the blueprint
    app.register_blueprint(tasks_bp)
    
    return app
