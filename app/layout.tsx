import './globals.css'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'


export const metadata = {
  title: 'Sofia AI',
  description: 'Partnered up with Chat GPT API to create your virtual best-friend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>    
      <Hero />
      </body>
    </html>
  )
}
