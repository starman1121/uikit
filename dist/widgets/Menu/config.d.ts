import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: ({
    label: string;
    icon: string;
    href: string;
    status?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    status: LinkStatus;
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const MENU_HEIGHT = 90;
export declare const SUBNAV_LINK_HEIGHT = 36;
export declare const MENU_ENTRY_HEIGHT = 54;
export declare const SIDEBAR_WIDTH_FULL = 250;
export declare const SIDEBAR_WIDTH_REDUCED = 0;
