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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Shop59\\\\Desktop\\\\\\u041F\\u0440\\u043E\\u0435\\u043A\\u0442\\u044B\\\\pet projects\\\\react-table\\\\src\\\\components\\\\Table\\\\Body\\\\index.tsx\";\n\n\nconst TableBody = ({\n  columns,\n  data,\n  numberPerPage\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n  children: [data === null || data === void 0 ? void 0 : data.map((item, i) => {\n    var _item$id;\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n      role: \"row\",\n      children: columns === null || columns === void 0 ? void 0 : columns.map((col, j) => {\n        var _col$id;\n\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n          role: \"cell\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: item[col.accessor]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, undefined)\n        }, (_col$id = col.id) !== null && _col$id !== void 0 ? _col$id : j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, undefined);\n      })\n    }, (_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined);\n  }), data.length < numberPerPage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n    children: columns === null || columns === void 0 ? void 0 : columns.map((col, j) => {\n      var _ref;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        rowSpan: numberPerPage - data.length,\n        role: \"cell\"\n      }, (_ref = col.id * 1000) !== null && _ref !== void 0 ? _ref : j * 1000, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, undefined);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 11,\n  columnNumber: 3\n}, undefined);\n\n_c = TableBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableBody);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableBody\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Cb2R5L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBU0EsTUFBTUEsU0FBOEIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE9BQUY7QUFBV0MsRUFBQUEsSUFBWDtBQUFpQkMsRUFBQUE7QUFBakIsQ0FBRCxrQkFDckM7QUFBQSxhQUNHRCxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRUUsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBOztBQUFBLHdCQUNUO0FBQXVCLFVBQUksRUFBQyxLQUE1QjtBQUFBLGdCQUNHTCxPQURILGFBQ0dBLE9BREgsdUJBQ0dBLE9BQU8sQ0FBRUcsR0FBVCxDQUFhLENBQUNHLEdBQUQsRUFBTUMsQ0FBTjtBQUFBOztBQUFBLDRCQUNaO0FBQXNCLGNBQUksRUFBQyxNQUEzQjtBQUFBLGlDQUNFO0FBQUEsc0JBQU9ILElBQUksQ0FBQ0UsR0FBRyxDQUFDRSxRQUFMO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHNCQUFTRixHQUFHLENBQUNHLEVBQWIsNkNBQW1CRixDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURZO0FBQUEsT0FBYjtBQURILG1CQUFTSCxJQUFJLENBQUNLLEVBQWQsK0NBQW9CSixDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsR0FBVixDQURILEVBVUdKLElBQUksQ0FBQ1MsTUFBTCxHQUFjUixhQUFkLGlCQUNDO0FBQUEsY0FDR0YsT0FESCxhQUNHQSxPQURILHVCQUNHQSxPQUFPLENBQUVHLEdBQVQsQ0FBYSxDQUFDRyxHQUFELEVBQU1DLENBQU47QUFBQTs7QUFBQSwwQkFDWjtBQUVFLGVBQU8sRUFBRUwsYUFBYSxHQUFHRCxJQUFJLENBQUNTLE1BRmhDO0FBR0UsWUFBSSxFQUFDO0FBSFAsaUJBQ09KLEdBQUcsQ0FBQ0csRUFBSixHQUFTLElBRGhCLHVDQUN3QkYsQ0FBQyxHQUFHLElBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxLQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztLQUFNUjtBQXlCTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Cb2R5L2luZGV4LnRzeD9mNTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJVGFibGVDb2x1bW4gfSBmcm9tICcuLi90eXBlcy9JVGFibGVDb2x1bW4nXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQm9keVByb3BzIHtcbiAgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPlxuICBkYXRhOiBhbnlcbiAgbnVtYmVyUGVyUGFnZTogbnVtYmVyXG59XG5cbmNvbnN0IFRhYmxlQm9keTogRkM8SVRhYmxlQm9keVByb3BzPiA9ICh7IGNvbHVtbnMsIGRhdGEsIG51bWJlclBlclBhZ2UgfSkgPT4gKFxuICA8dGJvZHk+XG4gICAge2RhdGE/Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgPHRyIGtleT17aXRlbS5pZCA/PyBpfSByb2xlPVwicm93XCI+XG4gICAgICAgIHtjb2x1bW5zPy5tYXAoKGNvbCwgaikgPT4gKFxuICAgICAgICAgIDx0ZCBrZXk9e2NvbC5pZCA/PyBqfSByb2xlPVwiY2VsbFwiPlxuICAgICAgICAgICAgPHNwYW4+e2l0ZW1bY29sLmFjY2Vzc29yXX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgKSl9XG4gICAgICA8L3RyPlxuICAgICkpfVxuICAgIHtkYXRhLmxlbmd0aCA8IG51bWJlclBlclBhZ2UgJiYgKFxuICAgICAgPHRyPlxuICAgICAgICB7Y29sdW1ucz8ubWFwKChjb2wsIGopID0+IChcbiAgICAgICAgICA8dGRcbiAgICAgICAgICAgIGtleT17Y29sLmlkICogMTAwMCA/PyBqICogMTAwMH1cbiAgICAgICAgICAgIHJvd1NwYW49e251bWJlclBlclBhZ2UgLSBkYXRhLmxlbmd0aH1cbiAgICAgICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdHI+XG4gICAgKX1cbiAgPC90Ym9keT5cbilcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVCb2R5XG4iXSwibmFtZXMiOlsiVGFibGVCb2R5IiwiY29sdW1ucyIsImRhdGEiLCJudW1iZXJQZXJQYWdlIiwibWFwIiwiaXRlbSIsImkiLCJjb2wiLCJqIiwiYWNjZXNzb3IiLCJpZCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Table/Body/index.tsx\n");

/***/ })

});