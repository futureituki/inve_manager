import { HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { IconWrapper } from '@/components/icon'

export const Header = () => {
  return (
    <header>
      <IconWrapper>
        <Link href="/">
            <HomeIcon className='h-8 w-8' />
        </Link>
        <Link href="/task">
            <p className='bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 w-fit'>
              取引を作成する
            </p>
        </Link>
      </IconWrapper>
    </header>
  )
}
