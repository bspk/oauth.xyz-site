(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(t,e,a){"use strict";a.r(e);a(56);var n=a(77),r=a.n(n),c=a(7),i=a.n(c),o=a(0),s=a.n(o),d=a(160),u=a(152),l=(a(150),a(166),a(157)),p=a(388),m=a(387),g=function(t){var e=t.code,a=JSON.stringify(e,null,4);return s.a.createElement(p.a,{language:"javascript",style:m.a},a)},f=function(t){function e(e){var a;return(a=t.call(this,e)||this).toggleBaz=function(t){var e=t.target,n=a.state.demo;n.baz=e.checked,a.setState({demo:n})},a.render=function(){return s.a.createElement("div",null,s.a.createElement("input",{type:"checkbox",onChange:a.toggleBaz})," Baz?",s.a.createElement(g,{code:a.state.demo}))},a.state={demo:{baz:!1}},a}return i()(e,t),e}(s.a.Component);a.d(e,"default",function(){return h}),a.d(e,"_frontmatter",function(){return b});var y={},h=function(t){function e(e){var a;return(a=t.call(this,e)||this).layout=u.a,a}return i()(e,t),e.prototype.render=function(){var t=this.props,e=t.components,a=r()(t,["components"]);return s.a.createElement(d.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},y,a),components:e},s.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),s.a.createElement(d.MDXTag,{name:"h1",components:e},"Source Code"),s.a.createElement(d.MDXTag,{name:"p",components:e},"This is a source code demo."),s.a.createElement(f,null))},e}(s.a.Component),b={}},150:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(35),s=a.n(o);a.d(e,"a",function(){return s.a});a(151);var d=r.a.createContext({}),u=function(t){return r.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(t,e,a){var n;t.exports=(n=a(156))&&n.default||n},152:function(t,e,a){"use strict";var n=a(155),r=a(0),c=a.n(r),i=a(4),o=a.n(i),s=a(150),d=function(t){var e=t.siteTitle;return c.a.createElement("div",{style:{background:"#883344",marginBottom:"1.45rem"}},c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var u=d,l=(a(163),function(t){var e=t.children;return c.a.createElement(s.b,{query:"755544856",render:function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e))},data:n})});l.propTypes={children:o.a.node.isRequired};e.a=l},155:function(t){t.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},156:function(t,e,a){"use strict";a.r(e);var n=a(14),r=a.n(n),c=a(0),i=a.n(c),o=a(4),s=a.n(o),d=a(57),u=a(2),l=function(t){var e=t.location,a=u.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(d.a,r()({location:e,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=l},157:function(t,e,a){"use strict";var n=a(158),r=a(0),c=a.n(r),i=a(4),o=a.n(i),s=a(164),d=a.n(s),u=a(150);function l(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,o=t.title;return c.a.createElement(u.b,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return c.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l;var p="1025518380"},158:function(t){t.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},166:function(t,e,a){"use strict";var n=a(167),r=a(0),c=a.n(r),i=a(150),o=a(168),s=a.n(o);e.a=function(){return c.a.createElement(i.b,{query:"2011440971",render:function(t){return c.a.createElement(s.a,{fluid:t.placeholderImage.childImageSharp.fluid})},data:n})}},167:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/48d69/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/500db/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/1b440/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/8d7dc/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/44689/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-source-mdx-0eecc3b5669ff93bc5ff.js.map