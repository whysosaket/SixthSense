import numpy as np
from flask import Flask, request, jsonify
import pickle
from sklearn import preprocessing

app = Flask(__name__)
min_max_scaler = preprocessing.MinMaxScaler()
filename = "adb_model.sav"


@app.route('/change', methods=['PATCH'])
def change():
    global filename
    temp = filename
    fname = request.json
    fname = fname['model']
    filename = fname
    stringN = "MODEL CHANGED TO: {} FROM: {}".format(fname, temp)
    response = jsonify({'model': stringN})
    return response


@app.route('/predict', methods=['POST'])
def predict():
    model = pickle.load(open(filename, 'rb'))
    data = request.json
    data = data['data']
    arr = np.array(data)
    arr = arr.reshape(-1, 1)
    arr = min_max_scaler.fit_transform(arr)
    arr = arr.reshape(1, -1)
    prediction = model.predict(arr)
    return str(int(prediction))


if __name__ == "__main__":
    app.run(debug=True, port=9090)
