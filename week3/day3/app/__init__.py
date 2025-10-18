from flask import Flask
from flask_cors import CORS
from .routes import task_routes

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Register Blueprint
    app.register_blueprint(task_routes)

    # Error Handlers
    @app.errorhandler(404)
    def not_found(e):
        return {"error": "Resource not found"}, 404

    @app.errorhandler(400)
    def bad_request(e):
        return {"error": "Bad request"}, 400

    return app
