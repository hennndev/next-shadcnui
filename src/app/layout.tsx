import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/layout/navbar'
import Sidebar from '@/components/layout/sidebar'
import { ThemeProvider } from "@/components/theme-provider" 



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem>
          <main className="flex flex-col h-screen">
            <Navbar/>
            <section className="px-5">
              <div className="lg:flex container">
                <Sidebar/>
                {children}
              </div>
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}




