(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{48:function(e,t,n){var a=n(49);"string"==typeof a&&(a=[[e.i,a,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(51)(a,l);a.locals&&(e.exports=a.locals)},49:function(e,t,n){(e.exports=n(50)(!1)).push([e.i,"/*** COLORS **/\n.form-select {\n  width: 100%; }\n  .form-select select {\n    width: 100%; }\n",""])},9:function(e,t,n){"use strict";n.r(t);var a=n(17),l=n.n(a),r=n(19),c=n.n(r),o=n(20),i=n.n(o),s=n(21),m=n.n(s),u=n(22),p=n.n(u),f=n(25),v=n.n(f),d=n(26),h=n.n(d),E=n(0),y=n.n(E),F=n(28),b=n.n(F),w=(n(48),function(e){function n(e){var t;return i()(this,n),(t=p()(this,v()(n).call(this,e))).state={hey:"ss"},t}var t;return h()(n,e),m()(n,[{key:"getFormFromApi",value:(t=c()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(b.a);case 1:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)})},{key:"componentDidMount",value:function(){this.getFormFromApi()}},{key:"renderForm",value:function(){var n=[];return this.state.form.data.forEach(function(e,t){n.push(y.a.createElement("div",{key:"input-".concat(t),className:"field"},y.a.createElement(N,{bulma:!0,item:e})))}),y.a.createElement(y.a.Fragment,null,n)}},{key:"render",value:function(){var e=this.state.form?this.state.form:null;return y.a.createElement("div",{className:"wrap"},e?y.a.createElement("form",{action:""},y.a.createElement("div",{className:"content"},e.form&&y.a.createElement(y.a.Fragment,null,y.a.createElement(g,{form:e.form}),y.a.createElement("div",{className:"content-form"},this.renderForm())))):y.a.createElement("div",null,"another vid"))}}]),n}(y.a.Component)),N=function(e){var t=e.item,n=e.bulma,a=void 0!==n&&n,l=" ".concat(1==a?"has-text-dark has-text-left is-size-6 has-text-weight-semibold":"form-label"),r=" ".concat(1==a?"input":" form-input");return t.input?y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:"content-form-input form-input ".concat(1==a?"control ":"")},t.input.label&&y.a.createElement("label",{className:l,htmlFor:""},t.input.label),t.input&&t.input.value?y.a.createElement("input",{className:r,type:t.input.type?t.input.type:"text",defaultValue:t.input.value}):y.a.createElement("input",{className:r,type:t.input.type?t.input.type:"text"}))):t.select?y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:"content-form-input form-select  ".concat(1==a?"control ":"")},t.select.label&&y.a.createElement("label",{className:l,htmlFor:""},t.select.label),y.a.createElement("div",{className:"form-select  ".concat(1==a?"select ":"")},y.a.createElement("select",{name:"",id:""},t.select.options.map(function(e,t){return y.a.createElement("option",{key:" id-".concat(t),value:"ss"},"sss")}))))):""},g=function(e){var t=e.form,n=void 0===t?null:t;if(null==n)return"";if(n.title){var a=n.title;return y.a.createElement(y.a.Fragment,null,null!=a?y.a.createElement("div",{className:"content-title"},y.a.createElement("h3",null,a)):"")}return""};t.default=w}}]);