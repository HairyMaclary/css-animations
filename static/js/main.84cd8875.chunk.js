(this["webpackJsonpcss-animations"]=this["webpackJsonpcss-animations"]||[]).push([[0],{27:function(n,e,t){n.exports=t(78)},32:function(n,e,t){},33:function(n,e,t){},58:function(n,e){},77:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(20),i=t.n(r),s=(t(32),t(33),t(21)),l=t(22),c=t(25),d=t(26),f=t(23),p=t.n(f),h=t(24),m=t.n(h);function u(n){var e=n.code,t=e.css,a=e.html,r="animation-".concat(n.index),i=o.a.createElement("div",{className:r},p()(a));return o.a.createElement("div",null,o.a.createElement("div",{className:"bob"},m.a.it(t,i)))}function x(n){return o.a.createElement("div",{className:"codeBlock"},o.a.createElement("pre",null,o.a.createElement("code",null,n.code.html),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("code",null,n.code.css)))}var b=[{description:"test 1",html:'<a href="#"><span></span>hover me</a>',importantProperties:["opacity","transform"],css:'a {\n        width: 220px;\n        height: 80px;\n        color: #ff0;\n        background-color: transparent;\n        font-size: 26px;\n        text-decoration: none;\n        text-transform: uppercase;\n        text-align: center;\n        line-height: 80px;\n        transition: all 0.5s;\n        position: relative;\n      }\n      \n      a:before,\n      a:after {\n        content: "";\n        position: absolute;\n        top: 50%;\n        width: 20px;\n        height: 20px;\n        background-color: #ff0;\n        border-radius: 50%;\n        transform: translateY(-50%);\n        transition: all 0.3s;\n        z-index: -1;\n        opacity: 0;\n      }\n      \n      a:before {\n        left: 0;\n        box-shadow: -100px 0 0 #ff0;\n      }\n      \n      a:after {\n        right: 0;\n        box-shadow: 100px 0 0 #ff0;\n      }\n      \n      a:hover:before {\n        left: 50%;\n        box-shadow: 30px 0 0 #ff0;\n        transform: translateX(-50%) translateY(-50%);\n        opacity: 1;\n      }\n      \n      a:hover:after {\n        right: 50%;\n        box-shadow: -30px 0 0 #ff0;\n        transform: translateX(50%) translateY(-50%);\n        opacity: 1;\n      }\n      \n      span {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #ff0;\n        border-radius: 8px;\n        transform: scale(0);\n        transition: all 0.3s;\n        z-index: -1;\n      }\n      \n      a:hover span {\n        transform: scale(1);\n        transition-delay: 0.4s;\n      }\n      \n      a:hover {\n        color: #262626;\n        transition-delay: 0.4s;\n      }\n      '},{description:"test 2",html:'<a href="#"><span></span>hover me aswell</a>',importantProperties:["text-decoration","border-radius"],css:'a {\n    width: 220px;\n    height: 80px;\n    color: green;\n    background-color: transparent;\n    font-size: 26px;\n    text-transform: uppercase;\n    text-align: center;\n    line-height: 80px;\n    transition: all 0.5s;\n    position: relative;\n  }\n  \n  a:before,\n  a:after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    width: 20px;\n    height: 20px;\n    background-color: #ff0;\n    border-radius: 50%;\n    transform: translateY(-50%);\n    transition: all 0.3s;\n    z-index: -1;\n    opacity: 0;\n  }\n  \n  a:before {\n    left: 0;\n    box-shadow: -100px 0 0 #ff0;\n  }\n  \n  a:after {\n    right: 0;\n    box-shadow: 100px 0 0 #ff0;\n  }\n  \n  a:hover:before {\n    left: 50%;\n    box-shadow: 30px 0 0 #ff0;\n    transform: translateX(-50%) translateY(-50%);\n    opacity: 1;\n  }\n  \n  a:hover:after {\n    right: 50%;\n    box-shadow: -30px 0 0 #ff0;\n    transform: translateX(50%) translateY(-50%);\n    opacity: 1;\n  }\n  \n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ff0;\n    border-radius: 8px;\n    transform: scale(0);\n    transition: all 0.3s;\n    z-index: -1;\n  }\n  \n  a:hover span {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n  \n  a:hover {\n    color: #262626;\n    transition-delay: 0.4s;\n  }\n  '}],v=(t(77),function(n){Object(d.a)(t,n);var e=Object(c.a)(t);function t(n){var a;return Object(s.a)(this,t),(a=e.call(this,n)).clickHandler=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log("clicked")},a.state={animations:b,displayedAnimation:b[0]},a}return Object(l.a)(t,[{key:"updateStyle",value:function(n,e){}},{key:"animations",value:function(){var n=this;return this.state.animations.map((function(e,t){var a=e.html,r=e.css;return o.a.createElement(u,{key:t,index:t,code:{css:r,html:a},updateStyle:function(){return n.clickHandler()}})}))}},{key:"render",value:function(){var n=this.state.displayedAnimation.html,e=this.state.displayedAnimation.css;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"animations-container"},this.animations()),o.a.createElement(x,{code:{css:e,html:n}}))}}]),t}(o.a.Component));var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"header-img"})),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.84cd8875.chunk.js.map