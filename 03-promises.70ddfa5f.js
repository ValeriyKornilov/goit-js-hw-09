var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var o=i("iQIUW");function r({index:e,inputDelay:n}){return new Promise(((t,i)=>{const o=Math.random()>.3;setTimeout((()=>{o?t({index:e,inputDelay:n}):i({index:e,inputDelay:n})}),n)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const{delay:n,step:t,amount:i}=e.target;let l=+n.value;const u=+t.value,a=+i.value;for(let e=0;e<a;e++)r({index:e+1,inputDelay:l}).then((({index:e,inputDelay:n})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((()=>{o.Notify.failure(`❌ Rejected promise ${e} in ${l}ms`)})),l+=u}));
//# sourceMappingURL=03-promises.70ddfa5f.js.map