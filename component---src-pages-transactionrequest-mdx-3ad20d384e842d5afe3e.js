(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(e,t,a){"use strict";a.r(t);a(56);var n=a(77),r=a.n(n),i=a(7),c=a.n(i),o=a(0),s=a.n(o),l=a(160),u=a(153),d=(a(151),a(165),a(156)),p=(a(80),a(59),a(37),a(170)),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).changeClient=function(e){var t=a.state.transaction;"full"===e.target.value?t.client={name:"My Client Display Name",uri:"https://example.net/client"}:"handle"===e.target.value?t.client={handle:"87ytghio0987yhjk"}:t.client=void 0,a.setState({transaction:t})},a.changeInteract=function(e){var t=a.state.transaction;"full"===e.target.value?t.interact={name:"My Client Display Name",uri:"https://example.net/client"}:"handle"===e.target.value?t.interact={handle:"87ytghio0987yhjk"}:t.interact=void 0,a.setState({transaction:t})},a.changeResources=function(e){var t=a.state.transaction;"full"===e.target.value?t.resources={name:"My Client Display Name",uri:"https://example.net/client"}:"handle"===e.target.value?t.resources={handle:"87ytghio0987yhjk"}:t.resources=void 0,a.setState({transaction:t})},a.changeUser=function(e){var t=a.state.transaction;"full"===e.target.value?t.user={name:"My Client Display Name",uri:"https://example.net/client"}:"handle"===e.target.value?t.user={handle:"87ytghio0987yhjk"}:t.user=void 0,a.setState({transaction:t})},a.changeKeys=function(e){var t=a.state.transaction;"full"===e.target.value?t.keys={name:"My Client Display Name",uri:"https://example.net/client"}:"handle"===e.target.value?t.keys={handle:"87ytghio0987yhjk"}:t.keys=void 0,a.setState({transaction:t})},a.render=function(){return s.a.createElement("div",null,s.a.createElement(p.a,{code:a.state.transaction}),s.a.createElement(g,{onChange:a.changeClient,label:"Client"}),s.a.createElement(g,{onChange:a.changeInteract,label:"Interact"}),s.a.createElement(g,{onChange:a.changeResources,label:"Resources"}),s.a.createElement(g,{onChange:a.changeUser,label:"User"}),s.a.createElement(g,{onChange:a.changeKeys,label:"Keys"}))},a.state={transaction:{client:void 0,user:void 0,resources:void 0,interact:void 0,keys:void 0}},a}return c()(t,e),t}(s.a.Component),g=function(e){var t=e.onChange,a=e.label;return s.a.createElement("label",null,s.a.createElement("select",{onChange:t},s.a.createElement("option",{value:"full"},"Fully specified"),s.a.createElement("option",{value:"handle"},"Handle"),s.a.createElement("option",{value:"omit",selected:!0},"Omit")),a)},h=m;a.d(t,"default",function(){return y}),a.d(t,"_frontmatter",function(){return v});var f={},y=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=u.a,a}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=r()(e,["components"]);return s.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},f,a),components:t},s.a.createElement(d.a,{title:"Home",keywords:["oauth","authorization","security"]}),s.a.createElement(l.MDXTag,{name:"h1",components:t},"Transaction Request"),s.a.createElement(l.MDXTag,{name:"p",components:t},"The client begins the transaction by creating a transaction request. This is a ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"JSON")," document ",s.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"POST"),"ed to the authorization server's transaction endpoint."),s.a.createElement(h,null))},t}(s.a.Component),v={}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(35),s=a.n(o);a.d(t,"a",function(){return s.a});a(152);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},152:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(151),l=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#883344",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(162),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});d.propTypes={children:o.a.node.isRequired};t.a=d},154:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},155:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),i=a(0),c=a.n(i),o=a(4),s=a.n(o),l=a(57),u=a(2),d=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(l.a,r()({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(163),l=a.n(s),u=a(151);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(u.b,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var p="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},165:function(e,t,a){"use strict";a(166),a(0),a(151),a(168)},166:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/48d69/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/500db/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/1b440/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/8d7dc/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/44689/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(390),c=a(389);t.a=function(e){var t=e.code,a=JSON.stringify(t,null,4);return r.a.createElement(i.a,{language:"javascript",style:c.a},a)}}}]);
//# sourceMappingURL=component---src-pages-transactionrequest-mdx-3ad20d384e842d5afe3e.js.map