import { FC } from 'react'
import { Control, Field, FieldValues, UseControllerProps, UseFormRegister } from 'react-hook-form'
import { RhfTextArea } from '@/components/rhfField'
import { Task } from '@prisma/client'

export type RhfTextAreaProps<T extends FieldValues> = Field & UseControllerProps<T>
// type TaskProperty<Task, K extends keyof Task> = Task[K] extends null | undefined ? never : Task[K];
type TaskProperty<T, K extends keyof T> = Required<Pick<T, K>> & T

type Props = {
  register: UseFormRegister<Task>
  control: Control<Task>
  placeholder: string
  schema: Object
  name: 'capital' | 'period' | 'transactionDate' | 'counterparty' | 'rate'
  type?: string
}
export const InputArea: FC<Props> = ({ register, control, placeholder, schema, name, type }) => {
  return (
    <>
      <div className='mb-4'>
        <RhfTextArea
          control={control}
          {...register(name, schema)}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </>
  )
}
