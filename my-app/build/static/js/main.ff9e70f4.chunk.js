(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports=n(21)},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),u=n.n(l),c=n(2),i=n(1),m=n(7),o=n(8),s=n(11),h=n(9),b=n(12),f=function(e){var t=e.name,n=e.number,a=e.handleDelete,l=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,t,": ",n),r.a.createElement("button",{type:"button",onClick:function(){return a({id:l})}},"Delete"))},g=function(e){var t=e.arr,n=e.handleDelete;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e,{handleDelete:n}))})))},d=function(e){var t=e.valueFilter,n=e.onChangeInputFilter;return r.a.createElement("input",{minLength:5,type:"text",value:t,onChange:n})},p=function(e){var t=e.contacts,n=e.handleSubmit,a=e.handleChange,l=e.handleChangeNumber,u=e.value,c=e.valueNum,i=e.name,m=e.arr,o=e.number,s=e.onChangeInputFilter,h=e.valueFilter,b=e.handleDelete;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n},r.a.createElement("h2",null,"Phonebook"),r.a.createElement("span",null,"Name"),r.a.createElement("input",{minLength:5,type:"text",name:"name",onChange:a,value:u}),r.a.createElement("span",null,"Number"),r.a.createElement("input",{minLength:5,maxLength:7,type:"number",name:"number",onChange:l,valuenum:c}),r.a.createElement("button",{type:"submit"},"Add contact"),r.a.createElement("h2",null,"Contacts"),t.length>=2&&r.a.createElement(d,{valueFilter:h,onChangeInputFilter:s}),t.length>0&&r.a.createElement(g,{arr:m,handleDelete:b},r.a.createElement(f,{name:i,number:o}))))},v=n(10),C=n.n(v),E=(n(20),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],filter:"",name:"",number:""},n.handleChange=function(e){var t=e.target.name;n.setState(Object(i.a)({},t,e.target.value))},n.handleChangeNumber=function(e){var t=e.target.name;n.setState(Object(i.a)({},t,e.target.value))},n.handleSubmit=function(e){if(e.preventDefault(),n.state.contacts.find((function(e){return e.name.toLowerCase()===n.state.name.toLowerCase()})))return alert("".concat(n.state.name," already exists in your contact list")),void n.setState({name:""});if(""!==n.state.name)if(""!==n.state.number){var t={id:C()(),name:n.state.name,number:n.state.number};n.setState((function(e){return{contacts:[].concat(Object(c.a)(e.contacts),[t])}})),e.target.reset(),n.setState({name:""})}else alert("Please, enter a phone number!");else alert("Please, enter a name!")},n.getValueFromForm=function(e){n.setState((function(t){return{contacts:[].concat(Object(c.a)(t.contacts),[e])}}))},n.onChangeInputFilter=function(e){n.setState({filter:e.target.value})},n.inputFilter=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},n.handleDelete=function(e){var t=e.id;n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.inputFilter(this.state.contacts,this.state.filter);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{contacts:this.state.contacts,getValueFromForm:this.getValueFromForm,handleSubmit:this.handleSubmit,handleChange:this.handleChange,handleChangeNumber:this.handleChangeNumber,value:this.state.name,valuenum:this.state.number,name:this.state.contacts.name,arr:e,number:this.state.contacts.number,onChangeInputFilter:this.onChangeInputFilter,valueFilter:this.state.filter,handleDelete:this.handleDelete}))}}]),t}(a.Component));u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.ff9e70f4.chunk.js.map