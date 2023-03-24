import './globals.css'
import { ParallexProvider, Parallax } from 'react-scroll-parallax'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'

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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@300&family=K2D:wght@100&family=Orbitron&display=swap" rel="stylesheet" ></link>
      </head>
      <body>
        <ParallexProvider>
          <Hero />
          <About />
          <Features />
        </ParallexProvider>
      </body>
    </html >
  )
}
