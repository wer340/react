(this.webpackJsonpmoster_app=this.webpackJsonpmoster_app||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(13),n(3)),s=n(4),l=n(6),u=n(5),m=n(7),h=(n(14),n(15),n(16),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"flower",src:window.location.origin+"/image/image0".concat(e.Monstering.id,".jpg")}),r.a.createElement("h1",null,e.Monstering.name),r.a.createElement("h3",null,e.Monstering.email))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.Love.map((function(e){return r.a.createElement(h,{key:e.id,Monstering:e})})))},p=(n(17),function(e){var t=e.placeHolder,n=e.handleSearchBox;return r.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({serachField:t.target.value})},e.state={message:"my world getting little for this resents approach me ",monsters:[],serachField:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.serachField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"This is a minature cinema For intersting into Art"),r.a.createElement(p,{placeHolder:"Enter your Name",handleSearchBox:this.handleChange}),r.a.createElement(d,{Love:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.b039bb25.chunk.js.map