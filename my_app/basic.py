from flask import Flask, send_file, render_template, Blueprint, redirect

bApp = Blueprint('bApp', __name__)

@bApp.route('/')
def home():
	return send_file("../site/index.html")
@bApp.route('/<fol>')
def fol(fol):
	print(1)
	return send_file(f'../site/{fol}')
@bApp.route('/<fol>/<fil>')
def fol_sub(fol,fil):
	print("2")
	return send_file(f"../site/{fol}/{fil}")