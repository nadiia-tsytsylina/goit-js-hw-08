var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,f,u,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(j,t),l?b(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=r}function j(){var e=m();if(O(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return g?d(n,r-(e-c)):n}(e))}function h(e){return f=void 0,y&&o?b(e):(o=i=void 0,a)}function w(){var e=m(),n=O(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(g)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=v(t)||0,p(n)&&(l=!!n.leading,r=(g="maxWait"in n)?s(v(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),b=document.querySelector("input"),S=document.querySelector("textarea"),O={};function j(){const e=localStorage.getItem("feedback-form-state");e&&(O.email=JSON.parse(e).email,O.message=JSON.parse(e).message,b.value=O.email,S.value=O.message)}j(),y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.setItem("feedback-form-state",JSON.stringify(O)),j(),y.reset(),localStorage.removeItem("feedback-form-state"),console.log(O)})),y.addEventListener("input",t((function(e){O[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500));
//# sourceMappingURL=03-feedback.85654ab3.js.map
