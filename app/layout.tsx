import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Fira_Code as Cascadia_Code } from "next/font/google"
import "./globals.css"
import type React from "react"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })
const cascadiaCode = Cascadia_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chiziaruhoma Ogbonda",
  description: "An interactive terminal-style resume",
  icons: {
    icon: '/favicon.png'  // This will look for the image in the public directory
  }
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

