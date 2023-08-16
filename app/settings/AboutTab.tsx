"use client";
import Logo from "@/components/Logo";
import packageInfo from "../../package.json";
import { useTranslation } from "@/app/i18n";

export default function AboutTab() {
    const { t } = useTranslation("settings");
    return (
        <div className="prose dark:text-white">
            <Logo />
            <p>
                {t("about.cuurent-version")} {packageInfo.version}
            </p>
            <p>
                {t("about.open-source")}
                <a
                    href="https://github.com/janxland/LuminaryLore"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
            </p>
            <p>
                本项目灵感来自{" "}
                <a
                    href="https://tachiyomi.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    tachiyomi
                </a>
            </p>
            <p>✨支持页面样式、插件、仓库定制</p>
            <p>🎃支持本地部署</p>
            <p>🧵支持在云服务器部署</p>
            <p><a href="tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=983341575" target="_blank">点击联系我</a></p>
            <a href="https://qr.alipay.com/fkx10350np9rne4xxo5zz80" target="_blank">
                <img src="https://mybox-1257251314.cos.ap-chengdu.myqcloud.com/pic-upload/code1000X1000.png" width="300px" alt="赞赏一下吧~~~" />
            </a>
        </div>
    );
}
