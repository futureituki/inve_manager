import { Inter } from 'next/font/google'
import useSWR from 'swr'
import { HomeContainer } from '@/components/features/home/container'
import { fetcher } from '@/lib/swr'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {
    data: task,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/task`, fetcher)
  if (isLoading) return <>Loading</>
  console.log(task)
  return (
    <>
      <HomeContainer tasks={task} />
      <div className='mt-10 grid place-items-center'></div>
    </>
  )
}
