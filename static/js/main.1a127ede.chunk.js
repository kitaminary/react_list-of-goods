(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(4),o=n.n(s),i=n(2),r=n(5),c=n(6),a=n(9),u=n(8),l=n(7),d=n.n(l),b=n(1),g=n.n(b),h=(n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={visibleStart:!1,resetGoods:[].concat(j),goods:[].concat(j)},t}return Object(c.a)(n,[{key:"reversed",value:function(){this.setState((function(t){return{goods:Object(i.a)(t.goods).reverse()}}))}},{key:"sortByAlfabet",value:function(){this.setState((function(t){return{goods:Object(i.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))}},{key:"reset",value:function(){this.setState((function(t){return{goods:t.resetGoods}}))}},{key:"sortByLength",value:function(){this.setState((function(t){return{goods:Object(i.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.visibleStart,s=e.goods;return Object(h.jsx)("div",{className:"good",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"good__title title is-3",children:"List of goods"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.setState({visibleStart:!0})},className:d()("button is-warning good__start-button is-medium",{"is-hidden":!0===n}),children:"Start"}),Object(h.jsx)("div",{className:"good__list-block",children:n&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"good__list",children:s.map((function(t){return Object(h.jsx)("li",{className:"good__item subtitle is-3",children:t},t)}))}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.reversed()},className:"button is-warning is-medium",children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.sortByAlfabet()},className:"button is-warning is-medium",children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.reset()},className:"button is-warning is-medium",children:"Reset"}),Object(h.jsx)("button",{type:"button",onClick:function(){return t.sortByLength()},className:"button is-warning is-medium",children:"Sort by length"})]})})]})})}}]),n}(g.a.Component),f=m;o.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1a127ede.chunk.js.map