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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ \"./src/components/Table/Body/Cell.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Shop59\\\\Desktop\\\\\\u041F\\u0440\\u043E\\u0435\\u043A\\u0442\\u044B\\\\pet projects\\\\react-table\\\\src\\\\components\\\\Table\\\\Body\\\\index.tsx\";\n\n\n\nconst TableBody = ({\n  columns,\n  data,\n  numberPerPage\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n  children: [data === null || data === void 0 ? void 0 : data.map((item, i) => {\n    var _item$id;\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n      role: \"row\",\n      children: columns.map((col, j) => {\n        var _col$id;\n\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          content: item[col.accessor]\n        }, (_col$id = col.id) !== null && _col$id !== void 0 ? _col$id : j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, undefined);\n      })\n    }, (_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined);\n  }), numberPerPage - (data === null || data === void 0 ? void 0 : data.length) > 0 && Array.from(Array(numberPerPage - (data === null || data === void 0 ? void 0 : data.length))).map((_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n    children: columns.map((col, j) => {\n      var _ref;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n        className: \"empty\",\n        role: \"cell\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n          children: \"_\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 15\n        }, undefined)\n      }, (_ref = col.id * 999) !== null && _ref !== void 0 ? _ref : j * 999, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }, undefined);\n    })\n  }, i * 9999, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, undefined))]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 12,\n  columnNumber: 3\n}, undefined);\n\n_c = TableBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableBody);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableBody\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Cb2R5L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7O0FBUUEsTUFBTUMsU0FBOEIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE9BQUY7QUFBV0MsRUFBQUEsSUFBWDtBQUFpQkMsRUFBQUE7QUFBakIsQ0FBRCxrQkFDckM7QUFBQSxhQUNHRCxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRUUsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBOztBQUFBLHdCQUNUO0FBQXVCLFVBQUksRUFBQyxLQUE1QjtBQUFBLGdCQUNHTCxPQUFPLENBQUNHLEdBQVIsQ0FBWSxDQUFDRyxHQUFELEVBQU1DLENBQU47QUFBQTs7QUFBQSw0QkFDWCw4REFBQyw2Q0FBRDtBQUE2QixpQkFBTyxFQUFFSCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0UsUUFBTDtBQUExQyxzQkFBZ0JGLEdBQUcsQ0FBQ0csRUFBcEIsNkNBQTBCRixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURXO0FBQUEsT0FBWjtBQURILG1CQUFTSCxJQUFJLENBQUNLLEVBQWQsK0NBQW9CSixDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsR0FBVixDQURILEVBU0dILGFBQWEsSUFBR0QsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVTLE1BQVQsQ0FBYixHQUErQixDQUEvQixJQUNDQyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDVCxhQUFhLElBQUdELElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFUyxNQUFULENBQWQsQ0FBaEIsRUFBZ0RQLEdBQWhELENBQW9ELENBQUNVLENBQUQsRUFBSVIsQ0FBSixrQkFDbEQ7QUFBQSxjQUNHTCxPQUFPLENBQUNHLEdBQVIsQ0FBWSxDQUFDRyxHQUFELEVBQU1DLENBQU47QUFBQTs7QUFBQSwwQkFDWDtBQUFrQyxpQkFBUyxFQUFDLE9BQTVDO0FBQW9ELFlBQUksRUFBQyxNQUF6RDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNELEdBQUcsQ0FBQ0csRUFBSixHQUFTLEdBQWxCLHVDQUF5QkYsQ0FBQyxHQUFHLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFc7QUFBQSxLQUFaO0FBREgsS0FBU0YsQ0FBQyxHQUFHLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0tBQU1OO0FBdUJOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RhYmxlL0JvZHkvaW5kZXgudHN4P2Y1MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElUYWJsZUNvbHVtbiB9IGZyb20gJy4uL3R5cGVzL0lUYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9DZWxsJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUJvZHlQcm9wcyB7XG4gIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj5cbiAgZGF0YTogYW55XG4gIG51bWJlclBlclBhZ2U6IG51bWJlclxufVxuXG5jb25zdCBUYWJsZUJvZHk6IEZDPElUYWJsZUJvZHlQcm9wcz4gPSAoeyBjb2x1bW5zLCBkYXRhLCBudW1iZXJQZXJQYWdlIH0pID0+IChcbiAgPHRib2R5PlxuICAgIHtkYXRhPy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgIDx0ciBrZXk9e2l0ZW0uaWQgPz8gaX0gcm9sZT1cInJvd1wiPlxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaikgPT4gKFxuICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2wuaWQgPz8gan0gY29udGVudD17aXRlbVtjb2wuYWNjZXNzb3JdfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdHI+XG4gICAgKSl9XG5cbiAgICB7bnVtYmVyUGVyUGFnZSAtIGRhdGE/Lmxlbmd0aCA+IDAgJiZcbiAgICAgIEFycmF5LmZyb20oQXJyYXkobnVtYmVyUGVyUGFnZSAtIGRhdGE/Lmxlbmd0aCkpLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICA8dHIga2V5PXtpICogOTk5OX0+XG4gICAgICAgICAge2NvbHVtbnMubWFwKChjb2wsIGopID0+IChcbiAgICAgICAgICAgIDx0ZCBrZXk9e2NvbC5pZCAqIDk5OSA/PyBqICogOTk5fSBjbGFzc05hbWU9XCJlbXB0eVwiIHJvbGU9XCJjZWxsXCI+XG4gICAgICAgICAgICAgIDxzcGFuPl88L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RyPlxuICAgICAgKSl9XG4gIDwvdGJvZHk+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQm9keVxuIl0sIm5hbWVzIjpbIlRhYmxlQ2VsbCIsIlRhYmxlQm9keSIsImNvbHVtbnMiLCJkYXRhIiwibnVtYmVyUGVyUGFnZSIsIm1hcCIsIml0ZW0iLCJpIiwiY29sIiwiaiIsImFjY2Vzc29yIiwiaWQiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJfIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Table/Body/index.tsx\n");

/***/ })

});