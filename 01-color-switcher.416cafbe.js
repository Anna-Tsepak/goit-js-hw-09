!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("dbdyf"),a=document.querySelector("#datetime-picker"),d=document.querySelector("button[data-start]"),l=document.querySelector("span[data-days]"),u=document.querySelector("span[data-hours]"),i=document.querySelector("span[data-minutes]"),s=document.querySelector("span[data-seconds]");console.dir(d);var c,f=null;d.disabled=!0;var p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onOpen:function(){c&&clearInterval(c)},onClose:function(e){e[0]<new Date?alert("Please choose a date in the future"):(d.disabled=!1,f=e[0].getTime(),console.log(f))}};(0,r.default)(a,p);function m(e){return String(e).padStart(2,"0")}d.addEventListener("click",(function(e){d.disabled=!0;var t=f-Date.now();console.log(t),c=setInterval((function(){var e=function(e){var t=1e3,n=60*t,o=60*n,r=24*o,a=Math.floor(e/r),d=Math.floor(e%r/o),l=Math.floor(e%r%o/n),u=Math.floor(e%r%o%n/t);return{days:a,hours:d,minutes:l,seconds:u}}(t),n=e.days,o=e.hours,r=e.minutes,a=e.seconds;l.textContent=m(n),u.textContent=m(o),i.textContent=m(r),s.textContent=m(a),t-=1e3}),1e3)}))}();
//# sourceMappingURL=01-color-switcher.416cafbe.js.map
