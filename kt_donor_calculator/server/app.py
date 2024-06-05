from flask import Flask, request
from flask_cors import CORS
import joblib
from xgboost import XGBRegressor
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
import sklearn
from utils import *
import json
from werkzeug.serving import WSGIRequestHandler

WSGIRequestHandler.protocol_version = "HTTP/1.1"

app = Flask(__name__)

CORS(app)

app_state_mapping = {
    "eGFR": "eGFR.prior",
    "CT volume of remaining kidney/weight": "Remnant Volume_weight",
    "Normalized GFR of remaining kidney": "Remant normalized GFR",
    "Age": "수술시나이",
    "Serum creatinine": "Serum creatinine.prior",
    "Cystatin-C eGFR": "Cystatin-C eGFR.prior",
    "24-hour urine sodium excretion": "Na, 24hr urine.prior",
    "24-hour creatinine clearance": "Creatinine clearance.prior",
    "24-hour urine creatinine": "24hr urine creatinine.prior",
    "Cystatin-C": "Cystatin-C.prior",
    "Sex": "성별",
    "CT volume (right)": "Rt. Kidney volume",
    "CT volume (left)": "Lt. Kidney volume",
    "Removed side (right or left)": "수술부위",
    "Total volume": "Total volume",
    "Weight": "WEIGHT",
}

total_columns = [
    'eGFR.prior', 'Remnant Volume_weight', 'Remant normalized GFR', '수술시나이', 'Serum creatinine.prior', 'Cystatin-C eGFR.prior', '성별',
    'Na, 24hr urine.prior', 'Creatinine clearance.prior', '24hr urine creatinine.prior', 'Cystatin-C.prior'
]
categorical_col = ['성별']
numeric_col = [col for col in total_columns if col not in categorical_col]

XGBr = XGBRegressor(n_jobs=4, random_state=42)
XGBr.load_model("./utils/XGBmodel_tunned(2022.12.05).json")
cat_pipe = joblib.load("./utils/cat_pipe(2022.12.05).joblib")


@app.route('/home', methods=['POST'])
def home():
    client_state_dict = request.get_json()
    pop_key_list = [
        'Weight', 'Removed side (right or left)', 'CT volume (right)',
        'CT volume (left)', 'Total volume', 'output'
    ]
    for pop_key in pop_key_list:
        client_state_dict.pop(pop_key)

    input_dict = {app_state_mapping.get(
        key): val for key, val in client_state_dict.items()}
    input_df = pd.DataFrame([input_dict])

    # predict
    inputX_cat = cat_pipe.transform(input_df[categorical_col].astype(str).values[0].reshape(-1, 1))
    inputX_num = input_df[numeric_col].values
    inputX_num_new = []
    # for val in inputX_num[0]:
    #     if not pd.isna(val):
    #         inputX_num_new.append(float(val))
    #     else:
    #         inputX_num_new.append(val)
    inputX_num = [[float(val) if not pd.isna(val) else val for val in inputX_num[0]]]
    inputX = np.concatenate((inputX_num, inputX_cat.toarray()), axis=1)
    print('최종 input 리스트 형태', inputX)
    predicted_val = XGBr.predict(inputX)[0]
    predicted_val = round(predicted_val, 2)
    print('예측 결과 =======> ', predicted_val)

    return {"status": 200, "output": json.dumps(str(predicted_val))}

app.run(host='0.0.0.0', debug=True)
