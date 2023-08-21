exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 329:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/common.json": [
		8679,
		444
	],
	"./en/detail.json": [
		2829,
		140
	],
	"./en/extensions.json": [
		4593,
		593
	],
	"./en/home.json": [
		3976,
		976
	],
	"./en/init.json": [
		1054,
		54
	],
	"./en/search.json": [
		7159,
		497
	],
	"./en/settings.json": [
		860,
		860
	],
	"./en/sidebar.json": [
		5331,
		331
	],
	"./zh-CN/common.json": [
		7163,
		163
	],
	"./zh-CN/detail.json": [
		8159,
		159
	],
	"./zh-CN/extensions.json": [
		6315,
		315
	],
	"./zh-CN/home.json": [
		7979,
		979
	],
	"./zh-CN/init.json": [
		8366,
		366
	],
	"./zh-CN/search.json": [
		981,
		981
	],
	"./zh-CN/settings.json": [
		6456,
		456
	],
	"./zh-CN/sidebar.json": [
		2871,
		871
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 329;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6855:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9440))

/***/ }),

/***/ 9440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 202 modules
var motion = __webpack_require__(234);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4660);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./context/root-context.tsx + 10 modules
var root_context = __webpack_require__(489);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(9329);
// EXTERNAL MODULE: ./node_modules/artplayer/dist/artplayer.js
var artplayer = __webpack_require__(5212);
var artplayer_default = /*#__PURE__*/__webpack_require__.n(artplayer);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(4889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/hls.js/dist/hls.mjs
var dist_hls = __webpack_require__(9154);
// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/index.js
var dist = __webpack_require__(6121);
// EXTERNAL MODULE: ./components/ErrorView.tsx
var ErrorView = __webpack_require__(9810);
// EXTERNAL MODULE: ./components/LoadingBox.tsx
var LoadingBox = __webpack_require__(3529);
// EXTERNAL MODULE: ./node_modules/artplayer-plugin-dash-quality/dist/artplayer-plugin-dash-quality.js
var artplayer_plugin_dash_quality = __webpack_require__(5514);
var artplayer_plugin_dash_quality_default = /*#__PURE__*/__webpack_require__.n(artplayer_plugin_dash_quality);
// EXTERNAL MODULE: ./node_modules/artplayer-plugin-hls-quality/dist/artplayer-plugin-hls-quality.js
var artplayer_plugin_hls_quality = __webpack_require__(9569);
var artplayer_plugin_hls_quality_default = /*#__PURE__*/__webpack_require__.n(artplayer_plugin_hls_quality);
;// CONCATENATED MODULE: ./components/Player/Bangumi.tsx













const BangumiPlayer = (0,dist.observer)(()=>{
    const { extensionStore , historyStore , playerStore  } = (0,root_context/* useRootStore */.Yh)();
    const currentPlay = playerStore.currentPlay;
    const extension = extensionStore.getExtension(currentPlay.pkg);
    const artRef = (0,react_.useRef)(null);
    const [art, setArt] = (0,react_.useState)();
    const [playing, setPlaying] = (0,react_.useState)(false);
    const { data , error , isLoading  } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "watch",
            currentPlay.url,
            currentPlay.pkg
        ],
        queryFn: ()=>{
            return extension?.watch(currentPlay.url);
        },
        staleTime: Infinity
    });
    (0,react_.useEffect)(()=>{
        if (!playerStore.playlist.length) {
            art?.destroy(false);
        }
    }, [
        playerStore.playlist
    ]);
    (0,react_.useEffect)(()=>{
        if (!artRef || !data) {
            return;
        }
        // 切换非悬浮播放列表
        playerStore.toggleFloatPlayList(false);
        // 如果不是全屏则打开列表
        if (!playerStore.fullScreen) {
            playerStore.toggleShowPlayList(true);
        }
        // 如果不需要默认播放器
        if (data.noDefaultPlayer) {
            extension?.customPlayer(artRef.current, data.url, {});
            return;
        }
        // 如果 artplayer 已经初始化过了
        if (!art?.isDestroy) {
            art?.destroy(false);
        }
        // 如果 artRef.current 不存在
        if (!artRef.current) {
            return;
        }
        // 画质插件
        let qualityPlugin;
        if (data.type === "hls") {
            qualityPlugin = artplayer_plugin_hls_quality_default()({
                // Show quality in control
                control: true,
                // Show quality in setting
                setting: true,
                // Get the resolution text from level
                getResolution: (level)=>level.height + "P",
                // I18n
                title: "Quality",
                auto: "Auto"
            });
        }
        if (data.type === "dash") {
            qualityPlugin = artplayer_plugin_dash_quality_default()({
                // Show quality in control
                control: true,
                // Show quality in setting
                setting: true,
                // Get the resolution text from level
                getResolution: (level)=>level.height + "P",
                // I18n
                title: "Quality",
                auto: "Auto"
            });
        }
        setArt(new (artplayer_default())({
            container: artRef.current,
            // title: currentPlay.title + " - " + currentPlay.chapter,
            url: data.url,
            type: data.type,
            pip: true,
            screenshot: true,
            setting: true,
            flip: true,
            lock: true,
            playbackRate: true,
            aspectRatio: true,
            subtitleOffset: true,
            miniProgressBar: true,
            mutex: true,
            backdrop: true,
            playsInline: true,
            lang: navigator.language.toLowerCase(),
            autoPlayback: true,
            airplay: true,
            autoplay: true,
            moreVideoAttr: {
                crossOrigin: "anonymous"
            },
            controls: [
                ...data.controls || [],
                {
                    position: "left",
                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-back"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>',
                    index: 1,
                    tooltip: "上一集",
                    click: function() {
                        playerStore.togglePrevPlay();
                    }
                },
                {
                    position: "left",
                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-forward"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>',
                    index: 20,
                    tooltip: "下一集",
                    click: function() {
                        playerStore.toggleNextPlay();
                    }
                },
                {
                    position: "right",
                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>',
                    index: 1,
                    tooltip: "播放列表",
                    click: function() {
                        playerStore.toggleShowPlayList();
                    }
                },
                {
                    position: "right",
                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>',
                    index: 1000,
                    tooltip: "全屏",
                    click: function() {
                        playerStore.toggleFullScreen();
                    }
                }
            ],
            settings: [
                {
                    width: 200,
                    html: "字幕",
                    selector: [
                        {
                            html: "Display",
                            tooltip: "Show",
                            switch: true,
                            onSwitch: function(item) {
                                item.tooltip = item.switch ? "Hide" : "Show";
                                if (!art) {
                                    return;
                                }
                                art.subtitle.show = !item.switch;
                                return !item.switch;
                            }
                        },
                        {
                            default: false,
                            html: "选择字幕文件"
                        },
                        ...data.subtitles || []
                    ],
                    onSelect: function(item) {
                        if (item.html === "选择字幕文件") {
                            // 选择字幕文件
                            const input = document.createElement("input");
                            input.type = "file";
                            input.accept = "text/srt";
                            input.click();
                            input.onchange = function() {
                                if (!input.files) {
                                    return;
                                }
                                const file = input.files[0];
                                if (file) {
                                    item.url = URL.createObjectURL(file);
                                    if (!art) {
                                        return;
                                    }
                                    art.subtitle.switch(item.url, {
                                        name: file.name
                                    });
                                }
                            };
                            return item.html;
                        }
                        if (!art) {
                            return;
                        }
                        art.subtitle.switch(item.url, {
                            name: item.html
                        });
                        return item.html;
                    }
                }
            ],
            plugins: [
                qualityPlugin
            ],
            subtitle: {
                type: "srt",
                style: {
                    color: "#000",
                    fontSize: "20px",
                    textShadow: "0 1px white, 1px 0 white, -1px 0 white, 0 -1px white"
                },
                encoding: "utf-8"
            },
            customType: {
                hls: playM3u8,
                flv: playFlv,
                dash: playMpd,
                custom: extension?.customPlayer
            }
        }));
        window.addEventListener("resize", ()=>{
            if (!art) {
                return;
            }
        // art.autoHeight;
        });
    }, [
        data
    ]);
    const addHistory = async ()=>{
        if (!art) {
            return;
        }
        // 存储历史记录
        historyStore.addHistory({
            package: currentPlay.pkg,
            url: currentPlay.pageUrl,
            title: currentPlay.title,
            chapter: currentPlay.chapter,
            type: "bangumi",
            cover: await art.getDataURL()
        });
    };
    (0,react_.useEffect)(()=>{
        if (!art) {
            return;
        }
        // 播放的时候 添加一次记录
        art.on("video:play", ()=>{
            console.log("play");
            addHistory();
            setPlaying(true);
        });
        art.on("pause", ()=>{
            setPlaying(false);
        });
        art.on("video:ended", ()=>{
            // 切换下一集
            playerStore.toggleNextPlay();
        });
        // 销毁的时候 再添加一次历史记录
        art.on("destroy", ()=>{
            // 如果播放器已经准备好了 就添加一次历史记录
            // 防止截图为空
            if (art.isReady) {
                addHistory();
            }
        });
        return ()=>{
            if (art && art.destroy) {
                art.destroy(false);
            }
        };
    }, [
        art,
        playerStore.playlist,
        playerStore.index
    ]);
    const togglePlay = ()=>{
        if (!art) {
            return;
        }
        if (art.playing) {
            art.pause();
        } else {
            art.play();
        }
    };
    if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx(ErrorView/* default */.Z, {
            error: error
        });
    }
    if (isLoading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(LoadingBox/* default */.Z, {
            className: "!min-h-[250px] w-[250px]"
        });
    }
    if (!data) {
        return /*#__PURE__*/ jsx_runtime_.jsx(ErrorView/* default */.Z, {
            error: "地址获取失败"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: clsx_default()({
            "h-52 w-full flex-shrink lg:h-screen": !playerStore.mini,
            "relative h-16 w-full lg:h-40 lg:w-96": playerStore.mini,
            "!h-screen": playerStore.fullScreen
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-full w-full",
                ref: artRef
            }),
            playerStore.mini && art && // 缩小后的播放控件
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-0 left-0 h-full w-full ",
                style: {
                    zIndex: 99999
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex h-full w-full items-center justify-center text-white opacity-0 transition-all hover:bg-black hover:bg-opacity-70 hover:opacity-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "mx-3",
                            onClick: ()=>playerStore.togglePrevPlay(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* SkipBack */.km5, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>togglePlay(),
                            className: "mx-3",
                            children: playing ? /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Pause */.dzL, {}) : /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Play */.shV, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>playerStore.toggleNextPlay(),
                            className: "mx-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* SkipForwardIcon */.o_L, {})
                        })
                    ]
                })
            })
        ]
    });
});
/* harmony default export */ const Bangumi = (BangumiPlayer);
function playM3u8(video, url, art) {
    if (dist_hls/* default.isSupported */.Z.isSupported()) {
        // @ts-ignore
        if (art.hls) art.hls.destroy();
        const hls = new dist_hls/* default */.Z();
        hls.loadSource(url);
        hls.attachMedia(video);
        // @ts-ignore
        art.hls = hls;
        art.on("destroy", ()=>hls.destroy());
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = url;
    } else {
        art.notice.show = "Unsupported playback format: m3u8";
    }
}
function playFlv(video, url, art) {
    __webpack_require__.e(/* import() */ 354).then(__webpack_require__.t.bind(__webpack_require__, 1354, 23)).then((module)=>{
        const flvjs = module.default;
        if (flvjs.isSupported()) {
            // @ts-ignore
            if (art.flv) art.flv.destroy();
            const flv = flvjs.createPlayer({
                type: "flv",
                url
            });
            flv.attachMediaElement(video);
            flv.load();
            // @ts-ignore
            art.flv = flv;
            art.on("destroy", ()=>flv.destroy());
        } else {
            art.notice.show = "Unsupported playback format: flv";
        }
    }).catch((e)=>{
        art.notice.show = e;
    });
}
function playMpd(video, url, art) {
    __webpack_require__.e(/* import() */ 881).then(__webpack_require__.t.bind(__webpack_require__, 9881, 23)).then((module)=>{
        const dashjs = module.default;
        if (dashjs.supportsMediaSource()) {
            // @ts-ignore
            if (art.dash) art.dash.destroy();
            const dash = dashjs.MediaPlayer().create();
            dash.initialize(video, url, art.option.autoplay);
            // @ts-ignore
            art.dash = dash;
            art.on("destroy", ()=>dash.destroy());
        } else {
            art.notice.show = "Unsupported playback format: mpd";
        }
    }).catch((e)=>{
        art.notice.show = e;
    });
}

