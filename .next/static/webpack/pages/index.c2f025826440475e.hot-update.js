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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Shop59\\\\Desktop\\\\\\u041F\\u0440\\u043E\\u0435\\u043A\\u0442\\u044B\\\\pet projects\\\\react-table\\\\src\\\\components\\\\Table\\\\Body\\\\index.tsx\";\n\n\nconst TableBody = ({\n  columns,\n  data,\n  numberPerPage\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n  children: [data === null || data === void 0 ? void 0 : data.map((item, i) => {\n    var _item$id;\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n      role: \"row\",\n      children: columns.map((col, j) => {\n        var _col$id;\n\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n          role: \"cell\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: item[col.accessor]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, undefined)\n        }, (_col$id = col.id) !== null && _col$id !== void 0 ? _col$id : j, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, undefined);\n      })\n    }, (_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined);\n  }), Array.from(Array(numberPerPage - (data === null || data === void 0 ? void 0 : data.length)).map((e, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n      colSpan: columns.length,\n      role: \"cell\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 7\n  }, undefined))), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n      width: \"540\",\n      height: \"30\",\n      children: \"\\u0421\\u0442\\u0440\\u043E\\u043A\\u0430 1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n      rowSpan: \"3\",\n      children: \"\\u0422\\u0440\\u0438 \\u0441\\u0442\\u0440\\u043E\\u043A\\u0438 -rowspan\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 11,\n  columnNumber: 3\n}, undefined);\n\n_c = TableBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableBody);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableBody\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Cb2R5L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBU0EsTUFBTUEsU0FBOEIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE9BQUY7QUFBV0MsRUFBQUEsSUFBWDtBQUFpQkMsRUFBQUE7QUFBakIsQ0FBRCxrQkFDckM7QUFBQSxhQUNHRCxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRUUsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBOztBQUFBLHdCQUNUO0FBQXVCLFVBQUksRUFBQyxLQUE1QjtBQUFBLGdCQUNHTCxPQUFPLENBQUNHLEdBQVIsQ0FBWSxDQUFDRyxHQUFELEVBQU1DLENBQU47QUFBQTs7QUFBQSw0QkFDWDtBQUFzQixjQUFJLEVBQUMsTUFBM0I7QUFBQSxpQ0FDRTtBQUFBLHNCQUFPSCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0UsUUFBTDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixzQkFBU0YsR0FBRyxDQUFDRyxFQUFiLDZDQUFtQkYsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVztBQUFBLE9BQVo7QUFESCxtQkFBU0gsSUFBSSxDQUFDSyxFQUFkLCtDQUFvQkosQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLEdBQVYsQ0FESCxFQVdHSyxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDUixhQUFhLElBQUdELElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFVyxNQUFULENBQWQsQ0FBTCxDQUFvQ1QsR0FBcEMsQ0FBd0MsQ0FBQ1UsQ0FBRCxFQUFJUixDQUFKLGtCQUNsRDtBQUFBLDJCQUNBO0FBQ0EsYUFBTyxFQUFFTCxPQUFPLENBQUNZLE1BRGpCO0FBRUEsVUFBSSxFQUFDO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVSxDQUFYLENBWEgsZUFtQkU7QUFBQSw0QkFDRTtBQUFJLFdBQUssRUFBQyxLQUFWO0FBQWdCLFlBQU0sRUFBQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUksYUFBTyxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztLQUFNYjtBQTZCTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJsZS9Cb2R5L2luZGV4LnRzeD9mNTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJVGFibGVDb2x1bW4gfSBmcm9tICcuLi90eXBlcy9JVGFibGVDb2x1bW4nXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQm9keVByb3BzIHtcbiAgY29sdW1uczogQXJyYXk8SVRhYmxlQ29sdW1uPlxuICBkYXRhOiBhbnlcbiAgbnVtYmVyUGVyUGFnZTogbnVtYmVyXG59XG5cbmNvbnN0IFRhYmxlQm9keTogRkM8SVRhYmxlQm9keVByb3BzPiA9ICh7IGNvbHVtbnMsIGRhdGEsIG51bWJlclBlclBhZ2UgfSkgPT4gKFxuICA8dGJvZHk+XG4gICAge2RhdGE/Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgPHRyIGtleT17aXRlbS5pZCA/PyBpfSByb2xlPVwicm93XCI+XG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sLCBqKSA9PiAoXG4gICAgICAgICAgPHRkIGtleT17Y29sLmlkID8/IGp9IHJvbGU9XCJjZWxsXCI+XG4gICAgICAgICAgICA8c3Bhbj57aXRlbVtjb2wuYWNjZXNzb3JdfTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICApKX1cbiAgICAgIDwvdHI+XG4gICAgKSl9XG5cbiAgICB7QXJyYXkuZnJvbShBcnJheShudW1iZXJQZXJQYWdlIC0gZGF0YT8ubGVuZ3RoKS5tYXAoKGUsIGkpID0+IChcbiAgICAgIDx0cj5cbiAgICAgIDx0ZFxuICAgICAgY29sU3Bhbj17Y29sdW1ucy5sZW5ndGh9XG4gICAgICByb2xlPVwiY2VsbFwiXG4gICAgICAvPlxuICAgICAgPC90cj5cbiAgICAgICkpKX1cbiAgICA8dHI+XG4gICAgICA8dGQgd2lkdGg9XCI1NDBcIiBoZWlnaHQ9XCIzMFwiPlxuICAgICAgICDQodGC0YDQvtC60LAgMVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCByb3dTcGFuPVwiM1wiPtCi0YDQuCDRgdGC0YDQvtC60LggLXJvd3NwYW48L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQm9keVxuIl0sIm5hbWVzIjpbIlRhYmxlQm9keSIsImNvbHVtbnMiLCJkYXRhIiwibnVtYmVyUGVyUGFnZSIsIm1hcCIsIml0ZW0iLCJpIiwiY29sIiwiaiIsImFjY2Vzc29yIiwiaWQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Table/Body/index.tsx\n");

/***/ })

});