'use client';

import './globals.css'
// import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
// import Hero from '../components/Hero'
// import About from '../components/About'
// import Features from '../components/Features'
import Home from './page';


export default function RootLayout({
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
        <Home />
      </body>
    </html >
  )
}
