import React from 'react'
import { ModeToggle } from '../ui/modeToggle'
import { AuthModal } from '../auth/authModal'
import { Input } from '../ui/input'
import { Search, ChevronLeftCircle } from "lucide-react"
import { Button } from '../ui/button'
import { Sidebar } from './sidebar'

const Navbar = () => {
  return (
    <header className="border-b dark:border-gray-800 border-gray-200 py-3">
      <div className="container px-3 flex-between">
        <div className="flexx flex-1 md:flex-[0.8] lg:hidden">
          <Sidebar/>
          <div className="flexx flex-1 mr-5 border border-input rounded-md px-3 dark:hover:bg-gray-900 hover:bg-gray-100 cursor-pointer">
            <Search className="mr-2 cursor-pointer w-[1.2rem] h-[1.2rem]"/>
            <Input placeholder="Search courses..." className="border-none flex-1 outline-none bg-transparent"/>
          </div>
        </div>
        <div className="lg:flexx hidden">
          <h1 className="font-extrabold mr-10">SmartCourses</h1>
          <nav className="flexx">
            <p className="font-medium mr-5">Homepage</p>
            <p className="font-medium mr-5">Courses</p>
            <p className="font-medium">Admin</p>
          </nav>
        </div>
        <div className="flexx">
          <div className="hidden lg:flexx flex-1 mr-5 border border-input rounded-md px-3 dark:hover:bg-gray-900 hover:bg-gray-100 cursor-pointer">
            <Search className="cursor-pointer w-[1.2rem] h-[1.2rem] mr-2"/>
            <Input placeholder="Search courses..." className="border-none flex-1 outline-none bg-transparent"/>
          </div>
          <AuthModal/>
          <ModeToggle/>
        </div>
      </div>
    </header>
  )
}

export default Navbar