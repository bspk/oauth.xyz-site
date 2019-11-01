(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{474:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h})),n.d(t,"_frontmatter",(function(){return m}));n(7),n(6),n(4),n(8);var a=n(0),o=n.n(a),i=n(467),s=n(469),r=n(40),c=(n(470),n(468));var h=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).layout=s.a,n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:n,components:t},o.a.createElement(c.a,{title:"Interaction",keywords:["oauth","authorization","security"]}),o.a.createElement(i.MDXTag,{name:"h1",components:t},"Relationship to Other Specifications"),o.a.createElement(i.MDXTag,{name:"p",components:t},"The XYZ protocol is an attempt to pull together functionality from many different extensions and deployments of OAuth 2. Here, we'll try to map specific concepts from these different protocols into the XYZ system. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"Auth Code"),o.a.createElement(i.MDXTag,{name:"p",components:t},"The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"redirect")," ",o.a.createElement(r.Link,{to:"/interaction"},"interaction mechanism")," allows a client to send a user to interact using HTTP redirects, and for the most part this should be indistinguishable from the authorization code flow in OAuth 2. The key difference is what gets sent in the front channel. In OAuth 2, the client has to send a lot of sensitive information through the browser, including the scopes it's asking for and its own identity. In XYZ, the client simply goes to an opaque URL that it is given in direct response to its transaction request. The interaction handle returned is equivalent to the authorizaiton code itself, and this handle is useful only in the context of a current transaction. "),o.a.createElement(i.MDXTag,{name:"p",components:t},"This type of interaction can be used for web servers, SPA's, and native applications without modification. In fact, most of the differences between these types of clients are in the ways that they can manage keys and secrets. Since the binding of keys and the mode of interaction are separated in XYZ, they can be combined in ways that make the most sense for the client at hand."),o.a.createElement(i.MDXTag,{name:"h2",components:t},"Device Flow"),o.a.createElement(i.MDXTag,{name:"p",components:t},"Similarly to the authorization code grant, the device grant simply makes use of the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"device")," ",o.a.createElement(r.Link,{to:"/interaction"},"interaction mechanism"),". The only real difference from the authorization code grant is the means of interacting with the user. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"Client Credentials"),o.a.createElement(i.MDXTag,{name:"p",components:t},"The client credentials grant in XYZ is simply one that does not require user interaction, nor does it require any information about the user. In other words, neither a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," nor ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"interaction")," section are included in the ",o.a.createElement(r.Link,{to:"/transactionrequest"},"transaction request"),". "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"Resource Owner and Assertion"),o.a.createElement(i.MDXTag,{name:"p",components:t},"The resource owner grant could be replicated in XYZ by presenting the user's credentials as part of the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," section of the transaction request. However, even more powerfully, the client can present a wide variety of verifiable assertions in this section for the AS to validate and interpret as it sees fit. Chained authorization and authentication are possible in this way, as are forms of linked delegation for cases where the client already knows who the user is and has the authority to do something on their behalf, but needs to translate the authentication to something that can be used further downstream. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"Dynamic Registration"),o.a.createElement(i.MDXTag,{name:"p",components:t},"OAuth 2 makes the assumption that all clients have been registered with the authorization server ahead of time, and that this registration includes a wide swath of information about the client software, including its capabilities, its keys, its identity, and other items. This assumption lead to the development of the dynamic registration protocol to allow client instances to be managed at runtime, but at the cost of an additional round trip."),o.a.createElement(i.MDXTag,{name:"p",components:t},"In XYZ, the client has the choice of presenting all of this information during the transaction request. This dynamic request can be bound to keys during the transaction itself, and these keys can be created by the client instance (as would be likely in a native application) or supplied during the transaction response (as would potentially be the case with an SPA). These keys identify the instance, and the AS can return a client handle that the client can use to identify itself in future transactions. "),o.a.createElement(i.MDXTag,{name:"p",components:t},"Static registration is of course still possible, with the client or developer being issued a client handle out of band and the client presenting that handle during its transaction request. Similarly, this handle can be pre-bound to keys and interaction methods, effectively locking down a client's runtime behavior when such a lock is desired. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"UMA"),o.a.createElement(i.MDXTag,{name:"p",components:t},"UMA's pattern of giving the client a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ticket")," to present claims for, either proactively or interactively, closely matches XYZ's transactional model. UMA's more complex resource description can be incorporated into XYZ's ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resources")," section. If the client wants to represent the same user over time, the AS can issue a user handle much like UMA's PCT. "),o.a.createElement(i.MDXTag,{name:"p",components:t},"The main component that's missing would be to allow an RS to start a transaction and hand that transaction handle to the client, and this could potentially be built up using the resource handle. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"Identity and OpenID Connect"),o.a.createElement(i.MDXTag,{name:"p",components:t},"The main addition that OpenID Connect brings is the ability to pass identity information to the client. An XYZ-based OpenID Connect style protocol could be as simple as returning an identity assertion alongside the access token, much in the same way the ID Token is returned in OpenID Connect today. Similarly, the UserInfo Endpoint remains a standardized resource server that behaves the same as it does today."),o.a.createElement(i.MDXTag,{name:"p",components:t},"Many of the additional mechanisms in OpenID Connect can be incorporated into the transaction request instead of being passed through the browser, including any ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"prompt"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"login_hint"),", or vectors of trust parameters. Additionally, the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"claims")," mechanism can be readily incorporated into the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resources")," portion of the request. "),o.a.createElement(i.MDXTag,{name:"p",components:t},"Other mechanisms in OpenID Connect become unnecessary additions, including the request object and hybrid signed response modes. Many of these components were intend to overcome shortcomings in the OAuth 2 protocol that XYZ does not share. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"CIBA"),o.a.createElement(i.MDXTag,{name:"p",components:t},"CIBA maps to XYZ's ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"device")," style interaction method, since the user is going to interact with the AS using a secondary application. User information and hints about the intended account can be pushed in the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"user")," section of the transaction request. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"FAPI Request Object Endpoint and JARM"),o.a.createElement(i.MDXTag,{name:"p",components:t},"OpenID Connect's Request Object was born of a need to protect a client's request through the browser, and the hybrid flow (later generalized into JARM) provided a means to protect the authorization server's response through the browser. Both of these methods additionally allow a more rich data request through the use of a JSON object instead of plain request parameters. XYZ's transaction model protects this same information by not sending it through the browser redirects in the first place. "),o.a.createElement(i.MDXTag,{name:"p",components:t},"FAPI's request object endpoint allows a client to pre-register the request object and pass a reference instead. This type of intent registration is much the same as the transactional model and transaction handle. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"PKCE"),o.a.createElement(i.MDXTag,{name:"p",components:t},"PKCE effectively creates an ephemeral key that the client can prove possession of at a later part of the process. With XYZ, the same results are an automatic side effect of the transactional process. The transaction handle is something known only to the client and is never passed through the front channel, and any interaction handle returned from the interaction endpoint makes sense only in the context of a specific transaction. Furthermore, the client's own keys can be bound to the transaction, making it even more difficult for an attacker to make use of a stolen interaction handle. "),o.a.createElement(i.MDXTag,{name:"h2",components:t},"PoP"),o.a.createElement(i.MDXTag,{name:"p",components:t},"The main goal of of OAuth 2's Proof of Possession extension work is to bind a set of runtime keys that the client can prove possession of to the token issued to the client. XYZ allows a client to bind keys during its transacton request, and these keys can be further bound to the access token. "))},a}(o.a.Component),m={}}}]);
//# sourceMappingURL=component---src-pages-specs-mdx-83e0caa2ee463d01e6fe.js.map