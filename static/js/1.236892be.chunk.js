(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{297:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2gzr4",dialogsItems:"Dialogs_dialogsItems__Y0W9q",active:"Dialogs_active__33son",messages:"Dialogs_messages__22YNB",message:"Dialogs_message__m0G3j"}},316:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(124),o=t(297),r=t.n(o),c=t(319),l=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement(c.a,{to:a},e.name))},m=function(e){return s.a.createElement("div",{className:r.a.dialog},e.message)},u=t(317),d=t(49),g=t(298),b=t(29),f=t(81),E=Object(f.a)(100),p=Object(g.a)({form:"dialogAddMessageForm"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{placeholder:"Enter your message",component:b.b,validate:[f.b,E],name:"newMessageBody"})),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))}),v=function(e){var a=e.state.dialogs.map(function(e){return s.a.createElement(l,{name:e.name,id:e.id})}),t=e.state.messages.map(function(e){return s.a.createElement(m,{message:e.message})});return e.isAuth?s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItems},a),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",null,t),s.a.createElement(p,{onSubmit:function(a){e.onSendMessageClick(a.newMessageBody)}}))):s.a.createElement(u.a,{to:"login"})},_=t(10),h=t(31),j=t(32),O=t(34),w=t(33),N=t(51),S=t(7);a.default=Object(S.d)(Object(_.b)(function(e){return{state:e.dialogsPage}},function(e){return{onSendMessageClick:function(a){e(Object(i.b)(a))}}}),function(e){var a=function(a){function t(){return Object(h.a)(this,t),Object(O.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(N.a)(t,a),Object(j.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),t}(s.a.Component);return Object(_.b)(function(e){return{isAuth:e.auth.isAuth}})(a)})(v)}}]);
//# sourceMappingURL=1.236892be.chunk.js.map