// EXTERNAL MODULE: ./components/common/Button.tsx
var Button = __webpack_require__(8644);
// EXTERNAL MODULE: ./components/common/LazyElement.tsx
var LazyElement = __webpack_require__(1905);
// EXTERNAL MODULE: ./components/common/LoadingImg.tsx
var LoadingImg = __webpack_require__(2412);
;// CONCATENATED MODULE: ./components/Player/control.tsx




function Control() {
    const { playerStore  } = (0,root_context/* useRootStore */.Yh)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        hidden: playerStore.mini,
        className: "absolute bottom-0 left-0 right-0 h-16 bg-black",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "m-2 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            className: "mr-2",
                            onClick: ()=>{
                                playerStore.togglePrevPlay();
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronFirst */.RAr, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            className: "mr-2",
                            onClick: ()=>{
                                playerStore.toggleNextPlay();
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronLast */.BmL, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            className: "ml-2",
                            onClick: ()=>{
                                playerStore.toggleMini();
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronDown */._ME, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            className: "ml-2",
                            onClick: ()=>{
                                playerStore.toggleShowPlayList();
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* List */.aVo, {})
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Player/Manga.tsx













let autoDownload = false;
let currentURL;
let currentInterval;
// 保存已经加载完成的图。
const decodeTopUrls = {};
const MangaPlayer = (0,dist.observer)(()=>{
    const { extensionStore , historyStore , playerStore  } = (0,root_context/* useRootStore */.Yh)();
    const { pkg , pageUrl , title , chapter , url , type  } = playerStore.currentPlay;
    const extension = extensionStore.getExtension(pkg);
    const { data , error , isLoading  } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "manga",
            url,
            pkg
        ],
        queryFn: ()=>{
            currentURL = url;
            clearInterval(currentInterval);
            return extension?.watch(url);
        }
    });
    const [decodeUrls, setDecodeUrls] = (0,react_.useState)(data?.urls || []);
    extension?.getSetting("autoDownload").then((value)=>{
        autoDownload = value == "true";
    });
    (0,react_.useEffect)(()=>{
        if (!data || type !== "manga") {
            return;
        }
        playerStore.toggleFloatPlayList(true);
        playerStore.toggleShowPlayList(false);
        setDecodeUrls(decodeTopUrls[currentURL] ? [
            ...decodeTopUrls[currentURL]
        ] : [
            ...data.urls
        ]);
        console.log("重新获取链接", {
            urls: data.urls,
            decodeUrls
        });
        historyStore.addHistory({
            package: pkg,
            url: pageUrl,
            title,
            chapter,
            type: "manga",
            cover: data.urls[0]
        });
    }, [
        data
    ]);
    if (isLoading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(LoadingBox/* default */.Z, {
            className: "!h-screen"
        });
    }
    if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx(ErrorView/* default */.Z, {
            error: error
        });
    }
    if (!data) {
        return /*#__PURE__*/ jsx_runtime_.jsx(ErrorView/* default */.Z, {
            error: new Error("No data")
        });
    }
    if (type !== "manga") {
        return null;
    }
    console.log("重新渲染", currentURL);
    let decodeImage = function(url, index, image, autoLoad = false) {
        if (index > data.urls.length - 1) return;
        extension.decodeImage && extension.decodeImage(data.urls[index], function(newUrl) {
            if (autoLoad) decodeImage(0, ++index, undefined, autoLoad);
            if (decodeUrls[index] == newUrl) return;
            decodeUrls[index] = newUrl;
            setDecodeUrls([
                ...decodeUrls
            ]);
            decodeTopUrls[currentURL] = [
                ...decodeUrls
            ];
            if (decodeUrls.every((element, index)=>element?.startsWith("data:"))) {
                // clearInterval(currentInterval)
                setDecodeUrls([
                    ...decodeUrls
                ]);
                console.log("解码完毕！", data);
                decodeTopUrls[currentURL] = [
                    ...decodeUrls
                ];
                if (autoDownload) extension && extension.download && extension.download([
                    ...decodeUrls
                ], title);
            } else {}
        });
    };
    const updateUrl = (url, index, image, autoLoad = false)=>{
        if (playerStore.mini && index != 0 || index > data.urls.length - 1) return;
        if (decodeUrls[index]?.startsWith("data:")) return;
        decodeImage(url, index, image, autoLoad);
    };
    updateUrl(data.urls[0], 0, null, false);
    let handleDownload = async function() {
        let awaitDownload;
        if (extension.download) {
            console.log("正在重新检查解码");
            decodeImage(0, 0, undefined, true);
            clearInterval(awaitDownload);
            awaitDownload = setInterval(()=>{
                if (decodeUrls.every((element, index)=>element?.startsWith("data:"))) {
                    console.log("开始下载啦！");
                    extension.download([
                        ...decodeUrls
                    ], title);
                    console.log("下载完成啦！");
                    clearInterval(awaitDownload);
                }
            }, 1000);
        } else {
            console.log("下载失败了");
            alert("没有该实现功能！");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: clsx_default()("relative max-w-5xl text-center", {
                    "max-h-screen overflow-auto": !playerStore.mini
                }, // mini 时不显示滚动条 且不能滚动 只做预览
                {
                    "max-h-56 overflow-hidden scrollbar-none": playerStore.mini
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-16 w-full md:w-auto",
                        children: [
                            decodeUrls.map((url, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(LazyElement/* default */.Z, {
                                    placeholder: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "h-40 w-full",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingBox/* default */.Z, {})
                                    }),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingImg["default"], {
                                        loadview: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "h-40 w-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingBox/* default */.Z, {})
                                        }),
                                        className: "m-auto",
                                        src: url,
                                        alt: "Manga",
                                        onMouseEnter: ()=>updateUrl(url, index),
                                        onLoad: (event)=>{
                                            updateUrl(decodeUrls[index++], index++, event.target);
                                        },
                                        referrerPolicy: "no-referrer"
                                    })
                                }, index);
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                className: "ml-2",
                                onClick: ()=>{
                                    handleDownload();
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronDown */._ME, {})
                            })
                        ]
                    }),
                    playerStore.mini && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-0 right-0 bottom-0 top-0 opacity-0 hover:opacity-100",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex h-full w-full items-center justify-center bg-black bg-opacity-60",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                onClick: ()=>playerStore.toggleMini(false),
                                children: "继续观看"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Control, {})
        ]
    });
});
/* harmony default export */ const Manga = (MangaPlayer);

