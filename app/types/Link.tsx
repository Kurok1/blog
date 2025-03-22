import {IconType} from "react-icons/lib/iconBase";

interface LinkProps {
    title: string;
    theme: string | undefined;
    data: Array<LinkItemProps>
}

interface LinkItemProps {
    name: string,
    description: string,
    href: string,
    icon: IconType,
    target: string
}

export type {
    LinkProps,
    LinkItemProps
}