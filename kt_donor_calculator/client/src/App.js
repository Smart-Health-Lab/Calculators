import React, { Component } from "react";
import { Layout, Breadcrumb, Input, Divider, Button, Select } from "antd";
import { obj } from "./sampleData/sample_obj";
import shl_img from "./image/shl_img.png";
import "./App.css";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const titleFontSize = 13;
const subTitleFontSize = 12;
let submit_clicked = false;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: null,
      Sex: null,
      Weight: null,
      "Removed side (right or left)": null,
      "CT volume (right)": null,
      "CT volume (left)": null,
      "Total volume": null,
      "CT volume of remaining kidney/weight": null,
      "Normalized GFR of remaining kidney": null,
      "Serum creatinine": null,
      eGFR: null,
      "Cystatin-C": null,
      "Cystatin-C eGFR": null,
      "24-hour creatinine clearance": null,
      "24-hour urine creatinine": null,
      "24-hour urine sodium excretion": null,
      output: null,
    };
  }

  componentWillMount() {
    this.setState({ ...obj });
  }

  refreshFunc = () => {
    // setTimeout(() => {
    //   this.setState({
    //     bmi:
    //       Math.round(
    //         (Number(this.state.weight) /
    //           (Number(this.state.height) / 100) ** 2) *
    //           100
    //       ) / 100,
    //   });
    // }, 300);
  };

  fetchFunc = () => {
    // console.log("fetch flying..", stateObj);
    // "http://54.180.162.218:5000/home" -> aws kt cal server

    return fetch("http://0.0.0.0:5000/home", {
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
      <Layout className="layout" style={{ background: "white" }}>
        <Header
          style={{
            display: "flex",
            height: "4.5vh",
            background: "white",
            justifyContent: "space-between",
            maxWidth: 950,
          }}
        >
          <div
            style={{
              fontFamily: "serif",
              color: "#0e7542",
              marginLeft: 3,
              fontSize: 20,
              fontWeight: 600,
              width: 600,
            }}
          >
            KDNI (Kidney Donation with Nephrologic Intelligence)
          </div>
          {/* <img src={shl_img} style={{ height: 27, marginTop: 15, right: 90 }} /> */}
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
              // height: 700,
              maxWidth: 905,
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
                        fontWeight: 700,
                        color: "#2b6e4d",
                      }}
                    >
                      Basic information
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    Age (years)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        Age: event.target.value,
                      });
                    }}
                    value={this.state.Age}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    Sex
                  </div>
                  <Select
                    defaultValue={this.state.Sex}
                    style={{ width: 100 }}
                    onChange={(sex) => {
                      submit_clicked = false;
                      this.setState({ Sex: sex });
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
                    Weight (kg)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        Weight: event.target.value,
                      });
                    }}
                    value={this.state.Weight}
                  />
                </div>
                {/* <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Bmi
                  </div>
                  <Input
                    onChange={(event) => {
                      this.setState({
                        bmi: Number(
                          Number(this.state.weight) /
                            Math.sqrt(Number(this.state.height))
                        ),
                      });
                    }}
                    value={this.state.bmi}
                    disabled={true}
                  />
                </div> */}
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5 }}>{`Donated side`}</div>
                  <Select
                    defaultValue={this.state["Removed side (right or left)"]}
                    style={{ width: 100 }}
                    onChange={(side) => {
                      submit_clicked = false;
                      // right => 2
                      // left => 1 , 이 숫자 변경 불가능 (모델 학습에 반영됨)
                      this.setState({ "Removed side (right or left)": side });
                      // this.setState({
                      //   "Removed side (right(2) or left(1))": side,
                      // });
                    }}
                  >
                    <Option value="2">{"Right"}</Option>
                    <Option value="1">{"Left"}</Option>
                  </Select>
                  {/* <Input
                    onChange={(event) => {
                      this.state["Removed side (right(2) or left(1))"] = String(
                        event.target.value
                      );
                      // this.setState({
                      //   "Removed side (right(2) or left(1))": String(
                      //     event.target.value
                      //   ),
                      // });
                    }}
                    value={this.state["Removed side (right(2) or left(1))"]}
                  /> */}
                </div>
              </div>
              <div>
                <Breadcrumb style={{ margin: "10px" }}>
                  <Breadcrumb.Item>
                    <text
                      style={{
                        fontSize: titleFontSize,
                        fontWeight: 700,
                        color: "#2b6e4d",
                      }}
                    >
                      Test result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    Serum creatinine (mg/dL)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        "Serum creatinine": event.target.value,
                      });
                    }}
                    value={this.state["Serum creatinine"]}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    eGFR (ml/min/1.73m<sup>2</sup>)
                  </div>
                  <Input
                    disabled={true}
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({ eGFR: event.target.value });
                    }}
                    value={this.state.eGFR}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    Cystatin C (mg/L)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({ "Cystatin-C": event.target.value });
                    }}
                    value={this.state["Cystatin-C"]}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    {`Cystatin C eGFR`}
                    <br></br>(mL/min/1.73m<sup>2</sup>)
                  </div>
                  <Input
                    disabled={true}
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        "Cystatin-C eGFR": event.target.value,
                      });
                    }}
                    value={this.state["Cystatin-C eGFR"]}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    24-hour urine creatinine clearance (mL/min)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        "24-hour creatinine clearance": event.target.value,
                      });
                    }}
                    value={this.state["24-hour creatinine clearance"]}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    24-hour urine creatinine (g/day)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        "24-hour urine creatinine": event.target.value,
                      });
                    }}
                    value={this.state["24-hour urine creatinine"]}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    24-hour urine sodium excretion (mmol/day)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        "24-hour urine sodium excretion": event.target.value,
                      });
                    }}
                    value={this.state["24-hour urine sodium excretion"]}
                  />
                </div>
              </div>
              <div>
                <Breadcrumb style={{ margin: "10px" }}>
                  <Breadcrumb.Item>
                    <text
                      style={{
                        fontSize: titleFontSize,
                        fontWeight: 700,
                        color: "#2b6e4d",
                      }}
                    >
                      CT result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Right CT volume (cm<sup>3</sup>)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        "CT volume (right)": event.target.value,
                      });
                    }}
                    value={this.state["CT volume (right)"]}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Left CT volume (cm<sup>3</sup>)
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        "CT volume (left)": event.target.value,
                      });
                    }}
                    value={this.state["CT volume (left)"]}
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div style={{ marginLeft: 5, fontSize: subTitleFontSize }}>
                    Total volume
                  </div>
                  <Input
                    disabled={true}
                    onChange={(event) => {}}
                    value={
                      Number(this.state["CT volume (right)"]) +
                      Number(this.state["CT volume (left)"])
                    }
                  />
                </div>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    CT volume of remaining kidney/weight (cm<sup>3</sup>/kg)
                  </div>
                  <Input
                    disabled={true}
                    onChange={(event) => {}}
                    value={
                      this.state["Removed side (right or left)"] === "2"
                        ? Math.round(
                            (this.state["CT volume (left)"] /
                              this.state["Weight"]) *
                              100
                          ) / 100
                        : Math.round(
                            (this.state["CT volume (right)"] /
                              this.state["Weight"]) *
                              100
                          ) / 100
                    }
                  />
                </div>
              </div>
              <div>
                <Breadcrumb style={{ margin: "10px" }}>
                  <Breadcrumb.Item>
                    <text
                      style={{
                        fontSize: titleFontSize,
                        fontWeight: 700,
                        color: "#2b6e4d",
                      }}
                    >
                      DTPA result
                    </text>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ margin: 10 }}>
                  <div
                    style={{
                      marginLeft: 5,
                      fontSize: subTitleFontSize,
                      color: "blue",
                    }}
                  >
                    Normalized GFR of remaining kidney (mL/min/1.73m<sup>2</sup>
                    )
                  </div>
                  <Input
                    onChange={(event) => {
                      submit_clicked = false;
                      this.setState({
                        "Normalized GFR of remaining kidney":
                          event.target.value,
                      });
                    }}
                    value={this.state["Normalized GFR of remaining kidney"]}
                  />
                </div>
                <div
                  style={{
                    marginLeft: 60,
                    marginTop: 315,
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "#2b6e4d",
                      width: 160,
                      height: 60,
                      fontFamily: "monospace",
                      fontSize: 20,
                    }}
                    onClick={() => {
                      submit_clicked = true;
                      this.fetchFunc()
                        .then((res) => {
                          return res.json();
                        })
                        .then((res) => {
                          this.setState({
                            output: JSON.parse(res.output),
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
                    // border: "1px solid #cccfce",
                    // minWidth: 880,
                    // overflow: "hidden",
                    height: "8vh",
                    // marginLeft: 20,
                    // padding: 5,
                  }}
                >
                  {submit_clicked === true ? (
                    this.state.output == null ? null : this.state[
                        "Removed side (right or left)"
                      ] === "2" ? (
                      <div>
                        The donor's expected eGFR after removal of the right
                        kidney is
                        {
                          <span style={{ fontWeight: "bold" }}>
                            {" " + this.state.output + ". "}
                          </span>
                        }
                      </div>
                    ) : (
                      <div>
                        The donor's expected eGFR after removal of the left
                        kidney is
                        {
                          <span style={{ fontWeight: "bold" }}>
                            {" " + this.state.output + ". "}
                          </span>
                        }
                      </div>
                    )
                  ) : (
                    <div></div>
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
