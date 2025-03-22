/* eslint-env node */
import { Layout} from 'nextra-theme-docs'
import NavPage from './components/Nav/nav'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import 'tailwindcss'


export const metadata = {
  metadataBase: new URL('https://kurok1.top'),
  title: {
    template: '%s'
  },
  description: 'Kuroky Han\'s WebSite',
  applicationName: 'Kuroky Han\'s WebSite',
  generator: 'Next.js',
  appleWebApp: {
    title: 'NeKuroky Han\'s WebSite'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  }
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<div></div>}
          navbar={<NavPage />}
          footer={<div></div>}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          feedback={{content: null}}
          editLink={null}
          navigation={false}
        >
          <div  className="font-propo relative isolate px-6 pt-14 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr  from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            {children}
          </div>


        </Layout>
      </body>
    </html>
  )
}