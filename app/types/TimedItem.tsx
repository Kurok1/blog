import * as React from "react";
import {JSX, ReactNode} from "react";


interface TimedItemProps {
    title: string;
    date?: string | undefined;
    position: string;
    content: string | JSX.Element;
    contentStyle: any;
    contentArrowStyle: any;
    iconStyle: any;
    icon?: React.FC | React.ReactElement;
}

export type {
    TimedItemProps,
}