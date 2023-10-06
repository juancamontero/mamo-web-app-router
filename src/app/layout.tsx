import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/header"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MAMMO - Nanofortalecimiento",
  description: "Nano-fortalecimiento empresarial",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: ['/og-image.webp']
  }
}

const bodyBasicStyle: string = `${inter.className} bg-bg-300`
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bodyBasicStyle}>
        {/*  */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
