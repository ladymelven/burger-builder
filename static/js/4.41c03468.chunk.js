(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{101:function(e,a,t){"use strict";t.r(a);var n=t(4),r=t(17),o=t(18),i=t(20),l=t(19),s=t(0),c=t.n(s),u=t(96),m=t.n(u),p=t(14),d=t(95),g=t(12),f=t(28),h=t(3),b=t(11),v=t(31),_=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={email:"",password:"",formIsValid:!0},e.changeHandler=function(a){var t=Object(n.a)({},e.state);t[a.target.name]=a.target.value.toString(10),e.setState(Object(n.a)({},t)),"password"===a.target.name?a.target.value.length>=6?(e.formConfig[1].config.valid="true",e.setState({formIsValid:!0})):(e.formConfig[1].config.valid="",e.setState({formIsValid:!1})):"email"===a.target.name&&(a.target.value.match(/([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})/)?(e.formConfig[0].config.valid="true",e.setState({formIsValid:!0})):(e.formConfig[0].config.valid="",e.setState({formIsValid:!1})))},e.submitHandler=function(a,t){if(a.preventDefault(),e.state.formIsValid){var n="signup"===t;e.props.onAuth(e.state.email,e.state.password,n),e.clearHandler("proceed")}},e.clearHandler=function(a){var t="/build";e.props.ordering&&a&&(t="/checkout"),e.props.history.push(t)},e.formConfig=[{name:"email",type:"email",label:"Email",config:{placeholder:"burger@burger.com",required:!0,valid:"true"}},{name:"password",type:"password",label:"Password (at least 6 characters long)",config:{required:!0,valid:"true"}}],e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{heading:"Login",action:"SIGN IN",inputs:this.formConfig,change:this.changeHandler,submit:function(a){return e.submitHandler(a,"signin")},invalid:!this.formIsValid}),c.a.createElement("div",{className:m.a.buttonContainer},c.a.createElement(g.a,{type:"cancelBtn",clicked:function(a){return e.submitHandler(a,"signup")},disabled:!this.state.formIsValid},"SIGN UP")),this.props.error?c.a.createElement("p",{className:m.a.errorMessage},this.props.error.message):null);return this.props.loading&&(a=c.a.createElement(f.a,null)),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{show:!0,clickBackdrop:function(){return e.clearHandler(null)}},a),this.props.isLoggedIn?c.a.createElement(h.a,{to:"/"}):null)}}]),t}(c.a.Component);a.default=Object(b.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isLoggedIn:!!e.auth.token,ordering:e.order.orderInprogress}}),(function(e){return{onAuth:function(a,t,n){return e(Object(v.a)(a,t,n))}}}))(_)},93:function(e,a,t){e.exports={formContainer:"Form_formContainer__3xp4C",formHeading:"Form_formHeading__359xK",formBody:"Form_formBody__3DF8g",btnContainer:"Form_btnContainer__2ug9Y"}},94:function(e,a,t){e.exports={inputContainer:"Input_inputContainer__3xMTE",inputLabel:"Input_inputLabel__2jAj2",textInput:"Input_textInput__S1WPd",textArea:"Input_textArea__3MuUf",invalid:"Input_invalid__3U50G"}},95:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(93),i=t.n(o),l=t(94),s=t.n(l),c=function(e){var a=null;switch(e.type){case"text":case"time":case"date":case"url":case"search":a=r.a.createElement("input",Object.assign({onChange:e.change,className:s.a.textInput,type:e.type,name:e.name,id:e.name},e.otherProps));break;case"tel":case"email":case"password":var t=[s.a.textInput];e.checkValidity&&!e.otherProps.valid&&t.push(s.a.invalid),a=r.a.createElement("input",Object.assign({onChange:e.change,className:t.join(" "),type:e.type,name:e.name,id:e.name},e.otherProps));break;case"textarea":a=r.a.createElement("textarea",{onChange:e.change,className:s.a.textArea,name:e.name,id:e.name});break;case"select":var n=e.otherProps.options.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.text)}));a=r.a.createElement("select",{name:e.name,id:e.name,value:e.otherProps.options[0]},n);break;case"datalist":var o=e.otherProps.options.map((function(e){return r.a.createElement("option",{value:e,key:e})}));a=r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onChange:e.change,className:s.a.textInput,list:e.otherProps.listName,name:e.name,id:e.name}),r.a.createElement("datalist",{id:e.otherProps.listName,value:e.otherProps.options[0]},o));break;default:a=r.a.createElement("input",null)}return r.a.createElement("div",{className:s.a.inputContainer},r.a.createElement("label",{htmlFor:e.name,className:s.a.inputLabel},e.label,e.label&&e.otherProps.required?r.a.createElement("span",null,"*"):null),a)},u=t(12);a.a=function(e){var a=e.inputs.map((function(a){return r.a.createElement(c,{name:a.name,key:a.name,label:a.label,type:a.type,otherProps:a.config,change:e.change,checkValidity:e.invalid})}));return r.a.createElement("div",{className:i.a.formContainer},r.a.createElement("h3",{className:i.a.formHeading},e.heading),r.a.createElement("form",{className:i.a.formBody,onSubmit:e.submit},r.a.createElement("div",{className:i.a.btnContainer},a,r.a.createElement(u.a,{type:"submitBtn",btnType:"submit"},e.action))))}},96:function(e,a,t){e.exports={buttonContainer:"Auth_buttonContainer__10zSH"}}}]);
//# sourceMappingURL=4.41c03468.chunk.js.map