;// CONCATENATED MODULE: ./components/Player/Fikushon.tsx










const FikushonPlayer = (0,dist.observer)(()=>{
    const { extensionStore , historyStore , playerStore  } = (0,root_context/* useRootStore */.Yh)();
    const { pkg , pageUrl , title , chapter , url , type  } = playerStore.currentPlay;
    const extension = extensionStore.getExtension(pkg);
    const { data , error , isLoading  } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "fikushon",
            url,
            pkg
        ],
        queryFn: ()=>extension?.watch(url)
    });
    (0,react_.useEffect)(()=>{
        if (!data || type !== "fikushon") {
            return;
        }
        playerStore.toggleFloatPlayList(true);
        playerStore.toggleShowPlayList(false);
        historyStore.addHistory({
            package: pkg,
            url: pageUrl,
            title: title,
            chapter: chapter,
            type: "fikushon",
            cover: data.content[0]
        });
    }, [
        data
    ]);
    if (type !== "fikushon") {
        return null;
    }
    if (isLoading) {
        return /*#__PURE__*/ jsx_runtime_.jsx(LoadingBox/* default */.Z, {
            className: "!h-screen"
        });
    }
    if (error) {
        return /*#__PURE__*/ jsx_runtime_.jsx(ErrorView/* default */.Z, {
            error: error
        });
    }
    if (!data) {
        return /*#__PURE__*/ jsx_runtime_.jsx(ErrorView/* default */.Z, {
            error: new Error("No data")
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: clsx_default()("relative max-w-5xl text-center", {
                    "max-h-screen overflow-auto": !playerStore.mini,
                    // mini 时不显示滚动条 且不能滚动 只做预览
                    "max-h-56 overflow-hidden scrollbar-none": playerStore.mini
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-16 max-w-5xl bg-slate-200 p-3 text-left dark:bg-zinc-700",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-6 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-2xl font-bold",
                                        children: data.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-lg",
                                        children: data.subtitle
                                    })
                                ]
                            }),
                            data.content.map((item, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mb-3 text-lg",
                                    children: item
                                }, index);
                            })
                        ]
                    }),
                    playerStore.mini && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-0 right-0 bottom-0 top-0 opacity-0 hover:opacity-100",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex h-full w-full items-center justify-center bg-black bg-opacity-60",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                onClick: ()=>playerStore.toggleMini(false),
                                children: "继续观看"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Control, {})
        ]
    });
});
/* harmony default export */ const Fikushon = (FikushonPlayer);

// EXTERNAL MODULE: ./components/common/IconButton.tsx
var IconButton = __webpack_require__(9629);
;// CONCATENATED MODULE: ./components/Player/Index.tsx











