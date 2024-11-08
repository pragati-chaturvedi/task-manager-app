(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(9),c=a.n(r),o=a(25),s=a(10);var m=e=>{let{task:t,onDelete:a,onToggleComplete:n}=e;return l.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center p-3 rounded "+(t.completed?"bg-light text-muted":"")},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:()=>n(t.id),className:"form-check-input me-2"}),l.a.createElement("div",null,l.a.createElement("span",{className:t.completed?"text-decoration-line-through":""},t.name),l.a.createElement("small",{className:"text-muted d-block"},"Due: ",t.dueDate))),l.a.createElement("button",{onClick:()=>a(t.id),className:"btn btn-outline-danger btn-sm"},l.a.createElement(s.a,null)))};var d=e=>{let{tasks:t,onDelete:a,onToggleComplete:n}=e;return l.a.createElement("div",null,l.a.createElement("ul",{className:"list-group"},t.map(e=>l.a.createElement(m,{key:e.id,task:e,onDelete:a,onToggleComplete:n}))))};var i=e=>{let{onAddTask:t}=e;const[a,r]=Object(n.useState)(""),[c,o]=Object(n.useState)("");return l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),a.trim()&&c&&(t(a,c),r(""),o(""))},className:"mb-4"},l.a.createElement("div",{className:"row g-2 align-items-center"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("input",{type:"text",value:a,onChange:e=>r(e.target.value),placeholder:"Enter a new task",className:"form-control border border-primary"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("input",{type:"date",value:c,onChange:e=>o(e.target.value),className:"form-control"})),l.a.createElement("div",{className:"col-md-1"},l.a.createElement("button",{type:"submit",className:"btn btn-primary w-100"},"Add"))))};a(18);const u="http://localhost:5001/tasks";var p=function(){const[e,t]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{try{const e=await o.a.get(u);t(e.data)}catch(e){console.error("Error fetching tasks",e)}})()},[]),l.a.createElement("div",{className:"container my-4"},l.a.createElement("div",{className:"card shadow p-4"},l.a.createElement("h1",{className:"text-center mb-4"},"Task Manager App"),l.a.createElement(i,{onAddTask:async(a,n)=>{try{const l=await o.a.post(u,{name:a,dueDate:n});t([...e,l.data])}catch(l){console.error("Error adding task:",l)}}}),l.a.createElement(d,{tasks:e,onDelete:async a=>{try{await o.a.delete(`${u}/${a}`),t(e.filter(e=>e.id!==a))}catch(n){console.error("Error deleting task:",n)}},onToggleComplete:async a=>{try{const n=e.find(e=>e.id===a),l={...n,completed:!n.completed};await o.a.put(`${u}/${a}`,l),t(e.map(e=>e.id===a?l:e))}catch(n){console.error("Error updating task:",n)}}})))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)))}},[[11,1,2]]]);
//# sourceMappingURL=main.78c449ba.chunk.js.map