export const fallbackLng = "zh-CN";
export const languages = [fallbackLng, "en"];
export const defaultNS = "common";

export function getOptions(
    lng: string = fallbackLng,
    ns: string[] | string = defaultNS
) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    };
}
