import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const test = async() => {
      await fetch('/').then((d) => {
        console.log(`${d}成功`)
      })
    }
    test()
  },[])
  return (
    <div>
      投資管理アプリです
    </div>
  )
}
