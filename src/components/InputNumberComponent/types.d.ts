import { InputHTMLAttributes } from 'react'

export interface InputNumberComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  ariaLabel: string
  onValueChange?: (newValue: number) => void
}
