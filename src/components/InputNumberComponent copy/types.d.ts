import { InputHTMLAttributes } from 'react'

export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  text?: string
}
