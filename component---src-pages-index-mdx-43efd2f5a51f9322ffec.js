(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g}),a.d(t,"_frontmatter",function(){return m});a(56);var r=a(77),n=a.n(r),i=a(7),o=a.n(i),s=a(0),c=a.n(s),l=a(160),d=a(152),u=a(150),f=a(166),p=a(157),h={},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=d.a,a}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=n()(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},h,a),components:t},c.a.createElement(p.a,{title:"Home",keywords:["oauth","authorization","security"]}),c.a.createElement(l.MDXTag,{name:"p",components:t},"Welcome to your new Gatsby site."),c.a.createElement(l.MDXTag,{name:"p",components:t},"Now go build something great."),c.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},c.a.createElement(f.a,null)),c.a.createElement(u.a,{to:"/page-2/"},"Go to page 2"),c.a.createElement(u.a,{to:"/source/"},"Source Demo"))},t}(c.a.Component),m={}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(35),c=a.n(s);a.d(t,"a",function(){return c.a});a(151);var l=n.a.createContext({}),d=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},152:function(e,t,a){"use strict";var r=a(155),n=a(0),i=a.n(n),o=a(4),s=a.n(o),c=a(150),l=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#883344",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var d=l,u=(a(163),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})});u.propTypes={children:s.a.node.isRequired};t.a=u},154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=a(0),o=(r=i)&&r.__esModule?r:{default:r};var s=o.default.createContext({}),c=s.Provider,l=s.Consumer;t.withMDXComponents=function(e){return function(t){var a=t.components,r=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["components"]);return o.default.createElement(l,null,function(t){return o.default.createElement(e,n({components:a||t},r))})}};t.default=function(e){var t=e.components,a=e.children;return o.default.createElement(c,{value:t},a)}},155:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz"}}}}},156:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a.n(r),i=a(0),o=a.n(i),s=a(4),c=a.n(s),l=a(57),d=a(2),u=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,n()({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},157:function(e,t,a){"use strict";var r=a(158),n=a(0),i=a.n(n),o=a(4),s=a.n(o),c=a(164),l=a.n(c),d=a(150);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return i.a.createElement(d.b,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"OAuth.xyz",description:"A new authorization protocol based on concepts from OAuth2 and its extensions.",author:"@jricher"}}}}},160:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(161);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return i(r).default}});var n=a(154);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return i(n).default}})},161:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=a(0),s=(r=o)&&r.__esModule?r:{default:r},c=a(154);var l={inlineCode:"code",wrapper:"div"},d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.parentName,r=e.props,i=void 0===r?{}:r,o=e.children,c=e.components,d=void 0===c?{}:c,u=e.Layout,f=e.layoutProps,p=d[a+"."+t]||d[t]||l[t]||t;return u?s.default.createElement(u,n({components:d},f),s.default.createElement(p,i,o)):s.default.createElement(p,i,o)}}]),t}();t.default=(0,c.withMDXComponents)(d)},166:function(e,t,a){"use strict";var r=a(167),n=a(0),i=a.n(n),o=a(150),s=a(168),c=a.n(s);t.a=function(){return i.a.createElement(o.b,{query:"2011440971",render:function(e){return i.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:r})}},167:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/48d69/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/500db/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/1b440/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/8d7dc/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/44689/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},168:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(36)),s=r(a(77)),c=r(a(79)),l=r(a(0)),d=r(a(4)),u=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+r+"<img "+s+c+a+n+t+o+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},u,{onLoad:o,onError:d,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:c,seenBefore:s},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.Tag,w=e.itemProp,E="boolean"==typeof b?"lightgray":b,S=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),O=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),R={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var L=h;return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),E&&l.default.createElement(v,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),L.base64&&l.default.createElement(y,(0,c.default)({src:L.base64},R)),L.tracedSVG&&l.default.createElement(y,(0,c.default)({src:L.tracedSVG},R)),this.state.isVisible&&l.default.createElement("picture",null,L.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),l.default.createElement(y,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,c.default)({alt:a,title:t},L))}}))}if(g){var A=g,z=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},i);return"inherit"===i.display&&delete z.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},E&&l.default.createElement(v,{title:t,style:{backgroundColor:E,width:A.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:A.height}}),A.base64&&l.default.createElement(y,(0,c.default)({src:A.base64},R)),A.tracedSVG&&l.default.createElement(y,(0,c.default)({src:A.tracedSVG},R)),this.state.isVisible&&l.default.createElement("picture",null,A.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),l.default.createElement(y,{alt:a,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,c.default)({alt:a,title:t,width:A.width,height:A.height},A))}}))}return null},t}(l.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-mdx-43efd2f5a51f9322ffec.js.map