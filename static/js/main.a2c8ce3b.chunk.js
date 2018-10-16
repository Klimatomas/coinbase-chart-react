(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(25)},,,,,function(t,e,a){},,function(t,e,a){},,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(6),s=a.n(i),c=(a(14),a(1)),o=a(2),l=a(4),h=a(3),u=a(5),v=(a(16),a(7)),m=a.n(v),g=(a(19),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={hover:null,activePoint:null},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"getX",value:function(){var t=this.props.data;return{min:t[0].x,max:t[t.length-1].x}}},{key:"getY",value:function(){var t=this.props.data;return{min:t.reduce(function(t,e){return e.y<t?e.y:t},t[0].y),max:t.reduce(function(t,e){return e.y>t?e.y:t},t[0].y)}}},{key:"getSvgX",value:function(t){var e=this.props,a=e.svgWidth,n=e.yLabelSize;return n+t/this.getX().max*(a-n)}},{key:"getSvgY",value:function(t){var e=this.props,a=e.svgHeight,n=e.xLabelSize,r=this.getY();return((a-n)*r.max-(a-n)*t)/(r.max-r.min)}},{key:"getCoords",value:function(t){var e=this,a=this.props,n=a.svgWidth,r=a.data,i=a.yLabelSize,s=document.getElementsByClassName("linechart")[0].getBoundingClientRect(),c=(s.width-n)/2,o=t.clientX-s.left-c,l=[];r.map(function(t){return l.push({svgX:e.getSvgX(t.x),svgY:e.getSvgY(t.y),d:t.d,p:t.p})});for(var h={},u=0,v=500;u<l.length;u++)Math.abs(l[u].svgX-this.state.hover)<=v&&(v=Math.abs(l[u].svgX-this.state.hover),h=l[u]);o-i<0?this.stopHover():(this.setState({hover:o,activePoint:h}),this.props.onChartHover(o,h))}},{key:"stopHover",value:function(){this.setState({hover:null,activePoint:null}),this.props.onChartHover(null,null)}},{key:"makePath",value:function(){var t=this,e=this.props,a=e.data,n=e.color,i="M "+this.getSvgX(a[0].x)+" "+this.getSvgY(a[0].y)+" ";return i+=a.map(function(e,a){return"L "+t.getSvgX(e.x)+" "+t.getSvgY(e.y)+" "}).join(""),r.a.createElement("path",{className:"linechart__path",d:i,style:{stroke:n}})}},{key:"makeArea",value:function(){var t=this,e=this.props.data,a="M ".concat(this.getSvgX(e[0].x)," ").concat(this.getSvgY(e[0].y));a+=e.map(function(e,a){return"L ".concat(t.getSvgX(e.x)," ").concat(t.getSvgY(e.y))}).join("");var n=this.getX(),i=this.getY();return a+="L ".concat(this.getSvgX(n.max)," ").concat(this.getSvgY(i.min)," L ").concat(this.getSvgX(n.min)," ").concat(this.getSvgY(i.min)),r.a.createElement("path",{className:"linechart__area",d:a})}},{key:"makeLabels",value:function(){var t=this.props,e=t.svgHeight,a=t.svgWidth,n=t.xLabelSize,i=t.yLabelSize;return r.a.createElement("g",{className:"linechart__label"},r.a.createElement("text",{transform:"translate(".concat(i/2,", 20)"),textAnchor:"middle"},this.getY().max.toLocaleString("us-EN",{style:"currency",currency:"USD"})),r.a.createElement("text",{transform:"translate(".concat(i/2,", ").concat(e-n-5,")"),textAnchor:"middle"},this.getY().min.toLocaleString("us-EN",{style:"currency",currency:"USD"})),r.a.createElement("text",{transform:"translate(".concat(i,", ").concat(e,")"),textAnchor:"start"},this.props.data[0].d),r.a.createElement("text",{transform:"translate(".concat(a,", ").concat(e,")"),textAnchor:"end"},this.props.data[this.props.data.length-1].d))}},{key:"makeAxis",value:function(){var t=this.props.yLabelSize,e=this.getX(),a=this.getY();return r.a.createElement("g",{className:"linechart__axis"},r.a.createElement("line",{x1:this.getSvgX(e.min)-t,y1:this.getSvgY(a.min),x2:this.getSvgX(e.max),y2:this.getSvgY(a.min),strokeDasharray:"5"}),r.a.createElement("line",{x1:this.getSvgX(e.min)-t,y1:this.getSvgY(a.max),x2:this.getSvgX(e.max),y2:this.getSvgY(a.max),strokeDasharray:"5"}))}},{key:"createLine",value:function(){var t=this.props,e=t.svgHeight,a=t.xLabelSize;return r.a.createElement("line",{className:"hoverline",x1:this.state.hover,y1:-8,x2:this.state.hover,y2:e-a})}},{key:"makeActivePoint",value:function(){var t=this.props,e=t.color,a=t.pointRadius;return r.a.createElement("circle",{className:"linechart__point",style:{stroke:e},r:a,cx:this.state.activePoint.svgX,cy:this.state.activePoint.svgY})}},{key:"render",value:function(){var t=this,e=this.props,a=e.svgHeight,n=e.svgWidth;return r.a.createElement("svg",{width:n,height:a,viewBox:"0 0 ".concat(n," ").concat(a),className:"linechart",onMouseLeave:function(){return t.stopHover()},onMouseMove:function(e){return t.getCoords(e)}},r.a.createElement("g",null,this.makeAxis(),this.makePath(),this.makeArea(),this.makeLabels(),this.state.hover?this.createLine():null,this.state.hover?this.makeActivePoint():null))}}]),e}(n.Component));g.defaultProps={data:[],color:"#ccc",pointRadius:5,svgHeight:300,svgWidth:900,xLabelSize:20,yLabelSize:80};var d=g,p=(a(21),function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props,e=t.hover,a=t.activePoint,n=document.getElementsByClassName("linechart")[0].getBoundingClientRect(),i={};return i.width="100px",i.left=e+n.left-50,r.a.createElement("div",{className:"hover",style:i},r.a.createElement("div",{className:"date"},a.d),r.a.createElement("div",{className:"hover__price"},a.p))}}]),e}(n.Component)),f=(a(23),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={currentPrice:null,monthChangeD:null,monthChangeP:null,updatedAt:null},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.getData=function(){var e=t.props.data;fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(function(t){return t.json()}).then(function(a){var n=a.bpi.USD.rate_float,r=n-e[0].y,i=(n-e[0].y)/e[0].y*100;t.setState({currentPrice:a.bpi.USD.rate_float,monthChangeD:r.toLocaleString("us-EN",{style:"currency",currency:"USD"}),monthChangeP:i.toFixed(2)+"%",updatedAt:a.time.updated})}).catch(function(t){return console.error("Error ".concat(t))})},this.getData(),this.refresh=setInterval(function(){return t.getData()},9e4)}},{key:"componentWillUpdate",value:function(){s.a.findDOMNode(this).classList.add("currentPrice")}},{key:"componentDidUpdate",value:function(){var t=s.a.findDOMNode(this);setTimeout(function(){t.classList.remove("currentPrice")},1e3)}},{key:"render",value:function(){return r.a.createElement("div",{id:"data-container"},this.state.currentPrice?r.a.createElement("div",{id:"left",className:"box"},r.a.createElement("div",{className:"heading"},this.state.currentPrice.toLocaleString("us-EN",{style:"currency",currency:"USD"})),r.a.createElement("div",{className:"subtext"},"Updated "+m()(this.state.updatedAt).fromNow())):null,this.state.monthChangeD?r.a.createElement("div",{id:"middle",className:"box"},r.a.createElement("div",{className:"heading"},this.state.monthChangeD),r.a.createElement("div",{className:"subtext"},"Changed since last Month")):null,this.state.monthChangeP?r.a.createElement("div",{id:"right",className:"box"},r.a.createElement("div",{className:"heading"},this.state.monthChangeP),r.a.createElement("div",{className:"subtext"},"Changed since last Month")):null)}}]),e}(n.Component)),y=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={fetchingData:!0,data:null,hover:null,activePoint:null},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"handleChartHover",value:function(t,e){this.setState({hover:t,activePoint:e})}},{key:"componentDidMount",value:function(){var t=this;fetch("https://api.coindesk.com/v1/bpi/historical/close.json").then(function(t){return t.json()}).then(function(e){var a=[],n=0;for(var r in e.bpi)a.push({d:m()(r).format("MMM DD"),p:e.bpi[r].toLocaleString("us-EN",{style:"currency",currency:"USD"}),x:n,y:e.bpi[r]}),n++;t.setState({data:a,fetchingData:!1})}).catch(function(t){return console.error("Error ".concat(t))})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"infobox"},this.state.fetchingData?null:r.a.createElement(f,{data:this.state.data}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"popup"},this.state.hover?r.a.createElement(p,{hover:this.state.hover,activePoint:this.state.activePoint}):null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"chart"},this.state.fetchingData?null:r.a.createElement(d,{data:this.state.data,onChartHover:function(e,a){return t.handleChartHover(e,a)}}))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.a2c8ce3b.chunk.js.map