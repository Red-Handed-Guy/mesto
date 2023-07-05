/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._myId=o,this._name=e.name,this._link=e.link,this._cardOwnerId=e.owner._id,this.cardId=e._id,this._cardLikesArr=e.likes,this._cardIsLiked=!1,this._handleCardClick=n.handleCardClick,this._handleDeleteButton=n.handleDeleteButton,this._handleToggleLike=n.handleToggleLike,this._templateCard=r,this._cardBody=this._getTemplate(),this._cardImg=this._cardBody.querySelector(".element__img"),this._cardLike=this._cardBody.querySelector(".element__like-img"),this._cardDelButton=this._cardBody.querySelector(".element__delete-button"),this._cardLikeCount=this._cardBody.querySelector(".element__like-counter")}var r,n;return r=t,(n=[{key:"_getTemplate",value:function(){return this._templateCard.querySelector(".element").cloneNode(!0)}},{key:"_toggleLike",value:function(){this._cardIsLiked?this._handleToggleLike(this.cardId,"DELETE"):this._handleToggleLike(this.cardId,"PUT")}},{key:"toggleLikeColor",value:function(){this._cardIsLiked?(this._cardLike.classList.remove("element__like-img_active"),this._cardIsLiked=!1):(this._cardLike.classList.add("element__like-img_active"),this._cardIsLiked=!0)}},{key:"deleteCard",value:function(){this._cardBody.remove()}},{key:"_checkMyLike",value:function(){var t=this;this._cardLikesArr.forEach((function(e){e._id===t._myId&&(t._cardIsLiked=!0)})),this._cardIsLiked&&this._cardLike.classList.add("element__like-img_active")}},{key:"_checkIsMyCard",value:function(){this._cardOwnerId===this._myId&&this._cardDelButton.classList.add("element__delete-button_visible")}},{key:"_setCardEventListeners",value:function(){var t=this;this._cardLike.addEventListener("click",(function(){t._toggleLike()})),this._cardImg.addEventListener("click",(function(){t._handleCardClick(t._link,t._name)})),this._cardDelButton.addEventListener("click",(function(){t._handleDeleteButton(t)}))}},{key:"checkCardLikesCounter",value:function(t){this._cardLikeCount.textContent=t.length}},{key:"generateCard",value:function(){return this._cardBody.querySelector(".element__title").textContent=this._name,this._cardImg.src=this._link,this._cardImg.alt=this._name,this.checkCardLikesCounter(this._cardLikesArr),this._checkMyLike(),this._checkIsMyCard(),this._setCardEventListeners(),this._cardBody}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var a,c=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formItem=r,this._imputsList=this._formItem.querySelectorAll(this._config.inputSelector),this._formSaveButton=this._formItem.querySelector(this._config.submitButtonSelector)}var e,r;return e=t,(r=[{key:"hideError",value:function(t,e){e.classList.remove(this._config.errorClass),t.classList.remove(this._config.inputErrorClass),e.textContent=t.validationMessage}},{key:"_showError",value:function(t,e){e.classList.add(this._config.errorClass),t.classList.add(this._config.inputErrorClass),e.textContent=t.validationMessage}},{key:"toggleButtonState",value:function(){this._formItem.checkValidity()?(this._formSaveButton.disabled=!1,this._formSaveButton.classList.remove(this._config.inactiveButtonClass)):(this._formSaveButton.disabled="disabled",this._formSaveButton.classList.add(this._config.inactiveButtonClass))}},{key:"checkInputVailidity",value:function(t){var e=t.checkValidity(),r=this._formItem.querySelector("#".concat(t.name,"-error"));e?this.hideError(t,r):this._showError(t,r)}},{key:"enableValidation",value:function(){var t=this;this.toggleButtonState(),o(this._imputsList).forEach((function(e){e.addEventListener("input",(function(){t.toggleButtonState(),t.checkInputVailidity(e)}))})),this._formItem.addEventListener("submit",(function(){t.toggleButtonState()}))}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),l={};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}a={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"},o(document.querySelectorAll(a.formSelector)).forEach((function(t){var e=new c(a,t),r=t.getAttribute("name");l[r]=e,e.enableValidation()}));var p=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(t,e){"prepend"===e?this._container.prepend(t):this._container.append(t)}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__close-button"),this._openPopupSelector=".popup_opened",this.closeByClickAuxiliary=this._closeByClick.bind(this),this.handleEscCloseAuxiliary=this._handleEscClose.bind(this),this.closePopupAuxiliary=this.closePopup.bind(this),this._saveButtonText=this._popup.querySelector(".popup__save-button-text")}var e,r;return e=t,(r=[{key:"loadingPopup",value:function(t,e,r){t&&(this._saveButtonText.textContent=e,this._saveButtonText.classList.add(".popup__save-button-text_loading")),t||(this._saveButtonText.textContent=r,this._saveButtonText.classList.remove(".popup__save-button-text_loading"))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&(t.preventDefault(),this.closePopup())}},{key:"_closeByClick",value:function(t){var e;(e=t.target.classList,function(t){if(Array.isArray(t))return d(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).includes(this._popupSelector.slice(1))&&this.closePopup()}},{key:"openPopup",value:function(){this._popup.classList.add(this._openPopupSelector.slice(1)),document.addEventListener("keydown",this.handleEscCloseAuxiliary)}},{key:"closePopup",value:function(){this._popup.classList.remove(this._openPopupSelector.slice(1)),document.removeEventListener("keydown",this.handleEscCloseAuxiliary)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this.closeByClickAuxiliary),this._closeButton.addEventListener("click",this.closePopupAuxiliary)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__img"),e._figCaption=e._popup.querySelector(".popup__img-caption"),e}return e=u,(r=[{key:"openPopup",value:function(t,e){this._popupImg.src=t,this._popupImg.alt=e,this._figCaption.textContent=e,_(S(u.prototype),"openPopup",this).call(this)}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function P(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(n);if(o){var r=I(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return C(t)}(this,t)});function u(t,e){var r,n=e.makeSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._makeSubmitForm=n,r._popupForm=r._popup.querySelector(".popup__form"),r._getInputValuesAuxiliary=r._getInputValues.bind(C(r)),r._inputs=r._popupForm.querySelectorAll(".popup__input"),r}return e=u,(r=[{key:"_getInputValues",value:function(t){t.preventDefault();var e={};P(this._inputs).forEach((function(t){var r=t.getAttribute("name");e[r]=t.value})),this._makeSubmitForm(e)}},{key:"setInputValues",value:function(t){P(this._inputs).forEach((function(e){e.value=t[e.name]}))}},{key:"closePopup",value:function(){this._popupForm.reset(),E(I(u.prototype),"closePopup",this).call(this)}},{key:"setEventListeners",value:function(){this._popupForm.addEventListener("submit",this._getInputValuesAuxiliary),E(I(u.prototype),"setEventListeners",this).call(this)}}])&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(o){var r=q(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r,n=e.makeSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._confirmButton=r._popup.querySelector(".popup__save-button"),r._makeSubmitForm=n,r}return e=u,(r=[{key:"openPopup",value:function(t){this._card=t,x(q(u.prototype),"openPopup",this).call(this)}},{key:"_delete",value:function(){this._makeSubmitForm(this._card)}},{key:"setEventListeners",value:function(){this._confirmButton.addEventListener("click",this._delete.bind(this)),x(q(u.prototype),"setEventListeners",this).call(this)}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}var V=function(){function t(e){var r=e.title,n=e.subtitle,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=document.querySelector(r),this._subtitle=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._title.textContent,about:this._subtitle.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;this._title.textContent=e,this._subtitle.textContent=r}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&F(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===M(o)?o:String(o)),n)}var o}var $=function(){function t(e){var r=e.headers,n=e.link;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=r,this._fetchLink=n}var e,r;return e=t,(r=[{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._fetchLink,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"toggleCardLike",value:function(t,e){return fetch("".concat(this._fetchLink,"/cards/").concat(t,"/likes"),{method:e,headers:this._headers}).then(this._handleResponse)}},{key:"setNewCard",value:function(t){var e=t.name,r=t.link;return fetch("".concat(this._fetchLink,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:r})}).then(this._handleResponse)}},{key:"delCard",value:function(t){return fetch("".concat(this._fetchLink,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"getUserProfile",value:function(){return fetch("".concat(this._fetchLink,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUserProfile",value:function(t){var e=t.name,r=t.about;return fetch("".concat(this._fetchLink,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:r})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(t){var e=t.avatar;return fetch("".concat(this._fetchLink,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}])&&N(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var H,z=document.querySelector(".popup_type_edit").querySelector(".popup__form"),G=document.querySelector(".popup_type_new-avatar"),K=G.querySelector(".popup__input_type_subtitle"),Q=G.querySelector(".popup__error"),W=document.querySelector(".element-template").content,X=document.querySelector(".profile"),Y=X.querySelector(".profile__edit-button"),Z=X.querySelector(".profile__avatar-wrapper"),tt=document.querySelector(".profile__add-button"),et=new $({headers:{authorization:"6cdd3a12-976b-437a-94d1-14ffdd3a84d4","Content-Type":"application/json"},link:"https://mesto.nomoreparties.co/v1/cohort-70"}),rt=new V({title:".profile__title",subtitle:".profile__subtitle",avatar:".profile__avatar"}),nt=new k(".popup_type_img"),ot=new U(".popup_type_del-card",{makeSubmitForm:function(t){ot.loadingPopup(!0,"Удаление...","Да"),et.delCard(t.cardId).then((function(){t.deleteCard()})).then((function(){ot.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){ot.loadingPopup(!1,"Удаление...","Да")}))}}),it=new A(".popup_type_new-avatar",{makeSubmitForm:function(t){it.loadingPopup(!0,"Сохранение...","Сохранить"),et.setUserAvatar({avatar:t["avatar-url"]}).then((function(t){rt.setUserAvatar(t)})).then((function(){it.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){it.loadingPopup(!1,"Сохранение...","Сохранить")}))}}),ut=new A(".popup_type_edit",{makeSubmitForm:function(t){ut.loadingPopup(!0,"Сохранение...","Сохранить"),et.setUserProfile(t).then((function(t){rt.setUserInfo(t)})).then((function(){ut.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){ut.loadingPopup(!1,"Сохранение...","Сохранить")}))}}),at=new A(".popup_type_new-card",{makeSubmitForm:function(t){at.loadingPopup(!0,"Создание...","Создать");var e={name:t["card-name"],link:t["card-url"]};et.setNewCard(e).then((function(t){ct.addItem(lt(t),"prepend")})).then((function(){at.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){at.loadingPopup(!1,"Создание...","Создать")}))}}),ct=new p({},".elements");function lt(t){var e=new r(t,W,{handleToggleLike:function(t,r){et.toggleCardLike(t,r).then((function(t){e.toggleLikeColor(),e.checkCardLikesCounter(t.likes)})).catch((function(t){return console.log(t)}))},handleDeleteButton:function(t){ot.openPopup(t)},handleCardClick:function(t,e){nt.openPopup(t,e)}},H);return e.generateCard()}Promise.all([et.getUserProfile(),et.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];rt.setUserInfo(o),rt.setUserAvatar(o),H=o._id,i.forEach((function(t){ct.addItem(lt(t))}))})).catch((function(t){console.log(t)})),Y.addEventListener("click",(function(){ut.openPopup(),ut.setInputValues(rt.getUserInfo()),l["profile-form"].toggleButtonState(),z.querySelectorAll(".popup__input").forEach((function(t){l["profile-form"].checkInputVailidity(t)}))})),Z.addEventListener("click",(function(){it.openPopup(),l["avatar-form"].hideError(K,Q),l["avatar-form"].toggleButtonState()})),tt.addEventListener("click",(function(){at.openPopup(),l["card-form"].toggleButtonState()})),ut.setEventListeners(),at.setEventListeners(),nt.setEventListeners(),ot.setEventListeners(),it.setEventListeners()})();