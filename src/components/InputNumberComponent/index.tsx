import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes, useEffect, useState } from 'react'
import { IconButtonComponent } from '../IconButtonComponent'
import { Container } from './styles'

export interface InputNumberComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  ariaLabel: string
  onValueChange?: (newValue: number) => void
}

export const InputNumberComponent: React.FC<InputNumberComponentProps> = ({
  ariaLabel,
  id,
  onValueChange,
  ...props
}) => {
  const [value, setValue] = useState<number>(1)

  useEffect(() => {
    onValueChange && onValueChange(value)
  }, [value, onValueChange])

  return (
    <Container htmlFor={id} aria-label={ariaLabel}>
      <IconButtonComponent
        background={false}
        ariaLabel="Diminuir quantidade"
        title="Diminuir quantidade"
        onClick={() => setValue((state) => state - 1)}
        disabled={value === 0}
      >
        <Minus size={14} />
      </IconButtonComponent>
      <input
        type="number"
        defaultValue={1}
        name="quantity"
        id={id}
        onChange={(event) => setValue(Number(event.target.value))}
        value={value}
        {...props}
      />
      <IconButtonComponent
        background={false}
        ariaLabel="Diminuir quantidade"
        title="Diminuir quantidade"
        onClick={() => setValue((state) => state + 1)}
        disabled={value === 11}
      >
        <Plus size={14} />
      </IconButtonComponent>
    </Container>
  )
}
