(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1198:function(e,t,r){"use strict";r.r(t),r.d(t,"components",(function(){return E}));var a=r(3),o=r.n(a),n=r(435),l=r(300),s=r.n(l),i=r(34);class c extends n.a{translate(e){return e=(e=s()(Object(i.a)(e))).replace(/\[matrix\]/,'<a href="https://matrix.org" target="_blank" rel="noreferrer noopener"><img width="79" height="34" alt="[matrix]" style="padding-left: 1px;vertical-align: middle" src="welcome/images/matrix.svg"/></a>')}}o()(c,"replaces","EmbeddedPage");var m=r(33),u=r.n(m),g=r(45);const d=()=>{const e=g.a.get().branding;let t=[{text:"blog",url:"https://blog.riot.im"},{text:"twitter",url:"https://twitter.com/@RiotChat"},{text:"github",url:"https://github.com/vector-im/riot-web"}];e&&e.authFooterLinks&&(t=e.authFooterLinks);const r=[];for(const e of t)r.push(u.a.createElement("a",{href:e.url,key:e.text,target:"_blank",rel:"noreferrer noopener"},e.text));return u.a.createElement("div",{className:"mx_AuthFooter"},r,u.a.createElement("a",{href:"https://matrix.org",target:"_blank",rel:"noreferrer noopener"},Object(i.a)("powered by Matrix")))};d.replaces="AuthFooter";var h=d,p=r(35),b=r.n(p);class x extends u.a.PureComponent{render(){const e=g.a.get().branding;let t="themes/riot/img/logos/riot-im-logo-black-text.svg";return e&&e.authHeaderLogoUrl&&(t=e.authHeaderLogoUrl),u.a.createElement("div",{className:"mx_AuthHeaderLogo"},u.a.createElement("img",{src:t,alt:"Riot"}))}}o()(x,"replaces","AuthHeaderLogo"),o()(x,"propTypes",{icon:b.a.string});var v=r(36);class w extends u.a.PureComponent{render(){const e=v.getComponent("auth.AuthFooter"),t=g.a.get().branding;let r="themes/riot/img/backgrounds/valley.jpg";t&&t.welcomeBackgroundUrl&&(r=Array.isArray(t.welcomeBackgroundUrl)?t.welcomeBackgroundUrl[Math.floor(Math.random()*t.welcomeBackgroundUrl.length)]:t.welcomeBackgroundUrl);const a={background:"center/cover fixed url(".concat(r,")")},o={position:"absolute",top:0,right:0,bottom:0,left:0,filter:"blur(10px)",background:a.background};return u.a.createElement("div",{className:"mx_AuthPage",style:a},u.a.createElement("div",{className:"mx_AuthPage_modal",style:{position:"relative",background:"initial"}},u.a.createElement("div",{className:"mx_AuthPage_modalBlur",style:o}),u.a.createElement("div",{className:"mx_AuthPage_modalContent",style:{display:"flex",zIndex:1,background:"rgba(255, 255, 255, 0.59)",borderRadius:"4px"}},this.props.children)),u.a.createElement(e,null))}}o()(w,"replaces","AuthPage");const f=({onFinished:e})=>u.a.createElement("div",{className:"mx_ErrorDialog"},u.a.createElement("div",{className:"mx_Dialog_title"},Object(i.a)("Custom Server Options")),u.a.createElement("div",{className:"mx_Dialog_content"},u.a.createElement("p",null,Object(i.a)("You can use the custom server options to sign into other Matrix servers by specifying a different homeserver URL. This allows you to use Riot with an existing Matrix account on a different homeserver."))),u.a.createElement("div",{className:"mx_Dialog_buttons"},u.a.createElement("button",{onClick:e,autoFocus:!0},Object(i.a)("Dismiss"))));f.replaces="CustomServerDialog";var k=f;let E={};c&&(E["structures.VectorEmbeddedPage"]=c),h&&(E["views.auth.VectorAuthFooter"]=h),x&&(E["views.auth.VectorAuthHeaderLogo"]=x),w&&(E["views.auth.VectorAuthPage"]=w),k&&(E["views.auth.VectorCustomServerDialog"]=k)}}]);
//# sourceMappingURL=riot-web-component-index.js.map