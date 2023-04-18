import { FC } from 'react'

type Props = {
  currentMonth: string
}
export const CurrentMonth: FC<Props> = ({ currentMonth }) => {
  return <div className='text-center text-4xl'>{currentMonth}月</div>
}
