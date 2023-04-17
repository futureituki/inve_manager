import { format } from "date-fns"

export const CurrentMonth = () => {
  return (
    <div className="text-center text-4xl">{format(new Date(), 'M')}月</div>
  )
}