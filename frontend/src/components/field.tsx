import type { ChangeEventHandler } from 'react'

export type Field = {
  error?: string
  placeholder?: string
  type?: string
}

export const FieldArea = (
  props: Field & {
    value: string
    type: string
    onChange: ChangeEventHandler<HTMLInputElement>
  },
) => {
  return (
    <>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={props.type}>
        {props.type === 'date' ? props.placeholder : ''}
      </label>
      <input
        placeholder={props.placeholder}
        className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
      {!!props.error && <p className='text-red-400 text-xs'>{props.error}</p>}
    </>
  )
}
