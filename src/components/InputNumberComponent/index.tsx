import { Minus, Plus } from 'phosphor-react'
import { IconButtonComponent } from '../IconButtonComponent'
import { Container } from './styles'

export const InputNumberComponent: React.FC = () => {
  return (
    <Container>
      <IconButtonComponent
        background={false}
        ariaLabel="Diminuir quantidade"
        title="Diminuir quantidade"
      >
        <Minus size={14} />
      </IconButtonComponent>
      <input
        type="number"
        defaultValue={1}
        min={1}
        name="quantity"
        id="quantity"
      />
      <IconButtonComponent
        background={false}
        ariaLabel="Diminuir quantidade"
        title="Diminuir quantidade"
      >
        <Plus size={14} />
      </IconButtonComponent>
    </Container>
  )
}