const Player = (0,dist.observer)(()=>{
    const { playerStore  } = (0,root_context/* useRootStore */.Yh)();
    const [player, setPlayer] = (0,react_.useState)(undefined);
    const playRef = (0,react_.useRef)(null);
    // 如果全屏 取消body滚动
    (0,react_.useEffect)(()=>{
        if (!playerStore.mini) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [
        playerStore.mini
    ]);
    (0,react_.useEffect)(()=>{
        if (!playerStore.currentPlay) {
            return;
        }
        switch(playerStore.currentPlay.type){
            case "bangumi":
                {
                    setPlayer(/*#__PURE__*/ jsx_runtime_.jsx(Bangumi, {}));
                }
                break;
            case "manga":
                {
                    setPlayer(/*#__PURE__*/ jsx_runtime_.jsx(Manga, {}));
                }
                break;
            case "fikushon":
                {
                    setPlayer(/*#__PURE__*/ jsx_runtime_.jsx(Fikushon, {}));
                }
        }
    }, [
        playerStore.currentPlay
    ]);
    // 全屏切换
    (0,react_.useEffect)(()=>{
        if (!playRef.current) {
            return;
        }
        if (!document.fullscreenElement && playerStore.fullScreen) {
            playRef.current.requestFullscreen();
            // 全屏时要收起播放列表
            playerStore.toggleShowPlayList(false);
            return;
        }
        // 如果不是按 esc 退出全屏则执行退出全屏
        if (document.fullscreenElement && !playerStore.fullScreen) {
            document.exitFullscreen();
        }
        playerStore.toggleShowPlayList(true);
    }, [
        playerStore.fullScreen
    ]);
    // 如果是按esc退出全屏
    playRef.current?.addEventListener("fullscreenchange", (e)=>{
        if (!document.fullscreenElement) {
            playerStore.toggleFullScreen(false);
        }
    });
    // 切换迷你时需要先退出全屏
    (0,react_.useEffect)(()=>{
        if (!playerStore.mini) {
            return;
        }
        playerStore.toggleFullScreen(false);
    }, [
        playerStore.mini
    ]);
    if (!playerStore.playlist.length) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion.div */.E.div, {
        layout: "preserve-aspect",
        ref: playRef,
        layoutId: "player",
        className: clsx_default()("fixed right-0 z-50 bg-neutral-100  dark:bg-neutral-700  lg:shadow-2xl ", {
            "top-0 left-0  h-screen": !playerStore.mini
        }, {
            "left-0 bottom-24 h-16 w-full overflow-hidden lg:left-auto lg:right-4 lg:bottom-4 lg:h-auto lg:max-h-64 lg:w-auto lg:max-w-md lg:rounded-lg": playerStore.mini
        }),
        children: [
            playerStore.mini && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden w-full justify-between bg-black p-2 text-white dark:bg-zinc-700  lg:flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>playerStore.clearPlayList(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>playerStore.toggleMini(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronUp */.Kh3, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: clsx_default()("flex h-full lg:flex-row", {
                    "flex-col": !playerStore.fullScreen,
                    "flex-row": playerStore.fullScreen
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: clsx_default()("w-full", {
                            "flex h-full items-center justify-between lg:p-0": playerStore.mini
                        }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex h-full items-center overflow-hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: clsx_default()("relative flex h-full justify-center", {
                                            "w-full": !playerStore.mini,
                                            "mr-2 w-48 overflow-hidden lg:m-0 lg:w-auto": playerStore.mini
                                        }),
                                        children: player
                                    }),
                                    playerStore.mini && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex items-center justify-center lg:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "truncate",
                                            children: playerStore.currentPlay?.title
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex",
                                children: [
                                    playerStore.mini && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>playerStore.toggleMini(),
                                        className: "flex h-10 w-10 items-center justify-center lg:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronUp */.Kh3, {})
                                    }),
                                    playerStore.mini && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>playerStore.clearPlayList(),
                                        className: "flex h-10 w-10 items-center justify-center lg:hidden",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        hidden: playerStore.mini,
                        className: clsx_default()("flex h-full  flex-col overflow-hidden bg-neutral-200 transition-all dark:bg-neutral-800 ", {
                            "w-0 overflow-hidden": !playerStore.showPlayList,
                            "lg:w-1/4": playerStore.showPlayList,
                            "absolute right-0 lg:relative": playerStore.floatPlayList,
                            hidden: playerStore.mini
                        }),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-shrink-0 items-center justify-between px-3 py-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-lg",
                                        children: "播放列表"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(IconButton/* default */.Z, {
                                                onClick: ()=>playerStore.toggleShowPlayList(),
                                                children: playerStore.showPlayList ? /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* SidebarOpen */.aKB, {}) : /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* SidebarClose */.RJt, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(IconButton/* default */.Z, {
                                                className: "mx-1",
                                                onClick: ()=>playerStore.toggleFullScreen(),
                                                children: playerStore.fullScreen ? /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Minimize */.gR, {}) : /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Maximize */.YqJ, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(IconButton/* default */.Z, {
                                                onClick: ()=>playerStore.toggleMini(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronDown */._ME, {})
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-full w-full overflow-auto",
                                children: playerStore.playlist.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "my-2 flex cursor-pointer items-center px-2",
                                        onClick: ()=>{
                                            playerStore.togglePlay(index);
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: clsx_default()(" w-full truncate rounded-xl p-2 transition hover:bg-black hover:bg-opacity-40", {
                                                "bg-black bg-opacity-20 ring-2 ring-black dark:ring-white": item.url === playerStore.currentPlay?.url
                                            }),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-lg",
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-sm ",
                                                    children: item.chapter
                                                })
                                            ]
                                        })
                                    }, item.url))
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Index = (Player);

// EXTERNAL MODULE: ./app/i18n/index.ts
var i18n = __webpack_require__(5808);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./components/Logo.tsx
var Logo = __webpack_require__(5706);
// EXTERNAL MODULE: ./node_modules/notistack/index.js
var notistack = __webpack_require__(9431);
;// CONCATENATED MODULE: ./components/Sidebar.tsx









let firstEnter = true;
function Sidebar() {
    const path = (0,navigation.usePathname)();
    const { t  } = (0,i18n/* useTranslation */.$)("sidebar");
    const { enqueueSnackbar  } = (0,notistack.useSnackbar)();
    if (firstEnter) enqueueSnackbar("欢迎来到Lumos，本站不预先添加扩展", {
        variant: "info"
    }), enqueueSnackbar("请自行到扩展里添加哦~", {
        variant: "info"
    }), enqueueSnackbar("推荐挂梯子访问~", {
        variant: "info"
    }), firstEnter = false;
    const menu = [
        {
            title: t("home"),
            path: "/",
            icon: lucide_react/* Home */.SK8
        },
        {
            title: t("search"),
            path: "/search",
            icon: lucide_react/* Search */.olm
        },
        {
            title: t("extensions"),
            path: "/extension",
            icon: lucide_react/* LayoutGrid */.J3y
        },
        {
            title: t("settings"),
            path: "/settings",
            icon: lucide_react/* Settings */.Zrf
        }
    ];
    const baseClassNames = clsx_default()("flex-col w-20 h-20 lg:h-auto lg:w-auto lg:flex-row items-center cursor-pointer lg:mb-2 p-4 rounded-3xl flex ");
    const [Cheveron, setCheveron] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "fixed right-0 left-0 bottom-0 z-50 overflow-auto bg-slate-100 bg-opacity-80 p-2 backdrop-blur transition-all dark:bg-black dark:bg-opacity-80 dark:backdrop-blur lg:left-0 lg:top-0 lg:w-230px lg:p-5",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-6 ml-4 hidden lg:block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.roginx.ink",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex justify-center lg:block",
                    children: [
                        menu.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: item.path,
                                    className: path === item.path ? clsx_default()(baseClassNames, "bg-black text-white ring-4 ring-gray-300 dark:bg-zinc-700 dark:text-white") : clsx_default()(baseClassNames, "hover:opacity-50"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                            className: clsx_default()("mb-1 lg:mr-2 lg:mb-0", {
                                                "text-white ": path === item.path
                                            }, {}),
                                            width: 24
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-sm lg:text-lg",
                                            children: item.title
                                        })
                                    ]
                                })
                            }, i)),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setCheveron(!Cheveron),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: clsx_default()(baseClassNames, "hover:opacity-50 "),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronUp */.Kh3, {
                                        className: clsx_default()("mb-1 lg:mr-2 lg:mb-0", {
                                            "hidden": Cheveron
                                        }),
                                        width: 24
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronDown */._ME, {
                                        className: clsx_default()("mb-1 lg:mr-2 lg:mb-0", {
                                            "hidden": !Cheveron
                                        }),
                                        width: 24
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-sm lg:text-lg",
                                        children: "展开"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "https://mybox-1257251314.cos.ap-chengdu.myqcloud.com/pic-upload/code400x400.png",
                    className: clsx_default()("block", {
                        "h-0": !Cheveron
                    }),
                    alt: ""
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(8099);
// EXTERNAL MODULE: ./utils/is-client.ts
var is_client = __webpack_require__(3618);
;// CONCATENATED MODULE: ./utils/miru-log.ts


function logMiruInfo() {
    if (!(0,is_client/* isClient */.C)()) {
        return;
    }
    const logo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTUgNTAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMzMzOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNXB4OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iZzEiPgogICAgPHBvbHlsaW5lIGlkPSJnZ2UyMzIiIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjUgNDcuNSAyLjUgMi41IDIyLjUgMi41IDI3LjUgMTIuNSAzMi41IDIuNSA1Mi41IDIuNSA1Mi41IDQ3LjUgMzcuNSA0Ny41IDM3LjUgMTcuNSAyNy41IDMyLjUgMTcuNSAxNy41IDE3LjUgNDcuNSAyLjUgNDcuNSIvPgogICAgPHBvbHlsaW5lIGlkPSJnZ2UyMzUiIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1Mi41IDE3LjUgNTIuNSA0Ny41IDgyLjUgNDcuNSA2Ny41IDE3LjUgNTIuNSAxNy41Ii8+CiAgICA8cG9seWxpbmUgaWQ9ImdnZTIzOCIgY2xhc3M9ImNscy0xIiBwb2ludHM9IjUyLjUgMi41IDUyLjUgMTcuNSA4Mi41IDE3LjUgODIuNSAyLjUgNTIuNSAyLjUiLz4KICAgIDxwb2x5bGluZSBpZD0iZ2dlMjQxIiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iODIuNSAyLjUgODIuNSA0Ny41IDExMi41IDQ3LjUgMTEyLjUgMi41IDk3LjUgMi41IDk3LjUgMzIuNSA5Ny41IDIuNSA4Mi41IDIuNSIvPgogIDwvZz4KPC9zdmc+`;
    console.log("%c ", `background: url(${logo}) no-repeat;background-size: 100% 100%;padding: 50px;`);
    console.log(`%c Miru v${package_0/* version */.i8} %c https://miru.js.org `, "color: #fff;font-weight: 900;; background-color: rgb(246, 0, 78); padding:5px 0;", "background-color: rgb(255, 219, 219); padding:5px 0;");
}

// EXTERNAL MODULE: ./node_modules/@tanstack/query-core/build/lib/queryClient.mjs + 3 modules
var queryClient = __webpack_require__(8927);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(8417);
;// CONCATENATED MODULE: ./app/RootProvider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const RootProvider_queryClient = new queryClient/* QueryClient */.S();
function RootProvider({ children  }) {
    (0,react_.useEffect)(()=>{
        logMiruInfo();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(root_context/* RootStoreProvider */.LD, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(QueryClientProvider/* QueryClientProvider */.aH, {
            client: RootProvider_queryClient,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(notistack.SnackbarProvider, {
                anchorOrigin: {
                    horizontal: "right",
                    vertical: "top"
                },
                autoHideDuration: 3000,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Index, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 5808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useTranslation)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7549);
/* harmony import */ var i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4192);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7270);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1148);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(513);
/* __next_internal_client_entry_do_not_use__ useTranslation auto */ 




i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].use */ .ZP.use(react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .initReactI18next */ .Db).use((0,i18next_resources_to_backend__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)((language, namespace)=>__webpack_require__(329)(`./${language}/${namespace}.json`))).init((0,_settings__WEBPACK_IMPORTED_MODULE_3__/* .getOptions */ .FW)());
function useTranslation(ns, options = {}) {
    const lng = js_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("language") ?? _settings__WEBPACK_IMPORTED_MODULE_3__/* .fallbackLng */ .A9;
    if (i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].resolvedLanguage */ .ZP.resolvedLanguage !== lng) i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].changeLanguage */ .ZP.changeLanguage(lng);
    return (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)(ns, options);
}


/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* binding */ fallbackLng),
/* harmony export */   "FW": () => (/* binding */ getOptions),
/* harmony export */   "Mj": () => (/* binding */ languages)
/* harmony export */ });
/* unused harmony export defaultNS */
const fallbackLng = "zh-CN";
const languages = [
    fallbackLng,
    "en"
];
const defaultNS = "common";
function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    };
}


