(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(8),c=n.n(s),i=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))}),o=n(7),h=n.n(o),u=n(9),l=n(2),p=n(3),d=n(5),j=n(4),m=n(0),b=function(e){var t=e.name,n=e.id,a=e.image;return Object(m.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 measure card",children:[Object(m.jsx)("img",{src:a,alt:"Pokemon"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:t[0].toUpperCase()+t.substring(1)}),Object(m.jsx)("p",{children:n})]})]})},g=function(e){var t=e.pokemons,n=t.map((function(e,n){return Object(m.jsx)(b,{id:t[n].id,name:t[n].name,image:t[n].image},t[n].id)}));return Object(m.jsx)("div",{className:"grid",children:n})},f=function(e){var t=e.searchChange;return Object(m.jsx)("div",{className:"pa2",children:Object(m.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue searchbar",type:"search",placeholder:"Gonna catch them all ...",onChange:t})})},O=function(e){return Object(m.jsxs)("div",{className:"scroll",style:{overflowY:"scroll",height:"75vh"},children:[e.children,";"]})},v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(m.jsx)("h1",{className:!0,children:"Ooops! Something went wrong"}):this.props.children}}]),n}(a.Component),x=(n(17),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={pokemons:[],searchField:""},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pokeapi.co/api/v2/pokemon?limit=898",e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=898");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.results.map((function(e,t){return{id:t+1,name:e.name,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png")}})),this.setState({pokemons:a});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pokemons,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(m.jsxs)("div",{className:"tc",children:[Object(m.jsx)("h1",{className:"f1",children:"Pokedex"}),Object(m.jsx)(f,{searchChange:this.onSearchChange}),Object(m.jsx)(O,{children:Object(m.jsx)(v,{children:Object(m.jsx)(g,{pokemons:a})})})]}):Object(m.jsx)("h1",{className:"f1",children:"Loading..."})}}]),n}(r.a.Component));c.a.render(Object(m.jsx)(x,{}),document.getElementById("root")),i()}},[[18,1,2]]]);
//# sourceMappingURL=main.2930db7e.chunk.js.map