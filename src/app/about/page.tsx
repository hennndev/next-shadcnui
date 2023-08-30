import React from 'react'
import { getData } from '@/lib/data'

export const metadata = {
  title: "About"
}

const About = async () => {

  const data = await getData("about", "about_data1")

  return (
    <section className="flex-1 pb-20 prose prose-xl prose-slate dark:prose-invert">
      <article className="text-base">
        {data.content}
      </article>
    </section>
  )
}

export default About