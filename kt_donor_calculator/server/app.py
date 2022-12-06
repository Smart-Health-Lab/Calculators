from flask import Flask, request
from flask_cors import CORS
import joblib
from xgboost import XGBRegressor
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from utils import *
import json

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

# sample_dataframe = pd.read_csv(
#     './sample_dataframe/sample_df.csv').drop(columns='Unnamed: 0')

total_columns = [
    'eGFR.prior', 'Remnant Volume_weight', 'Remant normalized GFR', '수술시나이', 'Serum creatinine.prior', 'Cystatin-C eGFR.prior', '성별',
    'Na, 24hr urine.prior', 'Creatinine clearance.prior', '24hr urine creatinine.prior', 'Cystatin-C.prior'
]
categorical_col = ['성별']
numeric_col = [col for col in total_columns if col not in categorical_col]

# train_df, test_df = train_test_split(kidney_df, test_size=0.2, random_state=42)

# cat_pipe = Pipeline([('onehot', OneHotEncoder(handle_unknown='ignore'))])
# trainX_cat = cat_pipe.fit_transform(
#     train_df[categorical_col].astype(str).values)
# trainX_num = train_df[numeric_col].values
# trainX = np.concatenate((trainX_num, trainX_cat.toarray()), axis=1)

# testX_cat = cat_pipe.transform(test_df[categorical_col].astype(str).values)
# testX_num = test_df[numeric_col].values
# testX = np.concatenate((testX_num, testX_cat.toarray()), axis=1)

# trainY = train_df['eGFR.final']
# testY = test_df['eGFR.final']
# testY_boot = np.array(testY)

XGBr = XGBRegressor(n_jobs=4, random_state=42)
XGBr.load_model("./utils/XGBmodel_tunned(2022.12.05).json")
cat_pipe = joblib.load("./utils/cat_pipe(2022.12.05).joblib")


@app.route('/home', methods=['POST'])
def home():
    client_state_dict = request.get_json()
    # print("client_state_dict =============>", client_state_dict)
    pop_key_list = [
        'Weight', 'Removed side (right or left)', 'CT volume (right)',
        'CT volume (left)', 'Total volume', 'output'
    ]
    for pop_key in pop_key_list:
        client_state_dict.pop(pop_key)
    # print("poped client_state_dict =============>", client_state_dict)

    # check_arr = ['sex', 'surgery_part', 'output']
    # client_state_dict = dict({(key, float(val)) if key not in check_arr else (
    #     key, val) for key, val in client_state_dict.items()})
    # client_state_dict.pop('output')

    input_dict = {app_state_mapping.get(
        key): val for key, val in client_state_dict.items()}
    input_df = pd.DataFrame([input_dict])

    # predcit
    inputX_cat = cat_pipe.transform(
        input_df[categorical_col].astype(str).values)
    inputX_num = input_df[numeric_col].values
    inputX = np.concatenate((inputX_num, inputX_cat.toarray()), axis=1)
    predicted_val = XGBr.predict(inputX)[0]
    predicted_val = round(predicted_val, 2)
    # print("predicted value =========>", predicted_val)

    # # Left predict
    # input_df['수술부위'] = "1"
    # input_df['Remnant Volume'] = input_df['Rt. Kidney volume']
    # input_df['Remnant Volume percentage'] = round(
    #     (input_df['Rt. Kidney volume'] / input_df['Total volume'])*100, 2)
    # input_df['잔여상대섭취율(%)'] = input_df['상대섭취율(Rt, %)']
    # inputX_cat = cat_pipe.transform(
    #     input_df[categorical_col].astype(str).values)
    # inputX_num = input_df[numeric_col].values
    # inputX = np.concatenate((inputX_num, inputX_cat.toarray()), axis=1)
    # predicted_val_Lt = XGBr.predict(inputX)[0]

    # # Right predict
    # input_df['수술부위'] = "2"
    # input_df['Remnant Volume'] = input_df['Lt. Kidney volume']
    # input_df['Remnant Volume percentage'] = round(
    #     (input_df['Lt. Kidney volume'] / input_df['Total volume'])*100, 2)
    # input_df['잔여상대섭취율(%)'] = input_df['상대섭취율(Lt, %)']
    # inputX_cat = cat_pipe.transform(
    #     input_df[categorical_col].astype(str).values)
    # inputX_num = input_df[numeric_col].values
    # inputX = np.concatenate((inputX_num, inputX_cat.toarray()), axis=1)
    # predicted_val_Rt = XGBr.predict(inputX)[0]

    # print("predicted_Lt : ", predicted_val_Lt)
    # print("predicted_Rt : ", predicted_val_Rt)

    return {"status": 200, "output": json.dumps(str(predicted_val))}


app.run(host='0.0.0.0', debug=True)
