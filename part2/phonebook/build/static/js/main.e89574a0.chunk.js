(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(14),c=t.n(l),u=t(4),o=t(2),i=function(e){var n=e.filter,t=e.onChange;return r.a.createElement("div",null,r.a.createElement("p",null,"search ",r.a.createElement("input",{value:n,onChange:t})))},m=function(e){var n=e.onSubmit,t=e.newName,a=e.handleNameChange,l=e.newNumber,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"name:"),r.a.createElement("td",null,r.a.createElement("input",{value:t,onChange:a}))),r.a.createElement("tr",null,r.a.createElement("td",null,"number:"),r.a.createElement("td",null,r.a.createElement("input",{value:l,onChange:c}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},"add"))))))},d=function(e){var n=e.onClick;return r.a.createElement("div",null,r.a.createElement("button",{onClick:n},"delete"))},f=function(e){var n=e.persons,t=e.filter,a=e.deletePerson;return r.a.createElement("table",null,r.a.createElement("tbody",null,n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement(d,{onClick:function(){a(e.id)}})))}))))},s=t(3),b=t.n(s),h="http://localhost:3001/api/persons",E=function(){return b.a.get(h).then((function(e){return e.data}))},p=function(e){return b.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},j=function(e){var n=e.message,t=e.messageType;return null===n||null===t?null:0===t?r.a.createElement("div",{className:"error"},n):1===t?r.a.createElement("div",{className:"message"},n):void 0},O=(t(37),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)(""),d=Object(o.a)(c,2),s=d[0],b=d[1],h=Object(a.useState)(""),O=Object(o.a)(h,2),w=O[0],C=O[1],k=Object(a.useState)(""),N=Object(o.a)(k,2),S=N[0],y=N[1],P=Object(a.useState)(null),T=Object(o.a)(P,2),D=T[0],J=T[1],x=Object(a.useState)(null),B=Object(o.a)(x,2),I=B[0],L=B[1];Object(a.useEffect)((function(){E().then((function(e){l(e)}))}),[]),console.log("render",t.length,"contacts");var q=function(e,n){var a=t.find((function(n){return n.name===e})),r=Object(u.a)(Object(u.a)({},a),{},{number:n});v(a.id,r).then((function(e){l(t.map((function(n){return n.id!==a.id?n:e}))),z("".concat(a.name," phone number updated"),1)})).catch((function(e){z("".concat(a.name," not found in phonebook"),0),l(t.filter((function(e){return e.id!==a.id})))}))},z=function(e,n){J(e),L(n),setTimeout((function(){J(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(j,{message:D,messageType:I}),r.a.createElement(i,{filter:S,onChange:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"New contact"),r.a.createElement(m,{onSubmit:function(e){if(e.preventDefault(),0===t.filter((function(e){return e.name===s})).length){var n={name:s,number:w};p(n).then((function(e){l(t.concat(e)),z("".concat(n.name," added"),1)})),b(""),C("")}else window.confirm(s+" is already added to phonebook. replace old number with new one?")&&q(s,w)},newName:s,handleNameChange:function(e){b(e.target.value)},newNumber:w,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Contacts"),r.a.createElement(f,{persons:t,filter:S,deletePerson:function(e){var n="Delete "+t.find((function(n){return n.id===e})).name+"?";window.confirm(n)&&g(e).then(l(t.filter((function(n){return n.id!==e}))))}}))});c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e89574a0.chunk.js.map