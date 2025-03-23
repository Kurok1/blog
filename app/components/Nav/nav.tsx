'use client'

import React, {useEffect, useState} from 'react'
import {useTheme} from 'nextra-theme-docs'
import {Dialog, DialogPanel, PopoverGroup,} from '@headlessui/react'
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import 'tailwindcss'
import ThemeToggle from '../ThemeChanger/changer'
import DropItemLink from "../DropItemLink/Link";
import MobileLink from "../MobileDropItemLink/MobileLink";
import {POSTS, TOOLS} from "@/app/_data/data"
import Intelligent from '../icons/Intelligent'

const NavPage : React.FC = () => {
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
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
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
          <button className="text-sm/6 font-propo">
            <ThemeToggle />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="https://chat.kurok1.top" target='_blank' className="text-sm/6 font-propo">
            <Intelligent/>
          </a>
          <DropItemLink theme={resolvedTheme} data={TOOLS} title={"Tools"} />
          <a href="/docs" className="text-sm/6 font-propo">
            Documents
          </a>
          <DropItemLink theme={resolvedTheme} data={POSTS} title={"Posts"}/>
          <a href="/about" className="text-sm/6 font-propo">
            About Me
          </a>
          <button className="text-sm/6 font-propo">
            <ThemeToggle />
          </button>
        </PopoverGroup>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className={'fixed inset-0 z-100'} />
        <DialogPanel className={"fixed inset-y-0 right-0 z-100 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 " + `${isDarkMode ? 'bg-black' : 'bg-white '}`}>
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Kuroky Han</span>
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
            <button className="text-sm/6 font-propo">
              <ThemeToggle />
            </button>
          </div>
          <div className={"mt-6 flow-root " + `${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-900'}`}>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <MobileLink theme={resolvedTheme} data={TOOLS} title={"Tools"}/>
                <a
                  href="/docs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-propo hover:bg-gray-50"
                >
                  Documents
                </a>
                <MobileLink theme={resolvedTheme} data={POSTS} title={"Posts"}/>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-propo hover:bg-gray-50"
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

export default NavPage