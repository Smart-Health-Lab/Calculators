(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,i){},113:function(e,t,i){},184:function(e,t,i){"use strict";i.r(t);var n=i(0),l=i.n(n),s=i(26),a=i.n(s),r=(i(112),i(72)),c=i(92),o=i(93),h=i(107),u=i(103),d=i(187),j=i(190),g=i(189),b=i(191),f=i(48),m=i(188),x=i(94),v=(i.p,i(113),i(6)),O=d.a.Header,y=d.a.Content,C=(d.a.Footer,j.a.Option),S=12,p=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).refreshFunc=function(){setTimeout((function(){n.setState({bmi:Math.round(Number(n.state.weight)/Math.pow(Number(n.state.height)/100,2)*100)/100})}),300)},n.fetchFunc=function(){return fetch("http://localhost:5000/home",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(Object(r.a)(Object(r.a)({},n.state),{},{output:null}))})},n.state={Age:null,Sex:null,Weight:null,"Removed side (right or left)":null,"CT volume (right)":null,"CT volume (left)":null,"Total volume":null,"CT volume of remaining kidney/weight":null,"Normalized GFR of remaining kidney":null,"Serum creatinine":null,eGFR:null,"Cystatin-C":null,"Cystatin-C eGFR":null,"24-hour creatinine clearance":null,"24-hour urine creatinine":null,"24-hour urine sodium excretion":null,output:null},n}return Object(o.a)(i,[{key:"componentWillMount",value:function(){this.setState(Object(r.a)({},x.obj))}},{key:"render",value:function(){var e=this;return Object(v.jsxs)(d.a,{className:"layout",style:{background:"white"},children:[Object(v.jsx)(O,{style:{display:"flex",height:"4.5vh",background:"white",justifyContent:"space-between",maxWidth:950},children:Object(v.jsx)("div",{style:{fontFamily:"serif",color:"#0e7542",marginLeft:3,fontSize:20,fontWeight:600,width:600},children:"KDNI (Kidney Donation with Nephrologic Intelligence)"})}),Object(v.jsx)(y,{style:{display:"flex",flexDirection:"column",padding:"0 50px",background:"white"},children:Object(v.jsxs)("div",{style:{border:"1px solid #989c9a",maxWidth:905,marginTop:10,padding:10},children:[Object(v.jsxs)("div",{style:{display:"flex",marginTop:5,marginBottom:-30,paddingBottom:40},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(g.a,{style:{margin:10},children:Object(v.jsx)(g.a.Item,{children:Object(v.jsx)("text",{style:{fontSize:13,fontWeight:700,color:"#2b6e4d"},children:"Basic information"})})}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"Age"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({Age:t.target.value})},value:this.state.Age})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"Sex"}),Object(v.jsxs)(j.a,{defaultValue:this.state.Sex,style:{width:100},onChange:function(t){e.setState({Sex:t})},children:[Object(v.jsx)(C,{value:"M",children:"M"}),Object(v.jsx)(C,{value:"F",children:"F"})]})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Weight"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({Weight:t.target.value})},value:this.state.Weight})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5},children:"Removed side (right or left)"}),Object(v.jsxs)(j.a,{defaultValue:this.state["Removed side (right or left)"],style:{width:100},onChange:function(t){e.state["Removed side (right or left)"]=t},children:[Object(v.jsx)(C,{value:"2",children:"Right"}),Object(v.jsx)(C,{value:"1",children:"Left"})]})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(g.a,{style:{margin:"10px"},children:Object(v.jsx)(g.a.Item,{children:Object(v.jsx)("text",{style:{fontSize:13,fontWeight:700,color:"#2b6e4d"},children:"Test result"})})}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"Serum creatinine"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"Serum creatinine":t.target.value})},value:this.state["Serum creatinine"]})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"eGFR"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({eGFR:t.target.value})},value:this.state.eGFR})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"Cystatin-C"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"Cystatin-C":t.target.value})},value:this.state["Cystatin-C"]})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"Cystatin-C eGFR"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"Cystatin-C eGFR":t.target.value})},value:this.state["Cystatin-C eGFR"]})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"24-hour creatinine clearance"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"24-hour creatinine clearance":t.target.value})},value:this.state["24-hour creatinine clearance"]})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"24-hour urine creatinine"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"24-hour urine creatinine":t.target.value})},value:this.state["24-hour urine creatinine"]})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"24-hour urine sodium excretion"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"24-hour urine sodium excretion":t.target.value})},value:this.state["24-hour urine sodium excretion"]})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(g.a,{style:{margin:"10px"},children:Object(v.jsx)(g.a.Item,{children:Object(v.jsx)("text",{style:{fontSize:13,fontWeight:700,color:"#2b6e4d"},children:"CT result"})})}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"CT volume (right)"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"CT volume (right)":t.target.value})},value:this.state["CT volume (right)"]})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"CT volume (left)"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"CT volume (left)":t.target.value})},value:this.state["CT volume (left)"]})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S},children:"Total volume"}),Object(v.jsx)(b.a,{disabled:!0,onChange:function(e){},value:Number(this.state["CT volume (right)"])+Number(this.state["CT volume (left)"])})]}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"CT volume of remaining kidney/weight"}),Object(v.jsx)(b.a,{disabled:!0,onChange:function(e){},value:"2"===this.state["Removed side (right or left)"]?Math.round(this.state["CT volume (left)"]/this.state.Weight*100)/100:Math.round(this.state["CT volume (right)"]/this.state.Weight*100)/100})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(g.a,{style:{margin:"10px"},children:Object(v.jsx)(g.a.Item,{children:Object(v.jsx)("text",{style:{fontSize:13,fontWeight:700,color:"#2b6e4d"},children:"DTPA result"})})}),Object(v.jsxs)("div",{style:{margin:10},children:[Object(v.jsx)("div",{style:{marginLeft:5,fontSize:S,color:"blue"},children:"Normalized GFR of remaining kidney"}),Object(v.jsx)(b.a,{onChange:function(t){e.setState({"Normalized GFR of remaining kidney":t.target.value})},value:this.state["Normalized GFR of remaining kidney"]})]}),Object(v.jsx)("div",{style:{marginLeft:60,marginTop:315},children:Object(v.jsx)(f.a,{type:"primary",size:"large",style:{backgroundColor:"#2b6e4d",width:160,height:60,fontFamily:"monospace",fontSize:20},onClick:function(){e.fetchFunc().then((function(e){return e.json()})).then((function(t){e.setState({output:JSON.parse(t.output)})})).catch((function(e){console.log("fetch \ud1b5\uc2e0 \uc5d0\ub7ec -- ",e)}))},children:"submit"})})]})]}),Object(v.jsx)(m.a,{style:{marginTop:0}}),Object(v.jsx)("div",{style:{},children:Object(v.jsx)("div",{style:{display:"flex"},children:Object(v.jsx)("div",{style:{height:"8vh"},children:null==this.state.output?null:"2"===this.state["Removed side (right or left)"]?Object(v.jsxs)("div",{children:["The donor's expected eGFR after removal of the right kidney is",Object(v.jsx)("span",{style:{fontWeight:"bold"},children:" "+this.state.output+". "})]}):Object(v.jsxs)("div",{children:["The donor's expected eGFR after removal of the left kidney is",Object(v.jsx)("span",{style:{fontWeight:"bold"},children:" "+this.state.output+". "})]})})})})]})})]})}}]),i}(n.Component),T=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,192)).then((function(t){var i=t.getCLS,n=t.getFID,l=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),n(e),l(e),s(e),a(e)}))};a.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(p,{})}),document.getElementById("root")),T()},94:function(e,t){e.exports={obj:{Age:45,Sex:"F",Weight:65.4,"Removed side (right or left)":"2","CT volume (right)":134,"CT volume (left)":112,"Normalized GFR of remaining kidney":52.9,"Serum creatinine":.83,eGFR:85.4,"Cystatin-C":0,"Cystatin-C eGFR":0,"24-hour creatinine clearance":79,"24-hour urine creatinine":.9,"24-hour urine sodium excretion":101,output:null}}}},[[184,1,2]]]);
//# sourceMappingURL=main.a56e89b4.chunk.js.map