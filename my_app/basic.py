from flask import Flask, send_file, render_template, Blueprint, redirect, url_for

bApp = Blueprint('bApp', __name__)

@bApp.errorhandler(Exception)
def handle_error(e):
	return redirect('/', code=302)
@bApp.route('/')
def home():
	return send_file("../site/index.html")
@bApp.route('/<fol>')
def fol(fol):
    return send_file(f'../site/{fol}')
@bApp.route('/<fol>/<fil>')
def fol_sub(fol,fil):
	return send_file(f"../site/{fol}/{fil}")