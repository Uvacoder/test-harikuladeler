webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Hero */ \"./components/Hero.js\");\n/* harmony import */ var _category_slug___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/[slug] */ \"./pages/category/[slug].js\");\n\n\nvar _jsxFileName = \"/home/cbs/Projects/Github/harikuladeler-folder/harikulade-next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var linkdata = _ref.linkdata,\n      categorydata = _ref.categorydata,\n      tagdata = _ref.tagdata;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var pathname = router.pathname;\n  console.log(\"home\", pathname);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"all\"),\n      activeState = _useState[0],\n      setActiveState = _useState[1];\n\n  var favouriteTags = tagdata.filter(function (t) {\n    return t.fields.fav === true;\n  });\n  var existingTags = tagdata.filter(function (t) {\n    return t.fields.link;\n  });\n  var existingCategories = categorydata.filter(function (c) {\n    return c.fields.link;\n  });\n  var tagNames = existingTags.map(function (t) {\n    return t.fields.name;\n  });\n  var categoryNames = existingCategories.map(function (c) {\n    return c.fields.name;\n  });\n  var favourites = linkdata.filter(function (link) {\n    return link.fields.fav === true;\n  });\n\n  var getTagNamesById = function getTagNamesById(tagId) {\n    return tagdata.filter(function (t) {\n      return t.id === tagId;\n    }).map(function (t) {\n      return t.fields.name;\n    })[0];\n  };\n\n  var getLinksByTagName = function getLinksByTagName(tagSlug) {\n    var currentTag = existingTags.filter(function (t) {\n      return t.fields.slug === tagSlug;\n    })[0];\n    var currentLinkIds = currentTag.fields.link;\n    return linkdata.filter(function (l) {\n      return currentLinkIds.includes(l.id);\n    });\n  };\n\n  var activeLinks = activeState === \"all\" ? favourites : getLinksByTagName(activeState);\n\n  var handleClick = function handleClick(e, tagname) {\n    //e.preventDefault()\n    //router.push(tagname)\n    console.log(tagname);\n    setActiveState(tagname);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    window.dataLayer = window.dataLayer || [];\n\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n\n    gtag('js', new Date());\n    gtag('config', 'G-YWQNTGMG9S');\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Harikulade Uygulamalar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Harikulade uygulamalar ke\\u015Ffedin.  Yaz\\u0131l\\u0131m, tasar\\u0131m, \\xFCretkenlik, i\\u015F ve no-code uygulamalar\\u0131 k\\xFCrasyonu.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Awesome Digital Products\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Harikuladeler is a collection of bookmarks includes design, development, marketing, office and no-code web apps and sites.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      categories: categorydata\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"Selector\",\n      children: favouriteTags.map(function (t) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"radio\",\n          title: t.fields.name,\n          value: t.fields.slug,\n          onChange: function onChange(e) {\n            return handleClick(e, t.fields.slug);\n          },\n          checked: activeState === t.fields.slug,\n          name: \"selector\"\n        }, t.fields.slug, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"section main\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        id: \"w-node-9dc513ed9196-06916ab9\",\n        \"class\": \"div-block-6\",\n        children: activeLinks.map(function (link) {\n          var tagNames = link.fields.tag ? link.fields.tag.map(function (tid) {\n            return getTagNamesById(tid);\n          }) : [];\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            tagNames: tagNames,\n            slug: link.fields.slug,\n            title: link.fields.title,\n            bilgi: link.fields.bilgi,\n            description: link.fields.description,\n            imageUrl: link.fields.imageUrl,\n            url: link.fields.url\n          }, link.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"LSpm4b9fxkXWSddwRIkqB+o/V1g=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibGlua2RhdGEiLCJjYXRlZ29yeWRhdGEiLCJ0YWdkYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJhY3RpdmVTdGF0ZSIsInNldEFjdGl2ZVN0YXRlIiwiZmF2b3VyaXRlVGFncyIsImZpbHRlciIsInQiLCJmaWVsZHMiLCJmYXYiLCJleGlzdGluZ1RhZ3MiLCJsaW5rIiwiZXhpc3RpbmdDYXRlZ29yaWVzIiwiYyIsInRhZ05hbWVzIiwibWFwIiwibmFtZSIsImNhdGVnb3J5TmFtZXMiLCJmYXZvdXJpdGVzIiwiZ2V0VGFnTmFtZXNCeUlkIiwidGFnSWQiLCJpZCIsImdldExpbmtzQnlUYWdOYW1lIiwidGFnU2x1ZyIsImN1cnJlbnRUYWciLCJzbHVnIiwiY3VycmVudExpbmtJZHMiLCJsIiwiaW5jbHVkZXMiLCJhY3RpdmVMaW5rcyIsImhhbmRsZUNsaWNrIiwiZSIsInRhZ25hbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJkYXRhTGF5ZXIiLCJndGFnIiwicHVzaCIsImFyZ3VtZW50cyIsIkRhdGUiLCJ0YWciLCJ0aWQiLCJ0aXRsZSIsImJpbGdpIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7O0FBS2UsU0FBU0EsSUFBVCxPQUFtRDtBQUFBOztBQUFBOztBQUFBLE1BQW5DQyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsWUFBeUIsUUFBekJBLFlBQXlCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ2hFLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEZ0UsTUFFeERDLFFBRndELEdBRTNDRixNQUYyQyxDQUV4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QUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlERDs7R0F4RnVCNUIsSTtVQUNQSyxxRDs7O0tBRE9MLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcblxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiXG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvXCJcbmltcG9ydCBDYXRlZ29yeVBhZ2UgZnJvbSBcIi4vY2F0ZWdvcnkvW3NsdWddXCJcblxuaW1wb3J0IEFpcmRhdGEgIGZyb20gXCIuL2FwaS9oZWxsb1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGxpbmtkYXRhLCBjYXRlZ29yeWRhdGEsIHRhZ2RhdGEgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSByb3V0ZXJcbiAgY29uc29sZS5sb2coXCJob21lXCIsICBwYXRobmFtZSApXG4gIFxuICBjb25zdCBbYWN0aXZlU3RhdGUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiYWxsXCIpXG5cbiAgY29uc3QgZmF2b3VyaXRlVGFncyA9IHRhZ2RhdGEuZmlsdGVyKHQgPT4gdC5maWVsZHMuZmF2ID09PSB0cnVlKVxuICBjb25zdCBleGlzdGluZ1RhZ3MgPSB0YWdkYXRhLmZpbHRlcih0ID0+IHQuZmllbGRzLmxpbmspXG4gIGNvbnN0IGV4aXN0aW5nQ2F0ZWdvcmllcyA9ICBjYXRlZ29yeWRhdGEuZmlsdGVyKGMgPT4gYy5maWVsZHMubGluaylcbiAgY29uc3QgdGFnTmFtZXMgPSBleGlzdGluZ1RhZ3MubWFwKHQgPT4gdC5maWVsZHMubmFtZSlcbiAgY29uc3QgY2F0ZWdvcnlOYW1lcyA9IGV4aXN0aW5nQ2F0ZWdvcmllcy5tYXAoYyA9PiBjLmZpZWxkcy5uYW1lKVxuICBjb25zdCBmYXZvdXJpdGVzID0gbGlua2RhdGEuZmlsdGVyKGxpbmsgPT4gbGluay5maWVsZHMuZmF2ID09PSB0cnVlKVxuICBjb25zdCBnZXRUYWdOYW1lc0J5SWQgPSAodGFnSWQpID0+IHRhZ2RhdGEuZmlsdGVyKHQgPT4gdC5pZCA9PT0gdGFnSWQpLm1hcCh0ID0+IHQuZmllbGRzLm5hbWUpWzBdXG5cbiAgY29uc3QgZ2V0TGlua3NCeVRhZ05hbWUgPSAodGFnU2x1ZykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUYWcgPSBleGlzdGluZ1RhZ3MuZmlsdGVyKHQgPT4gdC5maWVsZHMuc2x1ZyA9PT0gdGFnU2x1ZylbMF1cbiAgICBjb25zdCBjdXJyZW50TGlua0lkcyA9IGN1cnJlbnRUYWcuZmllbGRzLmxpbmtcbiAgICByZXR1cm4gbGlua2RhdGEuZmlsdGVyKGwgPT4gY3VycmVudExpbmtJZHMuaW5jbHVkZXMobC5pZCkpXG4gIH1cbiAgY29uc3QgYWN0aXZlTGlua3MgPSBhY3RpdmVTdGF0ZSA9PT0gXCJhbGxcIiA/IGZhdm91cml0ZXMgOiBnZXRMaW5rc0J5VGFnTmFtZShhY3RpdmVTdGF0ZSlcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLHRhZ25hbWUpID0+IHtcbiAgICAvL2UucHJldmVudERlZmF1bHQoKVxuICAgIC8vcm91dGVyLnB1c2godGFnbmFtZSlcbiAgICBjb25zb2xlLmxvZyh0YWduYW1lLCApXG4gICAgc2V0QWN0aXZlU3RhdGUodGFnbmFtZSlcbiAgfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpfVxuICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgZ3RhZygnY29uZmlnJywgJ0ctWVdRTlRHTUc5UycpO1xuICB9LFtdKVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhhcmlrdWxhZGUgVXlndWxhbWFsYXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGFyaWt1bGFkZSB1eWd1bGFtYWxhciBrZcWfZmVkaW4uICBZYXrEsWzEsW0sIHRhc2FyxLFtLCDDvHJldGtlbmxpaywgacWfIHZlIG5vLWNvZGUgdXlndWxhbWFsYXLEsSBrw7xyYXN5b251LlwiPjwvbWV0YT5cbiAgICAgICAgPHRpdGxlPkF3ZXNvbWUgRGlnaXRhbCBQcm9kdWN0czwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIYXJpa3VsYWRlbGVyIGlzIGEgY29sbGVjdGlvbiBvZiBib29rbWFya3MgaW5jbHVkZXMgZGVzaWduLCBkZXZlbG9wbWVudCwgbWFya2V0aW5nLCBvZmZpY2UgYW5kIG5vLWNvZGUgd2ViIGFwcHMgYW5kIHNpdGVzLlwiPjwvbWV0YT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVybyBjYXRlZ29yaWVzPXtjYXRlZ29yeWRhdGF9IC8+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWxlY3RvclwiPlxuICAgICAgICB7ZmF2b3VyaXRlVGFncy5tYXAodCA9PiAoXG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAga2V5PXt0LmZpZWxkcy5zbHVnfSAgIFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICB0aXRsZT17dC5maWVsZHMubmFtZX0gXG4gICAgICAgICAgICB2YWx1ZT17dC5maWVsZHMuc2x1Z30gXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNsaWNrKGUsdC5maWVsZHMuc2x1Zyl9XG4gICAgICAgICAgICBjaGVja2VkPXthY3RpdmVTdGF0ZSA9PT0gdC5maWVsZHMuc2x1Z30gXG4gICAgICAgICAgICBuYW1lPVwic2VsZWN0b3JcIiBcbiAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBtYWluXCI+XG4gICAgICA8ZGl2IGlkPVwidy1ub2RlLTlkYzUxM2VkOTE5Ni0wNjkxNmFiOVwiIGNsYXNzPVwiZGl2LWJsb2NrLTZcIj5cbiAgICAgICAgICB7YWN0aXZlTGlua3MubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFnTmFtZXMgPSBsaW5rLmZpZWxkcy50YWcgPyBsaW5rLmZpZWxkcy50YWcubWFwKHRpZCA9PiBnZXRUYWdOYW1lc0J5SWQodGlkKSkgOiBbXTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgICAgIGtleT17bGluay5pZH1cbiAgICAgICAgICAgICAgICB0YWdOYW1lcz17dGFnTmFtZXN9XG4gICAgICAgICAgICAgICAgc2x1Zz17bGluay5maWVsZHMuc2x1Z30gXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xpbmsuZmllbGRzLnRpdGxlfSBcbiAgICAgICAgICAgICAgICBiaWxnaT17bGluay5maWVsZHMuYmlsZ2l9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2xpbmsuZmllbGRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtsaW5rLmZpZWxkcy5pbWFnZVVybH1cbiAgICAgICAgICAgICAgICB1cmw9e2xpbmsuZmllbGRzLnVybH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX0pfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3Qge2xpbmtkYXRhLCBjYXRlZ29yeWRhdGEsIHRhZ2RhdGEgfSA9IGF3YWl0IEFpcmRhdGEoKVxuICAvL2NvbnN0IGRhdGEgPSBhd2FpdCByYXdkYXRhLmpzb24oKVxuICAvL2NvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsaW5rZGF0YSwgY2F0ZWdvcnlkYXRhLCB0YWdkYXRhXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})