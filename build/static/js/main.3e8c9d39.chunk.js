(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.e22fa062.png"},,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),i=a.n(r),o=(a(15),a(1)),c=a(2),l=a(5),u=a(3),m=a(6),d=a(4),p=(a(16),a(17),s.a.Component,a(7)),h=a.n(p),b=(a(18),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={days:0,hours:0,minutes:0,seconds:0},e.updateTimer=e.updateTimer.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"timer"},s.a.createElement("span",null,this.state.days),":",s.a.createElement("span",null,this.state.hours),":",s.a.createElement("span",null,this.state.minutes),":",s.a.createElement("span",null,this.state.seconds))}},{key:"componentDidMount",value:function(){setInterval(this.updateTimer,1e3)}},{key:"updateTimer",value:function(){var e=new Date,t=new Date("Feb 20, 2020")-e,a=parseInt(t/864e5);t%=864e5;var n=parseInt(t/36e5);t%=36e5;var s=parseInt(t/6e4);t%=6e4;var r=parseInt(t/1e3);a<10&&(a="0"+a),n<10&&(n="0"+n),s<10&&(s="0"+s),r<10&&(r="0"+r),this.setState({days:a,hours:n,minutes:s,seconds:r})}}]),t}(s.a.Component)),f=(a(19),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="logo ";switch(this.props.size){case 0:e+="logo-small";break;case 1:e+="logo-medium";break;case 2:e+="logo-large";break;default:e+="logo-default"}return s.a.createElement("img",{src:h.a,className:e})}}]),t}(s.a.Component)),v=(a(20),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={days:0},e.updateTimer=e.updateTimer.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement(f,{size:1}),s.a.createElement("h1",{className:"title"},this.state.days," days to go"),s.a.createElement(b,null),s.a.createElement("span",{className:"event-date"},"Feb 20 21 22 23",s.a.createElement("br",null),s.a.createElement("span",{className:"gect"},"Government Engineering College, Thrissur"),s.a.createElement("br",null),s.a.createElement("span",{className:"insta"},s.a.createElement("a",{href:"https://www.instagram.com/dyuthilive/"},"@dyuthilive"))))}},{key:"componentDidMount",value:function(){this.updateTimer()}},{key:"updateTimer",value:function(){var e=new Date,t=new Date("Feb 20, 2020"),a=parseInt((t-e)/864e5);this.setState({days:a})}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.3e8c9d39.chunk.js.map