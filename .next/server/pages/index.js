module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\nquery getProducts($ids: [ID!]!){\n  nodes(ids: $ids){\n    ... on Product{\n      title\n      handle\n      id\n      images(first: 1) {\n        edges {\n          node {\n            originalSrc\n            altText\n          }\n        }\n      }\n      variants(first:1){\n        edges{\n          node{\n            price\n            id\n          }\n        }\n      }\n    }\n  }\n}`;\n\nfunction ProductList() {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(GET_PRODUCTS_BY_ID, {\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids')\n    }\n  });\n  if (loading) return __jsx(\"div\", null, \"Loading...\");\n  if (error) return __jsx(\"div\", null, error.message);\n  console.log(data);\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"], {\n    showHeader: true,\n    resourceName: {\n      singular: 'Product',\n      plural: 'Products'\n    },\n    items: data.nodes,\n    renderItem: item => {\n      const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Thumbnail\"], {\n        source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',\n        alt: item.images.edges[0] ? item.images.edges[0].altText : ''\n      });\n\n      const price = item.variants.edges[0].node.price;\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"].Item, {\n        id: item.id,\n        media: media,\n        accessibilityLabel: 'View details for ${item.title}'\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, {\n        fill: true\n      }, __jsx(\"h3\", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"TextStyle\"], {\n        variation: \"strong\"\n      }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(\"p\", null, \"$\", price))));\n    }\n  })) // <div>\n  //   <h1>Hello from Productlist</h1>\n  //   {\n  //     data.nodes.map(item => {\n  //       return (\n  //         <p key={item.id}>{item.title}</p>\n  //       )\n  //     })\n  //   }\n  // </div>\n  ;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzP2I4ZDUiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTX0JZX0lEIiwiZ3FsIiwiUHJvZHVjdExpc3QiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJpZHMiLCJzdG9yZSIsImdldCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBL0I7O0FBMkJBLFNBQVNDLFdBQVQsR0FBdUI7QUFFckIsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLFNBQVg7QUFBa0JDO0FBQWxCLE1BQTJCQyxvRUFBUSxDQUFDTixrQkFBRCxFQUFxQjtBQUFFTyxhQUFTLEVBQUU7QUFBRUMsU0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQO0FBQWIsR0FBckIsQ0FBekM7QUFFQSxNQUFJUCxPQUFKLEVBQWEsT0FBTyxnQ0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxPQUFPLG1CQUFNQSxLQUFLLENBQUNPLE9BQVosQ0FBUDtBQUVYQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUVBLFNBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsNkRBQUQ7QUFDRSxjQUFVLE1BRFo7QUFFRSxnQkFBWSxFQUFFO0FBQUVTLGNBQVEsRUFBRSxTQUFaO0FBQXVCQyxZQUFNLEVBQUU7QUFBL0IsS0FGaEI7QUFHRSxTQUFLLEVBQUVWLElBQUksQ0FBQ1csS0FIZDtBQUlFLGNBQVUsRUFBRUMsSUFBSSxJQUFJO0FBQ2xCLFlBQU1DLEtBQUssR0FDVCxNQUFDLDBEQUFEO0FBQ0UsY0FBTSxFQUFFRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUF1QkgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxXQUFqRCxHQUErRCxFQUR6RTtBQUdFLFdBQUcsRUFDREwsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFBdUJILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCRyxPQUE1QyxHQUFzRDtBQUoxRCxRQURGOztBQVFBLFlBQU1DLEtBQUssR0FBR1AsSUFBSSxDQUFDUSxRQUFMLENBQWNMLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXZCLENBQTRCRyxLQUExQztBQUNBLGFBQ0UsTUFBQyw2REFBRCxDQUFjLElBQWQ7QUFDRSxVQUFFLEVBQUVQLElBQUksQ0FBQ1MsRUFEWDtBQUVFLGFBQUssRUFBRVIsS0FGVDtBQUdFLDBCQUFrQixFQUFFO0FBSHRCLFNBS0UsTUFBQyxzREFBRCxRQUNFLE1BQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQVksWUFBSTtBQUFoQixTQUNFLGtCQUNFLE1BQUMsMERBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCLFNBQ0dELElBQUksQ0FBQ1UsS0FEUixDQURGLENBREYsQ0FERixFQVFFLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0Usc0JBQUtILEtBQUwsQ0FERixDQVJGLENBTEYsQ0FERjtBQW9CRDtBQWxDSCxJQURGLENBREYsQ0F3Q0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqREY7QUFtREQ7O0FBRWN0QiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyBDYXJkLCBSZXNvdXJjZUxpc3QsIFN0YWNrLCBUZXh0U3R5bGUsIFRodW1ibmFpbCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcblxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxucXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKXtcbiAgbm9kZXMoaWRzOiAkaWRzKXtcbiAgICAuLi4gb24gUHJvZHVjdHtcbiAgICAgIHRpdGxlXG4gICAgICBoYW5kbGVcbiAgICAgIGlkXG4gICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhcmlhbnRzKGZpcnN0OjEpe1xuICAgICAgICBlZGdlc3tcbiAgICAgICAgICBub2Rle1xuICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59YDtcblxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1BST0RVQ1RTX0JZX0lELCB7IHZhcmlhYmxlczogeyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfSB9KVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG5cbiAgY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPFJlc291cmNlTGlzdFxuICAgICAgICBzaG93SGVhZGVyXG4gICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogJ1Byb2R1Y3QnLCBwbHVyYWw6ICdQcm9kdWN0cycgfX1cbiAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XG4gICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xuICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxuICAgICAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgICAgICBzb3VyY2U9e2l0ZW0uaW1hZ2VzLmVkZ2VzWzBdID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyYyA6ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXSA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLmFsdFRleHQgOiAnJ1xuICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXG4gICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17J1ZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfSd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj0nc3Ryb25nJz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0gPlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICA8L0NhcmQ+XG4gICAgLy8gPGRpdj5cbiAgICAvLyAgIDxoMT5IZWxsbyBmcm9tIFByb2R1Y3RsaXN0PC9oMT5cbiAgICAvLyAgIHtcbiAgICAvLyAgICAgZGF0YS5ub2Rlcy5tYXAoaXRlbSA9PiB7XG4gICAgLy8gICAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICAgIDxwIGtleT17aXRlbS5pZH0+e2l0ZW0udGl0bGV9PC9wPlxuICAgIC8vICAgICAgIClcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Index() {\n  const {\n    0: modal,\n    1: setModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    open: false\n  });\n  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');\n\n  function handleSelection(resources) {\n    const idsFromResources = resources.selection.map(product => product.id);\n    setModal({\n      open: false\n    });\n    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idsFromResources);\n    console.log(store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids'));\n  }\n\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n    resourceType: \"Product\",\n    showVariants: false,\n    open: modal.open,\n    onCancel: () => setModal({\n      open: false\n    }),\n    onSelection: resources => handleSelection(resources)\n  }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Manage your inventory transfers\",\n    action: {\n      content: 'Select Products',\n      onAction: () => setModal({\n        open: true\n      })\n    },\n    image: \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\"\n  }, __jsx(\"p\", null, \"Select Products\"))) : __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImVtcHR5U3RhdGUiLCJzdG9yZSIsImdldCIsImhhbmRsZVNlbGVjdGlvbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUViLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELENBQWxDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQUNDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQXBCOztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DO0FBQ2hDLFVBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXlCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0MsRUFBN0MsQ0FBekI7QUFDQVosWUFBUSxDQUFDO0FBQUVFLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNBRSxtREFBSyxDQUFDUyxHQUFOLENBQVUsS0FBVixFQUFpQkwsZ0JBQWpCO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCwrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixDQUFaO0FBQ0g7O0FBRUQsU0FDSSxNQUFDLHFEQUFELFFBQ0ksTUFBQyx3RUFBRDtBQUNJLGdCQUFZLEVBQUMsU0FEakI7QUFFSSxnQkFBWSxFQUFFLEtBRmxCO0FBR0ksUUFBSSxFQUFFTixLQUFLLENBQUNHLElBSGhCO0FBSUksWUFBUSxFQUFFLE1BQU1GLFFBQVEsQ0FBQztBQUFFRSxVQUFJLEVBQUU7QUFBUixLQUFELENBSjVCO0FBS0ksZUFBVyxFQUFHSyxTQUFELElBQWVELGVBQWUsQ0FBQ0MsU0FBRDtBQUwvQyxJQURKLEVBUUtKLFVBQVUsR0FDUCxNQUFDLHVEQUFELFFBQ0ksTUFBQywyREFBRDtBQUNJLFdBQU8sRUFBQyxpQ0FEWjtBQUVJLFVBQU0sRUFBRTtBQUNKYSxhQUFPLEVBQUUsaUJBREw7QUFFSkMsY0FBUSxFQUFFLE1BQU1qQixRQUFRLENBQUM7QUFBRUUsWUFBSSxFQUFFO0FBQVIsT0FBRDtBQUZwQixLQUZaO0FBTUksU0FBSyxFQUFDO0FBTlYsS0FPSSxtQ0FQSixDQURKLENBRE8sR0FhUCxNQUFDLCtEQUFELE9BckJSLENBREo7QUF5Qkg7O0FBR2NKLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IFJlc291cmNlUGlja2VyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcblxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKSB7XG4gICAgICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gICAgICAgIHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICAgIHN0b3JlLnNldCgnaWRzJywgaWRzRnJvbVJlc291cmNlcylcbiAgICAgICAgY29uc29sZS5sb2coc3RvcmUuZ2V0KCdpZHMnKSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb3Blbj17bW9kYWwub3Blbn1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWwoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2VtcHR5U3RhdGUgP1xuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiTWFuYWdlIHlvdXIgaW52ZW50b3J5IHRyYW5zZmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IFByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoeyBvcGVuOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VsZWN0IFByb2R1Y3RzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0TGlzdCAvPn1cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });