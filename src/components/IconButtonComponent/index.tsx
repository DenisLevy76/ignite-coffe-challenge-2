import { IconButtonContainer } from './styles'
import { IconButtonComponentProps } from './types'

export const IconButtonComponent: React.FC<IconButtonComponentProps> = ({
  ariaLabel,
  title,
  ...props
}) => {
  return <IconButtonContainer aria-label={ariaLabel} title={title} {...props} />
}
