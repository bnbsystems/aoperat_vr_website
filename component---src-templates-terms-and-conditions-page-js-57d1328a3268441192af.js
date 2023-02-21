"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[829],{1046:function(e,t,a){a.d(t,{w_:function(){return c}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),i=function(){return i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var a,r=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,s=e.title,c=o(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,c,{className:a,style:i({color:e.color||t.color},t.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},9226:function(e,t,a){a.d(t,{tZ:function(){return n}});var n=a(5715).tZ},7410:function(e,t,a){a.d(t,{p:function(){return r}});var n=a(7294),r=function(e){var t=e.content,a=e.className;return n.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:t}})};t.Z=function(e){var t=e.content,a=e.className;return n.createElement("div",{className:a},t)}},775:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(9226),r=a(1082),l=function(e){var t=e.children;return(0,n.tZ)("header",{className:"site-header",sx:{bg:"navbarColor"}},t)},i=a(7294),o=function(e){return i.createElement("div",{className:"site-logo"},i.createElement(r.Link,{to:"/"},e.title))},s=a(1721),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={active:!1,navBarActiveClass:""},a}(0,s.Z)(t,e);var a=t.prototype;return a.toggleHamburger=function(){var e=this;this.setState({active:!this.state.active},(function(){e.state.active?e.setState({navBarActiveClass:"is-active"}):e.setState({navBarActiveClass:""})}))},a.render=function(){var e=this;return(0,n.tZ)("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},(0,n.tZ)("div",{className:"container is-fullhd mrb-navbar-container"},(0,n.tZ)("div",{className:"navbar-brand"},(0,n.tZ)("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",role:"menuitem",tabIndex:0,onKeyPress:function(){return e.toggleHamburger()},onClick:function(){return e.toggleHamburger()}},(0,n.tZ)("span",null),(0,n.tZ)("span",null),(0,n.tZ)("span",null))),(0,n.tZ)("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},(0,n.tZ)("div",{className:"navbar-start has-text-centered"},(0,n.tZ)(r.Link,{className:"navbar-item is-size-6",to:"/about"},"O Nas"),(0,n.tZ)(r.Link,{className:"navbar-item is-size-6",to:"/services"},"Usługi"),(0,n.tZ)(r.Link,{className:"navbar-item is-size-6",to:"/blog"},"Aktualności"),(0,n.tZ)(r.Link,{className:"navbar-item is-size-6",to:"/contact"},"Kontakt")))))},t}(i.Component),u=a(7416),m=a(3201),v=JSON.parse('{"R":[{"icon":"facebook","url":"https://www.facebook.com/groups/aoperat/"},{"icon":"vimeo","url":"https://vimeo.com/user161246910"}]}'),b=function(){var e=(0,r.useStaticQuery)("1829665890").site.siteMetadata.siteTitle,t=v.R.map((function(e,t){return(0,n.tZ)("div",null,"facebook"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Facebook",rel:"noopener noreferrer"},(0,n.tZ)(u.e5d,{alt:"Facebook icon"})):"","twitter"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Twitter",rel:"noopener noreferrer"},(0,n.tZ)(u.x2F,{alt:"Twitter icon"})):"","linkedin"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Linkedin",rel:"noopener noreferrer"},(0,n.tZ)(u.tsq,{alt:"Linkedin icon"})):"","youtube"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Youtube",rel:"noopener noreferrer"},(0,n.tZ)(u.oK$,{alt:"Youtube icon"})):"","instagram"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Instagram",rel:"noopener noreferrer"},(0,n.tZ)(u.Nrw,{alt:"Instagram icon"})):"","rss"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to RSS",rel:"noopener noreferrer"},(0,n.tZ)(u.$kE,{alt:"RSS icon"})):"","github"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Github",rel:"noopener noreferrer"},(0,n.tZ)(u.q7V,{alt:"Github icon"})):"","telegram"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Telegram",rel:"noopener noreferrer"},(0,n.tZ)(u.jll,{alt:"Telegram icon"})):"","pinterest"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Pinterest",rel:"noopener noreferrer"},(0,n.tZ)(u.J4B,{alt:"Pinterest icon"})):"","snapchat"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Snapchat",rel:"noopener noreferrer"},(0,n.tZ)(u.G$$,{alt:"Snapchat icon"})):"","skype"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Skype",rel:"noopener noreferrer"},(0,n.tZ)(u.hqH,{alt:"Skype icon"})):"","wordpress"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Wordpress",rel:"noopener noreferrer"},(0,n.tZ)(m.k7O,{alt:"Wordpress icon"})):"","dribbble"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Dribbble",rel:"noopener noreferrer"},(0,n.tZ)(u.w6U,{alt:"Dribbble icon"})):"","medium"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Medium",rel:"noopener noreferrer"},(0,n.tZ)(u.sG0,{alt:"Medium icon"})):"","behance"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Behance",rel:"noopener noreferrer"},(0,n.tZ)(u.fRc,{alt:"Behance icon"})):"","vk"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to vk",rel:"noopener noreferrer"},(0,n.tZ)(m.J_S,{alt:"vk icon"})):"","vimeo"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to vimeo",rel:"noopener noreferrer"},(0,n.tZ)(u.wWN,{alt:"vimeo icon"})):"")}));return(0,n.tZ)("footer",{className:"footer has-text-white-ter is-background-secondary-dark"},(0,n.tZ)("div",{className:"container is-fullhd has-text-white-ter mrb-footer-container"},(0,n.tZ)("div",{className:"columns is-variable is-8"},(0,n.tZ)("div",{className:"column is-4"},(0,n.tZ)(o,{title:e}),(0,n.tZ)("p",{className:"is-max-width-2 pt-3"})),(0,n.tZ)("div",{className:"column is-3"},(0,n.tZ)("h4",{className:"has-text-weight-semibold is-size-5"},"Podstrony"),(0,n.tZ)("section",{className:"menu mrb-menu"},(0,n.tZ)("ul",{className:"menu-list"},(0,n.tZ)("li",null,(0,n.tZ)(r.Link,{to:"/",className:"navbar-item"},"Strona główna")),(0,n.tZ)("li",null,(0,n.tZ)(r.Link,{className:"navbar-item",to:"/about"},"O Nas")),(0,n.tZ)("li",null,(0,n.tZ)(r.Link,{className:"navbar-item",to:"/services"},"Usługi")),(0,n.tZ)("li",null,(0,n.tZ)(r.Link,{className:"navbar-item",to:"/blog"},"Aktualności")),(0,n.tZ)("li",null,(0,n.tZ)(r.Link,{className:"navbar-item",to:"/contact"},"Kontakt"))))),(0,n.tZ)("div",{className:"column is-3"},(0,n.tZ)("h4",{className:"has-text-weight-semibold is-size-5"},"Informacje"),(0,n.tZ)("section",{className:"menu mrb-menu"},(0,n.tZ)("ul",{className:"menu-list"},(0,n.tZ)("li",null,(0,n.tZ)(r.Link,{className:"navbar-item",to:"/terms-and-conditions"},"Regulamin")),(0,n.tZ)("li",null,(0,n.tZ)(r.Link,{className:"navbar-item",to:"/privacy-policy"},"Polityka prywatności"))))),(0,n.tZ)("div",{className:"column is-2"},(0,n.tZ)("h4",{className:"has-text-weight-semibold is-size-5"},"Obserwuj nas"),(0,n.tZ)("div",{className:"mrb-socials"},t)))))},f=function(e){var t=e.children,a=(e.className,e.props,(0,r.useStaticQuery)("4267595483").site.siteMetadata.siteTitle);return(0,n.tZ)("div",null,(0,n.tZ)(l,null,(0,n.tZ)("div",null),(0,n.tZ)("div",{sx:Z.nav},(0,n.tZ)(c,null)),(0,n.tZ)("div",{sx:Z.appearance})),(0,n.tZ)("div",{className:"container small-margin-container"},(0,n.tZ)(o,{title:a})),(0,n.tZ)("main",null,t),(0,n.tZ)(b,null))},Z={appearance:{display:["none","none","none","flex"],alignItems:"center",gap:4},nav:{display:"flex",alignItems:"center",gap:4}}},970:function(e,t,a){a.r(t),a.d(t,{TermsAndConditionsPageTemplate:function(){return i}});var n=a(7294),r=a(775),l=a(7410),i=function(e){var t=e.title,a=e.content,r=e.contentComponent||l.Z;return n.createElement("section",{className:"section section--gradient"},n.createElement("div",{className:"container"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-10 is-offset-1"},n.createElement("div",{className:"section"},n.createElement("h2",{className:"title is-size-3 has-text-weight-bold is-bold-light"},t),n.createElement(r,{className:"content",content:a}))))))};t.default=function(e){var t=e.data.markdownRemark;return n.createElement(r.Z,null,n.createElement(i,{contentComponent:l.p,title:t.frontmatter.title,content:t.html}))}}}]);
//# sourceMappingURL=component---src-templates-terms-and-conditions-page-js-57d1328a3268441192af.js.map