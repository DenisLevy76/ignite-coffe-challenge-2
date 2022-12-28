import { ContainerComponent } from '../../components/ContainerComponent'
import { InputComponent } from '../../components/InputNumberComponent copy'
import { AddressFieldset, Container } from './styles'

export const Checkout: React.FC = () => {
  return (
    <Container>
      <ContainerComponent>
        <AddressFieldset>
          <InputComponent id="complemento" />
        </AddressFieldset>
      </ContainerComponent>
    </Container>
  )
}
