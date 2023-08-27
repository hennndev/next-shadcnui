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
import { ChevronLeftCircle } from "lucide-react"

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="mr-1 border-none ">
          <ChevronLeftCircle className="w-[1.2rem] h-[1.2rem]"/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mb-5 text-left">
          <SheetTitle>SmartCourses</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <h2 className="cursor-pointer">Homepage</h2>
          <h2 className="cursor-pointer">Courses</h2>
          <h2 className="cursor-pointer">Admin</h2>
        </div>
        <SheetFooter>
        
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
