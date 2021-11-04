import React, { Component } from "react";
import {
  Layout,
  Breadcrumb,
  Input,
  Divider,
  Button,
  Select,
  Space,
} from "antd";
import { obj } from "./sampleData/sample_obj";
import "./App.css";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

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
      surgery_part: null,
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

  fetchFunc = () => {
    return fetch("http://127.0.0.1:5000/home", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...this.state,
      }),
    });
  };

  render() {
    console.log("App.js rendering.. ", this.state);
    // console.log(String(1));
    // console.log(obj);

    return (
      <Layout className="layout">
        <Header style={{ height: "5vh", background: "white" }}>
          <div
            style={{
              fontFamily: "serif",
              color: "#0e7542",
              marginLeft: 10,
              fontSize: 30,
            }}
          >
            KT donor Calculator
          </div>
          <div />
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            {new Array(0).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu> */}
        </Header>
        <Content
          style={{
            padding: "0 50px",
            height: "85vh",
            background: "white",
          }}
        >
          <div
            style={{
              border: "1px solid #989c9a",
              height: "90vh",
              marginTop: 20,
            }}
          >
            <div style={{ display: "flex", marginBottom: -20 }}>
              <div>
                <Breadcrumb style={{ margin: 10 }}>
                  <Breadcrumb.Item>
                    <text
                      style={{
                        fontSize: 17,
                        fontWeight: 500,
                        color: "#2b6e4d",
                      }}
                    >
                      Baseline information
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>수술시 나이</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ age: event.target.value });
                    }}
                    value={this.state.age}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>성별</div>
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
                  <div style={{ marginLeft: 5 }}>Height (cm)</div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        height: event.target.value,
                        bmi:
                          ((this.state.weight /
                            (this.state.height / 100) ** 2) *
                            100) /
                          100,
                      });
                    }}
                    value={this.state.height}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Weight (kg)</div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        weight: event.target.value,
                        bmi:
                          ((this.state.weight /
                            (this.state.height / 100) ** 2) *
                            100) /
                          100,
                      });
                    }}
                    value={this.state.weight}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>SBP</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ sbp: event.target.value });
                    }}
                    value={this.state.sbp}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>DBP</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ dbp: event.target.value });
                    }}
                    value={this.state.dbp}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>수술부위 (lt: 1, rt:2)</div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        surgery_part: String(event.target.value),
                      });
                    }}
                    value={this.state.surgery_part}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>bmi</div>
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
                        fontSize: 17,
                        fontWeight: 500,
                        color: "#2b6e4d",
                      }}
                    >
                      Test result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Serum uric acid</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ serum_uric_acid: event.target.value });
                    }}
                    value={this.state.serum_uric_acid}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>LDL</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ ldl: event.target.value });
                    }}
                    value={this.state.ldl}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Triglycerid</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ triglycerid: event.target.value });
                    }}
                    value={this.state.triglycerid}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Serum creatinine</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ serum_creatinine: event.target.value });
                    }}
                    value={this.state.serum_creatinine}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>eGFR</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ egfr: event.target.value });
                    }}
                    value={this.state.egfr}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Cystatin-C</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ cystatin_c: event.target.value });
                    }}
                    value={this.state.cystatin_c}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Cystatin-C eGFR</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ cystatin_c_egfr: event.target.value });
                    }}
                    value={this.state.cystatin_c_egfr}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Creatinine clearance</div>
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
                  <div style={{ marginLeft: 5 }}>24hr urine creatinine</div>
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
                  <div style={{ marginLeft: 5 }}>Na, 24hr urine</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ na_hr_urine: event.target.value });
                    }}
                    value={this.state.na_hr_urine}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Volume 24hr urine</div>
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
                        fontSize: 17,
                        fontWeight: 500,
                        color: "#2b6e4d",
                      }}
                    >
                      CT result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Lt.Kidney volume</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ lt_kidney_vol: event.target.value });
                    }}
                    value={this.state.lt_kidney_vol}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Rt.Kidney volume</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ rt_kidney_vol: event.target.value });
                    }}
                    value={this.state.rt_kidney_vol}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Total volume</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ total_vol: event.target.value });
                    }}
                    value={this.state.total_vol}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Remnant volume</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ remnant_vol: event.target.value });
                    }}
                    value={this.state.remnant_vol}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Remnant Volume percentage</div>
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
                        fontSize: 17,
                        fontWeight: 500,
                        color: "#2b6e4d",
                      }}
                    >
                      DTPA result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Predicted GFR, total</div>
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
                  <div style={{ marginLeft: 5 }}>Predicted GFR, Lt</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ predicted_gfr_lt: event.target.value });
                    }}
                    value={this.state.predicted_gfr_lt}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Predicted GFR, Rt</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ predicted_gfr_rt: event.target.value });
                    }}
                    value={this.state.predicted_gfr_rt}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>Normalized GFR</div>
                  <Input
                    onChange={(event) => {
                      this.setState({ normalized_gfr: event.target.value });
                    }}
                    value={this.state.normalized_gfr}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>상대섭취율(Lt, %)</div>
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
                  <div style={{ marginLeft: 5 }}>상대섭취율(Rt, %)</div>
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
                  <div style={{ marginLeft: 5 }}>잔여상대섭취율(%)</div>
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
                  <div style={{ marginLeft: 5 }}>Remant normalized GFR</div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        remnant_normalized_gfr: event.target.value,
                      });
                    }}
                    value={this.state.remnant_normalized_gfr}
                  />
                </div>
              </div>
            </div>
            <Divider />
            <div style={{}}>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    border: "1px solid #cccfce",
                    width: "65vw",
                    height: "8vh",
                    marginLeft: 20,
                    padding: 5,
                  }}
                >
                  {this.state.output == null ? null : (
                    <div>
                      수술 이후 예상되는 환자의 eGFR은
                      {
                        <span style={{ fontWeight: "bold" }}>
                          {" " + this.state.output + " "}
                        </span>
                      }
                      입니다.
                    </div>
                  )}
                </div>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#2b6e4d",
                    marginLeft: 20,
                    width: "15vw",
                    height: "8vh",
                    fontFamily: "unset",
                    fontSize: 25,
                  }}
                  onClick={() => {
                    this.fetchFunc()
                      .then((res) => {
                        return res.json();
                      })
                      .then((res) => {
                        console.log(res);
                        this.setState({ output: res.output });
                      })
                      .catch((err) => {
                        console.log("통신 에러 -- ", err);
                      });
                  }}
                >
                  submit
                </Button>
              </div>
            </div>
            <div style={{ display: "flex" }}></div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;
