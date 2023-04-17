import { Task } from '@prisma/client'
import { FC } from 'react'
import { BasicTables } from '@/components/table'

type Props = {
  tasks: Task[]
}
export const TableArea: FC<Props> = ({ tasks }) => {
  return (
    <div className='mt-10 grid place-items-center'>
      <BasicTables tasks={tasks} />
    </div>
  )
}
