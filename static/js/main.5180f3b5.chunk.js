(this.webpackJsonpdaycloud=this.webpackJsonpdaycloud||[]).push([[0],{32:function(e,t,n){e.exports=n(57)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),c=n(2),l=n(3),s=n(5),u=n(4),m=n(6),h=(n(37),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"exitFunck",value:function(){this.props.login(!1)}},{key:"render",value:function(){return r.a.createElement("button",{onClick:this.exitFunck.bind(this),hidden:this.props.hidden},"\u0412\u044b\u0445\u043e\u0434")}}]),t}(r.a.Component)),p=(n(38),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onChangeName=function(t){e.setState({name:t.target.value})},e.onChangeSurname=function(t){e.setState({surname:t.target.value})},e.onChangePhone=function(t){var n=t.target.value;e.setState({phone:n})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onChangeData=function(t){e.setState({data:t.target.value})},e.state={name:null,surname:null,phone:null,password:null,data:null,login:!0,array:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onSubmitFn",value:function(){var e=this.state.phone;localStorage.setItem("".concat(e),JSON.stringify(this.state)),this.props.login(this.state),this.props.reset()}},{key:"render",value:function(){return r.a.createElement("div",{className:"registration-form "},r.a.createElement("div",{className:"input_name input"},r.a.createElement("input",{onChange:this.onChangeName,placeholder:"\u0418\u043c\u044f"})),r.a.createElement("div",{className:"input_name input"},r.a.createElement("input",{onChange:this.onChangeSurname,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"})),r.a.createElement("div",{className:"input_name input"},r.a.createElement("input",{onChange:this.onChangePhone,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"})),r.a.createElement("div",{className:"input_name input"},r.a.createElement("input",{onChange:this.onChangePassword,placeholder:"\u043f\u0430\u0440\u043e\u043b\u044c"})),r.a.createElement("div",{className:"input_name input"},r.a.createElement("input",{onChange:this.onChangeData,type:"date"})),r.a.createElement("button",{onClick:this.onSubmitFn.bind(this)},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))}}]),t}(r.a.Component)),d=(n(39),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={phoneLogin:null,phone:null,password:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onChengPhone",value:function(e){this.setState({phoneLogin:e.target.value})}},{key:"onChengPassword",value:function(e){this.setState({passwordLogin:e.target.value})}},{key:"toComeIn",value:function(){var e=this.state,t=e.phoneLogin,n=e.passwordLogin,a=JSON.parse(localStorage.getItem(t));n===(a?a.password:null)?(this.props.login(a),this.props.reset()):console.log("\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u0445\u043e\u0434\u0430 ")}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-form"},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.onChengPhone.bind(this),placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"})),r.a.createElement("div",null,r.a.createElement("input",{onChange:this.onChengPassword.bind(this),placeholder:"\u043f\u0430\u0440\u043e\u043b\u044c"})),r.a.createElement("button",{onClick:this.toComeIn.bind(this)},"\u0412\u043e\u0439\u0442\u0438"))}}]),t}(r.a.Component)),v=(n(40),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={login:!n.props.isOnline,registration:!n.props.isOnline},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"reset",value:function(){this.setState({login:!this.props.isOnline,registration:!this.props.isOnline})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"entrance",hidden:this.props.hidden},r.a.createElement("div",{hidden:!this.state.login},this.state.registration?r.a.createElement("button",{className:"register_button",onClick:function(){return e.setState({registration:!e.state.registration})}},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"):r.a.createElement(p,{login:this.props.login,reset:this.reset.bind(this)})),r.a.createElement("div",{hidden:!this.state.registration},this.state.login?r.a.createElement("button",{className:"login_button",onClick:function(){return e.setState({login:!e.state.login})}},"\u0412\u043e\u0439\u0442\u0438"):r.a.createElement(d,{login:this.props.login,reset:this.reset.bind(this)})))}}]),t}(r.a.Component)),b=(n(41),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=!!this.props.user;return r.a.createElement("div",{className:"header"},r.a.createElement("div",null,"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0432\u0441\u0435"),r.a.createElement("div",null,r.a.createElement(v,{login:this.props.login,log:this.props.log,hidden:e}),r.a.createElement(h,{login:this.props.login,hidden:!e})))}}]),t}(r.a.Component));n(42),n(43);var f=function(e){return r.a.createElement("div",{className:"user__item"},r.a.createElement("div",{className:"user__item-image"},r.a.createElement("img",{src:"",alt:"img"})),r.a.createElement("span",null,e.user?e.user.name:"Name"),r.a.createElement("span",null,e.user?e.user.surname:"Surname"))},g=n(14),E=n(13),O=n(26),j=n(19),y=n(29),C=(n(44),function(e){var t=e.label,n=e.name,a=e.surname,i=e.onDelete;return r.a.createElement("span",{className:"todo-list-item"},r.a.createElement("div",{className:"todo-list-item"},r.a.createElement("div",{className:"item-img"},r.a.createElement("img",{src:"",alt:"img"})),r.a.createElement("span",{className:"todo-list-item-label"},r.a.createElement("div",null,n," ",a),r.a.createElement("div",null,"\u0421\u043e\u0431\u0438\u0442\u0438\u0435 : ",t))),r.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:i},r.a.createElement("i",{className:"fa fa-trash-o"})))}),N=(n(45),function(e){var t=e.items,n=e.onDelete,a=t.map((function(e){var t=e.id,a=Object(y.a)(e,["id"]);return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(C,Object.assign({},a,{onDelete:function(){return n(t)}})))}));return r.a.createElement("ul",{className:"todo-list list-group"},a)}),k=(n(46),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},n.onTermChange=function(e){var t=n.props.onSearchChange,a=void 0===t?function(){}:t;n.setState({term:e.target.value}),a(e.target.value)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"\u043f\u043e\u0438\u0441\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u0439",value:this.state.term,onChange:this.onTermChange})}}]),t}(a.Component)),S=(n(47),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onLabelChange=function(e){n.setState({label:e.target.value})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onSurnameChange=function(e){n.setState({surname:e.target.value})},n.onDataChange=function(e){n.setState({data:e.target.value})},n.onTextareaChange=function(e){n.setState({textarea:e.target.value})},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=t.label,r=t.name,i=t.surname,o=t.data,c=t.textarea;n.setState({label:"",name:"",surname:"",data:"",textarea:""}),(n.props.onItemAdded||function(){})(a,r,i,o,c),n.props.onClickEvent()},n.state={label:"",name:"",surname:"",data:"",textarea:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"),r.a.createElement("input",{type:"text",placeholder:"\u0418\u043c\u044f",value:this.state.name,onChange:this.onNameChange}),r.a.createElement("input",{type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:this.state.surname,onChange:this.onSurnameChange}),r.a.createElement("input",{type:"date",value:this.state.data,onChange:this.onDataChange}),r.a.createElement("input",{type:"text",className:"form-control new-todo-label",value:this.state.label,onChange:this.onLabelChange,placeholder:"\u041a\u0430\u043a\u043e\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435"}),r.a.createElement("div",null,r.a.createElement("div",null,"\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u0430\u0440\u043a\u0430"),r.a.createElement("textarea",{value:this.state.textarea,onChange:this.onTextareaChange})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),t}(a.Component)),w=(n(48),[{data:"2019-12-31",label:"\u041d\u043e\u0432\u044b\u0439 \u0433\u043e\u0434",name:"",surname:"",textarea:"\ud83c\udf84"},{data:"2020-02-14",label:"\u0414\u0435\u043d\u044c \u0441\u0432. \u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u0430",name:"",surname:"",textarea:"\ud83d\ude0d"},{data:"2020-03-17",label:"\u0414\u0435\u043d\u044c \u0441\u0432. \u041f\u0430\u0442\u0440\u0438\u043a\u0430",name:"",surname:"",textarea:"\ud83c\udf7a\ud83c\udf40\ud83c\udf7b"}]),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).maxId=100,n.onItemAdded=function(e,t,a,r,i){var o=n.createItem(e,t,a,r,i);o.id=Math.floor(1e6*Math.random());var c=JSON.parse(localStorage.getItem(n.props.user.phone));c.array.push(o),localStorage.setItem(n.props.user.phone,JSON.stringify(c)),n.props.login(c)},n.onDelete=function(e){var t=JSON.parse(localStorage.getItem(n.props.user.phone));t.array.forEach((function(n,a){n.id===e&&t.array.splice(a,1)})),localStorage.setItem(n.props.user.phone,JSON.stringify(t)),n.props.login(t),n.setState((function(t){var n=t.items.findIndex((function(t){return t.id===e}));return{items:[].concat(Object(O.a)(t.items.slice(0,n)),Object(O.a)(t.items.slice(n+1)))}}))},n.onSearchChange=function(e){n.setState({search:e})},n.state={items:n.props.user?n.props.user.array:[],search:"",event:!1,switchEvent:!1},n.onClickEvent=n.onClickEvent.bind(Object(j.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"createItem",value:function(e,t,n,a,r){return{label:e,name:t,surname:n,data:a,textarea:r}}},{key:"searchItems",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"onClickEvent",value:function(){this.setState((function(e){return{event:!e.event}}))}},{key:"switchEventAll",value:function(){this.setState({switchEvent:!0})}},{key:"switchEventMy",value:function(){this.setState({switchEvent:!1})}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.search,a=e.event,i=this.searchItems(t,n),o=w.map((function(e){return r.a.createElement("li",{key:e.data,className:"list-group-item"},"".concat(new Date(e.data).toLocaleDateString("ru-RU",{weekday:"long",month:"long",day:"numeric"})," ").concat(e.label," ").concat(e.textarea))}));return r.a.createElement("div",{className:"todo-app "},r.a.createElement("div",{className:"add__event-close"},r.a.createElement(g.b,{to:"/",className:"link"},"Close")),r.a.createElement("div",{className:"app-header"},r.a.createElement("div",{className:"app-header-item",onClick:this.switchEventMy.bind(this),style:{borderBottom:this.state.switchEvent?"1px solid red":"hidden"}},"\u041c\u043e\u0438 \u0441\u043e\u0431\u0438\u0442\u0438\u044f"),r.a.createElement("div",{className:"app-header-item",onClick:this.switchEventAll.bind(this),style:{borderBottom:this.state.switchEvent?"hidden":"1px solid red"}},"\u0412\u0441\u0435 \u0441\u043e\u0431\u0438\u0442\u0438\u044f")),r.a.createElement("div",{className:"my-event",hidden:this.state.switchEvent},r.a.createElement("div",{className:"add-form",hidden:!a},r.a.createElement(S,{onClickEvent:this.onClickEvent,onItemAdded:this.onItemAdded})),r.a.createElement("div",{className:"app-box",hidden:a},r.a.createElement("div",{onClick:this.onClickEvent},r.a.createElement("div",null,"+"),r.a.createElement("div",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u0438\u0442\u0438\u0435")),r.a.createElement("div",{className:"search-panel d-flex"},r.a.createElement(k,{onSearchChange:this.onSearchChange})),r.a.createElement(N,{items:i,onDelete:this.onDelete}))),r.a.createElement("div",{className:"all-event",hidden:!this.state.switchEvent},r.a.createElement("ul",{className:"todo-list list-group"},o)))}}]),t}(a.Component);var D=function(e){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"event__item"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(g.b,{to:"/addevent",className:"link"}," C\u043e\u0431\u044b\u0442\u0438\u044f")),r.a.createElement("div",null,r.a.createElement(g.b,{to:"/about",className:"link"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))),r.a.createElement("div",null,r.a.createElement(E.a,{path:"/addevent",exact:!0,component:function(){return e.user?r.a.createElement(x,{user:e.user,login:e.login}):r.a.createElement(x,{array:[]})}}))))},P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(f,this.props),r.a.createElement(D,this.props))}}]),t}(r.a.Component),I=n(15);n(53);var _=function(e){var t=new Date(e.event.data);return r.a.createElement("div",{className:"content-item"},r.a.createElement("div",null,e.event.label),r.a.createElement("div",null,e.event.name),r.a.createElement("div",null,e.event.surname),r.a.createElement("div",null,t.toLocaleDateString("ru-RU",{weekday:"long",month:"long",day:"numeric"})),r.a.createElement("div",null,e.event.textarea))};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=new Date,t={};this.props.user?this.props.user.array.concat(w).forEach((function(n){var a=n.data,r=new Date(a);r.setFullYear(e.getFullYear());var i=r-e>0?r-e:r-e+31536e6;t=F({},t,Object(I.a)({},i,n))})):w.forEach((function(n){var a=n.data,r=new Date(a);r.setFullYear(e.getFullYear());var i=r-e>0?r-e:r-e+31536e6;t=F({},t,Object(I.a)({},i,n))}));var n=[];return Object.keys(t).sort((function(e,t){return e-t})).forEach((function(e,a){n.push(t[e])})),r.a.createElement("div",{className:"content"},r.a.createElement(_,{event:n[0]}),r.a.createElement(_,{event:n[1]}),r.a.createElement(_,{event:n[2]}))}}]),t}(r.a.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(P,this.props),r.a.createElement(A,this.props))}}]),t}(r.a.Component),B=(n(54),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user:n.props.user},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},"Footer ",this.props.user)}}]),t}(r.a.Component)),M=(n(55),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,this.props),r.a.createElement(J,this.props),r.a.createElement(B,null))}}]),t}(r.a.Component)),T=n(20);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var G=Object(T.b)((function(e,t){switch(t.type){case"LOGIN":return console.log("Action LOGIN",t.value),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{user:t.value})}return e||{isOnline:!1}})),R=n(25);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=Object(R.b)((function(e){return{user:e.user}}),(function(e){return{login:function(t){return e({type:"LOGIN",value:t})}}}))(M);o.a.render(r.a.createElement(R.a,{store:G},r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.5180f3b5.chunk.js.map