webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nquery getProducts($ids: [ID!]!){\\n    nodes(ids: $ids){\\n      ... on Product{\\n        title\\n        handle\\n        id\\n      }\\n    }\\n  }\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());\n\nfunction ProductList() {\n  _s();\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(GET_PRODUCTS_BY_ID, {\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids')\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"div\", null, \"Loading...\");\n  if (error) return __jsx(\"div\", null, error.message);\n  console.log(data);\n  return __jsx(\"div\", null, __jsx(\"h1\", null, \"Hello from Productlist\"), data.nodes.map(function (item) {\n    return __jsx(\"p\", {\n      key: item.id\n    }, item.title);\n  }));\n}\n\n_s(ProductList, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcz9iOGQ1Il0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlByb2R1Y3RMaXN0IiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZHMiLCJzdG9yZSIsImdldCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm5vZGVzIiwibWFwIiwiaXRlbSIsImlkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4Qjs7QUFXQSxTQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBRVlDLG9FQUFRLENBQUNILGtCQUFELEVBQXFCO0FBQUVJLGFBQVMsRUFBRTtBQUFFQyxTQUFHLEVBQUVDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWO0FBQVA7QUFBYixHQUFyQixDQUZwQjtBQUFBLE1BRWJDLE9BRmEsYUFFYkEsT0FGYTtBQUFBLE1BRUpDLEtBRkksYUFFSkEsS0FGSTtBQUFBLE1BRUdDLElBRkgsYUFFR0EsSUFGSDs7QUFJckIsTUFBSUYsT0FBSixFQUFhLE9BQU8sZ0NBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTyxtQkFBTUEsS0FBSyxDQUFDRSxPQUFaLENBQVA7QUFFWEMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFFQSxTQUNFLG1CQUNFLDJDQURGLEVBR0lBLElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxHQUFYLENBQWUsVUFBQUMsSUFBSSxFQUFJO0FBQ3JCLFdBQ0U7QUFBRyxTQUFHLEVBQUVBLElBQUksQ0FBQ0M7QUFBYixPQUFrQkQsSUFBSSxDQUFDRSxLQUF2QixDQURGO0FBR0QsR0FKRCxDQUhKLENBREY7QUFZRDs7R0FyQlFoQixXO1VBRTBCQyw0RDs7O0tBRjFCRCxXO0FBdUJNQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyBDYXJkLCBSZXNvdXJjZUxpc3QsIFN0YWNrLCBUZXh0U3R5bGUsIFRodW1ibmFpbCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcblxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxucXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKXtcbiAgICBub2RlcyhpZHM6ICRpZHMpe1xuICAgICAgLi4uIG9uIFByb2R1Y3R7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGhhbmRsZVxuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgfWA7XG5cbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUU19CWV9JRCwgeyB2YXJpYWJsZXM6IHsgaWRzOiBzdG9yZS5nZXQoJ2lkcycpIH0gfSlcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PlxuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlbGxvIGZyb20gUHJvZHVjdGxpc3Q8L2gxPlxuICAgICAge1xuICAgICAgICBkYXRhLm5vZGVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHAga2V5PXtpdGVtLmlkfT57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductList.js\n");

/***/ })

})