import { Container } from './styles'
import { InputComponentProps } from './types'

export const InputComponent: React.FC<InputComponentProps> = ({
  id,
  required,
  ...props
}) => {
  return (
    <Container>
      <input {...props} id={id} required={required} placeholder="Complemento" />
      {!required && (
        <label htmlFor={id}>
          <i>Optional</i>
        </label>
      )}
    </Container>
  )
}
