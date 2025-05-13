from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/fear-greed', methods=['GET'])
def get_fear_greed():
    fear_greed_data = {
        "now": {
            "value": 55,
            "valueText": "Neutral"
        }
    }
    return jsonify(fear_greed_data)

@app.route('/ndx-change', methods=['GET'])
def get_ndx_change():
    ndx_change_data = {
        "先週の終値": 14500,
        "今週の終値": 14700,
        "騰落率 (%)": 1.38
    }
    return jsonify(ndx_change_data)

if __name__ == "__main__":
    app.run(debug=True)
