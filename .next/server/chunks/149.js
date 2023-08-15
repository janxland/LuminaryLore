"use strict";
exports.id = 149;
exports.ids = [149];
exports.modules = {

/***/ 4901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5808);
/* harmony import */ var _context_root_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(489);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6121);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8574);
/* __next_internal_client_entry_do_not_use__  auto */ 




const SwitchTitle = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)((props)=>{
    const { settingsStore  } = (0,_context_root_context__WEBPACK_IMPORTED_MODULE_2__/* .useRootStore */ .Yh)();
    const { t  } = (0,_app_i18n__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
    const tabs = [
        {
            title: t("bangumi")
        },
        {
            title: t("manga")
        },
        {
            title: t("fikushon")
        }
    ];
    const handleTabChange = (index)=>{
        settingsStore.setSetting("model", index);
        props.handleTabChange?.(index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mb-5 text-3xl font-bold",
                children: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tab__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                tabs: tabs,
                onChange: handleTabChange,
                index: settingsStore.getSetting("model")
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchTitle);


/***/ }),

/***/ 9408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getModel)
/* harmony export */ });
function getModel(model) {
    switch(Number(model)){
        case 0:
            return "bangumi";
        case 1:
            return "manga";
        case 2:
            return "fikushon";
        default:
            return "bangumi";
    }
}


/***/ })

};
;