/***/ }),

/***/ 6010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BaseMargin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function BaseMargin(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...props,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("pl-5 pt-5 pr-5 md:pl-10 md:pr-10 md:pt-10", props.className),
        children: props.children
    });
}


/***/ }),

/***/ 9810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ErrorView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function ErrorView({ error  }) {
    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { t  } = (0,_app_i18n__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!error) {
            return;
        }
        if (typeof error === "object") {
            return setMsg(error.toString());
        }
        setMsg(error);
    }, [
        error
    ]);
    if (!msg) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-28 text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-2xl font-bold",
                children: t("an-error-has-occurred")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm",
                children: msg
            })
        ]
    });
}


/***/ }),

/***/ 9103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(234);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Layout(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.div */ .E.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 0
        },
        children: props.children
    });
}


/***/ }),

/***/ 3529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoadingBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4660);



function LoadingBox({ className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex h-full w-full items-center justify-center", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Loader2 */ .zM5, {
            size: 50,
            className: "animate-spin"
        })
    });
}


/***/ }),

/***/ 5706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_root_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(489);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6121);
/* harmony import */ var _icons_IconLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4108);




const Logo = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(()=>{
    const { settingsStore  } = (0,_context_root_context__WEBPACK_IMPORTED_MODULE_1__/* .useRootStore */ .Yh)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_IconLogo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        width: 80,
        color: settingsStore.getSetting("theme") === "dark" ? "#fff" : "#333"
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 2347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SkeletonBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function SkeletonBlock(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...props,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("h-full w-full animate-pulse rounded-xl bg-slate-200 dark:bg-zinc-700", props.className)
    });
}


/***/ }),

/***/ 8574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Tab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Tab(props) {
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const handleClick = (index)=>{
        setActiveTab(index);
        props.onChange?.(index);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (props.index !== undefined) {
            setActiveTab(Number(props.index));
        }
    }, [
        props.index,
        props.tabs
    ]);
    const tabs = props.tabs.map((tab, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: ()=>handleClick(index),
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("mr-2 break-keep rounded-full border pl-3 pr-3 pt-2 pb-2 text-sm ", `${activeTab === index ? "bg-black text-white dark:bg-black " : "bg-white dark:bg-zinc-700"}`),
            children: tab.title
        }, index));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("overflow-x-scroll scrollbar-none"),
        children: props.tabs.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                props.tabs.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex overflow-auto scrollbar-none mb-3", props.className),
                    children: tabs
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: props.tabs[activeTab]?.content
                })
            ]
        })
    });
}


/***/ }),

/***/ 8644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4660);



function Button(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)("rounded-3xl border bg-black pl-4 pr-4 pt-2 pb-2 text-sm text-white focus:ring-2 focus:ring-gray-500", props.className),
        children: props.loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_2__/* .Loader2 */ .zM5, {
            className: "animate-spin"
        }) || props.children
    });
}


/***/ }),

/***/ 9629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function IconButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("rounded-full p-2 hover:bg-black hover:bg-opacity-20", props.className),
        children: props.children
    });
}


/***/ }),

/***/ 1905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LazyElement)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function LazyElement(props) {
    const [child, setChild] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.placeholder);
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const element = elementRef.current;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setChild(props.children);
                    observer.unobserve(entry.target);
                }
            });
        });
        if (null !== element) {
            observer.observe(element);
        }
        return ()=>{
            observer.disconnect();
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: elementRef,
        className: props.className,
        children: child
    });
}


/***/ }),

/***/ 2412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadingImg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SkeletonBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2347);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function LoadingImg(props) {
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (imgRef.current) {
            if (imgRef.current.complete) {
                setLoaded(true);
                return;
            }
            imgRef.current.onload = ()=>{
                setLoaded(true);
            };
            imgRef.current.addEventListener("error", ()=>{
                setError(true);
            });
        }
        return ()=>{
            if (imgRef.current) {
                imgRef.current.removeEventListener("error", ()=>{
                    console.log("error");
                });
            }
        };
    }, [
        props.src
    ]);
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.errorview ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-full w-full bg-gray-200"
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !loaded && (props.loadview ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SkeletonBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "h-full w-full"
            })),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                hidden: !loaded,
                ref: imgRef,
                ...props
            })
        ]
    });
}


/***/ }),

/***/ 4108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function IconLogo(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 115 50",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            fill: "none",
            stroke: props.color || "#333",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M2.5 47.5v-45h20l5 10 5-10h20v45h-15v-30l-10 15-10-15v30h-15"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M52.5 17.5v30h30l-15-30h-15M52.5 2.5v15h30v-15h-30M82.5 2.5v45h30v-45h-15v30-30h-15"
                })
            ]
        })
    });
}


/***/ }),

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LD": () => (/* binding */ RootStoreProvider),
  "Yh": () => (/* binding */ useRootStore)
});

// UNUSED EXPORTS: store

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/i18n/index.ts
var i18n = __webpack_require__(5808);
// EXTERNAL MODULE: ./components/LoadingBox.tsx
var LoadingBox = __webpack_require__(3529);
// EXTERNAL MODULE: ./components/icons/IconLogo.tsx
var IconLogo = __webpack_require__(4108);
;// CONCATENATED MODULE: ./components/InitView.tsx



