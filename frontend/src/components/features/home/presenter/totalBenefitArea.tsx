import { Task } from '@prisma/client'
import { FC } from 'react'
import { benefit, totalBenefit } from '@/lib/calculation'

type Props = {
  tasks: Task[]
}
export const TotalBenefitArea: FC<Props> = ({ tasks }) => {
  const benefitArr: number[] = []
  tasks.map((task: Task) => benefitArr.push(benefit(task.capital, task.rate)))
  const MonthTotalBenefit = totalBenefit(benefitArr)
  return <div className='mt-10 grid place-items-center text-3xl'>利益{MonthTotalBenefit}万円</div>
}
