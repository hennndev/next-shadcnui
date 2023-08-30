"use client"
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

type PropsTypes = {
  blog: BlogTypes
}

const Post = ({blog}: PropsTypes) => {
  const router = useRouter()
  const pathname = usePathname()
  
  return (
    <div className="group cursor-pointer w-max" onClick={() => router.push(`${pathname}/${blog.id}`)}>
      <h2 className="text-xl font-semibold mb-3 group-hover:underline group-hover:text-blue-600">{blog.title}</h2>
      <p className="mb-1 dark:text-gray-400 font-medium">Author: {blog.author}</p>
      {/* <p className="dark:text-gray-400 text-sm">{new Date(blog.date).toLocaleDateString()}</p> */}
    </div>
  )
}

export default Post