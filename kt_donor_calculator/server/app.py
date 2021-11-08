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

app = Flask(__name__)

CORS(app)

app_state_mapping = {
    'age': '수술시나이',
    'sex': '성별',
    'height': 'HEIGHT',
    'weight': 'WEIGHT',
    'sbp': 'SBP',
    'dbp': 'DBP',
    'surgery_part': '수술부위',
    'lt_kidney_vol': 'Lt. Kidney volume',
    'rt_kidney_vol': 'Rt. Kidney volume',
    'total_vol': 'Total volume',
    'remnant_vol': 'Remnant Volume',
    'remnant_vol_per': 'Remnant Volume percentage',
    'predicted_gfr_total': 'Predicted GFR, total',
    'predicted_gfr_lt': 'Predicted GFR, Lt.',
    'predicted_gfr_rt': 'Predicted GFR, Rt.',
    'normalized_gfr': 'Normalized GFR',
    'relative_uptake_rate_lt': '상대섭취율(Lt, %)',
    'relative_uptake_rate_rt': '상대섭취율(Rt, %)',
    'residual_relative_uptake_rate': '잔여상대섭취율(%)',
    'remnant_normalized_gfr': 'Remant normalized GFR',
    'serum_uric_acid': 'Serum uric acid.prior',
    'ldl': 'LDL.prior',
    'triglycerid': 'Triglyceride.prior',
    'serum_creatinine': 'Serum creatinine.prior',
    'egfr': 'eGFR.prior',
    'cystatin_c': 'Cystatin-C.prior',
    'cystatin_c_egfr': 'Cystatin-C eGFR.prior',
    'creatinine_clearance': 'Creatinine clearance.prior',
    'hr_urine_creatinine': '24hr urine creatinine.prior',
    'na_hr_urine': 'Na, 24hr urine.prior',
    'volume_hr_urine': 'Volume 24hr urine.prior',
    'bmi': 'bmi',
}

sample_dataframe = pd.read_csv(
    './sample_dataframe/sample_df.csv').drop(columns='Unnamed: 0')

except_col = ['개인정보동의여부', '정렬순서', '환자번호',
              '수술일(첨부)', '이름', 'CT결과', 'DTPA결과', 'R_or_L']
except_col.extend(sample_dataframe.iloc[:, 38:66].columns)
total_columns = [col for col in list(
    sample_dataframe.columns) if col not in except_col]
categorical_col = ['성별', '수술부위']
numeric_col = [col for col in total_columns if col not in categorical_col]

XGBr = XGBRegressor(n_jobs=16)
XGBr.load_model("./utils/kt_xgbr_weights.json")
cat_pipe = joblib.load("./utils/cat_pipe.joblib")


@app.route('/home', methods=['POST'])
def home():
    client_state_dict = request.get_json()

    check_arr = ['sex', 'surgery_part', 'output']
    client_state_dict = dict({(key, float(val)) if key not in check_arr else (
        key, val) for key, val in client_state_dict.items()})
    client_state_dict.pop('output')

    input_dict = {app_state_mapping.get(
        key): val for key, val in client_state_dict.items()}
    input_df = pd.DataFrame([input_dict])

    # Left predict
    input_df['수술부위'] = "1"
    input_df['Remnant Volume'] = input_df['Rt. Kidney volume']
    input_df['Remnant Volume percentage'] = round(
        (input_df['Rt. Kidney volume'] / input_df['Total volume'])*100, 2)
    input_df['잔여상대섭취율(%)'] = input_df['상대섭취율(Rt, %)']
    inputX_cat = cat_pipe.transform(
        input_df[categorical_col].astype(str).values)
    inputX_num = input_df[numeric_col].values
    inputX = np.concatenate((inputX_num, inputX_cat.toarray()), axis=1)
    predicted_val_Lt = XGBr.predict(inputX)[0]

    # Right predict
    input_df['수술부위'] = "2"
    input_df['Remnant Volume'] = input_df['Lt. Kidney volume']
    input_df['Remnant Volume percentage'] = round(
        (input_df['Lt. Kidney volume'] / input_df['Total volume'])*100, 2)
    input_df['잔여상대섭취율(%)'] = input_df['상대섭취율(Lt, %)']
    inputX_cat = cat_pipe.transform(
        input_df[categorical_col].astype(str).values)
    inputX_num = input_df[numeric_col].values
    inputX = np.concatenate((inputX_num, inputX_cat.toarray()), axis=1)
    predicted_val_Rt = XGBr.predict(inputX)[0]

    print("predicted_Lt : ", predicted_val_Lt)
    print("predicted_Rt : ", predicted_val_Rt)

    return {"status": 200, "output": [str(round(predicted_val_Lt, 3)), str(round(predicted_val_Rt, 3))]}


app.run(host='0.0.0.0', debug=True)
