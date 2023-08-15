"use strict";
exports.id = 520;
exports.ids = [520];
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

/***/ 3369:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ useMutation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/utils.mjs
var utils = __webpack_require__(5971);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/mutation.mjs
var mutation = __webpack_require__(6059);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/notifyManager.mjs
var notifyManager = __webpack_require__(6871);
// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/subscribable.mjs
var subscribable = __webpack_require__(2403);
;// CONCATENATED MODULE: ./node_modules/@tanstack/query-core/build/lib/mutationObserver.mjs





// CLASS
class MutationObserver extends subscribable/* Subscribable */.l {
  constructor(client, options) {
    super();
    this.client = client;
    this.setOptions(options);
    this.bindMethods();
    this.updateResult();
  }

  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }

  setOptions(options) {
    var _this$currentMutation;

    const prevOptions = this.options;
    this.options = this.client.defaultMutationOptions(options);

    if (!(0,utils/* shallowEqualObjects */.VS)(prevOptions, this.options)) {
      this.client.getMutationCache().notify({
        type: 'observerOptionsUpdated',
        mutation: this.currentMutation,
        observer: this
      });
    }

    (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.setOptions(this.options);
  }

  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$currentMutation2;

      (_this$currentMutation2 = this.currentMutation) == null ? void 0 : _this$currentMutation2.removeObserver(this);
    }
  }

  onMutationUpdate(action) {
    this.updateResult(); // Determine which callbacks to trigger

    const notifyOptions = {
      listeners: true
    };

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error') {
      notifyOptions.onError = true;
    }

    this.notify(notifyOptions);
  }

  getCurrentResult() {
    return this.currentResult;
  }

  reset() {
    this.currentMutation = undefined;
    this.updateResult();
    this.notify({
      listeners: true
    });
  }

  mutate(variables, options) {
    this.mutateOptions = options;

    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }

    this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
      variables: typeof variables !== 'undefined' ? variables : this.options.variables
    });
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  }

  updateResult() {
    const state = this.currentMutation ? this.currentMutation.state : (0,mutation/* getDefaultState */.R)();
    const result = { ...state,
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
      isIdle: state.status === 'idle',
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = result;
  }

  notify(options) {
    notifyManager/* notifyManager.batch */.V.batch(() => {
      // First trigger the mutate callbacks
      if (this.mutateOptions && this.hasListeners()) {
        if (options.onSuccess) {
          var _this$mutateOptions$o, _this$mutateOptions, _this$mutateOptions$o2, _this$mutateOptions2;

          (_this$mutateOptions$o = (_this$mutateOptions = this.mutateOptions).onSuccess) == null ? void 0 : _this$mutateOptions$o.call(_this$mutateOptions, this.currentResult.data, this.currentResult.variables, this.currentResult.context);
          (_this$mutateOptions$o2 = (_this$mutateOptions2 = this.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o2.call(_this$mutateOptions2, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (options.onError) {
          var _this$mutateOptions$o3, _this$mutateOptions3, _this$mutateOptions$o4, _this$mutateOptions4;

          (_this$mutateOptions$o3 = (_this$mutateOptions3 = this.mutateOptions).onError) == null ? void 0 : _this$mutateOptions$o3.call(_this$mutateOptions3, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
          (_this$mutateOptions$o4 = (_this$mutateOptions4 = this.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o4.call(_this$mutateOptions4, undefined, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      } // Then trigger the listeners


      if (options.listeners) {
        this.listeners.forEach(({
          listener
        }) => {
          listener(this.currentResult);
        });
      }
    });
  }

}


//# sourceMappingURL=mutationObserver.mjs.map

// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.mjs
var useSyncExternalStore = __webpack_require__(5814);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(8417);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/utils.mjs
var lib_utils = __webpack_require__(2779);
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query/build/lib/useMutation.mjs
'use client';






function useMutation(arg1, arg2, arg3) {
  const options = (0,utils/* parseMutationArgs */.lV)(arg1, arg2, arg3);
  const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)({
    context: options.context
  });
  const [observer] = react_.useState(() => new MutationObserver(queryClient, options));
  react_.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = (0,useSyncExternalStore/* useSyncExternalStore */.$)(react_.useCallback(onStoreChange => observer.subscribe(notifyManager/* notifyManager.batchCalls */.V.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  const mutate = react_.useCallback((variables, mutateOptions) => {
    observer.mutate(variables, mutateOptions).catch(noop);
  }, [observer]);

  if (result.error && (0,lib_utils/* shouldThrowError */.L)(observer.options.useErrorBoundary, [result.error])) {
    throw result.error;
  }

  return { ...result,
    mutate,
    mutateAsync: result.mutate
  };
} // eslint-disable-next-line @typescript-eslint/no-empty-function

function noop() {}


//# sourceMappingURL=useMutation.mjs.map


/***/ })

};
;