function InitView({ msg  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex h-screen items-center justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(IconLogo/* default */.Z, {
                    className: "mb-3",
                    width: 110
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(LoadingBox/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mt-3",
                    children: msg
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./db/index.ts + 5 modules
var db = __webpack_require__(323);
// EXTERNAL MODULE: ./node_modules/umi-request/dist/index.js
var dist = __webpack_require__(8397);
;// CONCATENATED MODULE: ./extension/extension.ts


class Extension {
    request(url, options) {
        if (!options) {
            options = {};
        }
        if (!options.headers) {
            options.headers = {
                "Miru-Url": this.webSite
            };
        }
        if (!options.headers["Miru-Url"]) {
            options.headers = {
                ...options.headers,
                "Miru-Url": this.webSite
            };
        }
        const miruProxy = this.proxyUrl + url;
        return (0,dist/* default */.ZP)(miruProxy, options);
    }
    // 最近更新
    latest(page, tab) {
        throw new Error("not implement");
    }
    // 搜索
    search(kw, page) {
        throw new Error("not implement");
    }
    // 获取详情
    detail(url) {
        throw new Error("not implement");
    }
    // 观看
    watch(url) {
        throw new Error("not implement");
    }
    // 检查更新剧集/章节
    checkUpdate(url) {
        throw new Error("not implement");
    }
    // 读取设置
    async getSetting(key) {
        const settings = await db/* extensionSettingsDB.getSetting */.rK.getSetting(this.package, key);
        if (settings) {
            return settings.value;
        }
        return "";
    }
    // 自定义播放器
    customPlayer(video, url, art) {
        art.notice.show = "not implement customPlayer";
    }
    // 注册设置
    async registerSetting(settings) {
        await db/* extensionSettingsDB.addSettings */.rK.addSettings({
            package: this.package,
            ...settings,
            value: settings.defaultValue
        });
    }
    load() {}
    unload() {}
    constructor(){
        this.package = "";
        this.proxyUrl = "";
        this.webSite = "";
        this.name = "";
        this.version = "";
        this.lang = "";
        this.script = "";
        this.scriptUrl = "";
        this.author = "";
        this.license = "";
        this.description = "";
        this.type = "bangumi";
        this.nsfw = false;
    }
}

;// CONCATENATED MODULE: ./utils/extension.ts
// 读取扩展元数据
function readExtensionMateData(script) {
    const scriptMetaData = script.match(/MiruExtension([\s\S]+?)\/MiruExtension/)?.[1];
    if (!scriptMetaData) {
        return undefined;
    }
    const data = {};
    const lines = scriptMetaData.split("\n");
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        if (line.startsWith("// @")) {
            const property = line.slice(4).split(" ");
            data[property[0]] = property.slice(1).join(" ").trim();
        }
    }
    return data;
}
// 验证是否数据是否合法
function verExtensionMateData(data) {
    if (!data.name || !data.package || !data.version || !data.webSite || !data.type || !data.lang) {
        return false;
    }
    return true;
}

// EXTERNAL MODULE: ./utils/is-client.ts
var is_client = __webpack_require__(3618);
// EXTERNAL MODULE: ./node_modules/js-base64/base64.mjs
var base64 = __webpack_require__(6882);
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.cjs.production.min.js
var mobx_cjs_production_min = __webpack_require__(6171);
;// CONCATENATED MODULE: ./store/extension.ts






class ExtensionStore {
    constructor(settingsStore){
        this.extensionsMap = new Map();
        this.extensionsErrorMap = new Map();
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
        if ((0,is_client/* isClient */.C)()) {
            // 给 window 添加 Extension 对象
            Object.defineProperty(window, "Extension", {
                value: Extension
            });
        }
        (0,mobx_cjs_production_min.autorun)(()=>{
            this.proxyUrl = settingsStore.getSetting("miruProxy");
            // 重载扩展proxy地址
            this.extensionsMap.forEach((extension, pkg)=>{
                if (this.proxyUrl) {
                    extension.proxyUrl = this.proxyUrl;
                }
            });
        });
    }
    // 通过脚本加载扩展
    installExtension(script) {
        return new Promise((resolve, reject)=>{
            const extensionData = readExtensionMateData(script);
            if (!extensionData || !verExtensionMateData(extensionData)) {
                return reject("扩展元数据错误");
            }
            extensionData.script = script;
            script = `data:text/javascript;base64,${(0,base64/* encode */.cv)(script)}`;
            if ((0,is_client/* isClient */.C)()) {
                import(/* webpackIgnore: true */ script).then((module)=>{
                    const extension = new module.default();
                    // 将扩展的属性复制到扩展实例上
                    Object.assign(extension, extensionData);
                    // 设置代理地址
                    extension.proxyUrl = this.proxyUrl;
                    // 保存扩展
                    db/* extensionDB.addExtension */.Qt.addExtension(extensionData);
                    this.setExtension(extension.package, extension);
                    // 运行初始化方法
                    extension.load();
                    return resolve(extension.package);
                }).catch((error)=>{
                    this.extensionsErrorMap.set(extensionData.package, error);
                    return reject(error);
                });
            }
        });
    }
    // 卸载扩展
    unloadExtension(pkg) {
        this.extensionsMap.get(pkg)?.unload();
        this.extensionsMap.delete(pkg);
        db/* extensionDB.deleteExtension */.Qt.deleteExtension(pkg);
    }
    getExtension(pkg) {
        return this.extensionsMap.get(pkg);
    }
    getExtensionsByType(type) {
        return Array.from(this.extensionsMap.values()).filter((extension)=>extension.type === type);
    }
    getExtensionsError(pkg) {
        return this.extensionsErrorMap.get(pkg);
    }
    // 初始化加载所有已存储扩展
    async init() {
        const extensions = await db/* extensionDB.getAllExtensions */.Qt.getAllExtensions();
        await Promise.all(extensions.map((extension)=>{
            this.installExtension(extension.script);
        }));
    }
    // 设置Extension
    setExtension(pkg, extension) {
        this.extensionsMap.set(pkg, extension);
    }
}

;// CONCATENATED MODULE: ./store/history.ts



class HistoryStore {
    constructor(){
        this.history = [];
        this.historyTemp = [];
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
        (0,mobx_cjs_production_min.autorun)(()=>{
            if ((0,is_client/* isClient */.C)() && this.historyTemp.length > 0) {
                localStorage.setItem("historyTemp", JSON.stringify(this.historyTemp));
            }
        });
    }
    // 初始化数据
    // 先读取本地数据如果有则添加到数据库
    // 然后从数据库读取数据
    async init() {
        const localHistory = JSON.parse(localStorage.getItem("historyTemp") || "[]");
        await Promise.all(localHistory.reverse().map(async (history)=>db/* historyDB.addHistory */.Zv.addHistory(history)));
        localStorage.removeItem("historyTemp");
        this.setHistory(await db/* historyDB.getAllHistory */.Zv.getAllHistory());
    }
    setHistory(history) {
        this.history = history;
    }
    getHistoryByType(type, limit) {
        const history = this.history.filter((history)=>history.type === type).slice(0, limit);
        // 如果是影视
        if (type === "bangumi") {
            return Promise.all(history.map(async (history)=>{
                // 给cover创建objectURL
                const cover = history.cover;
                if (cover) {
                    const url = await (await fetch(cover)).arrayBuffer();
                    const blob = new Blob([
                        url
                    ], {
                        type: "image/png"
                    });
                    history.cover = URL.createObjectURL(blob);
                }
                return history;
            }));
        }
        return history;
    }
    async addHistory(history) {
        // 先删除原有的再往后添加
        const index = this.historyTemp.findIndex((item)=>item.package === history.package && item.url === history.url);
        const dbIndex = this.history.findIndex((item)=>item.package === history.package && item.url === history.url);
        if (index !== -1) {
            this.historyTemp.splice(index, 1);
        }
        if (dbIndex !== -1) {
            this.history.splice(dbIndex, 1);
        }
        this.historyTemp.unshift(history);
        this.history.unshift(history);
    }
    async getHistory(url, pkg) {
        return this.history.find((item)=>item.package === pkg && item.url === url);
    }
    async clearHistory() {
        this.history.splice(0, this.history.length);
        this.historyTemp.splice(0, this.historyTemp.length);
        await db/* historyDB.deleteAllHistory */.Zv.deleteAllHistory();
        localStorage.removeItem("historyTemp");
    }
}

// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(7270);
;// CONCATENATED MODULE: ./store/settings.ts




class SettingsStore {
    constructor(){
        this.items = new Map();
        this.envItems = new Map();
        this.ready = false;
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
        (0,mobx_cjs_production_min.autorun)(()=>{
            if ((0,is_client/* isClient */.C)()) {
                // 设置语言
                if (this.getSetting("language")) {
                    js_cookie/* default.set */.Z.set("language", this.getSetting("language"), {
                        expires: 365
                    });
                }
                // 设置主题
                const theme = this.getSetting("theme");
                const setDark = ()=>document.documentElement.classList.add("dark");
                const setLight = ()=>document.documentElement.classList.remove("dark");
                if (theme === "auto") {
                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
                    prefersDark.matches ? setDark() : setLight();
                    prefersDark.addEventListener("change", (e)=>{
                        if (this.getSetting("theme") !== "auto") {
                            return;
                        }
                        if (e.matches) {
                            setDark();
                            return;
                        }
                        setLight();
                    });
                }
                if (theme === "dark") {
                    setDark();
                }
                if (theme === "light") {
                    setLight();
                }
            }
        });
    }
    async init() {
        if (!(0,is_client/* isClient */.C)()) {
            return;
        }
        const settings = await db/* settingsDB.getAllSettings */.s$.getAllSettings();
        settings.forEach((setting)=>{
            this.setSetting(setting.key, setting.value);
        });
        this.envItems.set("theme", "auto");
        this.envItems.set("miruProxy", "/api/request");
        this.envItems.set("miruRepo", "https://mybox-1257251314.cos.ap-chengdu.myqcloud.com/www/repo");
        this.envItems.set("kanban", "true");
        this.envItems.set("TMDBKey", "");
        this.envItems.set("model", "0");
        this.envItems.forEach((value, key)=>{
            if (!this.getSetting(key)) {
                this.setSetting(key, value);
            }
        });
    }
    getSetting(key) {
        return this.items.get(key);
    }
    setSetting(key, value) {
        this.items.set(key, value);
        db/* settingsDB.setSettings */.s$.setSettings(key, value);
    }
    resetSetting(key) {
        this.setSetting(key, this.envItems.get(key));
    }
}

;// CONCATENATED MODULE: ./store/tmdb.ts



class TMDBStore {
    constructor(settingsStore){
        (0,mobx_cjs_production_min.autorun)(()=>{
            this.key = settingsStore.getSetting("TMDBKey");
        });
    }
    async request(path, options) {
        while(!this.key){
            await new Promise((resolve)=>setTimeout(resolve, 100));
        }
        this.req = (0,dist/* extend */.l7)({
            prefix: "https://api.themoviedb.org",
            params: {
                api_key: this.key,
                language: js_cookie/* default.get */.Z.get("language")
            }
        });
        return this.req(path, options);
    }
    async search(kw, page = 1) {
        const data = await this.request("/3/search/multi", {
            params: {
                query: kw,
                page
            }
        });
        return data.results;
    }
    async getDetails(tvid, mediaType) {
        const data = await this.request(`/3/${mediaType}/${tvid}`);
        return data;
    }
    async getCredits(mbid, mediaType) {
        const data = await this.request(`/3/${mediaType}/${mbid}/credits`);
        return data;
    }
    getImageUrl(path) {
        return path ? `https://image.tmdb.org/t/p/original/${path}` : undefined;
    }
}

// EXTERNAL MODULE: ./node_modules/notistack/index.js
var notistack = __webpack_require__(9431);
;// CONCATENATED MODULE: ./store/player.ts



class PlayerStore {
    constructor(){
        this.playlist = [];
        // 全屏
        this.fullScreen = false;
        // 显示播放列表
        this.showPlayList = true;
        // 迷你模式
        this.mini = true;
        this.index = 0;
        // 是否是悬浮播放列表
        this.floatPlayList = false;
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
        this.init();
        (0,mobx_cjs_production_min.autorun)(()=>{
            if (!(0,is_client/* isClient */.C)() || !this.playlist.length) {
                return;
            }
            localStorage.setItem("playlist", JSON.stringify({
                playlist: this.playlist,
                index: this.index
            }));
        });
    }
    // 从 localStorage 读取上次记录
    init() {
        if (!(0,is_client/* isClient */.C)()) {
            return;
        }
        const data = localStorage.getItem("playlist");
        if (data) {
            const { playlist , index  } = JSON.parse(data);
            this.playlist = playlist;
            this.index = index;
        }
    }
    // 当前播放
    get currentPlay() {
        const index = this.index >= this.playlist.length ? 0 : this.index;
        return this.playlist[index];
    }
    // 添加播放并切换到当前播放
    addPlay(play) {
        this.playlist.unshift(play);
        this.index = 0;
    }
    // 切换播放
    togglePlay(index) {
        this.index = index;
    }
    // 添加下个播放
    pushPlay(play) {
        // 如果有一样的就先删除再添加
        const index = this.playlist.findIndex((v)=>v.url === play.url);
        if (index !== -1) {
            this.playlist.splice(index, 1);
        }
        this.playlist.push(play);
    }
    addNextPlay(play) {
        const index = this.playlist.findIndex((v)=>v.url === play.url);
        if (index !== -1) {
            this.playlist.splice(index, 1);
        }
        this.playlist.splice(this.index + 1, 0, play);
    }
    // 切换下一个播放
    toggleNextPlay() {
        if (this.index + 1 >= this.playlist.length) {
            // 提示
            (0,notistack.enqueueSnackbar)("已经是最后一集了", {
                variant: "info"
            });
            return;
        }
        this.index++;
    }
    // 切换上一个播放
    togglePrevPlay() {
        if (this.index - 1 < 0) {
            // 提示
            (0,notistack.enqueueSnackbar)("已经是第一集了", {
                variant: "info"
            });
            return;
        }
        this.index--;
    }
    // 清空播放列队
    clearPlayList() {
        this.playlist = [];
        // 清除 localStorage
        localStorage.removeItem("playlist");
    }
    // 切换 showPlayList
    toggleShowPlayList(v) {
        if (v !== undefined) {
            this.showPlayList = v;
            return;
        }
        this.showPlayList = !this.showPlayList;
    }
    // 切换悬浮播放列表
    toggleFloatPlayList(v) {
        if (v !== undefined) {
            this.floatPlayList = v;
            return;
        }
        this.floatPlayList = !this.floatPlayList;
    }
    // 切换 FullScreen
    toggleFullScreen(v) {
        if (v !== undefined) {
            this.fullScreen = v;
            return;
        }
        this.fullScreen = !this.fullScreen;
    }
    // 切换 mini
    toggleMini(v) {
        if (v !== undefined) {
            this.mini = v;
            return;
        }
        this.mini = !this.mini;
    }
}

;// CONCATENATED MODULE: ./store/sync.ts


class SyncStore {
    constructor(settingsStore){
        (0,mobx_cjs_production_min.makeAutoObservable)(this);
        this.settingsStore = settingsStore;
        (0,mobx_cjs_production_min.autorun)(()=>{
            this.token = settingsStore.getSetting("githubToken");
        });
    }
    async request(path, options) {
        let count = 0;
        while(!this.token){
            if (count > 10) {
                throw new Error("Github Token 未设置");
            }
            await new Promise((resolve)=>setTimeout(resolve, 100));
        }
        this.req = (0,dist/* extend */.l7)({
            prefix: "https://api.github.com",
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
        return this.req(path, options);
    }
    async getRemoteGid() {
        // 避免重复获取gid
        if (this.gid) {
            return this.gid;
        }
        const list = await this.request("/gists");
        const gist = list.find((item)=>{
            return item.description === "MiruSync";
        });
        this.gid = gist?.id;
        return this.gid;
    }
    // 从远程获取数据
    async pull() {
        // 获取gid
        const gid = await this.getRemoteGid();
        if (!gid) {
            return;
        }
        const gist = await this.request(`/gists/${gid}`);
        const file = gist.files["MiruSync.json"];
        return {
            rawUrl: file.raw_url,
            updatedAt: gist.updated_at
        };
    }
    // 将数据推送到远程
    async push(data) {
        let gist;
        let files;
        // 获取gid
        const gid = await this.getRemoteGid();
        if (!gid) {
            // 不存在则创建
            gist = await this.request("/gists", {
                method: "POST",
                data: {
                    description: "MiruSync",
                    public: false,
                    files: {
                        "MiruSync.json": {
                            content: JSON.stringify(data, null, 2)
                        }
                    }
                }
            });
            files = gist.files;
        } else {
            gist = await this.request(`/gists/${gid}`, {
                method: "PATCH",
                data: {
                    files: {
                        "MiruSync.json": {
                            content: JSON.stringify(data, null, 2)
                        }
                    }
                }
            });
            files = gist.files;
        }
        // 存在则更新
        return {
            rawUrl: files["MiruSync.json"].raw_url,
            updatedAt: gist.updated_at
        };
    }
}

;// CONCATENATED MODULE: ./store/root.ts






class RootStore {
    constructor(){
        this.settingsStore = new SettingsStore();
        this.tmdbStore = new TMDBStore(this.settingsStore);
        this.extensionStore = new ExtensionStore(this.settingsStore);
        this.historyStore = new HistoryStore();
        this.playerStore = new PlayerStore();
        this.syncStore = new SyncStore(this.settingsStore);
    }
}

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/index.js
var mobx_react_lite_dist = __webpack_require__(6121);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./context/root-context.tsx








(0,mobx_react_lite_dist.enableStaticRendering)(!is_client/* isClient */.C);
(0,mobx_cjs_production_min.configure)({
    useProxies: "always"
});
let $store;
const RootContext = /*#__PURE__*/ (0,react_.createContext)(undefined);
function useRootStore() {
    const context = (0,react_.useContext)(RootContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }
    return context;
}
const store = initializeStore();
function RootStoreProvider({ children  }) {
    const [ok, setOk] = (0,react_.useState)(false);
    const { t  } = (0,i18n/* useTranslation */.$)("init");
    const [initMsg, setInitMsg] = (0,react_.useState)();
    (0,react_.useEffect)(()=>{
        if ((0,is_client/* isClient */.C)()) {
            setInitMsg(t("initializing"));
            (async ()=>{
                setInitMsg(t("initialization-settings"));
                await store.settingsStore.init();
                setInitMsg(t("initialization-extensions"));
                await store.extensionStore.init();
                setInitMsg(t("initialization-historys"));
                await store.historyStore.init();
                setOk(true);
            })();
        }
    }, []);
    if (!ok) {
        return /*#__PURE__*/ jsx_runtime_.jsx(InitView, {
            msg: initMsg
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(RootContext.Provider, {
        value: store,
        children: children
    });
}
function initializeStore() {
    const _store = $store ?? new RootStore();
    // For SSG and SSR always create a new store
    if (true) return _store;
    // Create the store once in the client
    if (!$store) $store = _store;
    return _store;
}


/***/ }),

/***/ 323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "db": () => (/* binding */ db),
  "u1": () => (/* binding */ exportData),
  "Qt": () => (/* reexport */ extensionDB),
  "rK": () => (/* reexport */ extensionSettingsDB),
  "Zv": () => (/* reexport */ historyDB),
  "dk": () => (/* binding */ importData),
  "c8": () => (/* reexport */ loveDB),
  "s$": () => (/* reexport */ settingsDB),
  "mI": () => (/* reexport */ tmdbDB)
});

// UNUSED EXPORTS: MiruDB

// EXTERNAL MODULE: ./node_modules/dexie/dist/modern/dexie.min.mjs
var dexie_min = __webpack_require__(5703);
;// CONCATENATED MODULE: ./db/table/extension.ts

var extensionDB;
(function(extensionDB) {
    function getAllExtensions() {
        return db.extension.toArray();
    }
    extensionDB.getAllExtensions = getAllExtensions;
    function getAllExtensionsForType(type) {
        return db.extension.where("type").equals(type).toArray();
    }
    extensionDB.getAllExtensionsForType = getAllExtensionsForType;
    function deleteExtension(packageName) {
        return db.extension.where("package").equals(packageName).delete();
    }
    extensionDB.deleteExtension = deleteExtension;
    async function addExtension(extension) {
        // 如果已经存在则更新
        const ext = await getExtension(extension.package);
        if (ext) {
            return db.extension.where("package").equals(extension.package).modify(extension);
        }
        return db.extension.add(extension);
    }
    extensionDB.addExtension = addExtension;
    function getExtension(packageName) {
        return db.extension.where("package").equals(packageName).first();
    }
    extensionDB.getExtension = getExtension;
})(extensionDB || (extensionDB = {}));
var extensionSettingsDB;
(function(extensionSettingsDB) {
    function getSettings(packageName) {
        return db.extensionSettings.where("package").equals(packageName).toArray();
    }
    extensionSettingsDB.getSettings = getSettings;
    function getSetting(packageName, key) {
        return db.extensionSettings.where("package").equals(packageName).and((item)=>{
            return item.key === key;
        }).first();
    }
    extensionSettingsDB.getSetting = getSetting;
    function setSetting(packageName, key, value) {
        return db.extensionSettings.where("package").equals(packageName).and((item)=>{
            return item.key === key;
        }).modify({
            value
        });
    }
    extensionSettingsDB.setSetting = setSetting;
    async function addSettings(settings) {
        // 如果已经有了则只更新除 value 以外的属性
        const setting = await getSetting(settings.package, settings.key);
        if (setting) {
            return db.extensionSettings.where("package").equals(settings.package).and((item)=>{
                return item.key === settings.key;
            }).modify({
                title: settings.title,
                type: settings.type,
                options: settings.options,
                defaultValue: settings.defaultValue,
                description: settings.description
            });
        }
        return db.extensionSettings.add(settings);
    }
    extensionSettingsDB.addSettings = addSettings;
    function deleteExtensionSettings(pkg) {
        return db.extensionSettings.where("package").equals(pkg).delete();
    }
    extensionSettingsDB.deleteExtensionSettings = deleteExtensionSettings;
})(extensionSettingsDB || (extensionSettingsDB = {}));

;// CONCATENATED MODULE: ./db/table/history.ts

var historyDB;
(function(historyDB) {
    async function getAllHistory() {
        // 返回最新修改的
        return db.history.reverse().sortBy("time");
    }
    historyDB.getAllHistory = getAllHistory;
    function getAllHistoryByType(type, limit) {
        return db.history.where("type").equals(type).reverse().limit(limit).sortBy("time");
    }
    historyDB.getAllHistoryByType = getAllHistoryByType;
    async function addHistory(history) {
        history.time = Date.now();
        if (await getHistory(history.url, history.package)) {
            return db.history.where({
                url: history.url,
                package: history.package
            }).modify(history);
        }
        return db.history.add(history);
    }
    historyDB.addHistory = addHistory;
    function deleteHistory(pkg, url) {
        return db.history.where({
            package: pkg,
            url
        }).delete();
    }
    historyDB.deleteHistory = deleteHistory;
    function deleteAllHistory() {
        return db.history.clear();
    }
    historyDB.deleteAllHistory = deleteAllHistory;
    function getHistory(url, pkg) {
        return db.history.where({
            url,
            package: pkg
        }).first();
    }
    historyDB.getHistory = getHistory;
})(historyDB || (historyDB = {}));

;// CONCATENATED MODULE: ./db/table/love.ts

var loveDB;
(function(loveDB1) {
    function getAllLove() {
        return db.love.toArray();
    }
    loveDB1.getAllLove = getAllLove;
    function getAllLoveByType(type) {
        return db.love.where("type").equals(type).reverse().toArray();
    }
    loveDB1.getAllLoveByType = getAllLoveByType;
    function addLove(love) {
        return db.love.add(love);
    }
    loveDB1.addLove = addLove;
    async function loveOrUnLove(love) {
        const isLove = await loveDB.isLove(love.package, love.url);
        if (isLove) {
            return deleteLove(love.package, love.url);
        } else {
            return addLove(love);
        }
    }
    loveDB1.loveOrUnLove = loveOrUnLove;
    function deleteLove(pkg, url) {
        return db.love.where({
            package: pkg,
            url
        }).delete();
    }
    loveDB1.deleteLove = deleteLove;
    function deleteAllLove() {
        return db.love.clear();
    }
    loveDB1.deleteAllLove = deleteAllLove;
    function getLove(pkg, url) {
        return db.love.where({
            package: pkg,
            url
        }).first();
    }
    loveDB1.getLove = getLove;
    async function isLove(pkg, url) {
        return !!await getLove(pkg, url);
    }
    loveDB1.isLove = isLove;
})(loveDB || (loveDB = {}));

;// CONCATENATED MODULE: ./db/table/settings.ts

var settingsDB;
(function(settingsDB) {
    function getAllSettings() {
        return db.settings.toArray();
    }
    settingsDB.getAllSettings = getAllSettings;
    function getSettings(key) {
        return db.settings.where("key").equals(key).first();
    }
    settingsDB.getSettings = getSettings;
    async function setSettings(key, value) {
        if (await getSettings(key)) {
            return db.settings.where("key").equals(key).modify({
                value
            });
        }
        return db.settings.add({
            key,
            value
        });
    }
    settingsDB.setSettings = setSettings;
    function deleteSettings(key) {
        return db.settings.where("key").equals(key).delete();
    }
    settingsDB.deleteSettings = deleteSettings;
    function deleteAllSettings() {
        return db.settings.clear();
    }
    settingsDB.deleteAllSettings = deleteAllSettings;
})(settingsDB || (settingsDB = {}));

;// CONCATENATED MODULE: ./db/table/tmdb.ts

var tmdbDB;
(function(tmdbDB) {
    function getTMDB(pkg, url) {
        return db.tmdb.where({
            pkg,
            url
        }).first();
    }
    tmdbDB.getTMDB = getTMDB;
    async function saveTMDB(tmdb) {
        // 判断是否存在
        // 存在则更新
        // 不存在则插入
        const data = await getTMDB(tmdb.pkg, tmdb.url);
        if (data) {
            return db.tmdb.update(data.id, tmdb);
        } else {
            return db.tmdb.add(tmdb);
        }
    }
    tmdbDB.saveTMDB = saveTMDB;
})(tmdbDB || (tmdbDB = {}));

;// CONCATENATED MODULE: ./db/index.ts






class MiruDB extends dexie_min/* default */.ZP {
    constructor(){
        super("MiruDB");
        this.version(5).stores({
            history: "++id, url, title, package, cover, type, time,&[url+package]",
            extension: "++id, id, name, &package, version, lang, type, script, enable, description, webSite, scriptUrl, author, icon, settings",
            love: "++id, title, package, url, cover, type,&[url+package]",
            settings: "++id, &key, value",
            extensionSettings: "++id, title, package, key, value, type, options, defaultValue, description, &[package+key]",
            tmdb: "++id, tmdb_id, mediaType, pkg, url,&[url+pkg]"
        });
    }
}
const db = new MiruDB();
function exportData() {
    return Promise.all([
        db.history.toArray(),
        db.extension.toArray(),
        db.love.toArray(),
        db.settings.toArray(),
        db.extensionSettings.toArray(),
        db.tmdb.toArray()
    ]);
}
function importData(data) {
    return Promise.all([
        db.history.bulkPut(data[0]),
        db.extension.bulkPut(data[1]),
        db.love.bulkPut(data[2]),
        db.settings.bulkPut(data[3]),
        db.extensionSettings.bulkPut(data[4]),
        db.tmdb.bulkPut(data[5])
    ]);
}


/***/ }),

/***/ 3618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ isClient)
/* harmony export */ });
function isClient() {
    return "undefined" !== "undefined";
}


