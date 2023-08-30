import React from 'react'
import { getPost } from '@/lib/posts'
import 'highlight.js/styles/github-dark.css'


export async function generateMetadata({params: {courseModul}}: {params: {courseModul: string}}) {
  const folderContent = courseModul.split("-")[0]
  const modulData = await getPost(folderContent, courseModul)

  return {
    title: modulData.meta.title
  }
}

const CourseModul = async ({params: {courseModul}}: {params: {courseModul: string}}) => {
  const folderContent = courseModul.split("-")[0]
  const modulData = await getPost(folderContent, courseModul)

  return (
    <section className="flex-1 pb-20 prose prose-xl prose-slate dark:prose-invert">
      <article className="text-base">
        {modulData.content}
      </article>
    </section>
  )
}

export default CourseModul