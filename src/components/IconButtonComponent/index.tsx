import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

export interface IconButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  title: string
  background?: boolean
}

export const IconButtonComponent: React.FC<IconButtonComponentProps> = ({
  ariaLabel,
  title,
  ...props
}) => {
  return <Container aria-label={ariaLabel} title={title} {...props} />
}
