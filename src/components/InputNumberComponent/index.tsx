import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { IconButtonComponent } from '../IconButtonComponent'
import { Container } from './styles'
import { InputNumberComponentProps } from './types'

export const InputNumberComponent: React.FC<InputNumberComponentProps> = ({
  ariaLabel,
  id,
  value,
  onValueChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<number>(Number(value) || 1)

  useEffect(() => {
    onValueChange && onValueChange(inputValue)
  }, [inputValue])

  return (
    <Container htmlFor={id} aria-label={ariaLabel}>
      <IconButtonComponent
        type="button"
        background={false}
        ariaLabel="Diminuir quantidade"
        title="Diminuir quantidade"
        onClick={() => setInputValue((state) => state - 1)}
        disabled={inputValue === 1}
      >
        <Minus size={14} />
      </IconButtonComponent>
      <input
        type="number"
        name="quantity"
        id={id}
        onChange={(event) => setInputValue(Number(event.target.value))}
        value={inputValue}
        {...props}
      />
      <IconButtonComponent
        type="button"
        background={false}
        ariaLabel="Diminuir quantidade"
        title="Diminuir quantidade"
        onClick={() => setInputValue((state) => state + 1)}
        disabled={inputValue === 8}
      >
        <Plus size={14} />
      </IconButtonComponent>
    </Container>
  )
}
