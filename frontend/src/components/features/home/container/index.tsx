import { Task } from '@prisma/client'
import { FC } from 'react'
import { CurrentMonth } from '@/components/date'
import { TableArea } from '@/components/features/home/presenter/tableArea'
import { TotalBenefitArea } from '@/components/features/home/presenter/totalBenefitArea'
import { Header } from '@/components/header'

type Props = {
  tasks: Task[]
}
export const HomeContainer: FC<Props> = ({ tasks }) => {
  return (
    <>
      <Header />
      <CurrentMonth />
      <TableArea tasks={tasks} />
      <TotalBenefitArea tasks={tasks} />
    </>
  )
}
