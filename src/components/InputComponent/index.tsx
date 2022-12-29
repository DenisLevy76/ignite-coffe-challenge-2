import { forwardRef } from 'react'
import { Container } from './styles'
import { InputComponentProps } from './types'

export const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(
  ({ id, required, ...props }, ref) => {
    return (
      <Container className={`input-wrapper-${id}`}>
        <input {...props} ref={ref} id={id} required={required} />
        {!required && (
          <label htmlFor={id}>
            <i>Optional</i>
          </label>
        )}
      </Container>
    )
  },
)

InputComponent.displayName = 'InputComponent'
