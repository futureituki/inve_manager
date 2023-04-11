import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Wrapper: FC<Props> = ({ children }) => {
  return <div className='w-full max-w-md m-auto h-screen grid items-center'>{children}</div>
}
