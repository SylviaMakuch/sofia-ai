'use client';

import React, { useRef } from 'react'
import styles from './page.module.css'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'

interface IParallax {
  config: ConfigProp
  horizontal: boolean
  busy: boolean
  space: number
  offset: number
  current: number
  controller: Controller<{ scroll: number }>
  layers: Set<IParallaxLayer>
  container: React.MutableRefObject<any>
  content: React.MutableRefObject<any>
  scrollTo(offset: number): void
  update(): void
  stop(): void
}

export default function Home() {
  const parallax = useRef<IParallax>(null!)
  return (
    <main className={styles.main}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={1} speed={1} >
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} >
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} >
          <Features />
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}
