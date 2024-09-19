(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_marks_student_marks_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_notify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/notify.js */ "./resources/js/utils/notify.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue3_simple_typeahead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue3-simple-typeahead */ "./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.esm.js");
/* harmony import */ var vue3_simple_typeahead_dist_vue3_simple_typeahead_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-simple-typeahead/dist/vue3-simple-typeahead.css */ "./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.css");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "adminAddStudent",
  components: {
    Vue3SimpleTypeahead: vue3_simple_typeahead__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      classes: [{
        name: "class 1"
      }, {
        name: "class 2"
      }, {
        name: "class 3"
      }, {
        name: "class 4"
      }],
      sections: [{
        name: "A"
      }, {
        name: "B"
      }, {
        name: "C"
      }, {
        name: "D"
      }],
      students: [{
        s_no: "1",
        roll_number: "3162",
        name: "Khadija Niaz"
      }, {
        s_no: "2",
        roll_number: "3163",
        name: "Eman Niaz"
      }, {
        s_no: "3",
        roll_number: "3164",
        name: "Mirha"
      }, {
        s_no: "4",
        roll_number: "3165",
        name: "ABC"
      }]
    };
  },
  computed: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=template&id=7fbcdbec":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=template&id=7fbcdbec ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-md-12"
};
var _hoisted_3 = {
  "class": "card shadow mb-4"
};
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-12 col-md-6"
};
var _hoisted_7 = {
  "class": "form-group"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "StudentClass"
}, " Student Class ", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "form-control"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  disabled: ""
}, "Select Student Class", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "col-12 col-md-6"
};
var _hoisted_12 = {
  "class": "form-group"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "ClassSection"
}, " Class Section ", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "form-control"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "0",
  disabled: ""
}, "Select Class Section", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"col-12 col-md-6\"><div class=\"\"><p class=\"font-weight-bold text-primary mt-3 mb-2 card-header\">Class Subjects </p><div class=\"d-flex flex-row bd-highlight mb-3\"><div class=\"form-check mt-2 ml-2\"><input type=\"checkbox\" class=\"form-check-input\"><label class=\"form-check-label\">English</label></div><div class=\"form-check mt-2 ml-4\"><input type=\"checkbox\" class=\"form-check-input\"><label class=\"form-check-label\">Urdu</label></div><div class=\"form-check mt-2 ml-4\"><input type=\"checkbox\" class=\"form-check-input\"><label class=\"form-check-label\">Maths</label></div><div class=\"form-check mt-2 ml-4\"><input type=\"checkbox\" class=\"form-check-input\"><label class=\"form-check-label\">Science</label></div></div></div></div></div>", 1);

var _hoisted_17 = {
  "class": "row"
};
var _hoisted_18 = {
  "class": "col-12 col-md"
};
var _hoisted_19 = {
  "class": ""
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "font-weight-bold text-primary mt-3 mb-2 card-header"
}, "Student List ", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "table table-bordered",
  id: "dataTable",
  width: "100%",
  cellspacing: "0"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Serial No."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Roll Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Student Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "English"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Urdu")])], -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text"
})], -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text"
})], -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "12 mt-3 mb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-success"
}, "Save"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-danger ml-3"
}, "Cancel")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_9, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.classes, function (student_class, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: "student_class-".concat(index)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(student_class.name), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_14, [_hoisted_15, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sections, function (section, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: "section-".concat(index)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(section.name), 1
    /* TEXT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" student mark sheet "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.students, function (student, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: "student-".concat(index)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(student.s_no), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(student.roll_number), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(student.name), 1
    /* TEXT */
    ), _hoisted_23, _hoisted_24]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])]), _hoisted_25])])])])]);
}

/***/ }),

/***/ "./resources/js/utils/notify.js":
/*!**************************************!*\
  !*** ./resources/js/utils/notify.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authError": () => (/* binding */ authError)
/* harmony export */ });
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-toast-notification */ "./node_modules/vue-toast-notification/dist/index.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toast-notification/dist/theme-sugar.css */ "./node_modules/vue-toast-notification/dist/theme-sugar.css");



