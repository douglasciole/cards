(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{25:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){},33:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),s=(a(30),a(23)),l=a(1),i=(a(31),a(32),a(33),a(8)),m=a(9),p=a(11),u=a(10),d=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={buttonText:"Use this one"},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title"},this.props.label),r.a.createElement("img",{className:"card-image",src:this.props.image}),r.a.createElement("button",{onClick:function(){!function(t){var a=document.createElement("textarea");a.value=t,a.style.top="0",a.style.left="0",a.style.position="fixed",document.body.appendChild(a),a.focus(),a.select();try{document.execCommand("copy");e.setState({buttonText:"Ctrl + C, Done!"}),setTimeout((function(){e.setState({buttonText:"Use this one"})}),1500)}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(a)}(e.props.refer)},className:"card-button"},this.state.buttonText))}}]),a}(n.Component),g=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"title"},"Cards"),r.a.createElement("div",{className:"cards-container"},r.a.createElement(d,{refer:"sp",label:"Saint Patrick's",image:"/images/sp.jpg"}),r.a.createElement(d,{refer:"xmas",label:"Christmas",image:"/images/xmas.png"}),r.a.createElement(d,{refer:"mday",label:"Mother's Day",image:"/images/mday.jpg"})),r.a.createElement("div",{className:"cards-container"},r.a.createElement(d,{refer:"sp",label:"Saint Patrick's",image:"/images/sp.jpg"}),r.a.createElement(d,{refer:"xmas",label:"Christmas",image:"/images/xmas.png"}),r.a.createElement(d,{refer:"mday",label:"Mother's Day",image:"/images/mday.jpg"})),r.a.createElement("div",{className:"cards-container"},r.a.createElement(d,{refer:"sp",label:"Saint Patrick's",image:"/images/sp.jpg"}),r.a.createElement(d,{refer:"xmas",label:"Christmas",image:"/images/xmas.png"}),r.a.createElement(d,{refer:"mday",label:"Mother's Day",image:"/images/mday.jpg"})))}}]),a}(n.Component),h=a(21),y=a.n(h),f=a(22),E=a.n(f),b=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={query:y.a.parse(n.props.location.search)},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement("title",null,this.state.query.name),r.a.createElement("meta",{property:"og:url",content:"MyApp"}),r.a.createElement("meta",{property:"og:type",content:"MyApp"}),r.a.createElement("meta",{property:"og:title",content:"MyApp"}),r.a.createElement("meta",{property:"og:description",content:"MyApp"}),r.a.createElement("meta",{property:"og:image",content:"path/to/image.jpg"})),this.state.query.name)}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:g}),r.a.createElement(l.a,{path:"/display",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.d608ca5d.chunk.js.map