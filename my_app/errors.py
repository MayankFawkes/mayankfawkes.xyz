from flask import Flask, send_file, render_template, Blueprint, redirect
bp = Blueprint('errors', __name__)


@bp.app_errorhandler(Exception)
def handle_error(e):
	return redirect('/', code=302)