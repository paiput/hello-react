(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(16),r=n.n(c),s=n(17),i=n(3),o=n(5),l=n.n(o),u=n(0),j=function(t){var e=t.title;return Object(u.jsx)("nav",{className:"justify-content-center navbar navbar-expand-lg navbar-dark bg-dark",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/#",children:e})})},b=function(t){var e=t.id,n=t.initialTitle,c=t.initialText,r=t.removeNote,s=t.updateNote,o=Object(a.useState)(n),l=Object(i.a)(o,2),j=l[0],b=l[1],d=Object(a.useState)(c),f=Object(i.a)(d,2),x=f[0],m=f[1],O=Object(a.useState)(!1),h=Object(i.a)(O,2),v=h[0],p=h[1];return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("input",{style:{backgroundColor:"transparent",border:"none",fontSize:"1.25rem",marginBottom:"0.75rem"},spellCheck:!1,disabled:!v,value:j,onChange:function(t){return b(t.target.value)}}),Object(u.jsx)("textarea",{rows:5,style:{backgroundColor:"transparent",border:"none"},spellCheck:!1,disabled:!v,value:x,onChange:function(t){return m(t.target.value)}}),Object(u.jsx)("button",{className:"btn",hidden:v,onClick:function(){return p(!v)},children:Object(u.jsx)("i",{className:"text-secondary fa fa-pencil fa-lg"})}),Object(u.jsx)("button",{className:"btn",hidden:!v,onClick:function(){s(e,j,x),p(!v)},children:Object(u.jsx)("i",{className:"text-secondary fa fa-save fa-lg"})}),Object(u.jsx)("button",{className:"btn",onClick:function(){return r(e)},children:Object(u.jsx)("i",{className:"text-danger fa fa-trash fa-lg"})})]})})},d=function(t){var e=t.notes,n=t.removeNote,a=t.updateNote;return Object(u.jsx)("div",{className:"card-columns",children:e.map((function(t){return Object(u.jsx)(b,{id:t._id,initialTitle:t.title,initialText:t.text,removeNote:n,updateNote:a},t._id)}))})},f=function(t){var e=t.addNote,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),j=l[0],b=l[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({title:r,text:j}),s(""),b("")},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"title",children:"T\xedtulo"}),Object(u.jsx)("input",{id:"title",className:"form-control",type:"text",value:r,onChange:function(t){return s(t.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"text",children:"Texto"}),Object(u.jsx)("textarea",{id:"text",className:"form-control",value:j,rows:"4",onChange:function(t){return b(t.target.value)}})]}),Object(u.jsx)("input",{className:"btn btn-primary mt-3",type:"submit",value:"Guardar"})]})},x=function(){return Object(u.jsxs)("div",{className:"text-center mb-3",children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h4",{className:"text-muted",children:"Hello React"}),Object(u.jsx)("a",{href:"https://github.com/paiput/hello-react",children:Object(u.jsx)("i",{className:"fa fa-github fa-3x text-dark"})})]})},m=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1];Object(a.useEffect)((function(){l.a.get("/api/notes").then((function(t){c(t.data.notes)}))}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{title:"Notas"}),Object(u.jsxs)("div",{className:"container mt-3",children:[Object(u.jsx)(f,{addNote:function(t){l.a.post("/api/notes",t).then((function(t){var e=[t.data].concat(Object(s.a)(n));c(e)}))}}),Object(u.jsx)("hr",{}),Object(u.jsx)(d,{notes:n,removeNote:function(t){l.a.delete("/api/notes/"+t).then((function(e){var a=n.filter((function(e){return e._id!==t}));c(a)}))},updateNote:function(t,e,a){var r={title:e,text:a};l.a.put("/api/notes/"+t,r).then((function(e){var a=n.map((function(e){return e.id===t?r:e}));c(a)}))}})]}),Object(u.jsx)(x,{})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};n(41);r.a.render(Object(u.jsx)(m,{}),document.getElementById("root")),O()}},[[42,1,2]]]);
//# sourceMappingURL=main.c2d08c13.chunk.js.map