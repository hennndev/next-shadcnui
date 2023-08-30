import React from 'react'
import Post from './post'
type PropsTypes = {
  courseData: BlogTypes[]
}

const Posts = ({courseData}: PropsTypes) => {
  // console.log(courseData)
  return (
    <div className="flex flex-col space-y-7">
      {courseData.map(modul => (
        <Post key={modul.id} blog={modul}/>
      ))}
    </div>
  )
}

export default Posts