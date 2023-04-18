import { FC } from 'react'

type Props = {
  sign?: boolean
  isLoading: boolean
}
export const ButtonArea: FC<Props> = ({ sign, isLoading }) => {
  return (
    <div className='flex items-center justify-between'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        type='submit'
      >
        {isLoading ? <span>Loading...</span> : sign ? <span>Sign up</span> : <span>Sign In</span>}
      </button>
      {sign ? (
        ''
      ) : (
        <a
          className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
          href='#'
        >
          <span>forgot Password?</span>
        </a>
      )}
    </div>
  )
}
