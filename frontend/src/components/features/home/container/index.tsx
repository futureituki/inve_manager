import { Task } from '@prisma/client'
import { addMonths, format } from 'date-fns'
import { FC } from 'react'
import { CurrentMonth } from '@/components/features/home/presenter/date'
import { TableArea } from '@/components/features/home/presenter/tableArea'
import { TotalBenefitArea } from '@/components/features/home/presenter/totalBenefitArea'
import { Header } from '@/components/header'

type Props = {
  tasks: Task[]
  setStateAction: (state: string) => void
  state: string
}
export const HomeContainer: FC<Props> = ({ tasks, setStateAction, state }) => {
  const NextMonth = () => {
    setStateAction(format(addMonths(new Date(state), 1), 'yyyy-MM'))
  }
  const PrevMonth = () => {
    setStateAction(format(addMonths(new Date(state), -1), 'yyyy-MM'))
  }
  return (
    <>
      <Header />
      <button onClick={PrevMonth}>Prev</button>
      <button onClick={NextMonth}>Next</button>
      <CurrentMonth currentMonth={state} />
      <TableArea tasks={tasks} />
      <TotalBenefitArea tasks={tasks} />
    </>
  )
}
