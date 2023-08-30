import React from 'react'
import { ScrollArea } from '../ui/scroll-area'

const Sidebar = () => {
  return (
    <aside className="hidden lg:block sticky overflow-y-scroll scrollbar-hide top-0 w-[200px] py-5 mr-5">
      <div className="relative ">
        <div className="flex flex-col">
          <div className="flex flex-col mb-10">
            <h1 className="font-semibold mb-4">Programming</h1>
            <div className="flex flex-col space-y-4">
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Javascript</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">ReactJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">NextJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">NodeJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Java</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold mb-4">Courses</h1>
            <div className="flex flex-col space-y-4">
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Struktur data</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Sistem operasi</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Algoritma pemrograman</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Basis data</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Java</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar