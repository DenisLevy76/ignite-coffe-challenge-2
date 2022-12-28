import { InputHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'
export interface BaseCardComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: ReactNode
}

export const PaymentsMethodSelect: React.FC<BaseCardComponentProps> = ({
  label,
  icon,
  ...props
}) => {
  return (
    <Container>
      {icon}
      {label}
      <input type="radio" style={{ display: 'none' }} {...props} />
    </Container>
  )
}
