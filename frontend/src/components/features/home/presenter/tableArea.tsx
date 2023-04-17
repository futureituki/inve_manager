import { BasicTables } from "@/components/table"
import { Task } from "@prisma/client"
import { FC } from "react"

type Props = {
  tasks:Task[]
}
export const TableArea:FC<Props> = ({ tasks }) => {
  return (
    <div className="mt-10 grid place-items-center">
      <BasicTables tasks={tasks} />
    </div>
  )
}