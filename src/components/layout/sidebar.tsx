"use client"
import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {

  const pathname = usePathname()
  const currentPath = pathname.split("/")[2]

  return (
    <aside className="hidden lg:block sticky overflow-y-scroll scrollbar-hide top-0 w-[200px] py-5 mr-5">
      <div className="flex flex-col">
        <div className="flex flex-col mb-10">
          <h1 className="font-semibold mb-4">Pengantar</h1>
          <div className="flex flex-col space-y-4">
            <Link href="/about" className={`${currentPath === "about" ? "" : "text-gray-600 dark:text-gray-400"} text-[15px] font-medium`}>
              About
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold mb-4">Courses</h1>
          <div className="flex flex-col space-y-4">
            <Link href="/courses/struktur_data" className={`${currentPath === "struktur_data" ? "" : "text-gray-600 dark:text-gray-400"} text-[15px] font-medium`}>
              Struktur Data
            </Link>
            <Link href="/courses/algoritma_pemrograman" className={`${currentPath === "algoritma_pemrograman" ? "" : "text-gray-600 dark:text-gray-400"} text-[15px] font-medium`}>
              Algoritma Pemrograman
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar