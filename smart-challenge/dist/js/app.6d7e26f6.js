(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},3443:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("6cc5");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Dashboard")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-dashboard"},[n("h1",[t._v("Smarts Dashboard")]),n("div",{staticClass:"search"},[n("strong",[t._v("Buscar:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}})]),n("div",{staticClass:"container-menu"},[n("nav",[n("a",{on:{click:t.smallestBudget}},[t._v("Menor Budge")]),n("a",{on:{click:t.biggestBudget}},[t._v("Maior Budge")]),n("a",{on:{click:t.ascendingOrder}},[t._v("A-Z")]),n("a",{on:{click:t.descendingOrder}},[t._v("Z-A")])]),n("div",{staticClass:"container-calendar"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],attrs:{type:"date",name:"start-date",id:"start-date"},domProps:{value:t.startDate},on:{change:t.searchDate,input:function(e){e.target.composing||(t.startDate=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.finalDate,expression:"finalDate"}],attrs:{type:"date",name:"final-date",id:"final-date"},domProps:{value:t.finalDate},on:{change:t.searchDate,input:function(e){e.target.composing||(t.finalDate=e.target.value)}}})])]),n("div",{staticClass:"container-clients"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantatyItems,expression:"quantatyItems"}],attrs:{type:"number",id:"filter-items",min:"0",max:"10"},domProps:{value:t.quantatyItems},on:{change:t.filterClientsItems,input:function(e){e.target.composing||(t.quantatyItems=e.target.value)}}}),n("div",{staticClass:"list-clients"},t._l(t.clients,(function(t,e){return n("Client",{key:t.id,attrs:{imagens:t.pictures,nome:t.name.first+" "+t.name.last,email:t.email,endereco:t.address,idade:t.age,budget:t.budget,telefone:t.phone,companhia:t.company,cordenadas:[parseFloat(t.latitude),parseFloat(t.longitude)],contatosTimeline:t.contactTimeline,id:"client-"+e,reference:"client-"+e}})})),1),n("p",{staticClass:"pagina"},[n("strong",[t._v("Pagina:")]),t._v(" "+t._s(t.pagina))]),n("button",{staticClass:"btn-next",on:{click:t.nextOrPrevious}},[t._v("Próximo")]),n("button",{staticClass:"btn-previous",on:{click:t.nextOrPrevious}},[t._v("Anterior")])])])},o=[],l=(n("4de4"),n("c975"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("b85c")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"client",on:{click:t.totalInfoClient}},[t.viewClient?n("div",{staticClass:"view-client",style:t.styleViewClient,attrs:{id:t.reference+"-view-client"}},[n("div",{staticClass:"view-client-imagem",attrs:{id:t.reference+"-view-imagem"}},t._l(t.imagens,(function(e,i){return n("img",{key:e[i],attrs:{id:t.reference+"-img1",src:e.url}})})),0),n("div",{staticClass:"view-info-client",attrs:{id:t.reference+"-view"}},[n("p",{attrs:{id:t.reference+"-nome"}},[n("strong",[t._v("Nome:")]),t._v(" "+t._s(t.nome))]),n("p",{attrs:{id:t.reference+"-idade"}},[n("strong",[t._v("Idade:")]),t._v(" "+t._s(t.idade))]),n("p",{attrs:{id:t.reference+"-tel"}},[n("strong",[t._v("Telefone:")]),t._v(" "+t._s(t.telefone))]),n("p",{attrs:{id:t.reference+"-email"}},[n("strong",[t._v("Email:")]),t._v(" "+t._s(t.email))]),n("p",{attrs:{id:t.reference+"-endereco"}},[n("strong",[t._v("Endereço:")]),t._v(" "+t._s(t.endereco))]),n("p",{attrs:{id:t.reference+"-companhia"}},[n("strong",[t._v("Companhia:")]),t._v(" "+t._s(t.companhia))]),n("p",{attrs:{id:t.reference+"-budget"}},[n("strong",[t._v("Budge:")]),t._v(" "+t._s(t.budget))]),n("p",{attrs:{id:t.reference+"-contatos"}},[n("strong",[t._v("Contatos:")]),n("ul",t._l(t.contatosTimeline,(function(e){return n("li",{key:e.id},[t._v(t._s(e.broker))])})),0)])]),n("div",{staticClass:"map",attrs:{id:t.reference+"-map"}},[n("p",{attrs:{id:t.reference+"-lat-long"}},[n("strong",[t._v("Latitude:")]),t._v(" "+t._s(t.cordenadas[0])+" "),n("strong",[t._v("Longitude:")]),t._v(" "+t._s(t.cordenadas[1]))]),n("Map",{attrs:{centerMap:t.cordenadas,markerLatLngMap:t.cordenadas}})],1)]):n("div",[n("div",{staticClass:"imagem",attrs:{id:t.reference+"-imagem"}},[n("img",{attrs:{id:t.reference+"-img2",src:t.imagens[0].url}})]),n("div",{staticClass:"info-client",attrs:{id:t.reference+"-info-client"}},[n("p",{attrs:{id:t.reference+"-p1-info"}},[t._v("Nome: "+t._s(t.nome))]),n("p",{attrs:{id:t.reference+"-p2"}},[t._v("Email: "+t._s(t.email))]),n("p",{attrs:{id:t.reference+"-p3"}},[t._v("Idade: "+t._s(t.idade))]),n("p",{attrs:{id:t.reference+"-p4"}},[t._v("Budget: "+t._s(t.budget))])])])])},u=[],d=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"460px","margin-left":"440px"}},[n("l-map",{staticStyle:{height:"70%",width:"90%","border-radius":"10px",border:"3px solid black"},attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[n("l-tile-layer",{attrs:{url:t.url}}),n("l-marker",{attrs:{"lat-lng":t.markerLatLng}})],1)],1)}),p=[],m=n("2699"),f=n("a40a"),h=n("4e2b"),g={components:{LMap:m["a"],LTileLayer:f["a"],LMarker:h["a"]},props:{centerMap:Array,markerLatLngMap:Array},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:3,center:this.centerMap,bounds:null,markerLatLng:this.markerLatLngMap}},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t}}},v=g,y=n("2877"),b=Object(y["a"])(v,d,p,!1,null,null,null),_=b.exports,C={name:"Client",components:{Map:_},props:{imagens:Array,nome:String,email:String,endereco:String,idade:Number,budget:String,telefone:String,companhia:String,cordenadas:Array,contatosTimeline:Array,reference:String},data:function(){return{viewClient:!1,styleViewClient:{}}},methods:{totalInfoClient:function(t){console.log(t.target.id.substring(0,8));var e=document.getElementById(t.target.id.substring(0,8));console.log(e),void 0!=e&&(0==this.viewClient?(e.style.height="490px",this.viewClient=!0,this.styleViewClient={width:"auto",height:"490px"}):(e.style.height="190px",this.viewClient=!1,this.styleViewClient={}))}}},x=C,w=(n("d2d3"),Object(y["a"])(x,c,u,!1,null,"7a1de334",null)),O=w.exports,k=n("7424"),D=n.n(k),L={name:"Dashboard",components:{Client:O},data:function(){return{clients:null,temporaryClients:[],pagina:1,quantatyItems:10,text:"",startDate:"",finalDate:""}},methods:{nextOrPrevious:function(t){var e=this,n=document.querySelector(".btn-previous");this.temporaryClients=10,1==this.pagina&&(this.pagina=1,n.disabled=!0),"btn-next"==t.target.className?(this.pagina+=1,n.disabled=!1):this.pagina-=1,D.a.get("/Custumers?page=".concat(this.pagina)).then((function(t){0==t["data"].clients?(e.pagina-=1,alert("Não há mais clientes")):(e.clients=t["data"].clients,e.temporaryClients=[],e.quantatyItems=e.clients.length)})).catch((function(t){return console.log(t)}))},smallestBudget:function(){0!=this.temporaryClients.length&&(this.clients=this.temporaryClients),this.temporaryClients=this.clients;var t,e=this.clients[0],n=Object(l["a"])(this.clients);try{for(n.s();!(t=n.n()).done;){var i=t.value,a=e.budget.replace("$","").replace(/,/g,"");i.budget.replace("$","").replace(/,/g,"")<=a&&(e=i)}}catch(r){n.e(r)}finally{n.f()}this.clients=null,this.clients=[e]},biggestBudget:function(){0!=this.temporaryClients.length&&(this.clients=this.temporaryClients),this.temporaryClients=this.clients;var t,e=this.clients[0],n=Object(l["a"])(this.clients);try{for(n.s();!(t=n.n()).done;){var i=t.value,a=e.budget.replace("$","").replace(/,/g,"");i.budget.replace("$","").replace(/,/g,"")>=a&&(e=i)}}catch(r){n.e(r)}finally{n.f()}this.clients=null,this.clients=[e]},ascendingOrder:function(){this.clients.sort((function(t,e){return t.name.first>e.name.first?1:t.name.first<e.name.first?-1:0}))},descendingOrder:function(){this.clients.sort((function(t,e){return t.name.first<e.name.first?1:t.name.first>e.name.first?-1:0}))},search:function(){var t=this;0!=this.temporaryClients.length&&(this.clients=this.temporaryClients),this.temporaryClients=this.clients,this.clients=null;var e=this.temporaryClients.filter((function(e){var n=e.name.first.toLowerCase(),i=n.indexOf(t.text.toLowerCase());return-1!=i})),n=this.temporaryClients.filter((function(e){return e.age.toString()==t.text})),i=this.temporaryClients.filter((function(e){var n=e.email.toLowerCase(),i=n.indexOf(t.text.toLowerCase());return-1!=i})),a=this.temporaryClients.filter((function(e){var n=e.budget,i=n.indexOf(t.text);return-1!=i}));e.length>0?this.clients=e:n.length>0?this.clients=n:i.length>0?this.clients=i:this.clients=a,this.quantatyItems=this.clients.length},searchDate:function(){0!=this.temporaryClients.length&&(this.clients=this.temporaryClients),this.temporaryClients=this.clients,this.clients=null;var t=new Date(this.startDate+" 00:00:00"),e=new Date(this.finalDate+" 23:59:59"),n=this.temporaryClients.filter((function(n){var i=new Date(n.registered);return console.log(i),i>=t&&i<=e}));this.clients=n,this.quantatyItems=this.clients.length},filterClientsItems:function(){0!=this.temporaryClients.length&&(this.clients=this.temporaryClients),this.temporaryClients=this.clients,this.clients=[];var t=0;while(t<this.quantatyItems)this.clients.push(this.temporaryClients[t]),t++}},mounted:function(){var t=this;D.a.get("/Custumers").then((function(e){t.clients=e["data"].clients,t.quantatyItems=t.clients.length})).catch((function(t){return console.log(t)}))}},I=L,S=(n("f078"),Object(y["a"])(I,s,o,!1,null,"42cfd93a",null)),M=S.exports,P={name:"App",components:{Dashboard:M}},j=P,q=(n("034f"),Object(y["a"])(j,a,r,!1,null,null,null)),U=q.exports,B=n("e11e");delete B["Icon"].Default.prototype._getIconUrl,B["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(U)}}).$mount("#app")},7424:function(t,e,n){var i=n("bc3a"),a=i.create({baseURL:"http://localhost:3000"});t.exports=a},"85ec":function(t,e,n){},d192:function(t,e,n){},d2d3:function(t,e,n){"use strict";n("d192")},f078:function(t,e,n){"use strict";n("3443")}});
//# sourceMappingURL=app.6d7e26f6.js.map