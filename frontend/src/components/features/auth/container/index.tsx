import axios from 'axios'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ButtonArea } from '@/components/features/auth/presenter/buttonArea'
import { InputArea } from '@/components/features/auth/presenter/inputArea'
import { Wrapper } from '@/components/features/auth/presenter/wrapper'
import { AuthLogin } from '@/types'

type Props = {
  sign?: boolean
}
export const AuthContainer: FC<Props> = ({ sign }) => {
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const {
    control,
    handleSubmit,
    register,
    formState: { isValid, isSubmitting },
  } = useForm<AuthLogin>({
    mode: 'onChange',
  })
  const handle = async (data: AuthLogin) => {
    try {
      if (sign) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
          email: data.email,
          password: data.password,
        })
        router.push('/login')
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          email: data.email,
          password: data.password,
        })
        router.push('/')
      }
    } catch (e: any) {
      setError(e.response.data.message)
    }
  }
  const emailSchema = {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: '正しいメールアドレスを入力してください',
    },
    required: {
      value: true,
      message: '入力してください',
    },
  }
  const passwordSchema = {
    maxLength: {
      value: 12,
      message: '12文字以下で入力してください',
    },
    minLength: {
      value: 6,
      message: '6文字以上で入力してください',
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
            placeholder='メールアドレス'
            control={control}
            register={register}
            schema={emailSchema}
            name='email'
          />
          <InputArea
            placeholder='パスワード'
            control={control}
            register={register}
            schema={passwordSchema}
            name='password'
          />
        </div>
        <ButtonArea sign={sign} isLoading={isSubmitting} />
      </form>
    </Wrapper>
  )
}
