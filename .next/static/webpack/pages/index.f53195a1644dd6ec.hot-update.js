"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Table/Body/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Table/Body/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Shop59\\\\Desktop\\\\\\u041F\\u0440\\u043E\\u0435\\u043A\\u0442\\u044B\\\\pet projects\\\\react-table\\\\src\\\\components\\\\Table\\\\Body\\\\index.tsx\";\n\n\nconst TableBody = ({\n  columns,\n  data,\n  numberPerPage\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n    children: [data === null || data === void 0 ? void 0 : data.map((item, i) => {\n      var _item$id;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        role: \"row\",\n        children: columns.map((col, j) => {\n          var _col$id;\n\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n            role: \"cell\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              children: item[col.accessor]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 15\n            }, undefined)\n          }, (_col$id = col.id) !== null && _col$id !== void 0 ? _col$id : j, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, undefined);\n        })\n      }, (_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined);\n    }), numberPerPage - (data === null || data === void 0 ? void 0 : data.length) > 0 && Array.from(Array(numberPerPage - (data === null || data === void 0 ? void 0 : data.length))).map((_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        colSpan: columns.length,\n        role: \"cell\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, undefined)\n    }, i * 9999, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }, undefined))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\n_c = TableBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableBody);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableBody\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Cb2R5L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBU0EsTUFBTUEsU0FBOEIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE9BQUY7QUFBV0MsRUFBQUEsSUFBWDtBQUFpQkMsRUFBQUE7QUFBakIsQ0FBRCxLQUFzQztBQUMzRSxzQkFDRTtBQUFBLGVBQ0dELElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUFFRSxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUE7O0FBQUEsMEJBQ1Q7QUFBdUIsWUFBSSxFQUFDLEtBQTVCO0FBQUEsa0JBQ0dMLE9BQU8sQ0FBQ0csR0FBUixDQUFZLENBQUNHLEdBQUQsRUFBTUMsQ0FBTjtBQUFBOztBQUFBLDhCQUNYO0FBQXNCLGdCQUFJLEVBQUMsTUFBM0I7QUFBQSxtQ0FDRTtBQUFBLHdCQUFPSCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0UsUUFBTDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix3QkFBU0YsR0FBRyxDQUFDRyxFQUFiLDZDQUFtQkYsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEVztBQUFBLFNBQVo7QUFESCxxQkFBU0gsSUFBSSxDQUFDSyxFQUFkLCtDQUFvQkosQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLEtBQVYsQ0FESCxFQVdHSCxhQUFhLElBQUdELElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFUyxNQUFULENBQWIsR0FBK0IsQ0FBL0IsSUFDQ0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQ1QsYUFBYSxJQUFHRCxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRVMsTUFBVCxDQUFkLENBQWhCLEVBQWdEUCxHQUFoRCxDQUFvRCxDQUFDVSxDQUFELEVBQUlSLENBQUosa0JBQ2xEO0FBQUEsNkJBQ0U7QUFBSSxlQUFPLEVBQUVMLE9BQU8sQ0FBQ1UsTUFBckI7QUFBNkIsWUFBSSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFTTCxDQUFDLEdBQUcsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0FyQkQ7O0tBQU1OO0FBdUJOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RhYmxlL0JvZHkvaW5kZXgudHN4P2Y1MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElUYWJsZUNvbHVtbiB9IGZyb20gJy4uL3R5cGVzL0lUYWJsZUNvbHVtbidcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVCb2R5UHJvcHMge1xuICBjb2x1bW5zOiBBcnJheTxJVGFibGVDb2x1bW4+XG4gIGRhdGE6IGFueVxuICBudW1iZXJQZXJQYWdlOiBudW1iZXJcbn1cblxuY29uc3QgVGFibGVCb2R5OiBGQzxJVGFibGVCb2R5UHJvcHM+ID0gKHsgY29sdW1ucywgZGF0YSwgbnVtYmVyUGVyUGFnZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRib2R5PlxuICAgICAge2RhdGE/Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICA8dHIga2V5PXtpdGVtLmlkID8/IGl9IHJvbGU9XCJyb3dcIj5cbiAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaikgPT4gKFxuICAgICAgICAgICAgPHRkIGtleT17Y29sLmlkID8/IGp9IHJvbGU9XCJjZWxsXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntpdGVtW2NvbC5hY2Nlc3Nvcl19PC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90cj5cbiAgICAgICkpfVxuXG4gICAgICB7bnVtYmVyUGVyUGFnZSAtIGRhdGE/Lmxlbmd0aCA+IDAgJiZcbiAgICAgICAgQXJyYXkuZnJvbShBcnJheShudW1iZXJQZXJQYWdlIC0gZGF0YT8ubGVuZ3RoKSkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgPHRyIGtleT17aSAqIDk5OTl9PlxuICAgICAgICAgICAgPHRkIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofSByb2xlPVwiY2VsbFwiIC8+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgPC90Ym9keT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUJvZHlcbiJdLCJuYW1lcyI6WyJUYWJsZUJvZHkiLCJjb2x1bW5zIiwiZGF0YSIsIm51bWJlclBlclBhZ2UiLCJtYXAiLCJpdGVtIiwiaSIsImNvbCIsImoiLCJhY2Nlc3NvciIsImlkIiwibGVuZ3RoIiwiQXJyYXkiLCJmcm9tIiwiXyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Table/Body/index.tsx\n");

/***/ })

});