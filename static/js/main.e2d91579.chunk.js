(this.webpackJsonpchirper=this.webpackJsonpchirper||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/girl.36f39706.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/cat.a5bbcc98.jpg"},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){e.exports=a.p+"static/media/boy.c44a0131.jpg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),s=a.n(i),l=a(8),c=a(1),o=a(2),m=a(4),u=a(3),p=a(6),h=a(5);var d=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Chirp"))};var b=function(e){return r.a.createElement("div",{className:"userImg"},r.a.createElement("img",{src:e.avatar,alt:"",className:"userImg"}))},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.props.likeCounts()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"counter"},r.a.createElement("span",{class:"like",onClick:this.handleClick,likes:this.props.likes,key:this.props.id}," Like"),this.props.likes))}}]),t}(n.Component);var f=function(e){return console.log(e),r.a.createElement("div",{className:"userName"},e.username)};var k=function(e){console.log(e);var t=JSON.stringify(e.update);return t=t.substr(12,[5]),r.a.createElement("span",{className:"date"},t)};var j=function(){return r.a.createElement("a",{href:"http://",className:"reply"},"comment")};var E=function(e){console.log(e.emojis);var t=e.emojis.map((function(e){return e+"   "}));return r.a.createElement(r.a.Fragment,null,t)};var O=function(e){return r.a.createElement("div",{className:"messageDisplay"},e.comment)},y=function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e)),console.log(e),a.handleClickTransfer=a.handleClickTransfer.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleClickTransfer",value:function(){var e=this.props.post.likes+1;this.props.handleAllClicks(e,this.props.post.id)}},{key:"render",value:function(){console.log(this.props.post.name);var e=r.a.createElement("div",{className:"postCard"},r.a.createElement(b,{avatar:this.props.post.avatarUrl}),r.a.createElement("div",{className:"rightCard"},r.a.createElement("div",{className:"topItem"},r.a.createElement("span",{id:"userName"},r.a.createElement(f,{username:this.props.post.name})),r.a.createElement(k,{update:this.props.post.date})),r.a.createElement(O,{className:"userPost",comment:this.props.post.comment}),r.a.createElement("div",{className:"bottomItem"},r.a.createElement("span",{className:"reply"},r.a.createElement(j,null)),r.a.createElement("span",{className:"like"},r.a.createElement(v,{likeCounts:this.handleClickTransfer,likes:this.props.post.likes})),r.a.createElement("span",{className:"emoji"},r.a.createElement(E,{emojis:this.props.post.emoticon})))));return r.a.createElement(r.a.Fragment,null,e)}}]),t}(n.Component),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).compileLikes=e.compileLikes.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"compileLikes",value:function(e,t){this.props.submitLikes(e,t)}},{key:"render",value:function(){var e=this,t=this.props.stream.map((function(t){return r.a.createElement(y,{post:t,handleAllClicks:e.compileLikes})}));return r.a.createElement("div",null,t)}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",null,"Filter"),r.a.createElement("li",null,"Sort")))}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"leftNav"},r.a.createElement("p",null))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"rightNav"},r.a.createElement("p",null))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={output:""},e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e.handleChange=e.handleChange.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){var t=this.state.output;e.preventDefault(),this.props.formSubmit(t),this.setState({output:""})}},{key:"handleChange",value:function(e){this.setState({output:e.target.value})}},{key:"render",value:function(){return r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"What's on your mind...",className:"message",value:this.state.output,onChange:this.handleChange,idComment:this.props.idStream}),r.a.createElement("input",{className:"btn",type:"button",value:"Submit"}))}}]),t}(n.Component),D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={dataStream:[{id:Date.now()-100,date:new Date,name:"Paul",avatarUrl:a(17),comment:"going to the beach",reply:["sending mails","Christmas is fun","Dinner almost ready"],likes:0,emoticon:[" :-) "," :/ "," :( "," :| "]},{id:Date.now()-200,date:new Date,name:"Koby",avatarUrl:a(10),comment:"wash the face",reply:["everyday","Where are you going?","with?"],likes:0,emoticon:[" :-) "," :/ "," :( "," :| "]},{id:Date.now()-300,date:new Date,name:"Lobs",avatarUrl:a(7),comment:"Potassium diclorate is really awesome if you really can spend more time evaluating it",reply:["anything is fine, really","Sing it","lol"],likes:0,emoticon:[" :-) "," :/ "," :( "," :| "]},{id:Date.now()-400,date:new Date,name:"Theresa",avatarUrl:a(10),comment:"The French team are going to win the World Cup",reply:["Easy peasy","That is not fun","Oui Oui"],likes:0,emoticon:[" :-) "," :/ "," :( "," :| "]},{id:Date.now()-500,date:new Date,name:"Quinn",avatarUrl:a(7),comment:"I dunno what to say",reply:["really?","Tell that to Becker","ding dong"],likes:0,emoticon:[" :-) "," :/ "," :( "," :| "]}]},n.addLikes=n.addLikes.bind(Object(p.a)(n)),n.addMessage=n.addMessage.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"addMessage",value:function(e){var t={id:Date.now(),date:new Date,name:"Lobs",avatarUrl:a(7),comment:"",reply:["Easy peasy","That is not fun","Oui Oui"],likes:0,emoticon:[" :-) "," :/ "," :( "," :| "]};t.comment=e;var n=Object(l.a)(this.state.dataStream);n.unshift(t),this.setState({dataStream:n})}},{key:"addLikes",value:function(e,t){var a=Object(l.a)(this.state.dataStream);a.forEach((function(a){a.id===t&&Object.assign(a,{likes:e})})),this.setState({dataStream:a})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{headerStream:this.state.dataStream}),r.a.createElement(C,{navStream:this.state.dataStream}),r.a.createElement("main",null,r.a.createElement(S,{leftStream:this.state.dataStream}),r.a.createElement("div",null,r.a.createElement(w,{formSubmit:this.addMessage,idStream:this.state.dataStream}),r.a.createElement(g,{stream:this.state.dataStream,submitLikes:this.addLikes})),r.a.createElement(N,{rightStream:this.state.dataStream})))}}]),t}(n.Component);a(18);var L=function(){return r.a.createElement("div",null,r.a.createElement(D,null))};s.a.render(r.a.createElement(L,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.e2d91579.chunk.js.map