var p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var r={}.hasOwnProperty;function s(){for(var n=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var l=typeof e;if(l==="string"||l==="number")n.push(e);else if(Array.isArray(e)){if(e.length){var i=s.apply(null,e);i&&n.push(i)}}else if(l==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){n.push(e.toString());continue}for(var a in e)r.call(e,a)&&e[a]&&n.push(a)}}}return n.join(" ")}t.exports?(s.default=s,t.exports=s):window.classNames=s})()})(f);var c=f.exports;const d=u(c);export{p as a,d as c,u as g};
