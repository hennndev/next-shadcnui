import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: "Home"
}

const Home = () => {
  return (
      <div className="flex-1 py-5">
        <h1>Home</h1>
      </div>
  )
}

export default Home