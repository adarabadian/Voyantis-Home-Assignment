from flask import Flask
from flask_cors import CORS
from .routes.queue_routes import queue_routes

def create_app():
    app = Flask(__name__)

    # Enable CORS for the frontend
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

    # Register blueprints
    app.register_blueprint(queue_routes)

    return app
