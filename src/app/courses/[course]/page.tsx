import React from 'react'
import Posts from '@/components/posts/posts'
import { getPostMeta, getPostsMeta } from '@/lib/posts'


export function generateStaticParams() {
  const coursesMeta = getPostsMeta()
  return coursesMeta.map(course => ({
    course: course.dir
  }))
}
export function generateMetadata({params: {course}}: {params: {course: string}}) {
  const coursesMeta = getPostsMeta()
  const courseMeta = coursesMeta.find(meta => meta.dir === course)
  if(!courseMeta) {
    return {
      title: 'Post Not Found'
    }
  }
  return {
    title: courseMeta.dir
  }
}
const Course = ({params: {course}}: {params: {course: string}}) => {
  const courseData = getPostMeta(course)
  return (
    <div className="lg:flex-1 py-5">
      <h1 className="font-bold text-2xl lg:text-3xl">#{course}</h1>
      <div className="mt-10">
        <Posts courseData={courseData}/>
      </div>
    </div>
  )
}

export default Course