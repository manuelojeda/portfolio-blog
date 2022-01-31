"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[773],{5977:(e,t,a)=>{var n=a(821),o=a(9669),r=a.n(o),i=a(1575),l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.getElementsByTagName("body")[0];t.classList.remove("dark-theme"),e&&t.classList.add("dark-theme")};const s=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;l(e)};var c=function(e){return(0,n.pushScopeId)("data-v-0a4c2e70"),e=e(),(0,n.popScopeId)(),e},d={class:"footer mt-auto"},m={class:"container"},u={class:"grid"},p={class:"copyright"},g=(0,n.createTextVNode)(" Made by "),f=c((function(){return(0,n.createElementVNode)("b",null,"Manuel Ojeda",-1)})),v=(0,n.createStaticVNode)('<div class="social-media" data-v-0a4c2e70><a href="https://dev.to/manuelojeda" class="mx-1" target="_blank" rel="noopener noreferrer" data-v-0a4c2e70><i class="fab fa-dev" data-v-0a4c2e70></i></a><a href="https://twitter.com/darkjeda" class="mx-1" target="_blank" rel="noopener noreferrer" data-v-0a4c2e70><i class="fab fa-twitter" data-v-0a4c2e70></i></a><a href="https://www.linkedin.com/in/manuel-alejandro-ojeda-ag%C3%BAndez-618753132/" class="mx-1" target="_blank" rel="noopener noreferrer" data-v-0a4c2e70><i class="fab fa-linkedin" data-v-0a4c2e70></i></a></div>',1);const h={name:"PartialFooter",props:{currentYear:Number}};var b=a(3379),k=a.n(b),E=a(4613),N={insert:"head",singleton:!1};k()(E.Z,N);E.Z.locals;var V=a(3744);const w=(0,V.Z)(h,[["render",function(e,t,a,o,r,i){return(0,n.openBlock)(),(0,n.createElementBlock)("footer",d,[(0,n.createElementVNode)("section",m,[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("div",p,[g,f,(0,n.createTextVNode)(" to the 🌐 - © "+(0,n.toDisplayString)(a.currentYear),1)]),v])])])}],["__scopeId","data-v-0a4c2e70"]]);var y={class:"dark-mode-switch"},x=[(0,n.createElementVNode)("i",{class:"fas fa-moon"},null,-1)],B=[(0,n.createElementVNode)("i",{class:"fas fa-sun"},null,-1)];const _={setup:function(e){var t=(0,n.ref)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),a=function(){t.value=!t.value,l(t.value)};return function(e,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",y,[t.value?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:1,href:"#",onClick:o[1]||(o[1]=function(e){return a()})},B)):((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:0,href:"#",onClick:o[0]||(o[0]=function(e){return a()})},x))])}}};var S=function(e){return(0,n.pushScopeId)("data-v-8496b202"),e=e(),(0,n.popScopeId)(),e},I={class:"container"},C={class:"grid"},j=S((function(){return(0,n.createElementVNode)("div",{class:"header-link"},[(0,n.createElementVNode)("h4",{class:"weight-500 d-inline"},[(0,n.createElementVNode)("a",{href:"/"}," Manuel Ojeda's website ")])],-1)})),P={class:"menu-links"},Z={class:"navbar navbar-expand-lg navbar-light"},D=S((function(){return(0,n.createElementVNode)("a",{class:"navbar-brand",href:"#"},null,-1)})),L=S((function(){return(0,n.createElementVNode)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n.createElementVNode)("span",{class:"navbar-toggler-icon"})],-1)})),M={class:"collapse navbar-collapse",id:"navbarSupportedContent"},T={class:"navbar-nav ml-auto"},H=["href"],z=S((function(){return(0,n.createElementVNode)("li",{class:"nav-item"},[(0,n.createElementVNode)("a",{class:"nav-link",href:"/Blog"},"Blog")],-1)})),O={class:"nav-item",style:{height:"100%","margin-top":"7px"}};const A={props:{header:Object},setup:function(e){return function(t,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",I,[(0,n.createElementVNode)("div",C,[j,(0,n.createElementVNode)("div",P,[(0,n.createElementVNode)("nav",Z,[D,L,(0,n.createElementVNode)("div",M,[(0,n.createElementVNode)("ul",T,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.header,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{class:"nav-item",key:t},[(0,n.createElementVNode)("a",{class:"nav-link",href:"/#".concat(e.url)},(0,n.toDisplayString)(e.label),9,H)])})),128)),z,(0,n.createElementVNode)("li",O,[(0,n.createVNode)(_)])])])])])])])])}}};var U=a(489),J={insert:"head",singleton:!1};k()(U.Z,J);U.Z.locals;const F=(0,V.Z)(A,[["__scopeId","data-v-8496b202"]]),Y=JSON.parse('{"header":{"0":{"label":"Home","id":"home","url":"home"},"1":{"label":"About","id":"about","url":"about"},"2":{"label":"Portfolio","id":"portfolio","url":"portfolio"},"3":{"label":"Contact me","id":"contact","url":"contact"}},"home":{"hello":"Hi, i\'m","charge":"<i>Fullstack</i> web developer"},"about":{"main_title":"About me","about_me":"Hi, I\'m Manuel, my profession has been to develop web applications both frontend and backend. I do functions such as user needs analysis, database schema development, server code development and optimization, and visual part analysis and development to make the user have a pleasant experience. I currently live in La Paz, Baja California Sur, I like music (rock and metal), a good coffee and a good pizza. In my free time I usually write code, play competitive and cooperative video games, exercise in the afternoons and study at <span class=\'platzi\'>Platzi</span>.","subtitles":{"0":"Activities and skills","1":"My dev stack"},"stack":{"0":{"label":"Figma","hasImage":true,"imageUrl":"https://cdn.worldvectorlogo.com/logos/figma-1.svg","class":null,"description":"Sometimes as a frontend developer I take the liberty to enter this app and make high level mockups of the apps I develop, in such a way that when I pass to the code I already have a base to accommodate the information."},"1":{"label":"SASS/SCSS","hasImage":false,"imageUrl":null,"class":"fab fa-sass","description":"When I first entered the world of Web Development I was fascinated by using CSS, looking at how a web page took shape was very exciting. As I grew older I realized that pure CSS is not enough and I chose to use SASS to take advantage of the benefits of certain programming fundamentals to distribute styles into functions and variables."},"2":{"label":"Vue.js","hasImage":false,"imageUrl":null,"class":"fab fa-vuejs","description":"This great framework quickly became my main JavaScript framework after seeing how fast and certain I could create interfaces."},"3":{"label":"Laravel","hasImage":false,"imageUrl":null,"class":"fab fa-laravel","description":"One of the reasons why I learned Vue.js is Laravel, because knowing how to manipulate the back - end needed the best way to consume the information in the front - end. Laravel has become my favorite PHP framework for back-end development simply because I can do it quickly and make use of object-oriented programming to distribute the functionality within the app structure."}}},"portfolio":{"main_title":"Portfolio","visit":"Visit site","projects":{"0":{"work_title":"Instituto Estatal Electoral de Baja California Sur","work_done":"Mobile frontend and backend refactor","work_year":"2019","background_img":"/img/ieebcs2019.png","url":"https://www.ieebcs.org.mx","hasUrl":true,"description":"In this work we made a redesign for mobile devices and changed the internal code of the website from PHP 5 to Laravel 5.7, maintaining the database that has been used since its founding and creating models and controllers to use it.\\nWithin the functionality for the mobile front end the Bootstrap 4 was passed, using Material Design was adjusted to the standard of the same leaving the navigation the website from a cell phone to a tablet in a friendly way.","evidence":{"0":{"img":"/img/evidencias/ieebcs2019/home.png"},"1":{"img":"/img/evidencias/ieebcs2019/homeWithMenu.png"},"2":{"img":"/img/evidencias/ieebcs2019/sesiones.png"},"3":{"img":"/img/evidencias/ieebcs2019/noticia.png"}}},"1":{"work_title":"Intranet - IEEBCS","work_done":"User interface redesign, and conversion from PHP5 to PHP7 and Laravel.","work_year":"2019","background_img":"/img/intranet2019.png","url":null,"hasUrl":false,"description":"Here a total makeover to an internet app of the website was performed to perform Content management. Like the website, PHP5 was converted to PHP7 and Laravel maintaining the database that has been used since the first version of the institutional website.","evidence":{"0":{"img":"/img/evidencias/intranet2019/dashboard.png"},"1":{"img":"/img/evidencias/intranet2019/dashboard2.png"},"2":{"img":"/img/evidencias/intranet2019/consultas.png"},"3":{"img":"/img/evidencias/intranet2019/consultasConFiltro.png"},"4":{"img":"/img/evidencias/intranet2019/crear1.png"},"5":{"img":"/img/evidencias/intranet2019/crear2.png"},"6":{"img":"/img/evidencias/intranet2019/cargarDocumento.png"}}},"2":{"work_title":"Rediseño de Sistemas Internos","work_done":"A redesign was carried out for a series of internal use systems to give a more modern touch.","work_year":"2019","background_img":"/img/rediee2019.png","url":null,"hasUrl":false,"description":"Here a total redesign of the internal systems was done to give a better user experience and to improve the internal code of the user.\\nCreated with Laravel 5.7, Bootstrap 4 and SCSS.","evidence":{"0":{"img":"/img/evidencias/rediee2019/login.png"},"1":{"img":"/img/evidencias/rediee2019/dashboard.png"}}},"3":{"work_title":"Mini Sitio de Transparencia 2019","work_done":"It was refactored from AngularJS to Vue.js.","work_year":"2019","background_img":"/img/dtaispe2019.png","url":"https://www.ieebcs.org.mx/DTAISPE","hasUrl":true,"description":"When the institutional website was passed completely, this mini site was reworked taking advantage of modern technologies such as Vue.js, ECMAScript 6 and Laravel 5.7.","evidence":{"0":{"img":"/img/evidencias/dtaispe2019/landing.png"},"1":{"img":"/img/evidencias/dtaispe2019/informacion.png"},"2":{"img":"/img/evidencias/dtaispe2019/art75.png"},"3":{"img":"/img/evidencias/dtaispe2019/informacionMovil.png"},"4":{"img":"/img/evidencias/dtaispe2019/art75Movil.png"}}},"4":{"work_title":"Mini Sitio de Cómputos Oficiales 2018","work_done":"Creation of a mini site for the sample of the results obtained in the elections of the Local Electoral Process 2017 - 2018","work_year":"2018","background_img":"/img/computos2018.png","url":"https://www.ieebcs.org.mx/ResultadosOficiales2018/#/","hasUrl":true,"description":"In this mini site a site was created to display the results obtained in the elections of July 1, 2018. Made with AngularJS JSON type objects were collected for the automated deployment of information.","evidence":{"0":{"img":"/img/evidencias/computos2018/landing.png"},"1":{"img":"/img/evidencias/computos2018/resultadosGenerales.png"},"2":{"img":"/img/evidencias/computos2018/resultadoMunicipal.png"},"3":{"img":"/img/evidencias/computos2018/resultadosSecciones.png"},"4":{"img":"/img/evidencias/computos2018/resultadosCasillas.png"}}},"5":{"work_title":"Internal use apps 2018","work_done":"Various applications generated during the Local Election Process 2017 - 2018","work_year":"2018","background_img":"/img/rediee2019.png","url":null,"hasUrl":false,"description":"During the Electoral Process 2017 - 2018 I had to make various applications, from taking control of the sessions held in the various offices throughout the state of Baja California Sur, to the application to make the registration of candidates and candidates who participated in the committees of July 1.","evidence":{"0":{"img":"/img/evidencias/rediee2018/sisese1.png"},"1":{"img":"/img/evidencias/rediee2018/sisese2.png"},"2":{"img":"/img/evidencias/rediee2018/sisese3.png"}}},"6":{"work_title":"Instituto Estatal Electoral de Baja California Sur","work_done":"Redesign of the institutional website","work_year":"2017 - 2018","background_img":"/img/ieebcs2018.png","url":"https://heredado.ieebcs.org.mx","hasUrl":true,"description":"In this work we made the conversion of a purely PHP site to a Vista-Controller Model capable separation, having as backend PHP and frontend AngularJS.","evidence":{"0":{"img":"/img/evidencias/ieebcs2018/homeDesktop.png"},"1":{"img":"/img/evidencias/ieebcs2018/sesiones.png"},"2":{"img":"/img/evidencias/ieebcs2018/noticias.png"},"3":{"img":"/img/evidencias/ieebcs2018/homeMovil.png"},"4":{"img":"/img/evidencias/ieebcs2018/sesionesMovil.png"},"5":{"img":"/img/evidencias/ieebcs2018/noticiasMovil.png"}}}}},"contact":{"main_title":"Contact me"}}');var q=(0,i.Q_)("globalStore",{state:function(){return{json:Y,isDark:!1}},getters:{getJson:function(e){return e.json},getIsDark:function(e){return e.isDark}}}),W={id:"header"};const R={setup:function(e){var t=q(),a=(0,n.computed)((function(){return t.getJson.header}));return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",W,[(0,n.createVNode)((0,n.unref)(F),{header:(0,n.unref)(a)},null,8,["header"])])}}};var G=a(1412),Q={insert:"head",singleton:!1};k()(G.Z,Q);G.Z.locals;const K=(0,V.Z)(R,[["__scopeId","data-v-bad572ea"]]);var X=function(e){return(0,n.pushScopeId)("data-v-40c30f20"),e=e(),(0,n.popScopeId)(),e},$={class:"home row align-items-center",id:"home"},ee={class:"col-lg-6"},te=["src"],ae={class:"col-lg-6"},ne=X((function(){return(0,n.createElementVNode)("div",{class:"hello"},[(0,n.createElementVNode)("span",null,"Hi, I am")],-1)})),oe={class:"mainTitle"},re=X((function(){return(0,n.createElementVNode)("br",null,null,-1)})),ie=["innerHTML"],le={class:"blockquote"},se={class:"mb-0 secondary"},ce=["href"],de=X((function(){return(0,n.createElementVNode)("i",{class:"fas fa-envelope mr-2"},null,-1)}));const me={name:"home",props:{personal:Object}};var ue=a(8419),pe={insert:"head",singleton:!1};k()(ue.Z,pe);ue.Z.locals;const ge=(0,V.Z)(me,[["render",function(e,t,a,o,r,i){return(0,n.openBlock)(),(0,n.createElementBlock)("div",$,[(0,n.createElementVNode)("div",ee,[(0,n.createElementVNode)("img",{src:a.personal.photo,alt:"Profile Pic",class:"profilePic"},null,8,te)]),(0,n.createElementVNode)("div",ae,[ne,(0,n.createElementVNode)("h1",oe,[(0,n.createTextVNode)((0,n.toDisplayString)(a.personal.name)+" ",1),re,(0,n.createElementVNode)("span",{innerHTML:a.personal.position},null,8,ie)]),(0,n.createElementVNode)("blockquote",le,[(0,n.createElementVNode)("p",se,[(0,n.createElementVNode)("a",{href:"mailto:".concat(a.personal.email)},[de,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(a.personal.email),1)],8,ce)])])])])}],["__scopeId","data-v-40c30f20"]]);var fe={class:"col-12"},ve={class:"title about_title",id:"focus"},he={class:"col-12 col-lg-6 about_section"},be=["innerHTML"],ke={class:"col-12 col-lg-6"},Ee={class:"medium text-center p-dark mb-3"},Ne=(0,n.createStaticVNode)('<div class="grid-skills" data-v-368c84f8><i class="fas skills fa-laptop fa-3x" data-v-368c84f8></i><i class="fab skills fa-js-square fa-3x" data-v-368c84f8></i><i class="fab skills fa-css3-alt fa-3x" data-v-368c84f8></i><i class="fas skills fa-headphones-alt fa-3x" data-v-368c84f8></i><i class="fas skills fa-gamepad fa-3x" data-v-368c84f8></i><i class="fas skills fa-book fa-3x" data-v-368c84f8></i><i class="fas skills fa-mug-hot fa-3x" data-v-368c84f8></i><i class="fas skills fa-dumbbell fa-3x" data-v-368c84f8></i><i class="fas skills fa-film fa-3x" data-v-368c84f8></i><i class="fas skills fa-plane-departure fa-3x" data-v-368c84f8></i></div>',1),Ve={class:"col-12"},we={class:"row dev-stack"},ye={class:"col-12 my-4"},xe={class:"title"},Be=["src"],_e=["innerHTML"];const Se={name:"about",props:["text"]};var Ie=a(1367),Ce={insert:"head",singleton:!1};k()(Ie.Z,Ce);Ie.Z.locals;const je=(0,V.Z)(Se,[["render",function(e,t,a,o,r,i){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"row align-items-center",id:"about",onFocus:t[0]||(t[0]=function(t){return e.setActive("about")})},[(0,n.createElementVNode)("div",fe,[(0,n.createElementVNode)("h1",ve,(0,n.toDisplayString)(a.text.main_title),1)]),(0,n.createElementVNode)("div",he,[(0,n.createElementVNode)("p",{class:"text-left about_text",innerHTML:a.text.about_me},null,8,be)]),(0,n.createElementVNode)("div",ke,[(0,n.createElementVNode)("h3",Ee,(0,n.toDisplayString)(a.text.subtitles[0]),1),Ne]),(0,n.createElementVNode)("div",Ve,[(0,n.createElementVNode)("div",we,[(0,n.createElementVNode)("div",ye,[(0,n.createElementVNode)("h3",xe,(0,n.toDisplayString)(a.text.subtitles[1]),1)]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(a.text.stack,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"col-12 col-sm-6 col-lg-3 stack",key:t},[e.hasImage?((0,n.openBlock)(),(0,n.createElementBlock)("img",{key:0,src:e.imageUrl,alt:"",class:"img-logo"},null,8,Be)):((0,n.openBlock)(),(0,n.createElementBlock)("i",{key:1,class:(0,n.normalizeClass)(e.class)},null,2)),(0,n.createElementVNode)("h4",null,(0,n.toDisplayString)(e.label),1),(0,n.createElementVNode)("p",{class:"text-left",innerHTML:e.description},null,8,_e)])})),128))])])],32)}],["__scopeId","data-v-368c84f8"]]);var Pe={class:"modal fade",id:"modalPortfolioItem","aria-labelledby":"modalPortfolioItem",tabindex:"-1","aria-hidden":"true"},Ze={class:"modal-dialog modal-xl"},De={class:"modal-content"},Le=(0,n.createElementVNode)("div",{class:"modal-header"},[(0,n.createElementVNode)("h5",{class:"modal-title"}),(0,n.createElementVNode)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,n.createElementVNode)("span",{"aria-hidden":"true"},"×")])],-1),Me={class:"modal-body"},Te={class:"row"},He={class:"col-12"},ze={class:"bold primary mb-0"},Oe={class:"regular p-dark mb-0"},Ae={class:"light p-dark"},Ue={class:"text-justify"},Je=["href"];const Fe={props:{selectedPortfolio:{type:Object},buttonLabel:{type:String}},setup:function(e){return function(t,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",Pe,[(0,n.createElementVNode)("div",Ze,[(0,n.createElementVNode)("div",De,[Le,(0,n.createElementVNode)("div",Me,[(0,n.createElementVNode)("div",Te,[(0,n.createElementVNode)("div",He,[(0,n.createElementVNode)("h3",ze,(0,n.toDisplayString)(e.selectedPortfolio.work_title),1),(0,n.createElementVNode)("h4",Oe,(0,n.toDisplayString)(e.selectedPortfolio.work_done),1),(0,n.createElementVNode)("h4",Ae,[(0,n.createElementVNode)("small",null,(0,n.toDisplayString)(e.selectedPortfolio.work_year),1)]),(0,n.createElementVNode)("pre",Ue,(0,n.toDisplayString)(e.selectedPortfolio.description),1),e.selectedPortfolio.hasUrl?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:0,class:"btn-visit",target:"_blank",href:e.selectedPortfolio.url},(0,n.toDisplayString)(e.buttonLabel),9,Je)):(0,n.createCommentVNode)("",!0)])])])])])])}}};var Ye={id:"portfolio",class:"row"},qe={class:"col-12"},We={class:"title"},Re={class:"row align-items-start"},Ge=["onClick"],Qe=["src"],Ke={class:"work__description"},Xe={class:"work__title"},$e={class:"work__year"};const et={props:{text:Object},setup:function(e){var t=e,a=(0,n.ref)(t.text.projects),o=(0,n.ref)({});return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",Ye,[(0,n.createElementVNode)("div",qe,[(0,n.createElementVNode)("h1",We,(0,n.toDisplayString)(e.text.main_title),1),(0,n.createElementVNode)("div",Re,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(a.value,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"col-12 col-sm-6 col-lg-4 item",key:t},[(0,n.createElementVNode)("figure",{onClick:function(t){return function(e){o.value=e}(e)},"data-toggle":"modal","data-target":"#modalPortfolioItem"},[(0,n.createElementVNode)("img",{src:e.background_img,alt:"",class:"img-portfolio"},null,8,Qe),(0,n.createElementVNode)("section",Ke,[(0,n.createElementVNode)("p",Xe,(0,n.toDisplayString)(e.work_title),1),(0,n.createElementVNode)("p",$e,(0,n.toDisplayString)(e.work_year),1)])],8,Ge)])})),128))])]),(0,n.createVNode)(Fe,{"selected-portfolio":o.value,buttonLabel:e.text.visit},null,8,["selected-portfolio","buttonLabel"])])}}};var tt={id:"contact"},at={class:"row align-items-center text-center"},nt={class:"col-12 mb-4"},ot={class:"title"},rt=(0,n.createStaticVNode)('<div class="col-6 col-lg-3 py-3"><a href="https://www.linkedin.com/in/manuel-ojeda-618753132/" target="_blank" rel="noopener noreferrer" class="contact-link linkedin"><i class="fab fa-linkedin fa-4x"></i></a></div><div class="col-6 col-lg-3 py-3"><a href="mailto:manuelojedasistemas@gmail.com" rel="noopener noreferrer" class="contact-link gmail"><i class="far fa-envelope fa-4x"></i></a></div><div class="col-6 col-lg-3 py-3"><a href="https://github.com/manuelojeda" rel="noopener noreferrer" class="contact-link github" target="_blank"><i class="fab fa-github fa-4x"></i></a></div>',3);const it={name:"contact",props:{text:Object}},lt=(0,V.Z)(it,[["render",function(e,t,a,o,r,i){return(0,n.openBlock)(),(0,n.createElementBlock)("div",tt,[(0,n.createElementVNode)("div",at,[(0,n.createElementVNode)("div",nt,[(0,n.createElementVNode)("h2",ot,(0,n.toDisplayString)(a.text.main_title),1)]),rt])])}]]);var st={class:"container",id:"nav-scroller",ref:"content"};const ct={props:{personal:Object},setup:function(e){var t=e,a=q(),o=(0,n.computed)((function(){return t.personal.data})),r=(0,n.computed)((function(){return a.getJson.about})),i=(0,n.computed)((function(){return a.getJson.portfolio})),l=(0,n.computed)((function(){return a.getJson.contact}));return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("section",st,[(0,n.createVNode)(ge,{personal:(0,n.unref)(o)},null,8,["personal"]),(0,n.createVNode)(je,{text:(0,n.unref)(r)},null,8,["text"]),(0,n.createVNode)(et,{text:(0,n.unref)(i)},null,8,["text"]),(0,n.createVNode)(lt,{text:(0,n.unref)(l)},null,8,["text"])],512)}}},dt={props:{personal:Object,currentYear:Number},setup:function(e){return function(t,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(K),(0,n.createVNode)(ct,{personal:e.personal,class:"mb-5"},null,8,["personal"]),(0,n.createVNode)(w,{"current-year":e.currentYear},null,8,["current-year"])])}}};var mt=a(7757),ut=a.n(mt),pt=function(e){return(0,n.pushScopeId)("data-v-45c2b702"),e=e(),(0,n.popScopeId)(),e},gt=["href"],ft={class:"card"},vt=["src","alt"],ht={class:"card-body"},bt={class:"font-weight-bold mb-4"},kt=pt((function(){return(0,n.createElementVNode)("b",null,"Fecha de publicación",-1)})),Et=(0,n.createTextVNode)(),Nt=pt((function(){return(0,n.createElementVNode)("br",null,null,-1)}));const Vt={name:"BlogCard",props:{blog:Object}};var wt=a(1857),yt={insert:"head",singleton:!1};k()(wt.Z,yt);wt.Z.locals;const xt=(0,V.Z)(Vt,[["render",function(e,t,a,o,r,i){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("a",{href:"/Blog/".concat(a.blog.seo)},[(0,n.createElementVNode)("div",ft,[(0,n.createElementVNode)("img",{src:a.blog.thumbnail,alt:a.blog.title,class:"card img-top img-fluid"},null,8,vt),(0,n.createElementVNode)("div",ht,[(0,n.createElementVNode)("h4",bt,(0,n.toDisplayString)(a.blog.title),1),(0,n.createElementVNode)("p",null,[kt,Et,Nt,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(a.blog.published_at),1)])])])],8,gt)])}],["__scopeId","data-v-45c2b702"]]);var Bt={class:"spinner"};var _t=a(8329),St={insert:"head",singleton:!1};k()(_t.Z,St);_t.Z.locals;const It={},Ct=(0,V.Z)(It,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",Bt)}]]);function jt(e,t,a,n,o,r,i){try{var l=e[r](i),s=l.value}catch(e){return void a(e)}l.done?t(s):Promise.resolve(s).then(n,o)}function Pt(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var r=e.apply(t,a);function i(e){jt(r,n,o,i,l,"next",e)}function l(e){jt(r,n,o,i,l,"throw",e)}i(void 0)}))}}var Zt=function(e){return(0,n.pushScopeId)("data-v-efcedf10"),e=e(),(0,n.popScopeId)(),e},Dt={class:"blog-main"},Lt={class:"container my-5 pt-5"},Mt=Zt((function(){return(0,n.createElementVNode)("div",{class:"row"},[(0,n.createElementVNode)("div",{class:"col-12 mb-4"},[(0,n.createElementVNode)("h1",{class:"titulo mb-5"},"Bienvenido a mi blog")])],-1)})),Tt={class:"grid mb-5"},Ht={class:"pagination justify-content-center"},zt=["index"],Ot=["onClick"],At={key:0},Ut=[Zt((function(){return(0,n.createElementVNode)("h4",{class:"text-center my-5"},[(0,n.createTextVNode)(" Oops! "),(0,n.createElementVNode)("br"),(0,n.createTextVNode)(" La búsqueda realizada no arrojó resultados ")],-1)}))],Jt={key:0,class:"container my-5 pt-5"},Ft={class:"row"},Yt={class:"col-12"},qt={class:"spinner-grid"};const Wt={props:{currentYear:Number},setup:function(e){var t=(0,n.ref)([]),a=((0,n.ref)(null),(0,n.ref)(!0)),o=(0,n.ref)({}),i=(0,n.ref)(1);function l(e){return s.apply(this,arguments)}function s(){return(s=Pt(ut().mark((function e(n){var l;return ut().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.value=!0,e.next=4,r().get("/blog/paginate?page=".concat(n));case 4:return l=e.sent,e.next=7,l.data.data;case 7:return t.value=e.sent,e.next=10,l.data;case 10:o.value=e.sent,a.value=!1,i.value=n,e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function c(e){return e===o.value.current_page?"active":null}return(0,n.onMounted)(Pt(ut().mark((function e(){var n;return ut().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r().get("/blog/paginate");case 3:return n=e.sent,e.next=6,n.data.data;case 6:return t.value=e.sent,e.next=9,n.data;case 9:o.value=e.sent,a.value=!1,e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})))),function(r,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",Dt,[(0,n.createVNode)(K,{class:"mb-3"}),(0,n.withDirectives)((0,n.createElementVNode)("div",Lt,[Mt,(0,n.withDirectives)((0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",Tt,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t.value,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(xt,{key:t,blog:e},null,8,["blog"])})),128))]),(0,n.createElementVNode)("nav",null,[(0,n.createElementVNode)("ul",Ht,[(0,n.createElementVNode)("li",{class:(0,n.normalizeClass)(["page-item",1===i.value?"disabled":null])},[(0,n.createElementVNode)("a",{class:"page-link",href:"#",onClick:s[0]||(s[0]=function(e){return l(i.value-1)})},"Previous")],2),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.value.last_page,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{class:(0,n.normalizeClass)(["page-item",c(t+1)]),index:t},[(0,n.createElementVNode)("a",{class:"page-link",href:"#",onClick:function(e){return l(t+1)}},(0,n.toDisplayString)(t+1),9,Ot)],10,zt)})),256)),(0,n.createElementVNode)("li",{class:(0,n.normalizeClass)(["page-item",i.value===o.value.last_page?"disabled":null])},[(0,n.createElementVNode)("a",{class:"page-link",href:"#",onClick:s[1]||(s[1]=function(e){return l(i.value+1)})},"Next")],2)])])],512),[[n.vShow,t.value.length>0]]),0===t.value.length?((0,n.openBlock)(),(0,n.createElementBlock)("div",At,Ut)):(0,n.createCommentVNode)("",!0)],512),[[n.vShow,!a.value]]),a.value?((0,n.openBlock)(),(0,n.createElementBlock)("div",Jt,[(0,n.createElementVNode)("div",Ft,[(0,n.createElementVNode)("div",Yt,[(0,n.createElementVNode)("div",qt,[(0,n.createElementVNode)("div",null,[(0,n.createVNode)(Ct,{label:"Loading...",style:{width:"8rem",height:"8rem"},variant:"info"})])])])])])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(w,{"current-year":e.currentYear},null,8,["current-year"])])}}};var Rt=a(2964),Gt={insert:"head",singleton:!1};k()(Rt.Z,Gt);Rt.Z.locals;const Qt=(0,V.Z)(Wt,[["__scopeId","data-v-efcedf10"]]);var Kt=a(9980),Xt=a.n(Kt),$t=function(e){return(0,n.pushScopeId)("data-v-51dd6541"),e=e(),(0,n.popScopeId)(),e},ea={class:"blog-main"},ta={class:"container my-5 pt-5"},aa={class:"row"},na={class:"col-12"},oa={"aria-label":"breadcrumb"},ra={class:"breadcrumb"},ia=$t((function(){return(0,n.createElementVNode)("li",{class:"breadcrumb-item"},[(0,n.createElementVNode)("a",{href:"/"},"Inicio")],-1)})),la=$t((function(){return(0,n.createElementVNode)("li",{class:"breadcrumb-item"},[(0,n.createElementVNode)("a",{href:"/Blog"},"Blog")],-1)})),sa={class:"breadcrumb-item active","aria-current":"page"},ca=$t((function(){return(0,n.createElementVNode)("a",{href:"/Blog",class:"btn btn-primary"},"Volver",-1)})),da={class:"titulo mt-4"},ma=$t((function(){return(0,n.createElementVNode)("b",null," Publicado: ",-1)})),ua=["data-href"],pa=["href"],ga={class:"d-inline"},fa=["href"],va=[$t((function(){return(0,n.createElementVNode)("i",{class:"fab fa-twitter mr-2"},null,-1)})),(0,n.createTextVNode)("Tweet ")],ha=["innerHTML"];const ba={props:{blog:Object,currentYear:Number},setup:function(e){var t=e,a=(0,n.ref)(""),o=(0,n.ref)(null);return(0,n.onMounted)((function(){var e=new(Xt());o.value=e.render(t.blog.content),a.value="text=".concat(t.blog.title,"&url=https://manuelojeda.xyz/Blog/").concat(t.blog.seo)})),function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",ea,[(0,n.createVNode)(K,{class:"mb-3"}),(0,n.createElementVNode)("div",ta,[(0,n.createElementVNode)("div",aa,[(0,n.createElementVNode)("div",na,[(0,n.createElementVNode)("nav",oa,[(0,n.createElementVNode)("ol",ra,[ia,la,(0,n.createElementVNode)("li",sa,(0,n.toDisplayString)(e.blog.title),1)])]),ca,(0,n.createElementVNode)("h1",da,(0,n.toDisplayString)(e.blog.title),1),(0,n.createElementVNode)("p",null,[ma,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.blog.published_at),1)]),(0,n.createElementVNode)("div",{class:"fb-share-button d-inline","data-href":"https://manuelojeda.xyz/Blog/"+e.blog.seo,"data-layout":"button_count","data-size":"large"},[(0,n.createElementVNode)("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https://manuelojeda.xyz/Blog/"+e.blog.seo,class:"fb-xfbml-parse-ignore"},"Compartir",8,pa)],8,ua),(0,n.createElementVNode)("div",ga,[(0,n.createElementVNode)("a",{class:"twitter-share-button",target:"_blank",href:"https://twitter.com/intent/tweet?"+a.value},va,8,fa)]),(0,n.createElementVNode)("div",{class:"my-4 blog-body",innerHTML:o.value},null,8,ha)])])]),(0,n.createVNode)(w,{currentYear:e.currentYear},null,8,["currentYear"])])}}};var ka=a(5296),Ea={insert:"head",singleton:!1};k()(ka.Z,Ea);ka.Z.locals;const Na=(0,V.Z)(ba,[["__scopeId","data-v-51dd6541"]]);r().defaults.headers.get["Content-Type"]="application/json",r().defaults.headers.get["Cache-Control"]="no-cache",s();var Va=(0,n.createApp)({});Va.use((0,i.WB)()),Va.component("app",dt),Va.component("blogs",Qt),Va.component("blog",Na),Va.mount("#app")},8329:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,".spinner{-webkit-animation:spin 1s ease infinite;animation:spin 1s ease infinite;border:4px solid rgba(0,0,0,.1);border-left-color:#09f;border-radius:50%;height:36px;width:36px}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]);const r=o},1367:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,".grid-skills[data-v-368c84f8]{display:grid;gap:15px;grid-template-columns:repeat(5,1fr)}.grid-skills .fab[data-v-368c84f8],.grid-skills .fas[data-v-368c84f8]{text-align:center}",""]);const r=o},5296:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,"@media (min-width:768px){.container[data-v-51dd6541]{margin-bottom:5rem!important}}",""]);const r=o},1857:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,".card[data-v-45c2b702]{height:100%;transition:all .2s ease}.card .card-img[data-v-45c2b702]{border-bottom-left-radius:0;border-bottom-right-radius:0}.card .card-body[data-v-45c2b702]{background-color:#0c5460;color:#fff;transition:all .2s ease}.card[data-v-45c2b702]:hover{box-shadow:0 0 13px 2px #777}.card:hover .card-body[data-v-45c2b702]{background-color:#062c33}",""]);const r=o},2964:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,"@media (min-width:768px){.container[data-v-efcedf10]{margin-bottom:7rem!important}}.grid[data-v-efcedf10]{align-items:center;display:grid;gap:30px;grid-template-columns:1fr}@media (min-width:578px){.grid[data-v-efcedf10]{grid-template-columns:repeat(2,1fr)}}@media (min-width:768px){.grid[data-v-efcedf10]{grid-template-columns:repeat(3,1fr)}}@media (min-width:992px){.grid[data-v-efcedf10]{grid-template-columns:repeat(4,1fr)}}.spinner-grid[data-v-efcedf10]{display:grid;grid-template-columns:1fr;height:80vh;place-items:center}",""]);const r=o},8419:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,"#home[data-v-40c30f20]{margin-top:10rem}@media (min-width:992px){#home[data-v-40c30f20]{margin-top:0}}",""]);const r=o},4613:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,".footer[data-v-0a4c2e70]{background-color:#f7f7f7;border-top:2px solid #00c9b6;bottom:0;display:none;font-family:Barlow,sans-serif;width:100%}@media (min-width:768px){.footer[data-v-0a4c2e70]{display:block;position:fixed}}.grid[data-v-0a4c2e70]{align-items:center;display:grid;grid-template-columns:1fr;padding:1rem;text-align:center}.grid .social-media[data-v-0a4c2e70]{display:none}.grid .social-media a[data-v-0a4c2e70]{color:#015c83}@media (min-width:768px){.grid[data-v-0a4c2e70]{grid-template-columns:repeat(2,1fr)}.grid .copyright[data-v-0a4c2e70]{text-align:left}.grid .social-media[data-v-0a4c2e70]{display:block;font-size:1.5rem;text-align:right}}",""]);const r=o},489:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,".grid[data-v-8496b202]{align-items:center;display:grid;grid-template-columns:33% 1fr}.grid .header-link a[data-v-8496b202]{color:#017bb0;transition:all .2s ease}.weight-500[data-v-8496b202]{font-weight:500}",""]);const r=o},1412:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(e){return e[1]}));o.push([e.id,"#header[data-v-bad572ea]{background-color:#fff;border-bottom:2px solid #00c9b6;position:fixed;top:0;width:100%;z-index:999}",""]);const r=o},6609:()=>{},1854:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[476,170,898],(()=>(t(5977),t(6609),t(1854))));e.O()}]);