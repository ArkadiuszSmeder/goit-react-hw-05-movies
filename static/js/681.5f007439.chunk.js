"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{9681:function(e,n,r){r.r(n);var t=r(9439),o=r(5861),i=r(4687),c=r.n(i),u=r(7689),s=r(2791),a=r(1933),f=r(184);n.default=function(){var e=(0,u.UO)().movieId,n=function(){var n=(0,o.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=fcef3f7d90b41f3f85ee0cce371ea367"),n.next=3,fetch(r);case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("Network response was not ok");case 6:return n.abrupt("return",t.json());case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r=(0,s.useState)([]),i=(0,t.Z)(r,2),h=i[0],l=i[1];return(0,a.useQuery)({queryKey:["movie-reviews",e],queryFn:function(){return n()},onSuccess:function(e){l(e.results),console.log(e)}}),(0,f.jsxs)("section",{children:[(0,f.jsx)("h2",{children:"Reviews"}),h&&h.length>0?(0,f.jsx)("ul",{children:h.map((function(e){return(0,f.jsxs)("li",{style:{marginBottom:"25px"},children:[(0,f.jsx)("div",{children:e.author}),(0,f.jsx)("div",{children:e.content})]},e.id)}))}):(0,f.jsx)("p",{children:"No reviews for this movie yet"})]})}},5861:function(e,n,r){function t(e,n,r,t,o,i,c){try{var u=e[i](c),s=u.value}catch(a){return void r(a)}u.done?n(s):Promise.resolve(s).then(t,o)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var c=e.apply(n,r);function u(e){t(c,o,i,u,s,"next",e)}function s(e){t(c,o,i,u,s,"throw",e)}u(void 0)}))}}r.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=681.5f007439.chunk.js.map