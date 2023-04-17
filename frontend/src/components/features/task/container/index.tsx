import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ButtonArea } from '@/components/features/task/presenter/buttonArea'
import { InputArea } from '@/components/features/task/presenter/inputArea'
import { Wrapper } from '@/components/features/auth/presenter/wrapper'
import { Task } from '@prisma/client'
import { Header } from '@/components/header'

export const TaskContainer = () => {
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<Task>({
    mode: 'onChange',
  })
  const handle = async (data: Task) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/task`, data)
      router.push('/')
    } catch (e: any) {
      setError(e.response.data.message)
    }
  }
  const counterpartySchema = {
    required: {
      value: true,
      message: '入力してください',
    },
  }
  const numberSchema = {
    patter: {
      value: /^\d+$/,
      message: '数字で入力してください',
    },
    required: {
      value: true,
      message: '入力してください',
    },
  }

  return (
    <Wrapper>
      <form
        className='bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4'
        onSubmit={handleSubmit(handle)}
      >
        <div className='mb-4'>
          <InputArea
            placeholder='取引相手'
            control={control}
            register={register}
            schema={counterpartySchema}
            name='counterparty'
            type='text'
          />
          <InputArea
            placeholder='元金(万)'
            control={control}
            register={register}
            schema={numberSchema}
            name='capital'
            type='number'
          />
          <InputArea
            placeholder='期間'
            control={control}
            register={register}
            schema={numberSchema}
            name='period'
            type='number'
          />
          <InputArea
            placeholder='利率'
            control={control}
            register={register}
            schema={numberSchema}
            name='rate'
            type='number'
          />
          <InputArea
            placeholder='取引日時'
            control={control}
            register={register}
            schema={numberSchema}
            name='transactionDate'
            type='date'
          />
        </div>
        <ButtonArea />
      </form>
    </Wrapper>
  )
}
