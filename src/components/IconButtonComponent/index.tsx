import { Container } from './styles'
import { IconButtonComponentProps } from './types'

export const IconButtonComponent: React.FC<IconButtonComponentProps> = ({
  ariaLabel,
  title,
  ...props
}) => {
  return <Container aria-label={ariaLabel} title={title} {...props} />
}