/***/ }),

/***/ 4195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ changeTitle)
/* harmony export */ });
function changeTitle(title) {
    if (false) {}
}


/***/ }),

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3146);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6495);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./app/RootProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`E:\project\xuexi\LuminaryLore\app\RootProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const RootProvider = (proxy.default);

;// CONCATENATED MODULE: ./app/layout.tsx



const metadata = {
    title: "Home | Miru"
};
async function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("html", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        src: "https://cdn.staticfile.org/jquery/3.7.0/jquery.min.js",
                        async: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        src: "https://cdn.staticfile.org/jszip/3.10.1/jszip.min.js",
                        async: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        src: "https://cdn.staticfile.org/crypto-js/4.1.1/crypto-js.min.js",
                        async: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        "data-id": "101422401",
                        src: "//static.getclicky.com/js",
                        async: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                className: "dark:bg-black dark:bg-opacity-80 dark:text-white",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(RootProvider, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "ml-0 lg:ml-230px",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "m-auto",
                                    style: {
                                        maxWidth: "1400px"
                                    },
                                    children: children
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "h-28 lg:hidden"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        title: "GDPR-compliant Web Analytics",
                        href: "https://clicky.com/101422401",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            alt: "Clicky",
                            src: "//static.getclicky.com/media/links/badge.gif"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6495:
/***/ (() => {



/***/ }),

/***/ 8099:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"i8":"2.0.0-Alpha.12"}');

/***/ })

};
;