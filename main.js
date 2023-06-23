/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n){var o=n.handleCardClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateCard=r,this._handleCardClick=o}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return this._templateCard.querySelector(".element").cloneNode(!0)}},{key:"_toggleLike",value:function(){this._cardLike.classList.toggle("element__like-img_active")}},{key:"_deleteCard",value:function(){this._cardBody.remove()}},{key:"_setCardEventListeners",value:function(){var t=this;this._cardLike.addEventListener("click",(function(){t._toggleLike()})),this._cardImg.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)})),this._cardDelButton.addEventListener("click",(function(){t._deleteCard()}))}},{key:"generateCard",value:function(){return this._cardBody=this._getTemplate(),this._cardImg=this._cardBody.querySelector(".element__img"),this._cardLike=this._cardBody.querySelector(".element__like-img"),this._cardDelButton=this._cardBody.querySelector(".element__delete-button"),this._cardBody.querySelector(".element__title").textContent=this._name,this._cardImg.src=this._link,this._cardImg.alt=this._name,this._setCardEventListeners(),this._cardBody}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var c,l=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formItem=r,this._imputsList=this._formItem.querySelectorAll(this._config.inputSelector),this._formSaveButton=this._formItem.querySelector(this._config.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_hideError",value:function(t,e){e.classList.remove(this._config.errorClass),t.classList.remove(this._config.inputErrorClass),e.textContent=t.validationMessage}},{key:"_showError",value:function(t,e){e.classList.add(this._config.errorClass),t.classList.add(this._config.inputErrorClass),e.textContent=t.validationMessage}},{key:"toggleButtonState",value:function(){this._formItem.checkValidity()?(this._formSaveButton.disabled=!1,this._formSaveButton.classList.remove(this._config.inactiveButtonClass)):(this._formSaveButton.disabled="disabled",this._formSaveButton.classList.add(this._config.inactiveButtonClass))}},{key:"checkInputVailidity",value:function(t){var e=t.checkValidity(),r=this._formItem.querySelector("#".concat(t.name,"-error"));e?this._hideError(t,r):this._showError(t,r)}},{key:"enableValidation",value:function(){var t=this;this.toggleButtonState(),o(this._imputsList).forEach((function(e){e.addEventListener("input",(function(){t.toggleButtonState(),t.checkInputVailidity(e)}))})),this._formItem.addEventListener("submit",(function(){t.toggleButtonState()}))}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),a={};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}c={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"},o(document.querySelectorAll(c.formSelector)).forEach((function(t){var e=new l(c,t),r=t.getAttribute("name");a[r]=e,e.enableValidation()}));var f=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(t,e){"prepend"===e?this._container.prepend(t):this._container.append(t)}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-button"),this._openPopupSelector=".popup_opened",this.closeByClickAuxiliary=this._closeByClick.bind(this),this.handleEscCloseAuxiliary=this._handleEscClose.bind(this),this.closePopupAuxiliary=this.closePopup.bind(this)}var e,r;return e=t,(r=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&(t.preventDefault(),this.closePopup())}},{key:"_closeByClick",value:function(t){var e;(e=t.target.classList,function(t){if(Array.isArray(t))return m(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).includes(this._popupSelector.slice(1))&&this.closePopup()}},{key:"openPopup",value:function(){this._popup.classList.add(this._openPopupSelector.slice(1)),document.addEventListener("keydown",this.handleEscCloseAuxiliary)}},{key:"closePopup",value:function(){this._popup.classList.remove(this._openPopupSelector.slice(1)),document.removeEventListener("keydown",this.handleEscCloseAuxiliary)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this.closeByClickAuxiliary),this._closeButton.addEventListener("click",this.closePopupAuxiliary)}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__img"),e._figCaption=e._popup.querySelector(".popup__img-caption"),e}return e=u,(r=[{key:"openPopup",value:function(t,e){this._popupImg.src=t,this._popupImg.alt=e,this._figCaption.textContent=e,_(S(u.prototype),"openPopup",this).call(this)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(t){return function(t){if(Array.isArray(t))return P(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(n);if(o){var r=A(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return L(t)}(this,t)});function u(t,e){var r,n=e.makeSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._makeSubmitForm=n,r._popupForm=r._popup.querySelector(".popup__form"),r._getInputValuesAuxiliary=r._getInputValues.bind(L(r)),r._inputs=r._popupForm.querySelectorAll(".popup__input"),r}return e=u,(r=[{key:"_getInputValues",value:function(t){t.preventDefault();var e={};j(this._inputs).forEach((function(t){var r=t.getAttribute("name");e[r]=t.value})),this._makeSubmitForm(e)}},{key:"setTextContent",value:function(t){j(this._inputs).forEach((function(e){e.value=t[e.name]}))}},{key:"closePopup",value:function(){this._popupForm.reset(),C(A(u.prototype),"closePopup",this).call(this)}},{key:"setEventListeners",value:function(){this._popupForm.addEventListener("submit",this._getInputValuesAuxiliary),C(A(u.prototype),"setEventListeners",this).call(this)}}])&&E(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var q=function(){function t(e){var r=e.title,n=e.subtitle;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=document.querySelector(r),this._subtitle=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserinfo",value:function(){return{name:this._title.textContent,subtitle:this._subtitle.textContent}}},{key:"setUserinfo",value:function(t,e){this._title.textContent=t,this._subtitle.textContent=e}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),T=document.querySelector(".popup_type_edit").querySelector(".popup__form"),R=document.querySelector(".element-template").content,V=document.querySelector(".profile").querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),D=new q({title:".profile__title",subtitle:".profile__subtitle"}),U=new w(".popup_type_img"),M=new I(".popup_type_edit",{makeSubmitForm:function(t){D.setUserinfo(t.name,t.subtitle),M.closePopup()}}),$=new I(".popup_type_new-card",{makeSubmitForm:function(t){var e={name:t["card-name"],link:t["card-url"]};z.addItem(N(e),"prepend"),$.closePopup()}}),z=new f({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:N},".elements");function N(t){return new r(t,R,{handleCardClick:function(t,e){U.openPopup(t,e)}}).generateCard()}V.addEventListener("click",(function(){M.openPopup(),M.setTextContent(D.getUserinfo()),a["profile-form"].toggleButtonState(),T.querySelectorAll(".popup__input").forEach((function(t){a["profile-form"].checkInputVailidity(t)}))})),F.addEventListener("click",(function(){$.openPopup(),a["card-form"].toggleButtonState()})),M.setEventListeners(),$.setEventListeners(),U.setEventListeners(),z.renderItems()})();