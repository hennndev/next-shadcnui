import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import rehypeSlug from 'rehype-slug'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from  'rehype-highlight/lib'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'


const cwd = path.join(process.cwd(), "src", "static_data")

export async function getData(folder: string, file: string) {
  const filePath = path.join(cwd, folder, `${file}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { content } = await compileMDX({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, {
            behavior: 'wrap'
          }], 
        ]
      }
    }
  })
  const dataWithHTML: DataContent = {
    content,
  }
  return dataWithHTML
}