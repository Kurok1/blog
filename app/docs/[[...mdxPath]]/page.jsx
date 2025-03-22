import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  // let mdxPath = ['my'].concat(params.mdxPath)
  let mdxPath = params.mdxPath
  const { metadata } = await importPage(mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  let params = await props.params
  
  //let mdxPath = ['my'].concat(params.mdxPath)
  let mdxPath = params.mdxPath
  const result = await importPage(mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
      <section className="font-lxgw">
        <Wrapper toc={toc} metadata={metadata}>
          <MDXContent {...props} params={params} />
        </Wrapper>
      </section>

  )
}