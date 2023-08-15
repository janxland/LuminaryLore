"use strict";
(() => {
var exports = {};
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 7332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ GET)
});

;// CONCATENATED MODULE: external "next-http-proxy-middleware"
const external_next_http_proxy_middleware_namespaceObject = require("next-http-proxy-middleware");
var external_next_http_proxy_middleware_default = /*#__PURE__*/__webpack_require__.n(external_next_http_proxy_middleware_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/request/[...all].ts

async function GET(req, res) {
    const target = req.headers["miru-url"];
    if (!target) {
        res.redirect("https://miru.js.org");
        return;
    }
    await external_next_http_proxy_middleware_default()(req, res, {
        target,
        changeOrigin: true,
        headers: {
            "user-agent": req.headers["miru-ua"] ?? req.headers["user-agent"],
            referer: req.headers["miru-referer"] ?? req.headers["referer"]
        },
        pathRewrite: [
            {
                patternStr: "^/api/request",
                replaceStr: ""
            }
        ]
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7332));
module.exports = __webpack_exports__;

})();