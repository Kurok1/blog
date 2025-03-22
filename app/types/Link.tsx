

interface LinkProps {
    title: string;
    theme: string | undefined;
    data: Array<LinkItemProps>
}

interface LinkItemProps {
    name: string,
    description: string,
    href: string,
    icon: any,
    target: string
}

export type {
    LinkProps,
    LinkItemProps
}