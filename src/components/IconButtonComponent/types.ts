import { ButtonHTMLAttributes } from 'react'

export interface IconButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  title: string
  background?: boolean
}
