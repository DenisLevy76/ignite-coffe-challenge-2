import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'
export interface BaseCardComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string | number
  icon?: ReactNode
}

export const PaymentsMethodSelect = forwardRef<
  HTMLInputElement,
  BaseCardComponentProps
>(({ label, icon, value, ...props }, ref) => {
  return (
    <Container>
      {icon}
      {label}
      <input type="radio" ref={ref} value={value} {...props} />
    </Container>
  )
})

PaymentsMethodSelect.displayName = 'PaymentsMethodSelect'
