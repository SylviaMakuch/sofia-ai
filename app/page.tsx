import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<main>
  <div>
    <h1> Sofia AI</h1>
    <p>Partnered up with Chat GPT API to create your virtual best-friend</p>
  </div>
</main>
  )
};