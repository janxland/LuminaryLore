import "@/styles/globals.css";
import RootProvider from "@/app/RootProvider";
import { ReactNode } from "react";

export const metadata = {
    title: "Home | Miru",
};

export default async function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                 <script src="https://hm.baidu.com/hm.js?ed8c9edd6ef38359f7d14669ceff12710" async />

                <script src='https://cdn.staticfile.org/jquery/3.7.0/jquery.min.js' async  />
                <script src='https://cdn.staticfile.org/jszip/3.10.1/jszip.min.js' async  />
                <script src='https://cdn.staticfile.org/crypto-js/4.1.1/crypto-js.min.js' async  />
            </head>
            <body className="dark:bg-black dark:bg-opacity-80 dark:text-white">
                <RootProvider>
                    <div className="ml-0 lg:ml-230px">
                        <div className="m-auto" style={{ maxWidth: "1400px" }}>
                            {children}
                        </div>
                        <div className="h-28 lg:hidden"></div>
                    </div>
                </RootProvider>
                <a title="GDPR-compliant Web Analytics" href="https://clicky.com/101422401"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" /></a>
            </body>
        </html>
    );
}
