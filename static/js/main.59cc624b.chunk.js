(this.webpackJsonpreco=this.webpackJsonpreco||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(1),r=s.n(n),c=s(7),a=s.n(c),o=(s(12),s(3)),i=s(4),u=s(6),l=s(5),d=(s(13),s.p+"static/media/sample.3bb1b856.jpg"),j=s(0),b=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={likes:0,category:null},n}return Object(i.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{src:d,alt:"testing"}),Object(j.jsx)("p",{children:"Sample Picture"})]})}}]),s}(r.a.Component);function h(){return Object(j.jsx)("div",{className:"search",children:Object(j.jsxs)("form",{className:"search-form",children:[Object(j.jsx)("input",{className:"seach-bar",type:"search",placeholder:"Type here to search for a topic"}),Object(j.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]})})}var p=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(o.a)(this,s),(n=e.call(this,t)).state={foods:[],drinks:[],show_foods:!0,show_drinks:!0,postArr:[]},n}return Object(i.a)(s,[{key:"renderPosts",value:function(t){var e=t.map((function(t,e){return Object(j.jsx)(b,{},e)}));return Object(j.jsx)("ul",{children:e})}},{key:"addNewPost",value:function(){var t=this.state.foods;t.unshift(b),this.setState({posts:t})}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)("button",{className:"upload-button",onClick:function(){return t.addNewPost()},children:"Upload"}),Object(j.jsx)("button",{className:"upload-button",onClick:function(){return t.setState({postArr:t.state.foods})},children:"food"}),Object(j.jsx)("button",{className:"upload-button",onClick:function(){return t.setState({postArr:t.state.drinks})},children:"drinks"}),this.renderPosts(this.state.postArr)]})}}]),s}(r.a.Component);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.59cc624b.chunk.js.map