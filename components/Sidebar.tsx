import { useTranslation } from "@/app/i18n";
import clsx from "clsx";
import {
    Home as IconHome,
    LayoutGrid as IconExtension,
    Search as IconSearh,
    Settings as IconSettings,
    ChevronDown,
    ChevronUp
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useState } from "react";
import { useSnackbar } from "notistack";
let firstEnter = true
export default function Sidebar() {
    const path = usePathname() as string;
    const { t } = useTranslation("sidebar");
    const { enqueueSnackbar } = useSnackbar();
    if(firstEnter) enqueueSnackbar("欢迎来到Lumos，本站不预先添加扩展", { variant: "info" }),enqueueSnackbar("请自行到扩展里添加哦~", { variant: "info" }) ,enqueueSnackbar("推荐挂梯子访问~", { variant: "info" }) ,firstEnter = false;
    const menu = [
        {
            title: t("home"),
            path: "/",
            icon: IconHome,
        },
        {
            title: t("search"),
            path: "/search",
            icon: IconSearh,
        },
        {
            title: t("extensions"),
            path: "/extension",
            icon: IconExtension,
        },
        {
            title: t("settings"),
            path: "/settings",
            icon: IconSettings,
        },
    ];
    const baseClassNames = clsx(
        "flex-col w-20 h-20 lg:h-auto lg:w-auto lg:flex-row items-center cursor-pointer lg:mb-2 p-4 rounded-3xl flex "
    );
    const [Cheveron,setCheveron] = useState(false);
    return (
        <>
            <div className="fixed right-0 left-0 bottom-0 z-50 overflow-auto bg-slate-100 bg-opacity-80 p-2 backdrop-blur transition-all dark:bg-black dark:bg-opacity-80 dark:backdrop-blur lg:left-0 lg:top-0 lg:w-230px lg:p-5">
                <div className="mb-6 ml-4 hidden lg:block">
                   <a href="https://www.roginx.ink" target="_blank"><Logo /></a>
                </div>
                <ul className="flex justify-center lg:block">
                    {menu.map((item, i) => (
                        <li key={i}>
                            <Link
                                href={item.path}
                                className={
                                    path === item.path
                                        ? clsx(
                                              baseClassNames,
                                              "bg-black text-white ring-4 ring-gray-300 dark:bg-zinc-700 dark:text-white"
                                          )
                                        : clsx(
                                              baseClassNames,
                                              "hover:opacity-50"
                                          )
                                }
                            >
                                <item.icon
                                    className={clsx(
                                        "mb-1 lg:mr-2 lg:mb-0",
                                        { "text-white ": path === item.path },
                                        {}
                                    )}
                                    width={24}
                                />
                                <div className="text-sm lg:text-lg">
                                    {item.title}
                                </div>
                            </Link>
                        </li>
                    ))}
                    <li onClick={()=>setCheveron(!Cheveron)}>
                        <div
                        className={clsx(
                            baseClassNames,
                            "hover:opacity-50 "
                        )}>
                            <ChevronUp 
                                className={clsx(
                                    "mb-1 lg:mr-2 lg:mb-0",
                                    {"hidden":Cheveron}
                                )}
                                width={24}
                            />
                            <ChevronDown 
                                className={clsx(
                                    "mb-1 lg:mr-2 lg:mb-0",
                                    {"hidden":!Cheveron},
                                )}
                                width={24}
                            />
                            <div className="text-sm lg:text-lg">
                                展开
                            </div>
                        </div>
                    </li>
                </ul>
                <img src="https://mybox-1257251314.cos.ap-chengdu.myqcloud.com/pic-upload/code400x400.png"  
                    className={clsx(
                        "block",
                        {"h-0":!Cheveron}
                    )} alt="" />
            </div>
        </>
    );
}
