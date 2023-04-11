import { FC } from 'react'
import {
  Control,
  Field,
  FieldValues,
  UseControllerProps,
  UseFormRegister,
} from 'react-hook-form'
import { RhfTextArea } from '@/components/rhfField'
import { AuthLogin } from '@/types'

export type RhfTextAreaProps<T extends FieldValues> = Field & UseControllerProps<T>
type Props = {
  register: UseFormRegister<AuthLogin>
  control: Control<AuthLogin>
  placeholder: string
  schema: Object
  name: 'email' | 'password'
}
export const InputArea: FC<Props> = ({ register, control, placeholder, schema, name }) => {
  return (
    <>
      <div className='mb-4'>
        <RhfTextArea control={control} {...register(name, schema)} placeholder={placeholder} />
      </div>
    </>
  )
}
