(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/logo-awesome-profile-cards-2.e7c9f36c.svg"},24:function(e,a,t){e.exports=t.p+"static/media/bananasprint-logo.f96983d5.png"},26:function(e,a,t){e.exports=t.p+"static/media/basura.22b05517.svg"},27:function(e,a,t){e.exports=t(38)},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(23),c=t.n(r),s=(t(6),t(11)),o=t(17),i=t(24),m=t.n(i),d=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("small",{className:"footer__copyright"},"Banana-Sprint @2020"),n.a.createElement("a",{className:"footer__logo",href:"www.adalab.es",title:"logo-adalab"},n.a.createElement("img",{className:"footer__logo--adalab",src:m.a,alt:"logo-adalab"})))},u=t(12),p=t.n(u),h=t(7),b=function(){return n.a.createElement("header",{className:"header__card"},n.a.createElement("div",{className:"header__card__logo"},n.a.createElement(h.b,{to:"/",title:"Home"},n.a.createElement("img",{src:p.a,title:"Ir a la Home",alt:"Awesome Profile Cards Logo"}))))};var E=function(e){return n.a.createElement("section",{className:"collapsible"},n.a.createElement("div",{className:"collapsible__clickable--container",id:e.id,onClick:function(a){return e.handleCollapse(a.currentTarget.id)}},n.a.createElement("i",{className:e.icon}),n.a.createElement("h2",{className:"collapsible__title"},e.title),n.a.createElement("div",{className:"click"},n.a.createElement("i",{className:"fas fa-moon moonicondown"}),n.a.createElement("i",{className:"fas fa-moon hidden mooniconup"}))),n.a.createElement("div",{className:"collapsible-container ".concat(e.collapsible===e.id?"":"hidden")},e.children))},_=function(e){return n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"name"}," ",e.label),n.a.createElement("span",{className:"asterisk"},e.asterisk),n.a.createElement("input",{palette:e.palette,placeholder:e.placeholder,id:e.id,type:e.type,name:e.name,onChange:function(a){var t=a.target,l=t.value,n=t.id;"style"===e.name?e.handleChangeInput({key:e.name,value:e.id}):e.handleChangeInput({key:n,value:l})},checked:e.checked,value:e.value,required:!0}))},f=t(13),g=t(14),v=t(9),N=t(16),k=t(15),y=(t(37),function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(e){var l;return Object(f.a)(this,t),(l=a.call(this,e)).fr=new FileReader,l.myFileField=n.a.createRef(),l.handleFilePicker=l.handleFilePicker.bind(Object(v.a)(l)),l.uploadImage=l.uploadImage.bind(Object(v.a)(l)),l.getImage=l.getImage.bind(Object(v.a)(l)),l.getPreview=l.getPreview.bind(Object(v.a)(l)),l}return Object(g.a)(t,[{key:"handleFilePicker",value:function(){this.myFileField.current.click()}},{key:"uploadImage",value:function(e){var a=e.currentTarget.files[0];this.fr.addEventListener("load",this.getImage),this.fr.readAsDataURL(a)}},{key:"getImage",value:function(){var e=this.fr.result;this.props.updateAvatar({key:"photo",value:e})}},{key:"getPreview",value:function(e){return e?{backgroundImage:"url(".concat(e,")")}:{}}},{key:"render",value:function(){var e=this.props.photo;return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"image"},"Imagen de perfil"),n.a.createElement("span",{className:"asterisk"},"*"),n.a.createElement("div",{className:"image-wrapper"},n.a.createElement("div",{className:"action"},n.a.createElement("button",{className:"btn-img action__upload-btn",type:"button",onClick:this.handleFilePicker},"A\xf1adir imagen"),n.a.createElement("input",{type:"file",key:"photo",name:"photo",id:"photo",ref:this.myFileField,className:"action__hiddenField",onChange:this.uploadImage})),n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"profile__preview ",style:this.getPreview(e)}))))}}]),t}(l.Component)),C=function(e){return n.a.createElement("section",{className:"form"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("form",null,n.a.createElement(E,{handleCollapse:e.handleCollapse,collapsible:e.collapsible,id:"collapse-1",icon:"far fa-object-ungroup icon",title:"Dise\xf1a"},n.a.createElement("div",{className:"colors-container"},n.a.createElement("span",{className:"form__design__subtitle"},"colores"),n.a.createElement("div",{className:"styles"},n.a.createElement("div",{className:"form__design__style1"},n.a.createElement("label",{className:"style-blue"},n.a.createElement("div",{className:"option"},n.a.createElement(_,{palette:"1",id:"1",type:"radio",value:"green",name:"style",required:!0,handleChangeInput:e.handleChangeInput,checked:"1"===e.user.style})),n.a.createElement("div",{className:"colors"},n.a.createElement("div",{className:"square one"}),n.a.createElement("div",{className:"square two"}),n.a.createElement("div",{className:"square three"})))),n.a.createElement("div",{className:"form__design__style2"},n.a.createElement("label",{className:"style-red"},n.a.createElement("div",{className:"option"},n.a.createElement(_,{id:"2",type:"radio",value:"red",name:"style",required:!0,handleChangeInput:e.handleChangeInput,checked:"2"===e.user.style})),n.a.createElement("div",{className:"colors"},n.a.createElement("div",{className:"square one"}),n.a.createElement("div",{className:"square two"}),n.a.createElement("div",{className:"square three"})))),n.a.createElement("div",{className:"form__design__style3"},n.a.createElement("label",{className:"style-yellow"},n.a.createElement("div",{className:"option"},n.a.createElement(_,{id:"3",type:"radio",value:"yellow",name:"style",required:!0,handleChangeInput:e.handleChangeInput,checked:"3"===e.user.style})),n.a.createElement("div",{className:"colors"},n.a.createElement("div",{className:"square one"}),n.a.createElement("div",{className:"square two"}),n.a.createElement("div",{className:"square three"}))))))),n.a.createElement(E,{handleCollapse:e.handleCollapse,collapsible:e.collapsible,id:"collapse-2",title:"Rellena",icon:"far fa-keyboard icon"},n.a.createElement("section",{className:"form__section"},n.a.createElement("div",{className:"form__section__signup "},n.a.createElement(_,{label:"Nombre Completo",asterisk:"*",placeholder:"Ej: Merche Lios",id:"name",type:"text",name:"name",handleChangeInput:e.handleChangeInput,value:e.user.name}),n.a.createElement(_,{label:"Puesto",asterisk:"*",placeholder:"Ej: Front-end",id:"job",type:"text",name:"job",handleChangeInput:e.handleChangeInput,value:e.user.job}),n.a.createElement(y,{photo:e.user.photo,updateAvatar:e.handleChangeInput}),n.a.createElement(_,{label:"Email",asterisk:"*",placeholder:"Ej: merche@gmail.com",id:"email",type:"email",name:"email",handleChangeInput:e.handleChangeInput,value:e.user.email}),n.a.createElement(_,{label:"Tel\xe9fono",asterisk:"*",placeholder:"Ej: 779744561",id:"phone",type:"number",name:"phone",handleChangeInput:e.handleChangeInput,value:e.user.phone}),n.a.createElement(_,{label:"Linkedin",asterisk:"*",placeholder:"Ej: merche",id:"linkedin",type:"text",name:"linkedin",handleChangeInput:e.handleChangeInput,target:"_blank",value:e.user.linkedin}),n.a.createElement(_,{label:"Github",className:"input__github",asterisk:"*",placeholder:"Ej: merchelios",id:"github",type:"text",name:"github",handleChangeInput:e.handleChangeInput,value:e.user.github,target:"_blank"})))),n.a.createElement(E,{handleCollapse:e.handleCollapse,collapsible:e.collapsible,id:"collapse-3",icon:"fa fa-share-alt icon",title:"Comparte"},n.a.createElement("section",{className:"form__share"},n.a.createElement("div",{className:"form__share__button "},n.a.createElement("button",{type:"submit",value:"Enviar",className:"form__share__button__button ".concat(e.availableButton),onClick:function(a){a.preventDefault(),e.fetchCardData()}},n.a.createElement("i",{className:"far fa-address-card"}),"crear tarjeta")),n.a.createElement("div",{className:"twitter ".concat(e.activeShare)},n.a.createElement("p",{className:" twitter-paragraph"},"\u2728 Aqu\xed tienes tu tarjeta de visita Sailor Code \u2728"),n.a.createElement("a",{href:e.user.url,className:"twitter-url response",rel:"noopener noreferrer",target:"_blank"},e.user.url),n.a.createElement("a",{className:"twitter-share-button twitter-button",href:"https://twitter.com/intent/tweet?text=\u2728He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards%20by%20Sailor%20Moon\u2728%0A&hashtags=adalaber,promoJemison ".concat(e.user.url),target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"twitter-link"},n.a.createElement("i",{className:"fab fa-twitter"}),"Compartir en twitter"))))))))},I=function(e){Object(N.a)(t,e);var a=Object(k.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props.photo;return n.a.createElement("div",{className:"card__photo "+this.props.backgroundClass,style:""===e?{}:{backgroundImage:'url("'.concat(e,'")')},id:"photo"})}}]),t}(l.Component),j=t(26),w=t.n(j),O=function(e){var a=[{nameAndIcon:" style-blue-dark",leftSquare:" style-blue-medium",border:" style-blue-light",background:" style-blue-background",backgroundIcon:" style-blue-background-icon"},{nameAndIcon:" style-red-dark",leftSquare:" style-red-medium",border:" style-red-light",background:" style-red-background",backgroundIcon:" style-red-background-icon"},{nameAndIcon:" style-yellow-dark",leftSquare:" style-yellow-medium",border:" style-yellow-light",background:" style-yellow-background",backgroundIcon:" style-yellow-background-icon"}],t=parseInt(e.user.style)-1;return n.a.createElement("section",{className:"imagen"},n.a.createElement("div",null,n.a.createElement("button",{onClick:function(a){a.preventDefault(),e.handleChangeInput("",!0)},className:"button__reset"},n.a.createElement("img",{className:"img-button",src:w.a,alt:"basura icon"}),n.a.createElement("p",{className:"button__reset--word"},"reset")),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__top"},n.a.createElement("div",{className:"card__top__square-color"+a[t].leftSquare}),n.a.createElement("div",{className:"card__top__title"},n.a.createElement("div",{className:"card__top__title__name"+a[t].nameAndIcon},e.user.name||"Nombre Apellido"),n.a.createElement("div",{className:"card__top__title__role"},e.user.job||"Front-end developer"))),n.a.createElement(I,{photo:e.user.photo,backgroundClass:a[t].background}),n.a.createElement("div",{className:"card__bottom"},n.a.createElement("ul",{className:"card__bottom__list"},n.a.createElement("li",{className:"card__bottom__list__li"+a[t].border+"".concat(""!==e.user.phone?a[t].backgroundIcon:"")},n.a.createElement("a",{href:"tel:"+e.user.phone||!1,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon fas fa-mobile-alt"+a[t].nameAndIcon}))),n.a.createElement("li",{className:"card__bottom__list__li"+a[t].border+"".concat(""!==e.user.email?a[t].backgroundIcon:"")},n.a.createElement("a",{href:"mailto:"+e.user.email||!1,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon far fa-envelope "+a[t].nameAndIcon}))),n.a.createElement("li",{className:"card__bottom__list__li"+a[t].border+"".concat(""!==e.user.linkedin?a[t].backgroundIcon:"")},n.a.createElement("a",{href:"https://www.linkedin.com/in/"+e.user.linkedin||!1,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon fab fa-linkedin-in "+a[t].nameAndIcon}))),n.a.createElement("li",{className:"card__bottom__list__li"+a[t].border+"".concat(""!==e.user.github?a[t].backgroundIcon:"")},n.a.createElement("a",{href:"https://github.com/"+e.user.github||!1,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"icon fab fa-github-alt"+a[t].nameAndIcon}))))))))},A=function(e){return n.a.createElement("main",{className:"page__main"},n.a.createElement(C,{user:e.user,handleChangeInput:e.handleChangeInput,collapsible:e.collapsible,handleCollapse:e.handleCollapse,updateAvatar:e.handleChangeInput,fetchCardData:e.fetchCardData,activeShare:e.activeShare}),n.a.createElement(O,{user:e.user,handleChangeInput:e.handleChangeInput}))},S=t(1),q=function(){return n.a.createElement("section",{className:"main"},n.a.createElement("header",{className:"header wrapper"},n.a.createElement("div",{className:"header__logo"},n.a.createElement("a",{href:"./index.html"},n.a.createElement("img",{src:p.a,title:"Ir a la Home",alt:"Awesome Profile Cards Logo"})))),n.a.createElement("div",{className:"front"},n.a.createElement("section",{className:"front__text"},n.a.createElement("h1",{className:"front__text__title"},"Crea tu tarjeta de visita"),n.a.createElement("p",null,n.a.createElement("span",null,"Crea mejores contactos profesionales de"),n.a.createElement("span",null,"forma f\xe1cil y c\xf3moda"))),n.a.createElement("section",{className:"front__icons"},n.a.createElement("article",{className:"front__icons__design"},n.a.createElement("i",{className:"far fa-object-ungroup icon"}),n.a.createElement("p",null,"Dise\xf1a")),n.a.createElement("article",{className:"front__icons__fillin"},n.a.createElement("i",{className:"far fa-keyboard"}),n.a.createElement("p",null,"Rellena")),n.a.createElement("article",{className:"front__icons__share"},n.a.createElement("i",{className:"fa fa-share-alt","aria-hidden":"true"}),n.a.createElement("p",null,"Comparte"))),n.a.createElement("div",{className:"front__button animate__animated animate__pulse"},n.a.createElement(h.b,{to:"/cardApp",title:"Ir a comenzar"},"Comenzar"))))},F=function(){var e=JSON.parse(localStorage.getItem("user_card")),a={style:"1",name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:"",url:""},t=Object(l.useState)(e||a),r=Object(o.a)(t,2),c=r[0],i=r[1],m=Object(l.useState)("collapse-1"),u=Object(o.a)(m,2),p=u[0],h=u[1],E=Object(l.useState)("hidden"),_=Object(o.a)(E,2),f=_[0],g=_[1],v=function(e,t){var l;t?(l=a,g("hidden")):(l=Object(s.a)({},c))[e.key]=e.value,localStorage.setItem("user_card",JSON.stringify(l)),i(Object(s.a)({},l))};return n.a.createElement("div",{className:"App"},n.a.createElement(S.c,null,n.a.createElement(S.a,{exact:!0,path:"/"},n.a.createElement("div",{className:"landing"},n.a.createElement(q,null),n.a.createElement(d,null))),n.a.createElement(S.a,{exact:!0,path:"/cardApp"},n.a.createElement("div",{className:"cardApp"},n.a.createElement(b,null),n.a.createElement(A,{user:c,handleChangeInput:v,collapsible:p,handleCollapse:function(e){h(e!==p?e:"")},updateAvatar:v,fetchCardData:function(){var e=Object(s.a)(Object(s.a)({},c),{},{palette:c.style});fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var a={key:"url",value:e.cardURL};v(a),g("")})).catch((function(e){console.log(e)}))},activeShare:f}),n.a.createElement(d,null)))))};c.a.render(n.a.createElement(h.a,null,n.a.createElement(F,null)),document.getElementById("root"))},6:function(e,a,t){}},[[27,1,2]]]);
//# sourceMappingURL=main.a823fd4e.chunk.js.map