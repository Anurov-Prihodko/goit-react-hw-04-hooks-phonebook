(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={label:"Filter_label__1dfn5",text:"Filter_text__PA8u_"}},2:function(t,e,n){t.exports={contactEditor:"ContactForm_contactEditor__2Cvro",textarea:"ContactForm_textarea__txImj",label:"ContactForm_label__383NX",button:"ContactForm_button__2qAPs"}},21:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__1pho2",item:"ContactList_item__3OXWy",completed:"ContactList_completed__JxeLb",pug:"ContactList_pug__Vp0Uw",text:"ContactList_text__1fvuO",checkbox:"ContactList_checkbox__2D9vv"}},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(13),r=n.n(o),s=(n(21),n(11)),i=n(16),l=n(4),u=n(14),b=n.n(u),m=n(2),d=n.n(m),j=n(0);function p(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),u=i[0],b=i[1],m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":b(a);break;default:return}};return Object(j.jsxs)("form",{className:d.a.contactEditor,onSubmit:function(t){t.preventDefault(),e(o,u),r(""),b("")},children:[Object(j.jsxs)("label",{className:d.a.label,children:["Name",Object(j.jsx)("input",{value:o,onChange:m,className:d.a.textarea,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:d.a.label,children:["Number",Object(j.jsx)("input",{value:u,onChange:m,className:d.a.textarea,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:d.a.button,children:"Add contact"})]})}var x=n(8),_=n(15),h=n.n(_),f=n(3),O=n.n(f),C=function(t){var e=t.contacts,n=t.onDeleteContact,a=t.onToggleCompleted;return Object(j.jsx)("ul",{className:O.a.list,children:e.map((function(t){var e=t.id,c=t.name,o=t.number,r=t.completed;return Object(j.jsxs)("li",{className:h()(O.a.item,Object(x.a)({},O.a.completed,r)),children:[Object(j.jsx)("input",{type:"checkbox",className:O.a.checkbox,checked:r,onChange:function(){return a(e)}}),Object(j.jsxs)("p",{className:O.a.text,children:[c,": ",o]}),Object(j.jsx)("button",{type:"button",className:O.a.pug,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=n(12),v=n.n(g),N=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",className:v.a.text,value:e,onChange:n})]})},k=n(5),y=n.n(k);function A(){var t,e=Object(a.useState)(null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[{id:"",name:"",number:"",completed:!1}]),n=Object(l.a)(e,2),c=n[0],o=n[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),m=u[0],d=u[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(c))}),[c]);var x=c.length,_=function(){var t=m.toLowerCase().trim();return c.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),h=c.reduce((function(t,e){return e.completed?t+1:t}),0);return Object(j.jsxs)("div",{className:y.a.container,children:[Object(j.jsx)("h1",{className:y.a.mainTitle,children:"Phonebook"}),Object(j.jsxs)("p",{className:y.a.text,children:["All contacts: ",x]}),Object(j.jsxs)("p",{className:y.a.text,children:["Number of selected: ",h," "]}),Object(j.jsx)(p,{onSubmit:function(t,e){var n={id:b.a.generate(),name:t,number:e,completed:!1};c.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacts.")):o((function(t){return[].concat(Object(i.a)(t),[n])}))}}),Object(j.jsx)("h2",{className:y.a.mainTitle,children:"Contacts"}),Object(j.jsx)(N,{value:m,onChange:function(t){d(t.currentTarget.value)}}),Object(j.jsx)(C,{contacts:_,onDeleteContact:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))},onToggleCompleted:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))}))}})]})}r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={container:"App_container__2eKaa",mainTitle:"App_mainTitle__3x4yR",text:"App_text__2qj6h"}}},[[31,1,2]]]);
//# sourceMappingURL=main.b944fde8.chunk.js.map