(this["webpackJsonpsquares-game"]=this["webpackJsonpsquares-game"]||[]).push([[0],{85:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),s=n.n(r),i=n(11),o=n.n(i),u=(n(85),n(124)),l=n(132),j=n(32),b=n(36),O=n(95);!function(e){e.MENU="/",e.GAME_OPTIONS="/game-options",e.GAME="/game",e.SETTINGS="/settings",e.INSTRUCTIONS="/instructions"}(a||(a={})),function(e){e.PLAYER_1="Player 1",e.PLAYER_2="Player 2"}(c||(c={}));var m={resumeGame:"Resume game",startGame:"Start new game",settings:"Settings",instructions:"Instructions",goBack:"Go back",menu:"Menu",save:"Save",cancel:"Cancel",chooseBoardSize:"Choose the board size",boardSize:"Board size",x3:"Small (3x3)",x4:"Medium (4x4)",x6:"Large (6x6)",x8:"Extra Large (8x8)"},x=[{value:3,label:"x3"},{value:4,label:"x4"},{value:6,label:"x6"},{value:8,label:"x8"}],d=n(126),f=function(e){return m[e]},p=n(38),h=n(123),g=function(e){var t=Object(p.a)();return Object(h.a)(t.breakpoints.down(e))},v=n(14),N=n(130),y=n(2),E=s.a.createContext({}),C=function(e){var t=e.children,n=Object(p.a)(),a=Object(r.useState)({backgroundColor:"",boardSize:x[1].value,playerNames:{},setBackgroundStyle:function(e){var t;switch(e){case"primary":t=n.palette.primary.main;break;case"default":default:t=n.palette.grey[400]}i((function(e){return Object(v.a)(Object(v.a)({},e),{},{backgroundColor:t})}))},setBoardSize:function(e){return i((function(t){return Object(v.a)(Object(v.a)({},t),{},{boardSize:e})}))},setPlayerName:function(e,t){i((function(n){return Object(v.a)(Object(v.a)({},n),{},{playerNames:Object(v.a)(Object(v.a)({},n.playerNames),{},Object(j.a)({},e,t))})}))}}),c=Object(b.a)(a,2),s=c[0],i=c[1];return Object(y.jsx)(E.Provider,{value:s,children:t})},S=s.a.createContext({}),P={turn:c.PLAYER_1},A=function(e){var t=e.children,n=Object(r.useContext)(E).boardSize,a=Object(r.useState)(Object(v.a)(Object(v.a)({},P),{},{squares:Array.from(new Array(n*n))})),s=Object(b.a)(a,2),i=s[0],o=s[1];return Object(y.jsx)(S.Provider,{value:Object(v.a)(Object(v.a)({},i),{},{performTurn:function(e){o((function(t){if(!t.squares[e]){var n=Object(N.a)(t.squares);return n[e]=t.turn,Object(v.a)(Object(v.a)({},t),{},{squares:n,turn:(a=t.turn,a===c.PLAYER_1?c.PLAYER_2:c.PLAYER_1)})}var a;return t}))},restartGame:function(){o((function(e){return Object(v.a)(Object(v.a)(Object(v.a)({},e),P),{},{squares:Array.from(new Array(n*n))})}))}}),children:t})},I=Object(u.a)((function(e){return{paper:function(t){var n=t.tileSize;return{height:n,width:n,textAlign:"center",color:e.palette.text.secondary,"&.Player1":{backgroundColor:e.palette.success.main},"&.Player2":{backgroundColor:e.palette.error.main}}}}})),R=function(e){return e===c.PLAYER_1?"Player1":e===c.PLAYER_2?"Player2":""},k=function(e){var t=e.index,n=e.size,a=e.value,c=e.onClick,s=e.className,i=Object(r.useContext)(E).boardSize,o=g("xs"),u=g(345),l=Object(r.useMemo)((function(){return n||(o?u?245/i:300/i:530/i)}),[n,o,u,i]),j=I({tileSize:l});return Object(y.jsx)(d.a,{onClick:function(){c&&t&&c(t)},className:"".concat(j.paper," ").concat(R(a)," ").concat(s)})},L=n(127),_=n(9),T=Object(u.a)((function(e){return{menuButton:{width:e.spacing(25)}}})),M=function(e){var t=e.path,n=e.children,a=e.onClick,c=e.variant,r=void 0===c?"contained":c,s=e.size,i=void 0===s?"large":s,o=e.color,u=Object(_.e)(),l=T();return Object(y.jsx)(L.a,{onClick:function(){u.push(t),a&&a()},className:l.menuButton,variant:r,size:i,color:o,children:n})},Y=function(){return Object(y.jsxs)(l.a,{children:[Object(y.jsx)(k,{value:c.PLAYER_1}),Object(y.jsx)(k,{value:c.PLAYER_2})]})},w=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gameTurn:function(t){var n=t.tileMargin;return{display:"flex",alignItems:"center",marginBottom:e.spacing(2),marginLeft:e.spacing(n)}},turnTile:{marginRight:e.spacing(2)},turnLabel:{color:e.palette.primary.contrastText,"&.gameOver":{color:e.palette.warning.light}},navigationButton:function(t){var n=t.tileMargin;return{marginTop:e.spacing(1),marginLeft:e.spacing(n)}},tileRow:{display:"flex"},tile:function(t){var n=t.tileMargin;return{margin:e.spacing(n)}}}})),z=function(){var e=Object(r.useContext)(E),t=e.setBackgroundStyle,n=e.boardSize,s=e.playerNames,i=Object(r.useContext)(S),o=i.squares,u=i.turn,m=i.performTurn,x=g("xs"),d=w({tileMargin:x?.25:.5}),p=Object(r.useState)(!1),h=Object(b.a)(p,2),v=h[0],N=h[1],C=Object(r.useState)("Draw"),P=Object(b.a)(C,2),A=P[0],I=P[1];Object(r.useEffect)((function(){t("primary")}),[t]);var R=Object(r.useCallback)((function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return t[a]!==e||c.includes(a)?0:(c.push(a),1+((a+1)%n===0?0:R(e,t,a+1,c))+(a%n===0?0:R(e,t,a-1,c))+R(e,t,a-n,c)+R(e,t,a+n,c))}),[n]),L=Object(r.useCallback)((function(){var e,t=(e={},Object(j.a)(e,c.PLAYER_1,0),Object(j.a)(e,c.PLAYER_2,0),e);return o.forEach((function(e,n){var a=R(e,o,n);a>t[e]&&(t[e]=a)})),t[c.PLAYER_1]>t[c.PLAYER_2]?c.PLAYER_1:t[c.PLAYER_2]>t[c.PLAYER_1]?c.PLAYER_2:"Draw"}),[o,R]);Object(r.useEffect)((function(){o.every((function(e){return!!e}))&&(I(L()),N(!0))}),[o,L]);var _=Object(r.useMemo)((function(){return o.reduce((function(e,t,a){var c=Math.floor(a/n);return e[c]?e[c].push(t):e[c]=[t],e}),[])}),[o,n]);return Object(y.jsxs)(l.a,{className:d.root,children:[Object(y.jsxs)(l.a,{className:d.gameTurn,children:[v?"Draw"!==A&&Object(y.jsx)(k,{className:d.turnTile,size:34,value:A}):Object(y.jsx)(k,{className:d.turnTile,size:34,value:u}),Object(y.jsx)(O.a,{variant:"h4",className:"".concat(d.turnLabel," ").concat(v&&"gameOver"),children:v?"Draw"!==A?"".concat(s[A]||A," won!"):"Game over, Draw":"Turn: ".concat(s[u]||u)})]}),Object(y.jsx)(l.a,{children:_.map((function(e,t){return Object(y.jsx)(l.a,{className:d.tileRow,children:e.map((function(e,a){return Object(y.jsx)(l.a,{className:d.tile,children:Object(y.jsx)(k,{index:t*n+a,value:e,onClick:m},"".concat(t,"-").concat(a))},a)}))},t)}))}),Object(y.jsx)(l.a,{className:d.navigationButton,children:Object(y.jsx)(M,{path:a.MENU,children:f("menu")})})]})},B=Object(u.a)((function(e){return{menu:{display:"flex",flexDirection:"column"},menuItem:{marginTop:e.spacing(1)}}})),G=function(){var e=Object(r.useContext)(E).setBackgroundStyle,t=Object(r.useContext)(S).squares,n=B(),c=Object(r.useMemo)((function(){return t.some((function(e){return e}))}),[t]);return Object(r.useEffect)((function(){e("default")}),[e]),Object(y.jsxs)(l.a,{className:n.menu,children:[Object(y.jsx)(Y,{}),c&&Object(y.jsx)(l.a,{className:n.menuItem,children:Object(y.jsx)(M,{path:a.GAME,color:"primary",children:f("resumeGame")})}),Object(y.jsx)(l.a,{className:n.menuItem,children:Object(y.jsx)(M,{path:a.GAME_OPTIONS,color:c?"secondary":"primary",children:f("startGame")})}),Object(y.jsx)(l.a,{className:n.menuItem,children:Object(y.jsx)(M,{path:a.SETTINGS,children:f("settings")})}),Object(y.jsx)(l.a,{className:n.menuItem,children:Object(y.jsx)(M,{path:a.INSTRUCTIONS,children:f("instructions")})})]})},U=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},buttons:{display:"flex",margin:e.spacing(1),justifyContent:"center",flexWrap:"wrap-reverse"},settingsItem:{margin:e.spacing(1)}}})),q=function(){var e=Object(r.useContext)(E).setBackgroundStyle,t=U();return Object(r.useEffect)((function(){e("default")}),[e]),Object(y.jsx)(l.a,{className:t.root,children:Object(y.jsxs)(l.a,{className:t.buttons,children:[Object(y.jsx)(l.a,{className:t.settingsItem,children:Object(y.jsx)(M,{path:a.MENU,children:f("cancel")})}),Object(y.jsx)(l.a,{className:t.settingsItem,children:Object(y.jsx)(M,{path:a.MENU,color:"primary",children:f("save")})})]})})},D=function(){var e=Object(r.useContext)(E).setBackgroundStyle;return Object(r.useEffect)((function(){e("default")}),[e]),Object(y.jsxs)(l.a,{children:["Instructions page",Object(y.jsx)(l.a,{children:Object(y.jsx)(M,{path:a.MENU,color:"primary",children:f("goBack")})})]})},W=n(135),J=n(128),F=n(134),H=n(129),K=n(133),Q=function(){var e=Object(r.useContext)(E),t=e.boardSize,n=e.setBoardSize;return Object(y.jsxs)(W.a,{component:"fieldset",children:[Object(y.jsxs)(J.a,{component:"legend",children:[f("boardSize"),":"]}),Object(y.jsx)(F.a,{"aria-label":f("chooseBoardSize"),value:t,onChange:function(e){n(parseInt(e.target.value))},children:x.map((function(e){var t=e.value,n=e.label;return Object(y.jsx)(H.a,{value:t,control:Object(y.jsx)(K.a,{}),label:f(n)},n)}))})]})},V=n(131),X=Object(u.a)((function(e){return{inputs:{display:"flex",margin:e.spacing(1),justifyContent:"center",flexWrap:"wrap"},settingsItem:{margin:e.spacing(1)}}})),Z=function(){var e=Object(r.useContext)(E),t=e.playerNames,n=e.setPlayerName,a=X(),s=function(e){var t=e.target,a=t.name,c=t.value;n(a,c)};return Object(y.jsxs)(l.a,{className:a.inputs,children:[Object(y.jsx)(l.a,{className:a.settingsItem,children:Object(y.jsx)(V.a,{name:c.PLAYER_1,label:c.PLAYER_1,variant:"outlined",value:t[c.PLAYER_1],onChange:s})}),Object(y.jsx)(l.a,{className:a.settingsItem,children:Object(y.jsx)(V.a,{name:c.PLAYER_2,label:c.PLAYER_2,variant:"outlined",value:t[c.PLAYER_2],onChange:s})})]})},$=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},buttons:{display:"flex",margin:e.spacing(1),justifyContent:"center",flexWrap:"wrap-reverse"},button:{margin:e.spacing(1)}}})),ee=function(){var e=Object(r.useContext)(E).setBackgroundStyle,t=Object(r.useContext)(S).restartGame,n=$();return Object(r.useEffect)((function(){e("default")}),[e]),Object(y.jsxs)(l.a,{className:n.root,children:[Object(y.jsx)(Q,{}),Object(y.jsx)(Z,{}),Object(y.jsxs)(l.a,{className:n.buttons,children:[Object(y.jsx)(l.a,{className:n.button,children:Object(y.jsx)(M,{path:a.MENU,children:f("goBack")})}),Object(y.jsx)(l.a,{className:n.button,children:Object(y.jsx)(M,{onClick:t,path:a.GAME,color:"primary",children:f("startGame")})})]})]})},te=Object(u.a)((function(e){return{mainContainer:function(e){return{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:e.backgroundColor}}}})),ne=function(){var e=Object(r.useContext)(E).backgroundColor,t=te({backgroundColor:e});return Object(y.jsxs)(l.a,{className:t.mainContainer,children:[Object(y.jsx)(_.a,{exact:!0,path:a.MENU,component:G}),Object(y.jsx)(_.a,{exact:!0,path:a.GAME_OPTIONS,component:ee}),Object(y.jsx)(_.a,{exact:!0,path:a.GAME,component:z}),Object(y.jsx)(_.a,{exact:!0,path:a.SETTINGS,component:q}),Object(y.jsx)(_.a,{exact:!0,path:a.INSTRUCTIONS,component:D})]})},ae=n(69),ce=function(e){var t=e.children;return Object(y.jsx)(ae.a,{children:Object(y.jsx)(C,{children:Object(y.jsx)(A,{children:t})})})};o.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(ce,{children:Object(y.jsx)(ne,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.61f32730.chunk.js.map