import { IconWrapper } from '@/components/icon'
import { HomeIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  return (
    <header>
      <IconWrapper>
        <a href='/'>
          <HomeIcon className='h-8 w-8' />
        </a>
        <a href='/task'>
          <p className='bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 w-fit'>
            取引を作成する
          </p>
        </a>
      </IconWrapper>
    </header>
  )
}
