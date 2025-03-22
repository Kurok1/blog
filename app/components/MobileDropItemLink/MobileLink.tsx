import {LinkProps} from "@/app/types/Link";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import React from "react";

const MobileLink : React.FC<LinkProps> = (props) => {
    const isDarkMode : boolean = props.theme === 'dark';
    return (
        <Disclosure as="div" className="-mx-3">
            <DisclosureButton className={"group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-propo " + `${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
                {props.title}
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
                {props.data?.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        target={item.target}
                        href={item.href}
                        className={"block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-propo " + `${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
                    >
                        {
                            item.icon ? (<item.icon aria-hidden="true" className="size-6 group-hover:text-indigo-600" />) : ""
                        }

                        {item.name}
                    </DisclosureButton>
                ))}
            </DisclosurePanel>
        </Disclosure>
    )
}

export default MobileLink;