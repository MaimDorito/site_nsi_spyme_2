import flask
from flask import Flask

app = Flask(__name__)

@app.route('/')
def page0_controller():
    return flask.render_template("page2.j2")

if __name__ == "__main__":
    app.run(port=5500, debug=True)

