"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/features/Calendar/Calendar.jsx":
/*!********************************************!*\
  !*** ./src/features/Calendar/Calendar.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Calendar: function() { return /* binding */ Calendar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"(app-pages-browser)/./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Grid!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ \"(app-pages-browser)/./src/features/Calendar/hooks/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"(app-pages-browser)/./src/features/Calendar/constants.js\");\n/* __next_internal_client_entry_do_not_use__ Calendar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst propTypes = {\n    weeks: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)\n};\nconst Calendar = (param)=>{\n    let { weeks = 5 } = param;\n    _s();\n    const calendar = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useCalendar)({\n        weeks,\n        viewedDate: moment__WEBPACK_IMPORTED_MODULE_2___default()()\n    });\n    const calendarDays = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>calendar.getCalendarDays({\n            calendarFormat: _constants__WEBPACK_IMPORTED_MODULE_4__.CALENDAR_FORMATS.WEEKS\n        }), []);\n    const renderWeekdayName = ()=>{};\n    const header = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            children: _constants__WEBPACK_IMPORTED_MODULE_4__.WEEK_DAYS.map((dayName)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    item: true,\n                    xl: 12 / _constants__WEBPACK_IMPORTED_MODULE_4__.DAYS_PER_WEEK,\n                    children: dayName\n                }, dayName, false, {\n                    fileName: \"C:\\\\Users\\\\dbohdan\\\\Documents\\\\projects\\\\next-calendar\\\\src\\\\features\\\\Calendar\\\\Calendar.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dbohdan\\\\Documents\\\\projects\\\\next-calendar\\\\src\\\\features\\\\Calendar\\\\Calendar.jsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, undefined), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        container: true,\n        spacing: 0,\n        children: [\n            header,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                container: true,\n                children: calendarDays.map((week)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        container: true,\n                        item: true,\n                        spacing: 0,\n                        children: week.map((day)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Grid_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                item: true,\n                                xl: 12 / _constants__WEBPACK_IMPORTED_MODULE_4__.DAYS_PER_WEEK,\n                                children: day.format(\"YYYY-MM-DD\")\n                            }, day.format(\"YYYY-MM-DD\"), false, {\n                                fileName: \"C:\\\\Users\\\\dbohdan\\\\Documents\\\\projects\\\\next-calendar\\\\src\\\\features\\\\Calendar\\\\Calendar.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined))\n                    }, week[0].format(\"YYYY-MM-DD\"), false, {\n                        fileName: \"C:\\\\Users\\\\dbohdan\\\\Documents\\\\projects\\\\next-calendar\\\\src\\\\features\\\\Calendar\\\\Calendar.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dbohdan\\\\Documents\\\\projects\\\\next-calendar\\\\src\\\\features\\\\Calendar\\\\Calendar.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dbohdan\\\\Documents\\\\projects\\\\next-calendar\\\\src\\\\features\\\\Calendar\\\\Calendar.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Calendar, \"9cTmWrpsZnOWumIgb0oGmyG6GQ4=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_3__.useCalendar\n    ];\n});\n_c = Calendar;\nCalendar.propTypes = propTypes;\n\nvar _c;\n$RefreshReg$(_c, \"Calendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9mZWF0dXJlcy9DYWxlbmRhci9DYWxlbmRhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUNHO0FBQ1A7QUFHTDtBQUVlO0FBS2pCO0FBRXJCLE1BQU1RLFlBQVk7SUFDaEJDLE9BQU9SLDBEQUFnQjtBQUN6QjtBQUVBLE1BQU1VLFdBQVc7UUFBQyxFQUNoQkYsUUFBUSxDQUFDLEVBQ1Y7O0lBQ0MsTUFBTUcsV0FBV1IsbURBQVdBLENBQUM7UUFBRUs7UUFBT0ksWUFBWVgsNkNBQU1BO0lBQUc7SUFFM0QsTUFBTVksZUFBZWQsOENBQU9BLENBQUMsSUFBTVksU0FBU0csZUFBZSxDQUFDO1lBQzFEQyxnQkFBZ0JYLHdEQUFnQkEsQ0FBQ1ksS0FBSztRQUN4QyxJQUFJLEVBQUU7SUFFTixNQUFNQyxvQkFBb0IsS0FFMUI7SUFFQSxNQUFNQyxTQUFTbkIsOENBQU9BLENBQUMsa0JBQ3JCLDhEQUFDRyxnRkFBSUE7WUFBQ2lCLFNBQVM7c0JBQ1piLGlEQUFTQSxDQUFDYyxHQUFHLENBQUNDLENBQUFBOzhCQUNiLDhEQUFDbkIsZ0ZBQUlBO29CQUVIb0IsSUFBSTtvQkFDSkMsSUFBSSxLQUFHbEIscURBQWFBOzhCQUVuQmdCO21CQUpJQTs7Ozs7WUFNVDs7Ozs7dUJBRUEsRUFBRTtJQUVOLHFCQUNFLDhEQUFDbkIsZ0ZBQUlBO1FBQUNpQixTQUFTO1FBQUNLLFNBQVM7O1lBQ3RCTjswQkFDRCw4REFBQ2hCLGdGQUFJQTtnQkFBQ2lCLFNBQVM7MEJBQ1pOLGFBQWFPLEdBQUcsQ0FBQ0ssQ0FBQUEscUJBQ2hCLDhEQUFDdkIsZ0ZBQUlBO3dCQUVIaUIsU0FBUzt3QkFDVEcsSUFBSTt3QkFDSkUsU0FBUztrQ0FHUEMsS0FBS0wsR0FBRyxDQUFDTSxDQUFBQSxvQkFDUCw4REFBQ3hCLGdGQUFJQTtnQ0FFSG9CLElBQUk7Z0NBQ0pDLElBQUksS0FBR2xCLHFEQUFhQTswQ0FFbkJxQixJQUFJQyxNQUFNLENBQUM7K0JBSlBELElBQUlDLE1BQU0sQ0FBQzs7Ozs7dUJBUmpCRixJQUFJLENBQUMsRUFBRSxDQUFDRSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmhDO0dBdERNakI7O1FBR2FQLCtDQUFXQTs7O0tBSHhCTztBQXdETkEsU0FBU0gsU0FBUyxHQUFHQTtBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9DYWxlbmRhci9DYWxlbmRhci5qc3g/Y2M0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxufSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IHVzZUNhbGVuZGFyIH0gZnJvbSAnLi9ob29rcyc7XHJcbmltcG9ydCB7XHJcbiAgQ0FMRU5EQVJfRk9STUFUUyxcclxuICBEQVlTX1BFUl9XRUVLLFxyXG4gIFdFRUtfREFZUyxcclxufSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgd2Vla3M6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5jb25zdCBDYWxlbmRhciA9ICh7XHJcbiAgd2Vla3MgPSA1LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgY2FsZW5kYXIgPSB1c2VDYWxlbmRhcih7IHdlZWtzLCB2aWV3ZWREYXRlOiBtb21lbnQoKSB9KTtcclxuXHJcbiAgY29uc3QgY2FsZW5kYXJEYXlzID0gdXNlTWVtbygoKSA9PiBjYWxlbmRhci5nZXRDYWxlbmRhckRheXMoe1xyXG4gICAgY2FsZW5kYXJGb3JtYXQ6IENBTEVOREFSX0ZPUk1BVFMuV0VFS1MsXHJcbiAgfSksIFtdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyV2Vla2RheU5hbWUgPSAoKSA9PiB7XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGVhZGVyID0gdXNlTWVtbygoKSA9PiAoKFxyXG4gICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICB7V0VFS19EQVlTLm1hcChkYXlOYW1lID0+IHtcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAga2V5PXtkYXlOYW1lfVxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgeGw9ezEyL0RBWVNfUEVSX1dFRUt9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2RheU5hbWV9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICB9KX1cclxuICAgIDwvR3JpZD5cclxuICApKSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG4gICAgICB7aGVhZGVyfVxyXG4gICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAge2NhbGVuZGFyRGF5cy5tYXAod2VlayA9PiAoKFxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAga2V5PXt3ZWVrWzBdLmZvcm1hdCgnWVlZWS1NTS1ERCcpfVxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgd2Vlay5tYXAoZGF5ID0+ICgoXHJcbiAgICAgICAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2RheS5mb3JtYXQoJ1lZWVktTU0tREQnKX1cclxuICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgICB4bD17MTIvREFZU19QRVJfV0VFS31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2RheS5mb3JtYXQoJ1lZWVktTU0tREQnKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICkpKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5DYWxlbmRhci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5leHBvcnQgeyBDYWxlbmRhciB9O1xyXG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIlByb3BUeXBlcyIsIm1vbWVudCIsIkdyaWQiLCJ1c2VDYWxlbmRhciIsIkNBTEVOREFSX0ZPUk1BVFMiLCJEQVlTX1BFUl9XRUVLIiwiV0VFS19EQVlTIiwicHJvcFR5cGVzIiwid2Vla3MiLCJudW1iZXIiLCJDYWxlbmRhciIsImNhbGVuZGFyIiwidmlld2VkRGF0ZSIsImNhbGVuZGFyRGF5cyIsImdldENhbGVuZGFyRGF5cyIsImNhbGVuZGFyRm9ybWF0IiwiV0VFS1MiLCJyZW5kZXJXZWVrZGF5TmFtZSIsImhlYWRlciIsImNvbnRhaW5lciIsIm1hcCIsImRheU5hbWUiLCJpdGVtIiwieGwiLCJzcGFjaW5nIiwid2VlayIsImRheSIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/features/Calendar/Calendar.jsx\n"));

/***/ })

});