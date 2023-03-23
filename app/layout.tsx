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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300&family=Orbitron&display=swap" rel="stylesheet" ></link>
      </head>
      <body>
        <Hero />
      </body>
    </html>
  )
}
