import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import { Field, FieldArea } from './field'

export type RhfTextAreaProps<T extends FieldValues> = Field & UseControllerProps<T>

/**
 * react-hook-formラッパー
 */
export const RhfTextArea = <T extends FieldValues>(props: RhfTextAreaProps<T>) => {
  const { name, control, placeholder, type } = props
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control })
  return (
    <FieldArea
      placeholder={placeholder}
      type={type ? type : name}
      {...rest}
      error={errors[name] && `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`}
    />
  )
}
