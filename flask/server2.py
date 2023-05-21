import numpy as np
from flask import Flask, request, jsonify
import pickle
from sklearn import preprocessing

app = Flask(__name__)
min_max_scaler = preprocessing.MinMaxScaler()
model1 = pickle.load(open('adb_model.sav','rb'))
model2 = pickle.load(open('rf_model.sav','rb'))
model3 = pickle.load(open('knn_model.sav','rb'))
model4 = pickle.load(open('svc_model.sav','rb'))
model5 = pickle.load(open('adb_svc_model.sav','rb'))


@app.route('/predict', methods=['POST'])
def predict():
    predList = []
    data = request.json
    data = data['data']
    arr = np.array(data)
    arr = arr.reshape(-1, 1)
    arr = min_max_scaler.fit_transform(arr)
    arr = arr.reshape(1, -1)
    predList.append(model1.predict(arr))
    predList.append(model2.predict(arr))
    predList.append(model3.predict(arr))
    predList.append(model4.predict(arr))
    predList.append(model5.predict(arr))
    mean = np.mean(predList)
    prediction = 0
    if(mean >= 0.6):
        prediction = 1
    return str(int(prediction))


if __name__ == "__main__":
    app.run(debug=True, port=9090)
