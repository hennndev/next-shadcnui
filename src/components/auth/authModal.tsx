"use client"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { UserCircle } from 'lucide-react'
import LoginForm from "./loginForm"
import SignupForm from "./signupForm"
import { Button } from "../ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"


export function AuthModal() {
  const [isSignup, setIsSignup] = useState<boolean>(false)
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mr-1 border-none" size="icon">
          <UserCircle className="w-[1.2rem] h-[1.2rem]"/>
        </Button>
      </DialogTrigger>
        <DialogContent className="max-[320px]:w-[290px] max-[350px]:w-[320px] min-[350px]:max-w-[350px] min-[400px]:max-w-[400px] px-0">
          <ScrollArea className="w-full max-h-[600px] px-7">
            <DialogHeader>
              <DialogTitle>{isSignup ? "Signup" : "Login"}</DialogTitle>
              <DialogDescription>
                {isSignup ? "Buat akun dengan personal detail anda." : "Login menggunakan personal detail anda."}
              </DialogDescription>
            </DialogHeader>
            {isSignup ? <SignupForm handleChangeLogin={() => setIsSignup(false)}/> : <LoginForm handleChangeSignup={() => setIsSignup(true)}/>}
          </ScrollArea>
        </DialogContent>
    </Dialog>
  )
}
