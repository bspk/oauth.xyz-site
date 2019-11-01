(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{477:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m})),t.d(n,"_frontmatter",(function(){return p}));t(7),t(6),t(4),t(8);var a=t(0),o=t.n(a),i=t(467),s=t(469),c=t(468),r=t(470),l=t(40);var m=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=s.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:n},o.a.createElement(c.a,{title:"Keys",keywords:["oauth","authorization","security"]}),o.a.createElement(i.MDXTag,{name:"h1",components:n},"Key Types"),o.a.createElement(i.MDXTag,{name:"p",components:n},"The client can present a key to the AS during the transaction process that it can use to bind itself to this and future requests. The AS can restrict access to certain keys, associated with particular clients and controlled through a registration process. The AS can also allow clients to dynamically present and prove a key at runtime, such as a key generated on a client device and bound to only that instance of the client software on that device. "),o.a.createElement(i.MDXTag,{name:"h2",components:n},"JSON Web Key Set (JWKS)"),o.a.createElement(i.MDXTag,{name:"p",components:n},"This client sends its public key to the server formatted as a JSON Web Key Set (JWKS). The keys must have a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"kid")," (key identifier) field and an ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"alg")," (algorithm) field."),o.a.createElement(r.a,{from:"client",to:"as",language:"json",codeString:'{\n    "kesy": {\n        "jwks": {\n            "keys": [\n                {\n                    "kty": "RSA",\n                    "e": "AQAB",\n                    "kid": "xyz-1",\n                    "alg": "RS256",\n                    "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"\n                }\n            ]\n        }\n    }\n}\n'}),o.a.createElement(i.MDXTag,{name:"h2",components:n},"X509 Certificate"),o.a.createElement(i.MDXTag,{name:"p",components:n},"The client indicates its certificate as either an encoded certificate string, or as a certificate thumbprint as in OAuth 2's certificate-bound access token methods."),o.a.createElement(r.a,{from:"client",to:"as",language:"json",codeString:'{\n    "keys": {\n        "cert": "MIIEHDCCAwSgAwIBAgIBATANBgkqhkiG9w0BAQsFADCBmjE3MDUGA1UEAwwuQmVzcG9rZSBFbmdpbmVlcmluZyBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eTELMAkGA1UECAwCTUExCzAJBgNVBAYTAlVTMRkwFwYJKoZIhvcNAQkBFgpjYUBic3BrLmlvMRwwGgYDVQQKDBNCZXNwb2tlIEVuZ2luZWVyaW5nMQwwCgYDVQQLDANNVEkwHhcNMTkwNDEwMjE0MDI5WhcNMjQwNDA4MjE0MDI5WjB8MRIwEAYDVQQDDAlsb2NhbGhvc3QxCzAJBgNVBAgMAk1BMQswCQYDVQQGEwJVUzEgMB4GCSqGSIb3DQEJARYRdGxzY2xpZW50QGJzcGsuaW8xHDAaBgNVBAoME0Jlc3Bva2UgRW5naW5lZXJpbmcxDDAKBgNVBAsMA01USTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMmaXQHbs/wc1RpsQ6Orzf6rN+q2ijaZbQxD8oi+XaaN0P/gnE13JqQduvdq77OmJ4bQLokqsd0BexnI07Njsl8nkDDYpe8rNve5TjyUDCfbwgS7U1CluYenXmNQbaYNDOmCdHwwUjV4kKREg6DGAx22Oq7+VHPTeeFgyw4kQgWRSfDENWY3KUXJlb/vKR6lQ+aOJytkvj8kVZQtWupPbvwoJe0na/ISNAOhL74w20DWWoDKoNltXsEtflNljVoi5nqsmZQcjfjt6LO0T7O1OX3Cwu2xWx8KZ3n/2ocuRqKEJHqUGfeDtuQNt6Jz79v/OTr8puLWaD+uyk6NbtGjoQsCAwEAAaOBiTCBhjAJBgNVHRMEAjAAMAsGA1UdDwQEAwIF4DBsBgNVHREEZTBjgglsb2NhbGhvc3SCD3Rsc2NsaWVudC5sb2NhbIcEwKgBBIERdGxzY2xpZW50QGJzcGsuaW+GF2h0dHA6Ly90bHNjbGllbnQubG9jYWwvhhNzc2g6dGxzY2xpZW50LmxvY2FsMA0GCSqGSIb3DQEBCwUAA4IBAQCKKv8WlLrT4Z5NazaUrYtlTF+2v0tvZBQ7qzJQjlOqAcvxry/d2zyhiRCRS/v318YCJBEv4Iq2W3I3JMMyAYEe2573HzT7rH3xQP12yZyRQnetdiVM1Z1KaXwfrPDLs72hUeELtxIcfZ0M085jLboXhufHI6kqm3NCyCCTihe2ck5RmCc5l2KBO/vAHF0ihhFOOOby1v6qbPHQcxAU6rEb907/p6BW/LV1NCgYB1QtFSfGxowqb9FRIMD2kvMSmO0EMxgwZ6k6spa+jk0IsI3klwLW9b+Tfn/daUbIDctxeJneq2anQyU2znBgQl6KILDSF4eaOqlBut/KNZHHazJh"\n    }\n}\n'}),o.a.createElement(r.a,{from:"client",to:"as",language:"json",codeString:'{\n    "key": {\n        "cert#S256": "bwcK0esc3ACC3DB2Y5_lESsXE8o9ltc05O89jdN-dg2"\n    }\n}\n'}),o.a.createElement(i.MDXTag,{name:"h2",components:n},"Decentralized Identifier"),o.a.createElement(i.MDXTag,{name:"p",components:n},"The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"did")," key method uses a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"did")," URI to indicate the key. The AS resolves the key document using DID resolution."),o.a.createElement(r.a,{from:"client",to:"as",language:"json",codeString:'{\n    "keys": {\n        "did": "did:example:CV3BVVXK2PWWLCRQLRFU#xyz-1"\n    }\n}\n'}),o.a.createElement(i.MDXTag,{name:"h1",components:n},"Presentation Types"),o.a.createElement(i.MDXTag,{name:"p",components:n},"When the client starts a ",o.a.createElement(l.Link,{to:"/transactionrequest"},"transaction request")," or continues an ongoing transaction, it must prove possession of any presented keys. The type of proof is indicated by the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"proof")," parameter value, which currently has the following values defined:"),o.a.createElement(i.MDXTag,{name:"ul",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"jwsd"),": Detached JSON Web Signature"),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"httpsig"),": HTTP Request Signature (Cavage signatures)"),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"dpop"),": Demonstration of Proof of Possession"),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"pop"),": OAuth Proof of Posession"),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"mtls"),": Mutual TLS ")),o.a.createElement(i.MDXTag,{name:"blockquote",components:n},o.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},'Should we also have an "embedded JWS" method, for instance simply turning the request body into a JWS wrapped by the signature in compact format? That feels counter to the readable nature of the protocol, but since the body is JSON it could potentially work.')),o.a.createElement(i.MDXTag,{name:"h2",components:n},"Detached JSON Web Signature"),o.a.createElement(i.MDXTag,{name:"p",components:n},"This key presentation method is indicated by the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jwsd")," value of the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"proof")," field and uses a detached JWS to sign the request body to the transaction endpoint, which itself is a JSON object. The body is taken as a byte stream, with no parsing or interpretation, and signed using the key. The header of the JWS must include the key ID, the algorithm (which must not be ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"none"),"), and the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"b64")," attribute to indicate that it is detached. The calculated JWS is set as the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Detached-JWS")," HTTP header."),o.a.createElement(r.a,{from:"client",to:"as",language:"http",codeString:'POST /transaction HTTP/1.1\nHost: server.example.com\nContent-Type: application/json\nDetached-JWS: eyJiNjQiOmZhbHNlLCJhbGciOiJSUzI1NiIsImtpZCI6Inh5ei0xIn0..Y287HMtaY0EegEjoTd_04a4GC6qV48GgVbGKOhHdJnDtD0VuUlVjLfwne8AuUY3U7e89zUWwXLnAYK_BiS84M8EsrFvmv8yDLWzqveeIpcN5_ysveQnYt9Dqi32w6IOtAywkNUDZeJEdc3z5s9Ei8qrYFN2fxcu28YS4e8e_cHTK57003WJu-wFn2TJUmAbHuqvUsyTb-nzYOKxuCKlqQItJF7E-cwSb_xULu-3f77BEU_vGbNYo5ZBa2B7UHO-kWNMSgbW2yeNNLbLC18Kv80GF22Y7SbZt0e2TwnR2Aa2zksuUbntQ5c7a1-gxtnXzuIKa34OekrnyqE1hmVWpeQ\n \n{\n    "client": {\n        "name": "My Client Display Name",\n        "uri": "https://example.net/client"\n    },\n    "resources": [\n        "dolphin-metadata"\n    ],\n    "interact": {\n        "redirect": true,\n        "callback": {\n    \t\t"uri": "https://client.foo",\n    \t\t"nonce": "VJLO6A4CAYLBXHTR0KRO"\n    \t}\n    },\n    "keys": {\n\t\t"proof": "jwsd",\n        "jwks": {\n            "keys": [\n                {\n                    "kty": "RSA",\n                    "e": "AQAB",\n                    "kid": "xyz-1",\n                    "alg": "RS256",\n                    "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"\n                }\n            ]\n        }\n    }\n}\n'}),o.a.createElement(i.MDXTag,{name:"blockquote",components:n},o.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"blockquote"},"This is susceptible to any number of issues with data transformation, and it doesn't protect the request URL or header, only the body. However, the body is not transformed by adding the signature, which is a benefit for simplicity.")),o.a.createElement(i.MDXTag,{name:"h2",components:n},"HTTP Signatures (Cavage Signatures)"),o.a.createElement(i.MDXTag,{name:"p",components:n},"This key presentation method is indicated by the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"httpsig")," value of the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"proof")," field, and it uses the signature method in ",o.a.createElement("a",{href:"https://tools.ietf.org/html/draft-cavage-http-signatures-11"},"Signing HTTP Messages"),". The signature is presented in the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Signature")," header and has to cover the body through use of the HTTP Digest header. "),o.a.createElement(r.a,{from:"client",to:"as",language:"http",codeString:'POST /transaction HTTP/1.1\nHost: server.example.com\nContent-Type: application/json\nContent-Length: 716\nSignature: keyId="xyz-client", algorithm="rsa-sha256", headers="(request-target) digest content-length", signature="TkehmgK7GD/z4jGkmcHS67cjVRgm3zVQNlNrrXW32Wv7du0VNEIVI/dMhe0WlHC93NP3ms91i2WOW5r5B6qow6TNx/82/6W84p5jqFYuYfTkKYZ69GbfqXkYV9gaT++dl5kvZQjVk+KZT1dzpAzv8hdk9nO87Xirj7qe2mdAGE1LLc3YvXwNxuCQh82sa5rXHqtNT1077fiDvSVYeced0UEmrWwErVgr7sijtbTohC4FJLuJ0nG/KJUcIG/FTchW9rd6dHoBnY43+3DzjCIthXpdH5u4VX3TBe6GJDO6Mkzc6vB+67OWzPwhYTplUiFFV6UZCsDEeuSa/Ue1yLEAMg=="]}\nDigest: SHA=oZz2O3kg5SEFAhmr0xEBbc4jEfo=\n \n{\n    "client": {\n        "name": "My Client Display Name",\n        "uri": "https://example.net/client"\n    },\n    "resources": [\n        "dolphin-metadata"\n    ],\n    "interact": {\n        "redirect": true,\n        "callback": {\n    \t\t"uri": "https://client.foo",\n    \t\t"nonce": "VJLO6A4CAYLBXHTR0KRO"\n    \t}\n    },\n    "keys": {\n\t\t"proof": "httpsig",\n        "jwks": {\n            "keys": [\n                {\n                    "kty": "RSA",\n                    "e": "AQAB",\n                    "kid": "xyz-1",\n                    "alg": "RS256",\n                    "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"\n                }\n            ]\n        }\n    }\n}\n'}),o.a.createElement(i.MDXTag,{name:"p",components:n},"This method only protects the body if the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Digest")," header is included in the request and as part of the signature. "),o.a.createElement(i.MDXTag,{name:"h2",components:n},"DPoP Signature"),o.a.createElement(i.MDXTag,{name:"p",components:n},"OAuth's ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://tools.ietf.org/html/draft-fett-oauth-dpop"}},"Demonstration of Proof of Posession (DPoP)")," provides a way to prove possession of a key through signing a header value using JWS. "),o.a.createElement(r.a,{from:"client",to:"as",language:"http",codeString:'POST /transaction HTTP/1.1\nHost: server.example.com\nContent-Type: application/json\nDPoP: eyJ0eXAiOiJkcG9wK2p3dCIsImFsZyI6IlJTMjU2IiwiandrIjp7Imt0eSI6IlJTQSIsImUiOiJBUUFCIiwia2lkIjoieHl6LWNsaWVudCIsImFsZyI6IlJTMjU2IiwibiI6Inp3Q1RfM2J4LWdsYmJIcmhlWXBZcFJXaVk5SS1uRWFNUnBablJySWpDczZiX2VteVRrQmtEREVqU3lzaTM4T0M3M2hqMS1XZ3hjUGRLTkdaeUlvSDNRWmVuMU1LeXloUXBMSkcxLW9MTkxxbTdwWFh0ZFl6U2RDOU8zLW9peXk4eWtPNFlVeU5aclJSZlBjaWhkUUNiT19PQzhRdWdtZzlyZ05ET1NxcHBkYU5lYXMxb3Y5UHhZdnhxcnoxLThIYTdna0QwMFlFQ1hIYUIwNXVNYVVhZEhxLU9fV0l2WVhpY2c2STVqNlM0NFZOVTY1VkJ3dS1BbHluVHhRZE1BV1AzYll4VlZ5NnAzLTdlVEpva3ZqWVRGcWdEVkRaOGxVWGJyNXlDVG5SaG5oSmd2ZjNWakRfbWFsTmU4LXRPcUs1T1NEbEhUeTZnRDlOcWRHQ20tUG0zUSJ9fQ.eyJodHRwX21ldGhvZCI6IlBPU1QiLCJodHRwX3VyaSI6Imh0dHA6XC9cL2hvc3QuZG9ja2VyLmludGVybmFsOjk4MzRcL2FwaVwvYXNcL3RyYW5zYWN0aW9uIiwiaWF0IjoxNTcyNjQyNjEzLCJqdGkiOiJIam9IcmpnbTJ5QjR4N2pBNXl5RyJ9.aUhftvfw2NoW3M7durkopReTvONng1fOzbWjAlKNSLL0qIwDgfG39XUyNvwQ23OBIwe6IuvTQ2UBBPklPAfJhDTKd8KHEAfidNB-LzUOzhDetLg30yLFzIpcEBMLCjb0TEsmXadvxuNkEzFRL-Q-QCg0AXSF1h57eAqZV8SYF4CQK9OUV6fIWwxLDd3cVTx83MgyCNnvFlG_HDyim1Xx-rxV4ePd1vgDeRubFb6QWjiKEO7vj1APv32dsux67gZYiUpjm0wEZprjlG0a07R984KLeK1XPjXgViEwEdlirUmpVyT9tyEYqGrTfm5uautELgMls9sgSyE929woZ59elg\n \n{\n    "client": {\n        "name": "My Client Display Name",\n        "uri": "https://example.net/client"\n    },\n    "resources": [\n        "dolphin-metadata"\n    ],\n    "interact": {\n        "redirect": true,\n        "callback": {\n    \t\t"uri": "https://client.foo",\n    \t\t"nonce": "VJLO6A4CAYLBXHTR0KRO"\n    \t}\n    },\n    "keys": {\n\t\t"proof": "dpop",\n        "jwks": {\n            "keys": [\n                {\n                    "kty": "RSA",\n                    "e": "AQAB",\n                    "kid": "xyz-1",\n                    "alg": "RS256",\n                    "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"\n                }\n            ]\n        }\n    }\n}\n'}),o.a.createElement(i.MDXTag,{name:"p",components:n},"The key is repeated in the DPoP header. This method notably signs only the request URL and method, the signature does not cover the body of the request. The body of the signed JWT in this example is:"),o.a.createElement(r.a,{language:"json",code:{http_method:"POST",http_uri:"http://host.docker.internal:9834/api/as/transaction",iat:1572642613,jti:"HjoHrjgm2yB4x7jA5yyG"}}),o.a.createElement(i.MDXTag,{name:"h2",components:n},"OAuth PoP Signature"),o.a.createElement(i.MDXTag,{name:"p",components:n},"OAuth's Proof of Possession token architecture also defined a ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:""}},"mechanism for signing HTTP messages")," in a draft that has since expired. However, the signature mechanism is still valid, and it works like a mix of the Cavage and DPoP methods."),o.a.createElement(r.a,{from:"client",to:"as",language:"http",codeString:'POST /transaction HTTP/1.1\nHost: server.example.com\nContent-Type: application/json\nPoP: eyJhbGciOiJSUzI1NiIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsImtpZCI6Inh5ei1jbGllbnQiLCJhbGciOiJSUzI1NiIsIm4iOiJ6d0NUXzNieC1nbGJiSHJoZVlwWXBSV2lZOUktbkVhTVJwWm5ScklqQ3M2Yl9lbXlUa0JrRERFalN5c2kzOE9DNzNoajEtV2d4Y1BkS05HWnlJb0gzUVplbjFNS3l5aFFwTEpHMS1vTE5McW03cFhYdGRZelNkQzlPMy1vaXl5OHlrTzRZVXlOWnJSUmZQY2loZFFDYk9fT0M4UXVnbWc5cmdORE9TcXBwZGFOZWFzMW92OVB4WXZ4cXJ6MS04SGE3Z2tEMDBZRUNYSGFCMDV1TWFVYWRIcS1PX1dJdllYaWNnNkk1ajZTNDRWTlU2NVZCd3UtQWx5blR4UWRNQVdQM2JZeFZWeTZwMy03ZVRKb2t2allURnFnRFZEWjhsVVhicjV5Q1RuUmhuaEpndmYzVmpEX21hbE5lOC10T3FLNU9TRGxIVHk2Z0Q5TnFkR0NtLVBtM1EifX0.eyJwIjoiXC9hcGlcL2FzXC90cmFuc2FjdGlvbiIsImIiOiJxa0lPYkdOeERhZVBTZnc3NnFjamtqSXNFRmxDb3g5bTU5NFM0M0RkU0xBIiwidSI6Imhvc3QuZG9ja2VyLmludGVybmFsIiwiaCI6W1siQWNjZXB0IiwiQ29udGVudC1UeXBlIiwiQ29udGVudC1MZW5ndGgiXSwiVjQ2OUhFWGx6Sk9kQTZmQU5oMmpKdFhTd3pjSGRqMUloOGk5M0h3bEVHYyJdLCJtIjoiUE9TVCIsInRzIjoxNTcyNjQyNjEwfQ.xyQ47qy8bu4fyK1T3Ru1Sway8wp65rfAKnTQQU92AUUU07I2iKoBL2tipBcNCC5zLH5j_WUyjlN15oi_lLHymfPdzihtt8_Jibjfjib5J15UlifakjQ0rHX04tPal9PvcjwnyZHFcKn-SoY3wsARn-gGwxpzbsPhiKQP70d2eG0CYQMA6rTLslT7GgdQheelhVFW29i27NcvqtkJmiAG6Swrq4uUgCY3zRotROkJ13qo86t2DXklV-eES4-2dCxfcWFkzBAr6oC4Qp7HnY_5UT6IWkRJt3efwYprWcYouOVjtRan3kEtWkaWrG0J4bPVnTI5St9hJYvvh7FE8JirIg\n \n{\n    "client": {\n        "name": "My Client Display Name",\n        "uri": "https://example.net/client"\n    },\n    "resources": [\n        "dolphin-metadata"\n    ],\n    "interact": {\n        "redirect": true,\n        "callback": {\n    \t\t"uri": "https://client.foo",\n    \t\t"nonce": "VJLO6A4CAYLBXHTR0KRO"\n    \t}\n    },\n    "keys": {\n\t\t"proof": "oauthpop",\n        "jwks": {\n            "keys": [\n                {\n                    "kty": "RSA",\n                    "e": "AQAB",\n                    "kid": "xyz-1",\n                    "alg": "RS256",\n                    "n": "kOB5rR4Jv0GMeLaY6_It_r3ORwdf8ci_JtffXyaSx8xYJCCNaOKNJn_Oz0YhdHbXTeWO5AoyspDWJbN5w_7bdWDxgpD-y6jnD1u9YhBOCWObNPFvpkTM8LC7SdXGRKx2k8Me2r_GssYlyRpqvpBlY5-ejCywKRBfctRcnhTTGNztbbDBUyDSWmFMVCHe5mXT4cL0BwrZC6S-uu-LAx06aKwQOPwYOGOslK8WPm1yGdkaA1uF_FpS6LS63WYPHi_Ap2B7_8Wbw4ttzbMS_doJvuDagW8A1Ip3fXFAHtRAcKw7rdI4_Xln66hJxFekpdfWdiPQddQ6Y1cK2U3obvUg7w"\n                }\n            ]\n        }\n    }\n}\n'}),o.a.createElement(i.MDXTag,{name:"p",components:n},"This method is notably robust against different HTTP transformations, and can cover the body, headers, and query of a request. However, it was designed to convey an access token, and so to be used in a transaction request we have to break the specification by not providing the mandatory ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"at")," field. The body of the signed JWT in this example is:"),o.a.createElement(r.a,{language:"json",code:{p:"/api/as/transaction",b:"qkIObGNxDaePSfw76qcjkjIsEFlCox9m594S43DdSLA",u:"host.docker.internal",h:[["Accept","Content-Type","Content-Length"],"V469HEXlzJOdA6fANh2jJtXSwzcHdj1Ih8i93HwlEGc"],m:"POST",ts:1572642610}}),o.a.createElement(i.MDXTag,{name:"h2",components:n},"Mutual TLS"),o.a.createElement(i.MDXTag,{name:"p",components:n},"The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"mtls")," key presentation method uses the client certificate presented at the TLS layer to authorize the transaction. No additional fields or headers are added to the HTTP message or JSON body, though a TLS terminating reverse proxy can communicate the client certificate to the AS through a special header, ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SSL_CLIENT_CERT")," in this example. "),o.a.createElement(r.a,{from:"client",to:"as",language:"http",codeString:'POST /transaction HTTP/1.1\nHost: server.example.com\nContent-Type: application/json\nSSL_CLIENT_CERT: MIIEHDCCAwSgAwIBAgIBATANBgkqhkiG9w0BAQsFADCBmjE3MDUGA1UEAwwuQmVz cG9rZSBFbmdpbmVlcmluZyBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eTELMAkG A1UECAwCTUExCzAJBgNVBAYTAlVTMRkwFwYJKoZIhvcNAQkBFgpjYUBic3BrLmlv MRwwGgYDVQQKDBNCZXNwb2tlIEVuZ2luZWVyaW5nMQwwCgYDVQQLDANNVEkwHhcN MTkwNDEwMjE0MDI5WhcNMjQwNDA4MjE0MDI5WjB8MRIwEAYDVQQDDAlsb2NhbGhv c3QxCzAJBgNVBAgMAk1BMQswCQYDVQQGEwJVUzEgMB4GCSqGSIb3DQEJARYRdGxz Y2xpZW50QGJzcGsuaW8xHDAaBgNVBAoME0Jlc3Bva2UgRW5naW5lZXJpbmcxDDAK BgNVBAsMA01USTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMmaXQHb s/wc1RpsQ6Orzf6rN+q2ijaZbQxD8oi+XaaN0P/gnE13JqQduvdq77OmJ4bQLokq sd0BexnI07Njsl8nkDDYpe8rNve5TjyUDCfbwgS7U1CluYenXmNQbaYNDOmCdHww UjV4kKREg6DGAx22Oq7+VHPTeeFgyw4kQgWRSfDENWY3KUXJlb/vKR6lQ+aOJytk vj8kVZQtWupPbvwoJe0na/ISNAOhL74w20DWWoDKoNltXsEtflNljVoi5nqsmZQc jfjt6LO0T7O1OX3Cwu2xWx8KZ3n/2ocuRqKEJHqUGfeDtuQNt6Jz79v/OTr8puLW aD+uyk6NbtGjoQsCAwEAAaOBiTCBhjAJBgNVHRMEAjAAMAsGA1UdDwQEAwIF4DBs BgNVHREEZTBjgglsb2NhbGhvc3SCD3Rsc2NsaWVudC5sb2NhbIcEwKgBBIERdGxz Y2xpZW50QGJzcGsuaW+GF2h0dHA6Ly90bHNjbGllbnQubG9jYWwvhhNzc2g6dGxz Y2xpZW50LmxvY2FsMA0GCSqGSIb3DQEBCwUAA4IBAQCKKv8WlLrT4Z5NazaUrYtl TF+2v0tvZBQ7qzJQjlOqAcvxry/d2zyhiRCRS/v318YCJBEv4Iq2W3I3JMMyAYEe 2573HzT7rH3xQP12yZyRQnetdiVM1Z1KaXwfrPDLs72hUeELtxIcfZ0M085jLboX hufHI6kqm3NCyCCTihe2ck5RmCc5l2KBO/vAHF0ihhFOOOby1v6qbPHQcxAU6rEb 907/p6BW/LV1NCgYB1QtFSfGxowqb9FRIMD2kvMSmO0EMxgwZ6k6spa+jk0IsI3k lwLW9b+Tfn/daUbIDctxeJneq2anQyU2znBgQl6KILDSF4eaOqlBut/KNZHHazJh\n \n{\n    "client": {\n        "name": "My Client Display Name",\n        "uri": "https://example.net/client"\n    },\n    "resources": [\n        "dolphin-metadata"\n    ],\n    "interact": {\n        "redirect": true,\n        "callback": {\n    \t\t"uri": "https://client.foo",\n    \t\t"nonce": "VJLO6A4CAYLBXHTR0KRO"\n    \t}\n    },\n    "keys": {\n        "proof": "mtls",\n        "cert": "MIIEHDCCAwSgAwIBAgIBATANBgkqhkiG9w0BAQsFADCBmjE3MDUGA1UEAwwuQmVzcG9rZSBFbmdpbmVlcmluZyBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eTELMAkGA1UECAwCTUExCzAJBgNVBAYTAlVTMRkwFwYJKoZIhvcNAQkBFgpjYUBic3BrLmlvMRwwGgYDVQQKDBNCZXNwb2tlIEVuZ2luZWVyaW5nMQwwCgYDVQQLDANNVEkwHhcNMTkwNDEwMjE0MDI5WhcNMjQwNDA4MjE0MDI5WjB8MRIwEAYDVQQDDAlsb2NhbGhvc3QxCzAJBgNVBAgMAk1BMQswCQYDVQQGEwJVUzEgMB4GCSqGSIb3DQEJARYRdGxzY2xpZW50QGJzcGsuaW8xHDAaBgNVBAoME0Jlc3Bva2UgRW5naW5lZXJpbmcxDDAKBgNVBAsMA01USTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMmaXQHbs/wc1RpsQ6Orzf6rN+q2ijaZbQxD8oi+XaaN0P/gnE13JqQduvdq77OmJ4bQLokqsd0BexnI07Njsl8nkDDYpe8rNve5TjyUDCfbwgS7U1CluYenXmNQbaYNDOmCdHwwUjV4kKREg6DGAx22Oq7+VHPTeeFgyw4kQgWRSfDENWY3KUXJlb/vKR6lQ+aOJytkvj8kVZQtWupPbvwoJe0na/ISNAOhL74w20DWWoDKoNltXsEtflNljVoi5nqsmZQcjfjt6LO0T7O1OX3Cwu2xWx8KZ3n/2ocuRqKEJHqUGfeDtuQNt6Jz79v/OTr8puLWaD+uyk6NbtGjoQsCAwEAAaOBiTCBhjAJBgNVHRMEAjAAMAsGA1UdDwQEAwIF4DBsBgNVHREEZTBjgglsb2NhbGhvc3SCD3Rsc2NsaWVudC5sb2NhbIcEwKgBBIERdGxzY2xpZW50QGJzcGsuaW+GF2h0dHA6Ly90bHNjbGllbnQubG9jYWwvhhNzc2g6dGxzY2xpZW50LmxvY2FsMA0GCSqGSIb3DQEBCwUAA4IBAQCKKv8WlLrT4Z5NazaUrYtlTF+2v0tvZBQ7qzJQjlOqAcvxry/d2zyhiRCRS/v318YCJBEv4Iq2W3I3JMMyAYEe2573HzT7rH3xQP12yZyRQnetdiVM1Z1KaXwfrPDLs72hUeELtxIcfZ0M085jLboXhufHI6kqm3NCyCCTihe2ck5RmCc5l2KBO/vAHF0ihhFOOOby1v6qbPHQcxAU6rEb907/p6BW/LV1NCgYB1QtFSfGxowqb9FRIMD2kvMSmO0EMxgwZ6k6spa+jk0IsI3klwLW9b+Tfn/daUbIDctxeJneq2anQyU2znBgQl6KILDSF4eaOqlBut/KNZHHazJh"\n    }\n}\n'}),o.a.createElement(i.MDXTag,{name:"p",components:n},"Notice that in this example, the same certificate is presented in slightly different serializations: the header includes whitespace between sections whereas the JSON value does not. The AS needs to parse both of these strings as certificates to compare them to each other properly instead of just doing a simple string comparison. "))},a}(o.a.Component),p={}}}]);
//# sourceMappingURL=component---src-pages-keys-mdx-05d9b3bb125d340bdd06.js.map