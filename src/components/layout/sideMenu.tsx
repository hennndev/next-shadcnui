"use client"
import { MutableRefObject, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "../ui/scroll-area"
import Link from "next/link"
import { ChevronLeftCircle } from "lucide-react"
import { usePathname } from "next/navigation"

export default function SideMenu() {

  const pathname = usePathname()
  const currentPath = pathname.split("/")[2]
  const btnRef = useRef<HTMLButtonElement | null>(null)

  const handleClose = () => {
    btnRef.current?.click()
  }

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
          <div className="flex flex-col">
            <h1 className="font-semibold mb-4">Courses</h1>
            <div className="flex flex-col space-y-3">
              <Link onClick={handleClose} href="/courses/struktur_data" className={`${currentPath === "struktur_data" ? "" : "text-gray-600 dark:text-gray-400"} text-[15px] font-medium`}>
                Struktur Data
              </Link>
              <Link onClick={handleClose} href="/courses/algoritma_pemrograman" className={`${currentPath === "algoritma_pemrograman" ? "" : "text-gray-600 dark:text-gray-400"} text-[15px] font-medium`}>
                Algoritma Pemrograman
              </Link>
            </div>
          </div>
        </div>
        <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" ref={btnRef} className="hidden">Save changes</Button>
            </SheetClose>
          </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
