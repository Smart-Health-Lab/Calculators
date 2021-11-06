import React, { Component } from "react";
import { Layout, Breadcrumb, Input, Divider, Button, Select } from "antd";
import { obj } from "./sampleData/sample_obj";
import shl_img from "./image/shl_img.png";
import "./App.css";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const titleFontSize = 13;
const subTitleFontSize = 12;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      sex: null,
      height: null,
      weight: null,
      sbp: null,
      dbp: null,
      surgery_part: "1",
      lt_kidney_vol: null,
      rt_kidney_vol: null,
      total_vol: null,
      remnant_vol: null,
      remnant_vol_per: null,
      predicted_gfr_total: null,
      predicted_gfr_lt: null,
      predicted_gfr_rt: null,
      normalized_gfr: null,
      relative_uptake_rate_lt: null,
      relative_uptake_rate_rt: null,
      residual_relative_uptake_rate: null,
      remnant_normalized_gfr: null,
      serum_uric_acid: null,
      ldl: null,
      triglycerid: null,
      serum_creatinine: null,
      egfr: null,
      cystatin_c: null,
      cystatin_c_egfr: null,
      creatinine_clearance: null,
      hr_urine_creatinine: null,
      na_hr_urine: null,
      volume_hr_urine: null,
      bmi: null,
      output: null,
    };
  }

  componentWillMount() {
    this.setState({ ...obj });
  }

  refreshFunc = () => {
    setTimeout(() => {
      this.setState({
        bmi:
          Math.round(
            (Number(this.state.weight) /
              (Number(this.state.height) / 100) ** 2) *
              100
          ) / 100,
      });
    }, 300);
  };

  fetchFunc = () => {
    // console.log("fetch flying..", stateObj);
    // "http://54.180.162.218:5000/home" -> aws kt cal server

    return fetch("http://54.180.162.218:5000/home", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...this.state,
        output: null,
      }),
    });
  };

  render() {
    // console.log("App.js rendering.. ", this.state);
    // console.log(String(1));
    // console.log(obj);

    return (
      <Layout className="layout">
        <Header
          style={{ display: "flex", height: "4.5vh", background: "white" }}
        >
          <div
            style={{
              fontFamily: "serif",
              color: "#0e7542",
              marginLeft: 10,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            KT donor Calculator
          </div>
          <img
            src={shl_img}
            style={{ height: 35, marginTop: 15, marginLeft: 450 }}
          />
        </Header>
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            padding: "0 50px",
            // height: "85vh",
            background: "white",
          }}
        >
          <div
            style={{
              border: "1px solid #989c9a",
              height: 860,
              width: 800,
              marginTop: 10,
              padding: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                marginTop: 5,
                marginBottom: -30,
                paddingBottom: 40,
              }}
            >
              <div>
                <Breadcrumb style={{ margin: 10 }}>
                  <Breadcrumb.Item>
                    <text
                      style={{
                        fontSize: titleFontSize,
                        fontWeight: 500,
                        color: "#2b6e4d",
                      }}
                    >
                      Baseline information
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    수술시 나이
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ age: event.target.value });
                    }}
                    value={this.state.age}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    성별
                  </div>
                  <Select
                    defaultValue={this.state.sex}
                    style={{ width: 100 }}
                    onChange={(sex) => {
                      this.setState({ sex: sex });
                    }}
                  >
                    <Option value="M">{"M"}</Option>
                    <Option value="F">{"F"}</Option>
                  </Select>
                  {/* <Input
                    onChange={(event) => {
                      this.setState({ sex: event.target.value });
                    }}
                    value={this.state.sex}
                  /> */}
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Height (cm)
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        height: event.target.value,
                        bmi:
                          Math.round(
                            (Number(this.state.weight) /
                              (Number(this.state.height) / 100) ** 2) *
                              100
                          ) / 100,
                      });
                      this.refreshFunc();
                    }}
                    value={this.state.height}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Weight (kg)
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        weight: event.target.value,
                        bmi:
                          Math.round(
                            (Number(this.state.weight) /
                              (Number(this.state.height) / 100) ** 2) *
                              100
                          ) / 100,
                      });
                      this.refreshFunc();
                    }}
                    value={this.state.weight}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    SBP
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ sbp: event.target.value });
                    }}
                    value={this.state.sbp}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    DBP
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ dbp: event.target.value });
                    }}
                    value={this.state.dbp}
                  />
                </div>
                {/* <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    수술부위 (lt: 1, rt:2)
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        surgery_part: String(event.target.value),
                      });
                    }}
                    value={this.state.surgery_part}
                  />
                </div> */}
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Bmi
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        bmi: this.state.weight / Math.sqrt(this.state.height),
                      });
                    }}
                    value={this.state.bmi}
                    disabled={true}
                  />
                </div>
              </div>
              <div>
                <Breadcrumb style={{ margin: "10px" }}>
                  <Breadcrumb.Item>
                    <text
                      style={{
                        fontSize: titleFontSize,
                        fontWeight: 500,
                        color: "#2b6e4d",
                      }}
                    >
                      Test result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Serum uric acid
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ serum_uric_acid: event.target.value });
                    }}
                    value={this.state.serum_uric_acid}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    LDL
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ ldl: event.target.value });
                    }}
                    value={this.state.ldl}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Triglycerid
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ triglycerid: event.target.value });
                    }}
                    value={this.state.triglycerid}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Serum creatinine
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ serum_creatinine: event.target.value });
                    }}
                    value={this.state.serum_creatinine}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    eGFR
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ egfr: event.target.value });
                    }}
                    value={this.state.egfr}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Cystatin-C
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ cystatin_c: event.target.value });
                    }}
                    value={this.state.cystatin_c}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Cystatin-C eGFR
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ cystatin_c_egfr: event.target.value });
                    }}
                    value={this.state.cystatin_c_egfr}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Creatinine clearance
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        creatinine_clearance: event.target.value,
                      });
                    }}
                    value={this.state.creatinine_clearance}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    24hr urine creatinine
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        hr_urine_creatinine: event.target.value,
                      });
                    }}
                    value={this.state.hr_urine_creatinine}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Na, 24hr urine
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ na_hr_urine: event.target.value });
                    }}
                    value={this.state.na_hr_urine}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Volume 24hr urine
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ volume_hr_urine: event.target.value });
                    }}
                    value={this.state.volume_hr_urine}
                  />
                </div>
              </div>
              <div>
                <Breadcrumb style={{ margin: "10px" }}>
                  <Breadcrumb.Item>
                    <text
                      style={{
                        fontSize: titleFontSize,
                        fontWeight: 500,
                        color: "#2b6e4d",
                      }}
                    >
                      CT result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Lt.Kidney volume
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ lt_kidney_vol: event.target.value });
                    }}
                    value={this.state.lt_kidney_vol}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Rt.Kidney volume
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ rt_kidney_vol: event.target.value });
                    }}
                    value={this.state.rt_kidney_vol}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Total volume
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ total_vol: event.target.value });
                    }}
                    value={this.state.total_vol}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Remnant volume
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ remnant_vol: event.target.value });
                    }}
                    value={this.state.remnant_vol}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Remnant Volume percentage
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ remnant_vol_per: event.target.value });
                    }}
                    value={this.state.remnant_vol_per}
                  />
                </div>
              </div>
              <div>
                <Breadcrumb style={{ margin: "10px" }}>
                  <Breadcrumb.Item>
                    <text
                      style={{
                        fontSize: titleFontSize,
                        fontWeight: 500,
                        color: "#2b6e4d",
                      }}
                    >
                      DTPA result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Predicted GFR, total
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        predicted_gfr_total: event.target.value,
                      });
                    }}
                    value={this.state.predicted_gfr_total}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Predicted GFR, Lt
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ predicted_gfr_lt: event.target.value });
                    }}
                    value={this.state.predicted_gfr_lt}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Predicted GFR, Rt
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ predicted_gfr_rt: event.target.value });
                    }}
                    value={this.state.predicted_gfr_rt}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Normalized GFR
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({ normalized_gfr: event.target.value });
                    }}
                    value={this.state.normalized_gfr}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    상대섭취율(Lt, %)
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        relative_uptake_rate_lt: event.target.value,
                      });
                    }}
                    value={this.state.relative_uptake_rate_lt}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    상대섭취율(Rt, %)
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        relative_uptake_rate_rt: event.target.value,
                      });
                    }}
                    value={this.state.relative_uptake_rate_rt}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    잔여상대섭취율(%)
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        residual_relative_uptake_rate: event.target.value,
                      });
                    }}
                    value={this.state.residual_relative_uptake_rate}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Remant normalized GFR
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        remnant_normalized_gfr: event.target.value,
                      });
                    }}
                    value={this.state.remnant_normalized_gfr}
                  />
                </div>
                <div>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "#2b6e4d",
                      marginLeft: 15,
                      marginRight: 20,
                      marginTop: 115,
                      width: 160,
                      height: "4vh",
                      fontFamily: "monospace",
                      fontSize: 20,
                    }}
                    onClick={() => {
                      this.fetchFunc()
                        .then((res) => {
                          return res.json();
                        })
                        .then((res) => {
                          this.setState({
                            output: res.output,
                          });
                        })
                        .catch((err) => {
                          console.log("fetch 통신 에러 -- ", err);
                        });
                    }}
                  >
                    submit
                  </Button>
                </div>
              </div>
            </div>
            <Divider style={{ marginTop: 0 }} />
            <div style={{}}>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    border: "1px solid #cccfce",
                    width: 740,
                    height: "8vh",
                    marginLeft: 20,
                    padding: 5,
                  }}
                >
                  {this.state.output == null ? null : (
                    <div>
                      <div>
                        왼쪽 신장 수술 이후 예상되는 환자의 eGFR은
                        {
                          <span style={{ fontWeight: "bold" }}>
                            {" " + this.state.output[0] + " "}
                          </span>
                        }
                        입니다.
                      </div>
                      <div>
                        오른쪽 신장 수술 이후 예상되는 환자의 eGFR은
                        {
                          <span style={{ fontWeight: "bold" }}>
                            {" " + this.state.output[1] + " "}
                          </span>
                        }
                        입니다.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;
