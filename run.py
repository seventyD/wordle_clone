from flask import Flask
from flask import request
from flask import url_for
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('base.html')