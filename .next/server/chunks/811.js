"use strict";
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 3811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_LoadingImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2412);



function Grid(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5", props.className),
        children: props.children
    });
}
function Fragment({ itemData  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-60vw max-h-96 w-full md:h-30vw lg:h-20vw",
                children: itemData.cover && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_LoadingImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    className: "h-full w-full rounded-lg object-cover",
                    src: itemData.cover,
                    alt: itemData.title
                }) || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex h-full w-full items-center justify-center rounded-lg bg-gray-200 p-3 text-xl ",
                    children: itemData.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mt-3 mb-1 text-xs text-gray-400",
                        children: [
                            " ",
                            itemData.update
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: itemData.title
                    })
                ]
            })
        ]
    });
}
const ItemGrid = {
    Grid,
    Fragment
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemGrid);


/***/ })

};
;