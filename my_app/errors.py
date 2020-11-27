from flask import Flask, send_file, render_template, Blueprint, redirect
from flask_cors import CORS



bp = Blueprint('errors', __name__)

cors = CORS(bp, resources={r"/*": {"origins": "https://mayankfawkes.xyz"}})

@bp.app_errorhandler(Exception)
def handle_error(e):
	return redirect('/', code=302)