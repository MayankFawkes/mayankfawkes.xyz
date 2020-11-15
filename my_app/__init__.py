from flask import Flask
from .basic import bApp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(bApp)
    return app