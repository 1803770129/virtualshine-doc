import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Highlighter from '../../components/HightLighter/HightLighter'
import Button from '../../components/Button';
import MathTax from '../../components/MathTax/MathTax';
import PdfLoader from '../../components/PdfLoader/PdfLoader';
import ContentHighlighter from '../../components/ContentHighlighter/ContentHighlighter';
import QuoteBlock from '../../components/QuoteBlock/QuoteBlock';

const PostPage = (props) => {
  const { frontMatter: { title, author }, mdxSource } = props;
  return (
    <div className="pl-20 pr-500">
      <div className="text-30 font-bold pb-10">{title}</div>
      <div>author：{author}</div>
      <div></div>
      <div className="prose dark:prose-invert max-w-full" style={{color:'white'}}>
        <MDXRemote {...mdxSource} components={{ Button, Highlighter, MathTax, PdfLoader,ContentHighlighter, QuoteBlock }} />
      </div>
    </div>
  )
}
export default PostPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}