function authError(error) {
  var errorMessages = [];
  var detailedMessages = [];
  var errorMessage = error.response.data.message || "The given data was invalid.";
  errorMessages.push(errorMessage);

  if (error.response.data.errors) {
    detailedMessages = [].concat.apply([], Object.values(error.response.data.errors));
    errorMessages = errorMessages.concat(detailedMessages);
  }

  errorMessages.forEach(function (message) {
    // let toast = Vue.toasted.show(message, {
    //     theme: "toasted-primary",
    //     position: "top-right",
    //     duration: 5000
    // });
    var $toast = (0,vue_toast_notification__WEBPACK_IMPORTED_MODULE_0__.useToast)();
    $toast.error(message);
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toast-notification/dist/theme-sugar.css":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toast-notification/dist/theme-sugar.css ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.v-toast--fade-out{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeInDown{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:none}}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:none}}.v-toast--fade-in-down{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInUp{from{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:none}}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:none}}.v-toast--fade-in-up{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{transition:opacity 150ms ease-out}.fade-enter,.fade-leave-to{opacity:0}.v-toast{position:fixed;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1052;pointer-events:none}.v-toast__item{display:inline-flex;align-items:center;-webkit-animation-duration:150ms;animation-duration:150ms;margin:.5em 0;box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:.25em;pointer-events:auto;opacity:.92;color:#fff;min-height:3em;cursor:pointer}.v-toast__item--success{background-color:#47d78a}.v-toast__item--info{background-color:#1c85d5}.v-toast__item--warning{background-color:#febc22}.v-toast__item--error{background-color:#f7471c}.v-toast__item--default{background-color:#343a40}.v-toast__item--warning{color:#000}.v-toast__item.v-toast__item--top,.v-toast__item.v-toast__item--bottom{align-self:center}.v-toast__item.v-toast__item--top-right,.v-toast__item.v-toast__item--bottom-right{align-self:flex-end}.v-toast__item.v-toast__item--top-left,.v-toast__item.v-toast__item--bottom-left{align-self:flex-start}.v-toast__text{margin:0;padding:.5em 1em;word-break:break-word}.v-toast__icon{display:none}.v-toast.v-toast--top{flex-direction:column}.v-toast.v-toast--bottom{flex-direction:column-reverse}.v-toast.v-toast--custom-parent{position:absolute}@media screen and (max-width: 768px){.v-toast{padding:0;position:fixed !important}}.v-toast__item{opacity:1;min-height:4em}.v-toast__item .v-toast__text{padding:1.5em 1em}.v-toast__item .v-toast__icon{display:block;width:27px;min-width:27px;height:27px;margin-left:1em;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45.999 45.999'%3e %3cpath fill='%23fff' d='M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 11-6 0V21a3 3 0 116 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z'/%3e %3c/svg%3e\") no-repeat}[dir=rtl] .v-toast__item .v-toast__icon{margin-left:unset;margin-right:1em}.v-toast__item.v-toast__item--success .v-toast__icon{background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'%3e %3cpath fill='%23fff' d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm14.495 17.329l-16 18a1.997 1.997 0 01-2.745.233l-10-8a2 2 0 012.499-3.124l8.517 6.813L37.505 14.67a2.001 2.001 0 012.99 2.659z'/%3e %3c/svg%3e\") no-repeat}.v-toast__item.v-toast__item--error .v-toast__icon{background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 51.976 51.976'%3e %3cpath fill='%23fff' d='M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 01-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 11-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 112.828-2.828l7.425 7.425 7.071-7.071a2 2 0 112.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 010 2.828z'/%3e %3c/svg%3e\") no-repeat}.v-toast__item.v-toast__item--warning .v-toast__icon{background:url(\"data:image/svg+xml,%3csvg viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill='%23000' d='M49.466 41.26L29.216 6.85c-.69-1.16-1.89-1.85-3.22-1.85-1.32 0-2.53.69-3.21 1.85L2.536 41.26c-.71 1.2-.72 2.64-.03 3.85.68 1.18 1.89 1.89 3.24 1.89h40.51c1.35 0 2.56-.71 3.23-1.89.7-1.21.69-2.65-.02-3.85zm-25.53-21.405h3.381v3.187l-.724 8.92H24.66l-.725-8.92v-3.187zm2.97 17.344a1.712 1.712 0 01-1.267.543c-.491 0-.914-.181-1.268-.543a1.788 1.788 0 01-.531-1.297c0-.502.176-.935.53-1.297a1.712 1.712 0 011.269-.544c.49 0 .914.181 1.268.544s.53.795.53 1.297c0 .503-.176.934-.53 1.297z'/%3e %3c/svg%3e\") no-repeat}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.css":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.css ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.simple-typeahead[data-v-f81ca714] {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\n}\n.simple-typeahead > input[data-v-f81ca714] {\r\n\t\tmargin-bottom: 0;\n}\n.simple-typeahead .simple-typeahead-list[data-v-f81ca714] {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\tborder: none;\r\n\t\tmax-height: 400px;\r\n\t\toverflow-y: auto;\r\n\t\tborder-bottom: 0.1rem solid #d1d1d1;\r\n\t\tz-index: 9;\n}\n.simple-typeahead .simple-typeahead-list .simple-typeahead-list-header[data-v-f81ca714] {\r\n\t\tbackground-color: #fafafa;\r\n\t\tpadding: 0.6rem 1rem;\r\n\t\tborder-bottom: 0.1rem solid #d1d1d1;\r\n\t\tborder-left: 0.1rem solid #d1d1d1;\r\n\t\tborder-right: 0.1rem solid #d1d1d1;\n}\n.simple-typeahead .simple-typeahead-list .simple-typeahead-list-footer[data-v-f81ca714] {\r\n\t\tbackground-color: #fafafa;\r\n\t\tpadding: 0.6rem 1rem;\r\n\t\tborder-left: 0.1rem solid #d1d1d1;\r\n\t\tborder-right: 0.1rem solid #d1d1d1;\n}\n.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item[data-v-f81ca714] {\r\n\t\tcursor: pointer;\r\n\t\tbackground-color: #fafafa;\r\n\t\tpadding: 0.6rem 1rem;\r\n\t\tborder-bottom: 0.1rem solid #d1d1d1;\r\n\t\tborder-left: 0.1rem solid #d1d1d1;\r\n\t\tborder-right: 0.1rem solid #d1d1d1;\n}\n.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item[data-v-f81ca714]:last-child {\r\n\t\tborder-bottom: none;\n}\n.simple-typeahead .simple-typeahead-list .simple-typeahead-list-item.simple-typeahead-list-item-active[data-v-f81ca714] {\r\n\t\tbackground-color: #e1e1e1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fas,\r\n.text-info {\r\n    cursor: pointer;\n}\ninput#typeahead_id.simple-typeahead-input {\r\n    width: 100% !important;\r\n    padding-top: 0.375rem;\r\n    padding-right: 0.75rem;\r\n    padding-bottom: 0.375rem;\r\n    padding-left: 0.75rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.35rem;\r\n    border: 1px solid #d1d3e2;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-toast-notification/dist/theme-sugar.css":
/*!******************************************************************!*\
  !*** ./node_modules/vue-toast-notification/dist/theme-sugar.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_theme_sugar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./theme-sugar.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toast-notification/dist/theme-sugar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_theme_sugar_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_theme_sugar_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.css":
/*!***************************************************************************!*\
  !*** ./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.css ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_simple_typeahead_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./vue3-simple-typeahead.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_simple_typeahead_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue3_simple_typeahead_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_student_marks_vue_vue_type_style_index_0_id_7fbcdbec_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_student_marks_vue_vue_type_style_index_0_id_7fbcdbec_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_student_marks_vue_vue_type_style_index_0_id_7fbcdbec_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/marks/student_marks.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/admin/marks/student_marks.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _student_marks_vue_vue_type_template_id_7fbcdbec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student_marks.vue?vue&type=template&id=7fbcdbec */ "./resources/js/views/admin/marks/student_marks.vue?vue&type=template&id=7fbcdbec");
/* harmony import */ var _student_marks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student_marks.vue?vue&type=script&lang=js */ "./resources/js/views/admin/marks/student_marks.vue?vue&type=script&lang=js");
/* harmony import */ var _student_marks_vue_vue_type_style_index_0_id_7fbcdbec_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css */ "./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css");
/* harmony import */ var D_office_projects_schoolapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_office_projects_schoolapp_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__.default)(_student_marks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default, [['render',_student_marks_vue_vue_type_template_id_7fbcdbec__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/marks/student_marks.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/marks/student_marks.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/marks/student_marks.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_student_marks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_student_marks_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./student_marks.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/marks/student_marks.vue?vue&type=template&id=7fbcdbec":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/admin/marks/student_marks.vue?vue&type=template&id=7fbcdbec ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_student_marks_vue_vue_type_template_id_7fbcdbec__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_student_marks_vue_vue_type_template_id_7fbcdbec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./student_marks.vue?vue&type=template&id=7fbcdbec */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=template&id=7fbcdbec");


/***/ }),

