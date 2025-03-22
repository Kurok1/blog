import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import React from "react";
import {LinkProps} from "@/app/types/Link";


const DropItemLink: React.FC<LinkProps> = (prop) => {
    const isDarkMode : boolean = prop.theme === 'dark';
    console.log(prop)
    return (
        <Popover className="relative">
            <PopoverButton
                className="flex items-center gap-x-1 text-sm/6 font-propo z-50"
            >
                {prop.title}
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none" />
            </PopoverButton>

            <PopoverPanel
                transition
                className={`${isDarkMode ? 'bg-black' : 'bg-white'}` + " absolute top-full -left-8 z-100 mt-3 w-screen max-w-md overflow-hidden rounded-3xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"}
            >
                <div className="p-4">
                    {prop.data?.map((item) => (
                        <div
                            key={item.name}
                            className={"group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 " + `${isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}
                        >
                            {
                                item.icon ? (<div className={"flex size-11 flex-none items-center justify-center rounded-lg " + `${isDarkMode ? 'bg-gray-600 group-hover:bg-black' : "bg-gray-200 group-hover:bg-white"}`}>
                                    <item.icon aria-hidden="true" className="size-6 group-hover:text-indigo-600" />
                                </div>) : ''
                            }
                            <div className="flex-auto">
                                <a href={item.href} target={item.target} className="block font-propo">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                </a>
                                {item.description ? (
                                    <p className="mt-1 ">{item.description}</p>
                                ) : ''}

                            </div>
                        </div>
                    ))}
                </div>
            </PopoverPanel>
        </Popover>
    )
}

export default DropItemLink;