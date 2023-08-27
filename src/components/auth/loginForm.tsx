import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

type PropsTypes = {
  handleChangeSignup: () => void
}

type ValuesTypes = {
  email: string
  password: string
}
const LoginForm = ({handleChangeSignup}: PropsTypes) => {

  const { register, formState: {errors}, handleSubmit } = useForm<ValuesTypes>()

  const onSubmit = (data: ValuesTypes) => {
    console.log(data)
  }

  return (
    <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-3">
        <Label htmlFor="email" className="mb-3">
          Email
        </Label>
        <Input 
          id="email"
          {...register("email", {
            required: "Kolom email tidak boleh kosong!",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Email tidak valid!"
            }
          })}
          placeholder="Masukan email kamu"/>
        {errors.email?.message ? <p className="text-destructive mt-1 text-sm font-medium">{errors.email?.message}</p> : null}
      </div>
      <div className="flex flex-col">
        <Label htmlFor="password" className="mb-3">
          Password
        </Label>
        <Input id="password" 
          {...register("password", {
            required: "Kolom password tidak boleh kosong!",
            minLength: {
              value: 7,
              message: "Minimal panjang password adalah 7 karakter atau lebih!"
            }
          })}
          placeholder="Masukan password kamu"/>
        {errors.password?.message ? <p className="text-destructive mt-1 text-sm font-medium">{errors.password?.message}</p> : null}
      </div>
      <div className="mt-3">
        <Button type="submit" className="w-full">Submit</Button>
        <Button type="button" variant={"destructive"} className="w-full mt-2">
          Sign in with Google
        </Button>
      </div>
      <div className="mt-2">
        <p className="text-center text-sm">Belum punya akun? <span onClick={handleChangeSignup} className="text-blue-700 font-semibold hover:underline cursor-pointer">Signup</span></p>
      </div>
    </form>
  )
}

export default LoginForm