/***/ "./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_student_marks_vue_vue_type_style_index_0_id_7fbcdbec_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/marks/student_marks.vue?vue&type=style&index=0&id=7fbcdbec&lang=css");


/***/ }),

/***/ "./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue3-simple-typeahead/dist/vue3-simple-typeahead.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ entry_esm)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var script = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Vue3SimpleTypeahead',
  emits: ['onInput', 'onFocus', 'onBlur', 'selectItem'],
  inheritAttrs: false,
  props: {
    id: {
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: true
    },
    defaultItem: {
      default: null
    },
    itemProjection: {
      type: Function,

      default(item) {
        return item;
      }

    },
    minInputLength: {
      type: Number,
      default: 2,
      validator: prop => {
        return prop >= 0;
      }
    },
    minItemLength: {
      type: Number,
      default: 0,
      validator: prop => {
        return prop >= 0;
      }
    },
    selectOnTab: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    if (this.defaultItem !== undefined && this.defaultItem !== null) {
      this.selectItem(this.defaultItem);
    }
  },

  data() {
    return {
      inputId: this.id || `simple_typeahead_${(Math.random() * 1000).toFixed()}`,
      input: '',
      isInputFocused: false,
      currentSelectionIndex: 0
    };
  },

  methods: {
    onInput() {
      if (this.isListVisible && this.currentSelectionIndex >= this.filteredItems.length) {
        this.currentSelectionIndex = (this.filteredItems.length || 1) - 1;
      }

      this.$emit('onInput', {
        input: this.input,
        items: this.filteredItems
      });
    },

    onFocus() {
      this.isInputFocused = true;
      this.$emit('onFocus', {
        input: this.input,
        items: this.filteredItems
      });
    },

    onBlur() {
      this.isInputFocused = false;
      this.$emit('onBlur', {
        input: this.input,
        items: this.filteredItems
      });
    },

    onArrowDown($event) {
      if (this.isListVisible && this.currentSelectionIndex < this.filteredItems.length - 1) {
        this.currentSelectionIndex++;
      }

      this.scrollSelectionIntoView();
    },

    onArrowUp($event) {
      if (this.isListVisible && this.currentSelectionIndex > 0) {
        this.currentSelectionIndex--;
      }

      this.scrollSelectionIntoView();
    },

    scrollSelectionIntoView() {
      setTimeout(() => {
        const list_node = document.querySelector(`#${this.wrapperId} .simple-typeahead-list`);
        const active_node = document.querySelector(`#${this.wrapperId} .simple-typeahead-list-item.simple-typeahead-list-item-active`);

        if (!(active_node.offsetTop >= list_node.scrollTop && active_node.offsetTop + active_node.offsetHeight < list_node.scrollTop + list_node.offsetHeight)) {
          let scroll_to = 0;

          if (active_node.offsetTop > list_node.scrollTop) {
            scroll_to = active_node.offsetTop + active_node.offsetHeight - list_node.offsetHeight;
          } else if (active_node.offsetTop < list_node.scrollTop) {
            scroll_to = active_node.offsetTop;
          }

          list_node.scrollTo(0, scroll_to);
        }
      });
    },

    selectCurrentSelection() {
      if (this.currentSelection) {
        this.selectItem(this.currentSelection);
      }
    },

    selectCurrentSelectionTab() {
      if (this.selectOnTab) {
        this.selectCurrentSelection();
      } else {
        this.$refs.inputRef.blur();
      }
    },

    selectItem(item) {
      this.input = this.itemProjection(item);
      this.currentSelectionIndex = 0;
      this.$refs.inputRef.blur();
      this.$emit('selectItem', item);
    },

    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },

    boldMatchText(text) {
      const regexp = new RegExp(`(${this.escapeRegExp(this.input)})`, 'ig');
      return text.replace(regexp, '<strong>$1</strong>');
    },

    clearInput() {
      this.input = '';
    },

    getInput() {
      return this.$refs.inputRef;
    },

    focusInput() {
      this.$refs.inputRef.focus();
      this.onFocus();
    },

    blurInput() {
      this.$refs.inputRef.blur();
      this.onBlur();
    }

  },
  computed: {
    wrapperId() {
      return `${this.inputId}_wrapper`;
    },

    filteredItems() {
      const regexp = new RegExp(this.escapeRegExp(this.input), 'i');
      return this.items.filter(item => this.itemProjection(item).match(regexp));
    },

    isListVisible() {
      return this.isInputFocused && this.input.length >= this.minInputLength && this.filteredItems.length > this.minItemLength;
    },

    currentSelection() {
      return this.isListVisible && this.currentSelectionIndex < this.filteredItems.length ? this.filteredItems[this.currentSelectionIndex] : undefined;
    }

  }
});

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f81ca714");

