(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,i){},113:function(e,t,i){},184:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(26),l=i.n(r),s=(i(112),i(72)),c=i(92),d=i(93),u=i(107),j=i(103),h=i(187),o=i(190),g=i(189),b=i(191),m=i(48),f=i(188),v=i(94),_=i.p+"static/media/shl_img.798e608f.png",x=(i(113),i(4)),O=h.a.Header,y=h.a.Content,p=(h.a.Footer,o.a.Option),S=12,z=function(e){Object(u.a)(i,e);var t=Object(j.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).refreshFunc=function(){setTimeout((function(){n.setState({bmi:Math.round(Number(n.state.weight)/Math.pow(Number(n.state.height)/100,2)*100)/100})}),300)},n.fetchFunc=function(){return fetch("http://54.180.162.218:5000/home",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(Object(s.a)(Object(s.a)({},n.state),{},{output:null}))})},n.state={age:null,sex:null,height:null,weight:null,sbp:null,dbp:null,surgery_part:"1",lt_kidney_vol:null,rt_kidney_vol:null,total_vol:null,remnant_vol:null,remnant_vol_per:null,predicted_gfr_total:null,predicted_gfr_lt:null,predicted_gfr_rt:null,normalized_gfr:null,relative_uptake_rate_lt:null,relative_uptake_rate_rt:null,residual_relative_uptake_rate:null,remnant_normalized_gfr:null,serum_uric_acid:null,ldl:null,triglycerid:null,serum_creatinine:null,egfr:null,cystatin_c:null,cystatin_c_egfr:null,creatinine_clearance:null,hr_urine_creatinine:null,na_hr_urine:null,volume_hr_urine:null,bmi:null,output:null},n}return Object(d.a)(i,[{key:"componentWillMount",value:function(){this.setState(Object(s.a)({},v.obj))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)(h.a,{className:"layout",children:[Object(x.jsxs)(O,{style:{display:"flex",height:"4.5vh",background:"white"},children:[Object(x.jsx)("div",{style:{fontFamily:"serif",color:"#0e7542",marginLeft:10,fontSize:20,fontWeight:600},children:"KDNI (Kidney Donation with Nephric Intelligence)"}),Object(x.jsx)("img",{src:_,style:{height:27,marginTop:15,marginLeft:170}})]}),Object(x.jsx)(y,{style:{display:"flex",flexDirection:"column",padding:"0 50px",background:"white"},children:Object(x.jsxs)("div",{style:{border:"1px solid #989c9a",height:860,width:800,marginTop:10,padding:10},children:[Object(x.jsxs)("div",{style:{display:"flex",marginTop:5,marginBottom:-30,paddingBottom:40},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{style:{margin:10},children:Object(x.jsx)(g.a.Item,{children:Object(x.jsx)("text",{style:{fontSize:13,fontWeight:500,color:"#2b6e4d"},children:"Baseline information"})})}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"\uc218\uc220\uc2dc \ub098\uc774"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({age:Number(t.target.value)})},value:this.state.age})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"\uc131\ubcc4"}),Object(x.jsxs)(o.a,{defaultValue:this.state.sex,style:{width:100},onChange:function(t){e.setState({sex:t})},children:[Object(x.jsx)(p,{value:"M",children:"M"}),Object(x.jsx)(p,{value:"F",children:"F"})]})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Height (cm)"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({height:Number(t.target.value),bmi:Math.round(Number(e.state.weight)/Math.pow(Number(e.state.height)/100,2)*100)/100}),e.refreshFunc()},value:this.state.height})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Weight (kg)"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({weight:Number(t.target.value),bmi:Math.round(Number(e.state.weight)/Math.pow(Number(e.state.height)/100,2)*100)/100}),e.refreshFunc()},value:this.state.weight})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"SBP"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({sbp:Number(t.target.value)})},value:this.state.sbp})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"DBP"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({dbp:Number(t.target.value)})},value:this.state.dbp})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Bmi"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({bmi:Number(e.state.weight/Math.sqrt(e.state.height))})},value:this.state.bmi,disabled:!0})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{style:{margin:"10px"},children:Object(x.jsx)(g.a.Item,{children:Object(x.jsx)("text",{style:{fontSize:13,fontWeight:500,color:"#2b6e4d"},children:"Test result"})})}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Serum uric acid"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({serum_uric_acid:Number(t.target.value)})},value:this.state.serum_uric_acid})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"LDL"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({ldl:Number(t.target.value)})},value:this.state.ldl})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Triglycerid"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({triglycerid:Number(t.target.value)})},value:this.state.triglycerid})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Serum creatinine"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({serum_creatinine:Number(t.target.value)})},value:this.state.serum_creatinine})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"eGFR"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({egfr:Number(t.target.value)})},value:this.state.egfr})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Cystatin-C"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({cystatin_c:Number(t.target.value)})},value:this.state.cystatin_c})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Cystatin-C eGFR"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({cystatin_c_egfr:Number(t.target.value)})},value:this.state.cystatin_c_egfr})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Creatinine clearance"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({creatinine_clearance:Number(t.target.value)})},value:this.state.creatinine_clearance})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"24hr urine creatinine"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({hr_urine_creatinine:Number(t.target.value)})},value:this.state.hr_urine_creatinine})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Na, 24hr urine"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({na_hr_urine:Number(t.target.value)})},value:this.state.na_hr_urine})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Volume 24hr urine"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({volume_hr_urine:Number(t.target.value)})},value:this.state.volume_hr_urine})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{style:{margin:"10px"},children:Object(x.jsx)(g.a.Item,{children:Object(x.jsx)("text",{style:{fontSize:13,fontWeight:500,color:"#2b6e4d"},children:"CT result"})})}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Lt.Kidney volume"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({lt_kidney_vol:Number(t.target.value)})},value:this.state.lt_kidney_vol})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Rt.Kidney volume"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({rt_kidney_vol:Number(t.target.value)})},value:this.state.rt_kidney_vol})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Total volume"}),Object(x.jsx)(b.a,{disabled:!0,onChange:function(t){e.setState({total_vol:Number(t.target.value)})},value:this.state.lt_kidney_vol+this.state.rt_kidney_vol})]})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(g.a,{style:{margin:"10px"},children:Object(x.jsx)(g.a.Item,{children:Object(x.jsx)("text",{style:{fontSize:13,fontWeight:500,color:"#2b6e4d"},children:"DTPA result"})})}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Predicted GFR, Lt"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({predicted_gfr_lt:Number(t.target.value)})},value:this.state.predicted_gfr_lt})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Predicted GFR, Rt"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({predicted_gfr_rt:Number(t.target.value)})},value:this.state.predicted_gfr_rt})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Predicted GFR, total"}),Object(x.jsx)(b.a,{disabled:!0,onChange:function(t){e.setState({predicted_gfr_total:Number(t.target.value)})},value:this.state.predicted_gfr_lt+this.state.predicted_gfr_rt})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Normalized GFR"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({normalized_gfr:Number(t.target.value)})},value:this.state.normalized_gfr})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"\uc0c1\ub300\uc12d\ucde8\uc728(Lt, %)"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({relative_uptake_rate_lt:Number(t.target.value)})},value:this.state.relative_uptake_rate_lt})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"\uc0c1\ub300\uc12d\ucde8\uc728(Rt, %)"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({relative_uptake_rate_rt:Number(t.target.value)})},value:this.state.relative_uptake_rate_rt})]}),Object(x.jsxs)("div",{style:{margin:10},children:[Object(x.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Remnant normalized GFR"}),Object(x.jsx)(b.a,{onChange:function(t){e.setState({remnant_normalized_gfr:Number(t.target.value)})},value:this.state.remnant_normalized_gfr})]}),Object(x.jsx)("div",{children:Object(x.jsx)(m.a,{type:"primary",size:"large",style:{backgroundColor:"#2b6e4d",marginLeft:15,marginRight:20,marginTop:170,width:160,height:60,fontFamily:"monospace",fontSize:20},onClick:function(){e.fetchFunc().then((function(e){return e.json()})).then((function(t){e.setState({output:t.output})})).catch((function(e){console.log("fetch \ud1b5\uc2e0 \uc5d0\ub7ec -- ",e)}))},children:"submit"})})]})]}),Object(x.jsx)(f.a,{style:{marginTop:0}}),Object(x.jsx)("div",{style:{},children:Object(x.jsx)("div",{style:{display:"flex"},children:Object(x.jsx)("div",{style:{border:"1px solid #cccfce",width:740,height:"8vh",marginLeft:20,padding:5},children:null==this.state.output?null:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:["\uc67c\ucabd \uc2e0\uc7a5 \uc218\uc220 \uc774\ud6c4 \uc608\uc0c1\ub418\ub294 \ud658\uc790\uc758 eGFR\uc740",Object(x.jsx)("span",{style:{fontWeight:"bold"},children:" "+this.state.output[0]+" "}),"\uc785\ub2c8\ub2e4."]}),Object(x.jsxs)("div",{children:["\uc624\ub978\ucabd \uc2e0\uc7a5 \uc218\uc220 \uc774\ud6c4 \uc608\uc0c1\ub418\ub294 \ud658\uc790\uc758 eGFR\uc740",Object(x.jsx)("span",{style:{fontWeight:"bold"},children:" "+this.state.output[1]+" "}),"\uc785\ub2c8\ub2e4."]})]})})})})]})})]})}}]),i}(n.Component),C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,192)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;i(e),n(e),a(e),r(e),l(e)}))};l.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),C()},94:function(e,t){e.exports={obj:{age:45,sex:"F",height:160,weight:65.4,sbp:126,dbp:88,surgery_part:"1",lt_kidney_vol:112,rt_kidney_vol:134,total_vol:246,remnant_vol:134,remnant_vol_per:54.5,predicted_gfr_total:109.66,predicted_gfr_lt:58.36,predicted_gfr_rt:51.3,normalized_gfr:113.04,relative_uptake_rate_lt:53.22,relative_uptake_rate_rt:46.78,residual_relative_uptake_rate:46.78,remnant_normalized_gfr:52.9,serum_uric_acid:2.6,ldl:124,triglycerid:120,serum_creatinine:.83,egfr:85.4,cystatin_c:0,cystatin_c_egfr:0,creatinine_clearance:79,hr_urine_creatinine:.9,na_hr_urine:101,volume_hr_urine:1e3,bmi:25.54,output:null}}}},[[184,1,2]]]);
//# sourceMappingURL=main.7bc9718e.chunk.js.map