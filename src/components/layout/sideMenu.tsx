import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "../ui/scroll-area"
import { ChevronLeftCircle } from "lucide-react"

export default function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="mr-1 border-none ">
          <ChevronLeftCircle className="w-[1.2rem] h-[1.2rem]"/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto scrollbar-hide">
        <SheetHeader className="mb-5 text-left">
          <SheetTitle>SmartCourses</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col">
          <div className="flex flex-col mb-5">
            <h1 className="font-semibold mb-4">Navigations</h1>
            <div className="flex flex-col space-y-3">
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Home</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Blogs</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">About</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Dashboard</p>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <h1 className="font-semibold mb-4">Programming</h1>
            <div className="flex flex-col space-y-3">
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Javascript</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">ReactJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">NextJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">NodeJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Java</p>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <h1 className="font-semibold mb-4">Programming</h1>
            <div className="flex flex-col space-y-3">
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Javascript</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">ReactJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">NextJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">NodeJS</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Java</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold mb-4">Courses</h1>
            <div className="flex flex-col space-y-3">
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Struktur data</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Sistem operasi</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Algoritma pemrograman</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Basis data</p>
              <p className="text-[15px] text-gray-600 dark:text-gray-500">Java</p>
            </div>
          </div>
        </div>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
