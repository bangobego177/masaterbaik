/*!
 * fireworks-js 1.4.1 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("./fireworks"),require("react"));else if("function"==typeof define&&define.amd)define(["./fireworks","react"],t);else{var r="object"==typeof exports?t(require("./fireworks"),require("react")):t(e["./fireworks"],e.react);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(this,(function(e,t){return(()=>{"use strict";var r={21:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,i)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Fireworks=t.useFireworks=void 0;var n=s(r(156)),l=r(522);t.useFireworks=e=>{var{initialStart:t=!0,initialOptions:r={}}=e,[o,i]=(0,n.useState)(t),[s,l]=(0,n.useState)(r);return{enabled:o,options:s,setOptions:l,setEnabled:e=>{i((t=>null!=e?e:!t))}}};class u extends n.Component{constructor(){super(...arguments),this._fw=null,this._ref=null}componentDidMount(){this._ref&&(this._fw=new l.Fireworks(this._ref,this.props.options),this.toggleStart())}componentDidUpdate(){var e;this.toggleStart(),this.props.options&&(null===(e=this._fw)||void 0===e||e.setOptions(Object.assign({},this.props.options)))}componentWillUnmount(){var e,t;null===(e=this._fw)||void 0===e||e.unmount(),null===(t=this._fw)||void 0===t||t.stop()}toggleStart(){var e,t;this.props.enabled?null===(e=this._fw)||void 0===e||e.start():null===(t=this._fw)||void 0===t||t.stop()}render(){return n.default.createElement("div",{ref:e=>this._ref=e,className:this.props.className,children:this.props.children,style:this.props.style})}}t.Fireworks=u,u.defaultProps={enabled:!0}},522:t=>{t.exports=e},156:e=>{e.exports=t}},o={};var i=function e(t){var i=o[t];if(void 0!==i)return i.exports;var s=o[t]={exports:{}};return r[t].call(s.exports,s,s.exports,e),s.exports}(21);return i})()}));