(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,t,a){e.exports=a(83)},59:function(e,t,a){},64:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),o=a.n(l),i=(a(59),a(11)),u=a(12),c=a(15),s=a(13),d=a(14),v=a(92),p=a(94),m=a(53),b=a(1),h=a.n(b),f=a(18),g=a(27),O=a(20),k=a(89),y=a(84),E=a(85),j=a(91),x=(a(64),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={rating:null,tempRating:null,disabled:!1},a.rate=function(e){a.props.disabled||(a.setState({rating:e,tempRating:e}),a.props.onChange(e,a.props.id))},a.starOver=function(e){a.props.disabled||a.setState({rating:e})},a.starOut=function(){a.props.disabled||a.setState({rating:a.state.tempRating})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.rating;this.setState({rating:e,tempRating:e})}},{key:"render",value:function(){for(var e=[],t=this.state.rating,a=0;a<5;a++){var n="star-rating__star";t>=a&&null!=t&&(n+=" is-selected"),e.push(r.a.createElement("label",{key:a,className:n,onClick:this.rate.bind(this,a),onMouseOver:this.starOver.bind(this,a),onMouseOut:this.starOut},"\u2605"))}return r.a.createElement("div",{className:"star-rating"},e)}}]),t}(n.Component));x.defaultProps={disabled:!1,rating:0,onChange:function(){}};var S=x,w={title:{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:"",type:"text",required:!0,invalidFeedback:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"},cover:{label:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430 \u043a\u043d\u0438\u0433\u0438",value:"",type:"image"},description:{label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:"",type:"textarea",required:!0,invalidFeedback:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"},author:{label:"\u0410\u0432\u0442\u043e\u0440",value:"",type:"text",required:!0,invalidFeedback:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0430 \u043a\u043d\u0438\u0433\u0438"},publisher:{label:"\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e",value:"",type:"text",required:!0,invalidFeedback:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433\u0438"},isbn:{label:"\u041a\u043e\u0434 ISBN",value:"",type:"text",required:!0,pattern:"^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$",invalidFeedback:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u0434 ISBN \u043a\u043d\u0438\u0433\u0438 (\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 979-9-999-99999-9)"},yearOfPublishing:{label:"\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",value:"",type:"text",required:!0,pattern:"^(19|20)\\d{2}$",maxLength:4,invalidFeedback:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0433\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f (YYYY)"},numberOfPage:{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446",value:"",type:"text",pattern:"^\\d+$",invalidFeedback:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446"},rating:{label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",value:-1,type:"rating"},reviews:{label:"\u041e\u0442\u0437\u044b\u0432\u044b \u0442\u0435\u0445, \u043a\u0442\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b",value:"",type:"textarea"},personalNotes:{label:"\u041b\u0438\u0447\u043d\u044b\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u043f\u043e \u043a\u043d\u0438\u0433\u0435",value:"",type:"textarea"}},N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={book:{},edit:null,validated:!1,submited:!1,errors:!1},a.formGroup=function(e,t){var n=t.value,l=a.state.edit,o=w[e],i=o.type,u=o.label,c=o.required,s=o.pattern,d=o.maxLength,v=o.invalidFeedback;return i&&r.a.createElement(k.a.Group,{key:e,controlId:e},r.a.createElement(k.a.Label,null,u),"text"===i||"image"===i?r.a.createElement("div",null,r.a.createElement(k.a.Control,{type:"text",readOnly:!l,placeholder:u,required:c,value:n,pattern:s,maxLength:d,onChange:function(t){return a.handleChange(t,e)}}),r.a.createElement("div",{className:"invalid-feedback"},v)):"textarea"===i?r.a.createElement(k.a.Control,{as:i,rows:4,readOnly:!l,placeholder:u,required:c,value:n,onChange:function(t){return a.handleChange(t,e)}}):"rating"===i?r.a.createElement(S,{disabled:!l,rating:n,id:e,onChange:a.handleChangeRating}):"")},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.handleSubmit,r=t.type,l=a.state.book,o=e.currentTarget;a.setState({validated:!0}),!1!==o.checkValidity()?(a.setState({validated:!1,edit:"add"===r,submited:!0,errors:!1}),"add"===r&&a.setState({book:Object(O.a)({},w)}),n(l)):a.setState({errors:!0})},a.handleChange=function(e,t){var n=e.target.value;a.saveState(n,t)},a.saveState=function(e,t){var n=a.state.book;a.setState({book:Object(O.a)({},n,Object(g.a)({},t,Object(O.a)({},n[t],{value:e})))})},a.handleChangeRating=function(e,t){a.saveState(e,t)},a.handlerClickEditBook=function(){a.setState({edit:!a.state.edit})},a.formGroupButtonsEdit=function(){return r.a.createElement(y.a,{className:"py-3 justify-content-center"},r.a.createElement(E.a,{variant:"primary",className:"m-3",onClick:a.handlerClickEditBook},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443"),r.a.createElement(E.a,{disabled:!a.state.edit,type:"submit",variant:"success",className:"m-3"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"))},a.formGroupButtonsAdd=function(){return r.a.createElement(y.a,{className:"py-3 justify-content-center"},r.a.createElement(E.a,{type:"submit",variant:"success",className:"m-3"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"))},a.added=function(){return a.state.submited&&r.a.createElement(j.a,{variant:"success"},"\u041a\u043d\u0438\u0433\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")},a.edited=function(){return a.state.submited&&r.a.createElement(j.a,{variant:"success"},"\u041a\u043d\u0438\u0433\u0430 \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0430")},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.book,a=e.type;t.id||Object.keys(w).map(function(e){return t[e]={value:w[e].value}}),this.setState({book:t,edit:"add"===a})}},{key:"render",value:function(){var e=this,t=this.props.type,a=this.state,l=a.validated,o=a.book,i=a.errors;return r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{noValidate:!0,validated:l,onSubmit:function(t){return e.handleSubmit(t)}},"add"===t?this.formGroupButtonsAdd():this.formGroupButtonsEdit(),i&&r.a.createElement(j.a,{variant:"danger"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"),"add"===t?this.added():this.edited(),Object.keys(o).map(function(t){return"id"!==t&&e.formGroup(t,o[t])})))}}]),t}(n.Component);N.defaultProps={book:{},type:"add",handleSubmit:function(){}};var P=N,B=a(86),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){a.props.addBook(e)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(B.a,{className:"col-md-6 col-sm-12"},r.a.createElement(P,{type:"add",handleSubmit:this.handleSubmit}))}}]),t}(n.Component);C.defaultProps={addBook:h.a.func};var R=Object(f.b)(null,{addBook:function(e){return{type:"ADD_BOOK",payload:e,generateId:!0}}})(C),D=a(95),A="https://via.placeholder.com/681?text=\u043d\u0435\u0442%20\u0444\u043e\u0442\u043e",I=function(e){var t=e.item,a=(t.id,t.title.value),n=t.cover.value,l=t.description.value,o=t.rating.value;return r.a.createElement(D.a,null,r.a.createElement(D.a.Img,{variant:"top",src:""!==n?n:A,onError:function(e){return e.target.src=A}}),r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,a),r.a.createElement(D.a.Text,null,l)),r.a.createElement(D.a.Footer,null,"Rating:",r.a.createElement(S,{disabled:!0,rating:o})))},F=a(87),q=a(47),L=a(39),$=function(e){var t=e.books,a=void 0===t?[]:t;return a.length?r.a.createElement(B.a,null,r.a.createElement(F.a,null,a.map(function(e){return r.a.createElement(q.a,{xs:12,sm:6,md:4,className:"my-3",key:e.id},r.a.createElement(L.a,{to:"/frontend-developer/book/".concat(e.id)},r.a.createElement(I,{item:e})))}))):r.a.createElement("h1",null,"\u041a\u043d\u0438\u0433 \u043d\u0435\u0442")},G=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.books;return r.a.createElement(n.Fragment,null,r.a.createElement($,{books:e}))}}]),t}(n.Component);G.defaultProps={books:[]};var _=Object(f.b)(function(e){return{books:e.books}})(G),M=a(49),T=Object(M.a)(function(e){return e.books},function(e,t){return+t.match.params.id},function(e,t){return e.find(function(e){return e.id===t})}),K=a(93),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){a.props.editBook(e)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.book;return e?r.a.createElement(B.a,{className:"col-md-6 col-sm-12"},r.a.createElement(P,{type:"edit",book:e,handleSubmit:this.handleSubmit})):r.a.createElement(K.a,{to:"/error"})}}]),t}(n.Component);Y.defaultProps={book:{},editBook:function(){}};var J=Object(f.b)(function(e,t){return{book:T(e,t)||null}},{editBook:function(e){return{type:"EDIT_BOOK",payload:e}}})(Y),X=function(){return r.a.createElement("h1",{className:"h1 text-center"},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430")},V=a(90),W=a(88),z=(a(76),function(){return r.a.createElement(V.a,{className:"justify-content-center"},r.a.createElement(V.a.Item,{className:"p-3"},r.a.createElement(W.a,{exact:!0,to:"/frontend-developer/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement(V.a.Item,{className:"p-3"},r.a.createElement(W.a,{exact:!0,to:"/frontend-developer/book/add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443")))}),H=function(){return r.a.createElement(B.a,null,r.a.createElement(z,null))},Q=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(H,null),t)},U=function(){return r.a.createElement(v.a,null,r.a.createElement(Q,null,r.a.createElement(p.a,null,r.a.createElement(m.a,{exact:!0,path:"/frontend-developer/",component:_}),r.a.createElement(m.a,{exact:!0,path:"/frontend-developer/book/add",component:R}),r.a.createElement(m.a,{exact:!0,path:"/frontend-developer/book/:id",component:J}),r.a.createElement(m.a,{exact:!0,path:"/frontend-developer/error",component:X}),r.a.createElement(m.a,{path:"*",component:X}))))},Z=(a(79),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(U,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(19),te=a(52),ae=a(32),ne=Object(ae.load)({namespace:"books"});ne&&ne.books&&ne.books.length||(ne.books=[{id:1,title:{value:"Learn ReactJS"},cover:{value:"https://via.placeholder.com/681"},description:{value:"Description 2"},author:{value:"Author 2"},publisher:{value:"Publisher 2"},isbn:{value:"978-5-459-01265-2"},yearOfPublishing:{value:2012},numberOfPage:{value:288},rating:{value:3},reviews:{value:"Review text"},personalNotes:{value:"Personal notes"}},{id:2,title:{value:"Learn Redux"},cover:{value:"https://via.placeholder.com/681"},description:{value:"Description 3"},author:{value:"Author 3"},publisher:{value:"Publisher 3"},isbn:{value:"978-5-459-01265-3"},yearOfPublishing:{value:2012},numberOfPage:{value:288},rating:{value:3},reviews:{value:"Review text"},personalNotes:{value:"Personal notes"}},{id:3,title:{value:"Learn React Router"},cover:{value:"https://via.placeholder.com/681"},description:{value:"Description 4"},author:{value:"Author 4"},publisher:{value:"Publisher 4"},isbn:{value:"978-5-459-01265-4"},yearOfPublishing:{value:2012},numberOfPage:{value:288},rating:{value:3},reviews:{value:"Review text"},personalNotes:{value:"Personal notes"}},{id:4,title:{value:"Learn Angular"},cover:{value:"https://via.placeholder.com/681"},description:{value:"Description 5"},author:{value:"Author 5"},publisher:{value:"Publisher 5"},isbn:{value:"978-5-459-01265-5"},yearOfPublishing:{value:2012},numberOfPage:{value:288},rating:{value:3},reviews:{value:"Review text"},personalNotes:{value:"Personal notes"}}]);var re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.books,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_BOOK":return[n].concat(Object(te.a)(e));case"EDIT_BOOK":return e.map(function(e){return e.id===n.id?Object(O.a)({},e,n):e});default:return e}},le=Object(ee.c)({books:re}),oe=a(51),ie=(0,ee.d)(Object(ee.a)(oe.a,function(e){return function(e){return function(t){if(!t.generateId)return e(t);t.payload.id=parseInt(Date.now()+1e3*Math.random()),e(Object(O.a)({},t))}}},Object(ae.save)({namespace:"books"}))),ue=Object(ee.e)(le,ie);o.a.render(r.a.createElement(f.a,{store:ue},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.0c6f29f2.chunk.js.map