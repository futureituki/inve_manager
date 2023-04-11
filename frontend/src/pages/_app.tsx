import '@/styles/globals.css'
import axios from 'axios'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.withCredentials = true
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/csrf`)
      axios.defaults.headers.common['csrf-token'] = data.csrfToken
      console.log(data)
    }
    getCsrfToken()
  }, [])
  return <Component {...pageProps} />
}
