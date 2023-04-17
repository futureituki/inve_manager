import { CurrentMonth } from "@/components/date"
import { Header } from "@/components/header"
import { BasicTables } from "@/components/table"
import { Task } from "@prisma/client"
import { FC } from "react"
import { TotalBenefitArea } from "../presenter/totalBenefitArea"
import { TableArea } from "../presenter/tableArea"

type Props = {
  tasks:Task[]
}
export const HomeContainer:FC<Props> = ({ tasks }) => {
  return (
    <>
      <Header />
      <CurrentMonth/>
      <TableArea tasks={tasks}/>
      <TotalBenefitArea tasks={tasks}/>
    </>
  )
}