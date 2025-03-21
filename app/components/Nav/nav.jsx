'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'nextra-theme-docs'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { SiApachemaven, SiDocker, SiFiles, SiPrometheus, SiServerfault } from "react-icons/si";
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import 'tailwindcss'
import ThemeToggle from '../ThemeChanger/changer'
const products = [
  { name: 'MAVEN', description: 'My Maven Repository', href: 'https://repo.kurok1.top', icon: SiApachemaven },
  { name: 'Docker Registry', description: 'My Docker Registry', href: 'https://registry.kurok1.top', icon: SiDocker },
  { name: 'FileManager', description: 'My Disk', href: 'https://files.kurok1.top', icon: SiFiles },
  { name: 'Prometheus', description: 'Monitor My Server', href: 'https://prometheus.kurok1.top', icon: SiPrometheus },
  { name: 'Nacos', description: 'My Local Nacos Server', href: 'https://nacos.kurok1.top', icon: SiServerfault }
]

export default function NavPage() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // 在组件挂载前返回一个空的占位结构，避免闪烁
  if (!mounted) {
    return (
      <header className="z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          {/* 最小占位内容 */}
        </nav>
      </header>
    )
  }
  const isDarkMode = resolvedTheme === 'dark'

  return (
    <header className={`${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-900'} z-50`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Kuroky Han</span>
            <img
              alt=""
              src={`${isDarkMode ? '/it-dark.svg' : '/it.svg'}`}
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 z-50"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="flex lg:hidden">
          <button className="text-sm/6 font-semibold">
            <ThemeToggle />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton
              className="flex items-center gap-x-1 text-sm/6 font-semibold z-50"
            >
              Tools
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none" />
            </PopoverButton>

            <PopoverPanel
              transition
              className={`${isDarkMode ? 'bg-black' : 'bg-white'}` + " absolute top-full -left-8 z-100 mt-3 w-screen max-w-md overflow-hidden rounded-3xl ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"}
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className={"group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 " + `${isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"}`}
                  >
                    <div className={"flex size-11 flex-none items-center justify-center rounded-lg " + `${isDarkMode ? 'bg-gray-600 group-hover:bg-black' : "bg-gray-200 group-hover:bg-white"}`}>
                      <item.icon aria-hidden="true" className="size-6 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} target="_blank" className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 ">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div> */}
            </PopoverPanel>
          </Popover>

          <a href="/docs" className="text-sm/6 font-semibold">
            Documents
          </a>
          <a href="/about" className="text-sm/6 font-semibold">
            About Me
          </a>
          <button className="text-sm/6 font-semibold">
            <ThemeToggle />
          </button>
        </PopoverGroup>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className={'fixed inset-0 z-100'} />
        <DialogPanel className={"fixed inset-y-0 right-0 z-100 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 " + `${isDarkMode ? 'bg-black' : 'bg-white '}`}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={`${isDarkMode ? '/it-dark.svg' : '/it.svg'}`}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
            <button className="text-sm/6 font-semibold">
              <ThemeToggle />
            </button>
          </div>
          <div className={"mt-6 flow-root " + `${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-900'}`}>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className={"group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold " + `${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
                    Tools
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        target="_blank"
                        href={item.href}
                        className={"block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold " + `${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
                      >
                        <item.icon aria-hidden="true" className="size-6 group-hover:text-indigo-600" />
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/docs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  Documents
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50"
                >
                  About Me
                </a>
              </div>
            </div>
          </div>

        </DialogPanel>
      </Dialog>
    </header>
  )
}