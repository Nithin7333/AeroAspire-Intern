from flask import Flask

def create_app():
    app = Flask(__name__)

    
    from app.routes import task_routes
    app.register_blueprint(task_routes)

    return app
