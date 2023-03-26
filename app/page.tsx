'use client';

import React, { useRef, useState } from 'react'
import styles from './page.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import { Controller } from 'react-spring';

interface IParallax {
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

interface IParallaxLayer {
  horizontal: boolean
  sticky: StickyConfig
  isSticky: boolean
  setHeight(height: number, immediate?: boolean): void
  setPosition(height: number, scrollTop: number, immediate?: boolean): void
}

export default function Home() {
  const parallax = useRef<IParallax>(null!)
  const [height, setHeight] = useState(0)
  const [position, setPosition] = useState(0)

  return (
    <main className={styles.main}>
      <Parallax ref={parallax} pages={3}>
        <Hero />
        <ParallaxLayer offset={0} speed={0} style={{ top: '180'}}>
          <About />
          <Features />
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}
