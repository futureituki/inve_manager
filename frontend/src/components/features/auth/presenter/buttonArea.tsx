export const ButtonArea = () => {
  return (
    <div className='flex items-center justify-between'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        type='submit'
      >
        Sign In
      </button>
      <a
        className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
        href='#'
      >
        forgot Password?
      </a>
    </div>
  )
}
