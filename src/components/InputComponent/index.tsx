import { Container } from './styles'
import { InputComponentProps } from './types'

export const InputComponent: React.FC<InputComponentProps> = ({
  id,
  required,
  ...props
}) => {
  return (
    <Container className={`input-wrapper-${id}`}>
      <input {...props} id={id} required={required} />
      {!required && (
        <label htmlFor={id}>
          <i>Optional</i>
        </label>
      )}
    </Container>
  )
}
