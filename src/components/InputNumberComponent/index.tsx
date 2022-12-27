import { Container } from './styles'

export const InputNumberComponent: React.FC = () => {
  return (
    <Container>
      <input
        type="number"
        defaultValue={1}
        min={1}
        name="quantity"
        id="quantity"
      />
    </Container>
  )
}
