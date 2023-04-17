import { HomeContainer } from '@/components/features/home/container'
import { BasicTables } from '@/components/table'
import { fetcher } from '@/lib/swr'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import useSWR from 'swr'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {
    data: task,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/task`, fetcher)
  if(isLoading) return <>Loading</>
  console.log(task)
  return (
    <>
      <HomeContainer tasks={task}/>
      <div className='mt-10 grid place-items-center'>
      </div>
    </>
  )
}
