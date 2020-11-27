from flask import Flask
from .basic import bApp
from.errors import bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(bApp)
    app.register_blueprint(bp)
    return app
