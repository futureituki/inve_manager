import axios from 'axios'
import { useRouter } from 'next/router'

export const Logout = () => {
  const router = useRouter()
  const logout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
      router.push('/login')
      console.log('logout')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <button
      className='bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      type='button'
      onClick={logout}
    >
      ログアウト
    </button>
  )
}
