import { ReactNode, FC } from 'react'

type Props = {
  children: ReactNode
}
export const IconWrapper: FC<Props> = ({ children }) => {
  return <div className='text-xl m-2 p-2'>{children}</div>
}
