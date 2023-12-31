import Button from "@/components/common/Button";
import LazyElement from "@/components/common/LazyElement";
import ErrorView from "@/components/ErrorView";
import ItemGrid from "@/components/ItemGrid";
import SkeletonBlock from "@/components/SkeletonBlock";
import { Extension } from "@/extension/extension";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactFragment, useEffect, useState } from "react";
import clsx from "clsx";
export default function Result(
    {
        extension,
        kw
    }: {
        extension: Extension;
        kw?: string;
    }) {
    const { t } = useTranslation(["search", "common"]);
    const {
        data,
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        isFetched,
        refetch
    } = useInfiniteQuery({
        queryKey: ["getSearchItems", extension.package, kw],
        queryFn: ({ pageParam = 1 }) => {
            if (!kw) {
                return extension?.latest(pageParam,activeTab);
            }
            return extension?.search(kw, pageParam);
        },
        getNextPageParam: (lastPage, pages) => {
            if (!lastPage) {
                return undefined;
            }
            if (lastPage.length === 0) {
                return undefined;
            }
            return pages.length + 1;
        },
        keepPreviousData: true
    });
    const [activeTab, setActiveTab]  = useState("");
    useEffect(() => {
        // 在 activeTab 变化时触发重新请求数据
        refetch();
    }, [activeTab, refetch]); // 监听 activeTab 变化
    let subTabs = extension?.tabList?.() && Object.keys(extension?.tabList?.()).map(tab => {
        return (
          <button
            key={tab}
            onClick={() => {setActiveTab(tab)}}
            className={clsx(
              "mr-2 break-keep rounded-full border pl-3 pr-3 pt-2 pb-2 text-sm",
              `${activeTab === tab ? "bg-black text-white dark:bg-black" : "bg-white dark:bg-zinc-700"}`
            )}
          >
            {tab}
          </button>
        );
      });
    if (isLoading || !isFetched) {
        return (
            <>
                <ItemGrid.Grid>
                    {new Array(20).fill(0).map((_, i) => (
                        <SkeletonBlock
                            key={i}
                            className="h-60vw max-h-96 !rounded-lg md:h-30vw lg:h-20vw"
                        />
                    ))}
                </ItemGrid.Grid>
            </>
        );
    }

    // 如果没有数据
    if (!data || !data.pages.length) {
        return (
            <div className="mt-28 text-center">
                <p className="text-2xl font-bold">{t("no-content")}</p>
            </div>
        );
    }


    return (
        <div>
            <div >
                {subTabs}
            </div>
            <ItemGrid.Grid>
                {data.pages &&
                    data.pages.map((value) =>
                        value.map((value, index) => (
                            <LazyElement
                                key={index}
                                placeholder={<div className="h-32"></div>}
                            >
                                {
                                !extension.postOnlyOne && <Link 
                                    href={{
                                        pathname: "/detail",
                                        query: {
                                            pkg: extension.package,
                                            url: value.url,
                                            cover: value.cover
                                        }
                                    }}
                                    className="h-full w-full"
                                >
                                    <ItemGrid.Fragment
                                        itemData={value}
                                    ></ItemGrid.Fragment>
                                </Link>
                                }
                                {extension.postOnlyOne &&
                                <div
                                    onClick={() => {window.open(value.url, '_blank', 'noopener,noreferrer')}}
                                >
                                    <ItemGrid.Fragment
                                        itemData={value}
                                    ></ItemGrid.Fragment>
                                </div>
                                }
                            </LazyElement>
                        ))
                    )}
            </ItemGrid.Grid>
            {data.pages[data.pages.length - 1].length === 0 && (
                <div className="m-6 text-center">
                    <p className="text-1xl font-bold">{t("no-more-content")}</p>
                </div>
            )}
            <ErrorView error={error} />
            <div className="text-center">
                {hasNextPage && (
                    <Button className="m-4" onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? t("loading") : t("more")}
                    </Button>
                )}
            </div>
        </div>
    );
}
