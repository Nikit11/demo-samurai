(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1Gx1x",img:"ProfileInfo_img__31iuQ",description:"ProfileInfo_description__39zFK",contacts:"ProfileInfo_contacts__2w7Vx",contactsDescr:"ProfileInfo_contactsDescr__2gt80",contact:"ProfileInfo_contact__3NUrd"}},312:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__2XFKV",posts:"MyPosts_posts__29Q5v"}},314:function(e,t,n){e.exports={item:"Post_item__EzNoY"}},319:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(53),o=n(190),c=n.n(o),u=n(224),i=n.n(u),s=n(37),f=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),o=n[0],c=n[1],u=Object(a.useState)(e.status),i=Object(l.a)(u,2),s=i[0],f=i[1];return Object(a.useEffect)(function(){f(e.status)},[e.status]),r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("b",null,"Status:"),r.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.status||"........")),o&&r.a.createElement("div",null,r.a.createElement("input",{autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(s)},onChange:function(e){f(e.currentTarget.value)},value:s})))},m=n(22),p=n(192),d=n(84),E=n.n(d),v=Object(p.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,n=e.profile,a=e.error;return r.a.createElement("form",{onSubmit:t},a&&r.a.createElement("div",{className:E.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("button",null,"save")),r.a.createElement("div",null,r.a.createElement("b",null,"Full name")," : ",Object(m.c)("Full name","fullName",[],m.a)),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job")," : ",Object(m.c)("","lookingForAJob",[],m.a,{type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills")," :",Object(m.c)("My professional skills","lookingForAJobDescription",[],m.b)),r.a.createElement("div",null,r.a.createElement("b",null,"About me")," : ",Object(m.c)("About me","aboutMe",[],m.b)),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts")," : ",Object.keys(n.contacts).map(function(e){return r.a.createElement("div",{className:c.a.contact,key:e},r.a.createElement("b",null,e,Object(m.c)(e,"contacts."+e.toLocaleLowerCase(),[],m.a)))})))}),b=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",null,n&&r.a.createElement("div",null,r.a.createElement("button",{onClick:a},"Edit")),r.a.createElement("div",null,r.a.createElement("b",null,"Full name")," : ",t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job")," : ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills")," : ",t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me")," : ",t.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts")," : ",Object.keys(t.contacts).map(function(e){return r.a.createElement(g,{contactTitle:e,contactValue:t.contacts[e],key:e})})))},g=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",{className:c.a.contact},r.a.createElement("b",null,t)," : ",n)},h=function(e){var t=e.profile,n=e.status,o=e.updateStatus,u=e.isOwner,m=e.savePhoto,p=e.saveProfile,d=e.profileUpdateStatus,E=Object(a.useState)(!1),g=Object(l.a)(E,2),h=g[0],P=g[1];return t?r.a.createElement("div",null,r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:c.a.img,src:t.photos.large||i.a}),u&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&m(e.target.files[0])}}),h?r.a.createElement(v,{initialValues:t,onSubmit:function(e){p(e).then(function(){"success"===d&&P(!1)})},profile:t}):r.a.createElement(b,{profile:t,isOwner:u,goToEditMode:function(){return P(!0)}}),r.a.createElement(f,{status:n,updateStatus:o}))):r.a.createElement(s.a,null)},P=n(78),O=n(312),k=n.n(O),y=n(314),j=n.n(y),_=function(e){return r.a.createElement("div",{className:j.a.item},r.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like")," ",e.likesCount))},S=n(191),w=n(59),N=Object(w.a)(100),A=r.a.memo(function(e){var t=e.posts.map(function(e){return r.a.createElement(_,{message:e.message,likesCount:e.likesCount,key:e.id})});return r.a.createElement("div",{className:k.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement(F,{onSubmit:function(t){e.addPost(t.addNewPost)}}),r.a.createElement("div",{className:k.a.posts},t))}),F=Object(p.a)({form:"addPostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(S.a,{component:m.b,name:"addNewPost",validate:[w.b,N],placeholder:"Post message..."})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))}),U=A,I=n(11),x=Object(I.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(P.a)(t))}}})(U),C=function(e){return r.a.createElement("div",null,r.a.createElement(h,Object.assign({},e,{isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile,profileUpdateStatus:e.profileUpdateStatus})),r.a.createElement(x,null))},M=n(325),J=n(8);function T(e,t){return e===t}var B=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function(){for(var t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];var l=0,o=a.pop(),c=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"===typeof e})){var n=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}(a),u=e.apply(void 0,[function(){return l++,o.apply(null,arguments)}].concat(n)),i=e(function(){for(var e=[],t=c.length,n=0;n<t;n++)e.push(c[n].apply(null,arguments));return u.apply(null,e)});return i.resultFunc=o,i.dependencies=c,i.recomputations=function(){return l},i.resetRecomputations=function(){return l=0},i}}(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T,n=null,a=null;return function(){return function(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var a=t.length,r=0;r<a;r++)if(!e(t[r],n[r]))return!1;return!0}(t,n,arguments)||(a=e.apply(null,arguments)),n=arguments,a}});var D=B(function(e){return e.profilePage.profile},function(e){return e}),V=function(e){return e.profilePage.status},z=function(e){return e.auth.id},L=function(e){return e.profilePage.profileUpdateStatus};t.default=Object(J.d)(Object(I.b)(function(e){return{profile:D(e),status:V(e),authorizedUserId:z(e),profileUpdateStatus:L(e)}},{setUsersProfile:P.g,setProfileUser:P.f,getStatus:P.c,updateStatus:P.h,savePhoto:P.d,saveProfile:P.e}),M.a)(function(e){var t=function(){var t=e.match.params.userId;t||(t=e.authorizedUserId)||e.history.push("/login"),e.setProfileUser(t),e.getStatus(t)};return Object(a.useEffect)(function(){t()},[e.match.params.userId]),Object(a.useEffect)(function(){t()},[]),r.a.createElement("div",null,r.a.createElement(C,Object.assign({},e,{isOwner:!e.match.params.userId,savePhoto:e.savePhoto,saveProfile:e.saveProfile,profileUpdateStatus:e.profileUpdateStatus})))})}}]);
//# sourceMappingURL=2.468f72b5.chunk.js.map