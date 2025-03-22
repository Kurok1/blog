import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
export const generateStaticParams = generateStaticParamsFor('mdxPath')

const Wrapper = getMDXComponents().wrapper

export default async function Page({params,}: {params : Promise<{mdxPath: string[]}>})  {
  let p = await params
  
  //let mdxPath = ['my'].concat(params.mdxPath)
  let mdxPath : string[] = p.mdxPath
  const result = await importPage(mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
      <section className="font-lxgw">
        <Wrapper toc={toc} metadata={metadata}>
          <MDXContent {...{params}} params={{params}} />
        </Wrapper>
      </section>

  )
}