const _hoisted_1 = ["id"];
const _hoisted_2 = ["id", "placeholder"];
const _hoisted_3 = {
  key: 0,
  class: "simple-typeahead-list"
};
const _hoisted_4 = {
  key: 0,
  class: "simple-typeahead-list-header"
};
const _hoisted_5 = ["onClick", "onMouseenter"];
const _hoisted_6 = ["data-text"];
const _hoisted_7 = ["data-text", "innerHTML"];
const _hoisted_8 = {
  key: 1,
  class: "simple-typeahead-list-footer"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: _ctx.wrapperId,
    class: "simple-typeahead"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    ref: "inputRef",
    id: _ctx.inputId,
    class: "simple-typeahead-input",
    type: "text",
    placeholder: _ctx.placeholder,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event),
    onInput: _cache[1] || (_cache[1] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
    onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
    onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onKeydown: [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => _ctx.onArrowDown && _ctx.onArrowDown(...args), ["prevent"]), ["down"])), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => _ctx.onArrowUp && _ctx.onArrowUp(...args), ["prevent"]), ["up"])), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => _ctx.selectCurrentSelection && _ctx.selectCurrentSelection(...args), ["prevent"]), ["enter"])), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => _ctx.selectCurrentSelectionTab && _ctx.selectCurrentSelectionTab(...args), ["prevent"]), ["tab"]))],
    autocomplete: "off"
  }, _ctx.$attrs), null, 16, _hoisted_2), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.input]]), _ctx.isListVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [_ctx.$slots['list-header'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "list-header")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredItems, (item, index) => {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["simple-typeahead-list-item", {
        'simple-typeahead-list-item-active': _ctx.currentSelectionIndex == index
      }]),
      key: index,
      onMousedown: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
      onClick: $event => _ctx.selectItem(item),
      onMouseenter: $event => _ctx.currentSelectionIndex = index
    }, [_ctx.$slots['list-item-text'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 0,
      class: "simple-typeahead-list-item-text",
      "data-text": _ctx.itemProjection(item)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "list-item-text", {
      item: item,
      itemProjection: _ctx.itemProjection,
      boldMatchText: _ctx.boldMatchText
    })], 8, _hoisted_6)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 1,
      class: "simple-typeahead-list-item-text",
      "data-text": _ctx.itemProjection(item),
      innerHTML: _ctx.boldMatchText(_ctx.itemProjection(item))
    }, null, 8, _hoisted_7))], 42, _hoisted_5);
  }), 128)), _ctx.$slots['list-footer'] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "list-footer")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)], 8, _hoisted_1);
}

script.render = render;
script.__scopeId = "data-v-f81ca714";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('Vue3SimpleTypeahead', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;




/***/ })

}]);