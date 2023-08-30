import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import rehypeSlug from 'rehype-slug'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from  'rehype-highlight/lib'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'

const cwd = path.join(process.cwd(), "src", "static_posts")

export async function getPost(folder: string, file: string) {
  const filePath = path.join(cwd, folder, `${file}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { frontmatter, content } = await compileMDX<{
    title: string,
    date: Date,
    author: string
  }>({
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
  const blogPostWithHTML: BlogPost = {
    meta: {
      id: file,
      title: frontmatter.title,
      date: frontmatter.date,
      author: frontmatter.author
    },
    content,
  }
  return blogPostWithHTML
}

export function getPostsMeta() {
  const posstDir = fs.readdirSync(cwd)
  return posstDir.map(dir => ({dir: dir}))
}


export function getPostModulMeta() {
  
}

export function getPostMeta(folderName: string): BlogTypes[] | undefined {
  const folderPath = path.join(cwd, folderName)

  if(!fs.existsSync(folderPath)) return undefined
  const fileNames = fs.readdirSync(folderPath)
  
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '')
    const filePath = path.join(folderPath, fileName)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const matterResult = matter(fileContents)
    
    const post: BlogTypes = {
      id, 
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author
    }
    return post
  })
}