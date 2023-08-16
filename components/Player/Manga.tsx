import { useRootStore } from "@/context/root-context";
import { MangaWatch } from "@/types/extension";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { ChevronDown, ChevronFirst, ChevronLast, List } from "lucide-react";
import { observer } from "mobx-react-lite";
import { SetStateAction, useEffect,useState } from "react";
import Button from "../common/Button";
import LazyElement from "../common/LazyElement";
import LoadingImg from "../common/LoadingImg";
import ErrorView from "../ErrorView";
import LoadingBox from "../LoadingBox";
import Control from "./control";
let autoDownload = false;
let currentURL: string ;
let currentInterval: string | number | NodeJS.Timeout | undefined ;
// 保存已经加载完成的图。
const decodeTopUrls: { [key: string]: string[] } = {};
const MangaPlayer = observer(() => {
    const { extensionStore, historyStore, playerStore } = useRootStore();
    const { pkg, pageUrl, title, chapter, url, type } = playerStore.currentPlay;
    const extension = extensionStore.getExtension(pkg);
    const { data, error, isLoading } = useQuery({
        queryKey: ["manga", url, pkg],
        queryFn: () => {
            currentURL = url
            clearInterval(currentInterval);
            return extension?.watch(url) as MangaWatch 
        },
    });
    const [decodeUrls, setDecodeUrls] = useState(data?.urls || []);
    extension?.getSetting("autoDownload").then((value)=>{
        autoDownload = value == "true";
    })
    
    useEffect(() => {
        if (!data || type !== "manga") {
            return;
        }
        playerStore.toggleFloatPlayList(true);
        playerStore.toggleShowPlayList(false);
        setDecodeUrls(decodeTopUrls[currentURL]?[...decodeTopUrls[currentURL]]:[...data.urls])
        console.log("重新获取链接", { urls:data.urls , decodeUrls });
        historyStore.addHistory({
            package: pkg,
            url: pageUrl,
            title,
            chapter,
            type: "manga",
            cover: data.urls[0],
        });
    }, [data]);
    if (isLoading) {
        return <LoadingBox className="!h-screen"></LoadingBox>;
    }

    if (error) {
        return <ErrorView error={error} />;
    }

    if (!data) {
        return <ErrorView error={new Error("No data")} />;
    }
    if (type !== "manga") {
        return null;
    }
    console.log("重新渲染",currentURL);
    let decodeImage = function(url: any, index: number,image: EventTarget | undefined ,autoLoad = false) {
        if(index > data.urls.length - 1) return;
        (extension as any).decodeImage && (extension as any).decodeImage(data.urls[index],function(newUrl:string) {
            if(autoLoad) decodeImage(0,++index,undefined,autoLoad)
            if(decodeUrls[index] == newUrl) return
            decodeUrls[index] = newUrl;
            setDecodeUrls([...decodeUrls]);
            decodeTopUrls[currentURL] = [...decodeUrls];
            if(decodeUrls.every((element, index) => element?.startsWith("data:"))){
                // clearInterval(currentInterval)
                setDecodeUrls([...decodeUrls]);
                console.log("解码完毕！",data);
                decodeTopUrls[currentURL] = [...decodeUrls];
                if(autoDownload) extension && (extension as any).download && (extension as any).download([...decodeUrls],title);
            } else {
                
            }
        });
    }
    const updateUrl:any = (url: any, index: number,image: EventTarget | undefined ,autoLoad = false) => {
        if(playerStore.mini && index!=0 || index > data.urls.length - 1) return;
        if((decodeUrls[index]?.startsWith("data:"))) return
        decodeImage(url, index,image,autoLoad)
    };
    updateUrl(data.urls[0],0,null,false)
    let handleDownload = async function(){
        let awaitDownload: string | number | NodeJS.Timeout | undefined ;
        if((extension as any).download) {
            console.log("正在重新检查解码");
            decodeImage(0,0,undefined,true);
            clearInterval(awaitDownload)
            awaitDownload = setInterval(()=>{
                if(decodeUrls.every((element, index) => element?.startsWith("data:"))){
                    console.log("开始下载啦！");
                    (extension as any).download([...decodeUrls],title);
                    console.log("下载完成啦！");
                    clearInterval(awaitDownload)
                }
            },1000)

        } else {
            console.log("下载失败了")
            alert('没有该实现功能！');
        }
    }
    return (
        
        <>
            <div
                className={clsx(
                    "relative max-w-5xl text-center",
                    {
                        "max-h-screen overflow-auto": !playerStore.mini,
                    },
                    // mini 时不显示滚动条 且不能滚动 只做预览
                    {
                        "max-h-56 overflow-hidden scrollbar-none":
                            playerStore.mini,
                    }
                )}
            >
                <div className="mb-16 w-full md:w-auto">
                    
                    {decodeUrls.map( (url, index) => {
                        return (
                            <LazyElement
                                key={index}
                                placeholder={
                                    <div className="h-40 w-full">
                                        <LoadingBox></LoadingBox>
                                    </div>
                                }
                            >
                                <LoadingImg
                                    loadview={
                                        <div className="h-40 w-full">
                                            <LoadingBox></LoadingBox>
                                        </div>
                                    }
                                    className="m-auto"
                                    src={url}
                                    alt="Manga"
                                    onMouseEnter={() => updateUrl(url,index)}
                                    onLoad={(event) => {updateUrl(decodeUrls[index++],index++,event.target)}}
                                    referrerPolicy="no-referrer"
                                />
                            </LazyElement>
                        );
                    })}
                    <Button
                        className="ml-2"
                        onClick={() => {
                            handleDownload();
                        }}
                    >
                        <ChevronDown />
                    </Button>
                </div>
                {/* mini 时显示的按钮 */}
                {playerStore.mini && (
                    <div className="absolute left-0 right-0 bottom-0 top-0 opacity-0 hover:opacity-100">
                        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-60">
                            <Button
                                onClick={() => playerStore.toggleMini(false)}
                            >
                                继续观看
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <Control />
        </>
    );
});
export default MangaPlayer;
