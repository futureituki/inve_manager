import { format } from 'date-fns'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { HomeContainer } from '@/components/features/home/container'
import { fetcher } from '@/lib/swr'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [currentMonth, setCurrentMonth] = useState<string>(format(new Date(), 'yyyy-MM'))
  const {
    data: task,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/task/${currentMonth}`, fetcher)
  if (isLoading) return <>Loading</>
  if (error) router.push('/login')
  const isTask = task === undefined ? [] : task
  return (
    <>
      <HomeContainer tasks={isTask} setStateAction={setCurrentMonth} state={currentMonth} />
      <div className='mt-10 grid place-items-center'></div>
    </>
  )
}
