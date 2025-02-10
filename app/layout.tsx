import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Fira_Code as Cascadia_Code } from "next/font/google"
import "./globals.css"
import type React from "react"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })
const cascadiaCode = Cascadia_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chiziaruhoma Ogbonda - Senior Software Engineer",
  description: "Interactive resume of Chiziaruhoma Ogbonda, Senior Software Engineer and Google Developer Expert",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-black font-mono antialiased", cascadiaCode.className)}>{children}</body>
    </html>
  )
}

