"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 115:
/***/ ((module) => {


function e(r) {
    var o, t, f = "";
    if ("string" == typeof r || "number" == typeof r) f += r;
    else if ("object" == typeof r) if (Array.isArray(r)) for(o = 0; o < r.length; o++)r[o] && (t = e(r[o])) && (f && (f += " "), f += t);
    else for(o in r)r[o] && (f && (f += " "), f += o);
    return f;
}
function r() {
    for(var r, o, t = 0, f = ""; t < arguments.length;)(r = arguments[t++]) && (o = e(r)) && (f && (f += " "), f += o);
    return f;
}
module.exports = r, module.exports.clsx = r;


/***/ }),

/***/ 78:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ useInfiniteQuery)
});

// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/utils.mjs
var utils = __webpack_require__(5971);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/queryObserver.mjs
var queryObserver = __webpack_require__(5843);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs
var infiniteQueryBehavior = __webpack_require__(4649);
;// CONCATENATED MODULE: ./node_modules/@tanstack/query-core/build/lib/infiniteQueryObserver.mjs



class InfiniteQueryObserver extends queryObserver/* QueryObserver */.z {
  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(client, options) {
    super(client, options);
  }

  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }

  setOptions(options, notifyOptions) {
    super.setOptions({ ...options,
      behavior: (0,infiniteQueryBehavior/* infiniteQueryBehavior */.Gm)()
    }, notifyOptions);
  }

  getOptimisticResult(options) {
    options.behavior = (0,infiniteQueryBehavior/* infiniteQueryBehavior */.Gm)();
    return super.getOptimisticResult(options);
  }

  fetchNextPage({
    pageParam,
    ...options
  } = {}) {
    return this.fetch({ ...options,
      meta: {
        fetchMore: {
          direction: 'forward',
          pageParam
        }
      }
    });
  }

  fetchPreviousPage({
    pageParam,
    ...options
  } = {}) {
    return this.fetch({ ...options,
      meta: {
        fetchMore: {
          direction: 'backward',
          pageParam
        }
      }
    });
  }

  createResult(query, options) {
    var _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet, _state$data, _state$data2;

    const {
      state
    } = query;
    const result = super.createResult(query, options);
    const {
      isFetching,
      isRefetching
    } = result;
    const isFetchingNextPage = isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === 'forward';
    const isFetchingPreviousPage = isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === 'backward';
    return { ...result,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: (0,infiniteQueryBehavior/* hasNextPage */.Qy)(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: (0,infiniteQueryBehavior/* hasPreviousPage */.ZF)(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage,
      isFetchingPreviousPage,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
  }

}


//# sourceMappingURL=infiniteQueryObserver.mjs.map

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/useBaseQuery.mjs + 4 modules
var useBaseQuery = __webpack_require__(4861);
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs
'use client';



function useInfiniteQuery(arg1, arg2, arg3) {
  const options = (0,utils/* parseQueryArgs */._v)(arg1, arg2, arg3);
  return (0,useBaseQuery/* useBaseQuery */.r)(options, InfiniteQueryObserver);
}


//# sourceMappingURL=useInfiniteQuery.mjs.map


/***/ })

};
;