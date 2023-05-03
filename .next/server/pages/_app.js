"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/_app.js



// import { pageview } from "../lib/ga";
function MyApp({ Component , pageProps  }) {
    const router = (0,router_namespaceObject.useRouter)();
    // useEffect(() => {
    //   const handleRouteChange = (url) => {
    //     pageview(url);
    //   };
    //   //When the component is mounted, subscribe to router changes
    //   //and log those page views
    //   router.events.on("routeChangeComplete", handleRouteChange);
    //   // If the component is unmounted, unsubscribe
    //   // from the event with the `off` method
    //   return () => {
    //     router.events.off("routeChangeComplete", handleRouteChange);
    //   };
    // }, [router.events]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Hello World!"
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(252));
module.exports = __webpack_exports__;

})();