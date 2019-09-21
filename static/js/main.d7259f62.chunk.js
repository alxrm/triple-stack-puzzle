(window["webpackJsonptriple-stack-puzzle"]=window["webpackJsonptriple-stack-puzzle"]||[]).push([[0],{36:function(n,e,t){n.exports=t(47)},41:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r,a=t(0),i=t.n(a),o=t(21),c=t.n(o),u=(t(41),t(6)),l=t(11),s=t(12),h=t(31),v=t(22),d=t(8),f=t(32),b=t(2),p=t(3),k=t(33),O=t(23),m=t(5),w=(r={},Object(m.a)(r,1,"#ffde03"),Object(m.a)(r,2,"#0336FF"),Object(m.a)(r,3,"#FF0266"),r),j=t(24);function g(){var n=Object(b.a)(["\n  width: 10vh;\n  height: 10vh;\n"]);return g=function(){return n},n}function y(){var n=Object(b.a)(['\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: rotate(45deg);\n  \n  ::before, ::after {\n    content: "";\n    position: absolute;\n    z-index: -1;\n    background-color: #4a4a4a;\n  }\n  \n  ::before {\n    left: 50%;\n    width: 10%;\n    margin-left: -5%;\n    height: 100%;\n  }\n  \n  ::after {\n    top: 50%;\n    height: 10%;\n    margin-top: -5%;\n    width: 100%;\n  }\n']);return y=function(){return n},n}function x(){var n=Object(b.a)(["\n     cursor: pointer;\n\n     :hover {\n       box-shadow: 0 0 0 0.5vh #cfcfcf;\n     }\n  "]);return x=function(){return n},n}function E(){var n=Object(b.a)(["\n     box-shadow: 0 0 0 0.5vh #cfcfcf;\n  "]);return E=function(){return n},n}function S(){var n=Object(b.a)(["\n  width: 10vh;\n  height: 10vh;\n  background-color: ",";\n  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n  border-radius: 4px;\n  box-shadow: 0 0 0 0.5vh transparent;\n  \n   ","\n   \n   ","\n"]);return S=function(){return n},n}var z=Object(p.b)(O.a)(S(),(function(n){var e=n.color;return void 0===e?"#383b41":e}),(function(n){return n.selected&&Object(p.a)(E())}),(function(n){return!n.locked&&j.isBrowser&&Object(p.a)(x())})),C=p.b.div(y()),F=p.b.div(g()),M=function(n){var e=n.locked,t=n.data,r=n.row,a=n.column,o=n.onCellSwiped,c=t>0&&!e?function(n){var e=n.dir;return o(e,r,a,t)}:null;return i.a.createElement(z,{color:w[t],locked:e||-1===t,onSwiped:c,trackMouse:!0,preventDefaultTouchmoveEvent:!0},-1===t?i.a.createElement(C,null):i.a.createElement("span",null))};function B(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return B=function(){return n},n}function G(){var n=Object(b.a)(["\n  width: 60vh;\n  height: 60vh;\n  margin-top: 2vh;\n  background-color: #2b2f34;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n"]);return G=function(){return n},n}var I=p.b.div(G()),A=p.b.div(B()),N=function(n){var e=n.plane,t=Object(k.a)(n,["plane"]);return i.a.createElement(I,null,e.map((function(n,e){return i.a.createElement(A,{key:e},n.map((function(n,r){return i.a.createElement(M,Object.assign({key:r,data:n,row:e,column:r},t))})))})))},D={left:"Left",up:"Up",right:"Right",down:"Down"},J=t(4),P=t(18),R=t.n(P),W=t(9),L=t.n(W),T=t(27),U=t.n(T),$=t(13),q=t.n($),H=t(28),K=t.n(H),Q=t(14),V=t.n(Q),X=t(29),Y=t.n(X),Z=t(19),_=t.n(Z),nn=t(30),en=t.n(nn),tn=new(function(){function n(){Object(l.a)(this,n),this.size=5,this.createNew()}return Object(s.a)(n,[{key:"makePlane",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=L()(R()(Array(e),R()(Array(e),0)),(function(n,e){return L()(n,(function(n,t){return e%2===0&&t%2===1?-1:0}))}));return L()(t,(function(e){return L()(e,(function(e,t){return n.groupOrder[t]||e}))}))}},{key:"move",value:function(n,e,t,r){if(this.canMove(n,e,t,r)){var a=this.plane[t][r],i=this.blankIndexOf(t,r);this.plane[t][r]=this.plane[n][e],this.plane[n][e]=a,this.blanks[i]=[n,e]}}},{key:"canMove",value:function(n,e,t,r){var a=Object(J.a)(this.plane);return!(Math.abs(t-n)>1||Math.abs(r-e)>1)&&((n!==e||t!==r)&&((n===t||e===r)&&(!(t<0||t>=this.size||r<0||r>=this.size)&&(!(n<0||n>=this.size||e<0||e>=this.size)&&(a[n][e]>0&&0===a[t][r])))))}},{key:"isSolved",value:function(){var n=this.groupOrder,e=Object(J.a)(this.plane);return V()(e,(function(e){return V()(e,(function(t,r){return!n[r]||e[r]===n[r]}))}))}},{key:"isSolvedForGroup",value:function(n){var e=this,t=parseInt(U()(Object.keys(this.groupOrder),(function(t){return e.groupOrder[t]===n})));return V()(this.plane,(function(e){return e[t]===n}))}},{key:"isBlank",value:function(n,e){return 0!==this.blankIndexOf(n,e)}},{key:"createNew",value:function(){this.groupOrder=n.makeGroupOrder(),this.plane=this.makePlane(this.size),this.blanks=this.findBlanks(),this.shuffle()}},{key:"shuffle",value:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3,e=0;e<n;e++){var t=_()(this.blanks.length-1),r=Object(u.a)(this.blanks[t],2),a=r[0],i=r[1],o=this.validMoves(a,i);if(o.length){var c=_()(o.length-1),l=Object(u.a)(o[c],2),s=l[0],h=l[1];this.move(s,h,a,i)}}}},{key:"blankIndexOf",value:function(n,e){var t=Object(J.a)(this.blanks);return en()(t,(function(t){var r=Object(u.a)(t,2),a=r[0],i=r[1];return a===n&&i===e}))}},{key:"validMoves",value:function(n,e){for(var t=[],r=-1;r<2;r++)for(var a=-1;a<2;a++){var i=[n+r,e+a],o=i[0],c=i[1];this.canMove(o,c,n,e)&&(t=[].concat(Object(J.a)(t),[i]))}return t}},{key:"findBlanks",value:function(){var n=Object(J.a)(this.plane),e=[];return q()(n,(function(n,t){return q()(n,(function(n,r){0===n&&(e=[].concat(Object(J.a)(e),[[t,r]]))}))})),e}}],[{key:"makeGroupOrder",value:function(){var n={};return q()(K()([1,2,3]),(function(e,t){return Y()(n,Object(m.a)({},2*t,e))})),n}}]),n}());function rn(){var n=Object(b.a)(["\n  cursor: pointer;\n  border-top: none;\n  transition: box-shadow 0.2s ease-in-out;\n  border-radius: 4px;\n  padding: 4px;\n  font-size: 2.5vh;\n  box-shadow: 0 0 0 0.1vh white;\n  \n  :hover {\n    box-shadow: 0 0 0 0.3vh white;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(b.a)(["\n  color: white;\n  letter-spacing: 0;\n  padding: 2vh 0;\n  display: flex;\n  align-items: center;\n  font-size: 3.5vh;\n  justify-content: space-between;\n"]);return an=function(){return n},n}function on(){var n=Object(b.a)(["\n  width: 150vh;\n  height: 100vh;\n  display: flex;\n  max-width: 90vw;\n  align-items: center;\n  justify-content: center;\n"]);return on=function(){return n},n}var cn=p.b.div(on()),un=p.b.div(an()),ln=p.b.span(rn()),sn=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(h.a)(this,Object(v.a)(e).call(this,n))).state={plane:tn.plane},t.restart=t.restart.bind(Object(d.a)(t)),t.handleCellSwipe=t.handleCellSwipe.bind(Object(d.a)(t)),t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"restart",value:function(){tn.createNew(),this.setState({plane:tn.plane})}},{key:"handleCellSwipe",value:function(n,e,t){switch(n){case D.left:tn.move(e,t,e,t-1);break;case D.up:tn.move(e,t,e-1,t);break;case D.right:tn.move(e,t,e,t+1);break;case D.down:tn.move(e,t,e+1,t);break;default:console.log(n,"did nothing")}this.setState({plane:tn.plane})}},{key:"render",value:function(){var n=this,e=this.state.plane,t=Object.values(tn.groupOrder),r=Object(u.a)(t,3),a=r[0],o=r[1],c=r[2];return i.a.createElement(cn,null,i.a.createElement("div",null,i.a.createElement(A,null,i.a.createElement(M,{data:a,selected:tn.isSolvedForGroup(a),locked:!0}),i.a.createElement(F,null),i.a.createElement(M,{data:o,selected:tn.isSolvedForGroup(o),locked:!0}),i.a.createElement(F,null),i.a.createElement(M,{data:c,selected:tn.isSolvedForGroup(c),locked:!0})),i.a.createElement(N,{plane:e,onCellSwiped:this.handleCellSwipe}),i.a.createElement(un,null,i.a.createElement(ln,{onClick:function(){return n.restart()}},tn.isSolved()?"Again?":"Restart"),i.a.createElement("span",null,tn.isSolved()?"Solved!":"3 stacks, the game"))))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(sn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.d7259f62.chunk.js.map