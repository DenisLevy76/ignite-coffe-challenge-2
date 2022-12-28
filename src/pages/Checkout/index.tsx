import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ContainerComponent } from '../../components/ContainerComponent'
import { InputComponent } from '../../components/InputComponent'
import { BaseCardComponent } from './components/BaseCard'
import { OrderSumaryComponent } from './components/OrderSumaryComponent'
import { PaymentsMethodSelect } from './components/PaymentsMethodSelect'
import { AddressDiv, Container, PaymentFieldset } from './styles'

export const Checkout: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Container>
      <ContainerComponent as={'form'} onSubmit={() => console.log('teste')}>
        <fieldset>
          <h1>Complete seu pedido</h1>
          <BaseCardComponent
            icon={<MapPinLine size={24} color={colors.yellowDark} />}
            title="Endereço de entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          >
            <AddressDiv>
              <InputComponent id="CEP" name="CEP" placeholder="CEP" required />
              <InputComponent
                id="street"
                name="street"
                placeholder="Rua"
                required
              />
              <InputComponent
                id="streetNumber"
                name="streetNumber"
                placeholder="Número"
                required
              />
              <InputComponent
                id="complement"
                name="complement"
                placeholder="Complemento"
              />
              <InputComponent
                id="district"
                name="district"
                placeholder="Bairro"
                required
              />
              <InputComponent
                id="city"
                name="city"
                placeholder="Cidade"
                required
              />
              <InputComponent
                id="state"
                name="state"
                placeholder="UF"
                required
              />
            </AddressDiv>
          </BaseCardComponent>
          <BaseCardComponent
            icon={<CurrencyDollar size={24} color={colors.purple} />}
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          >
            <PaymentFieldset>
              <PaymentsMethodSelect
                icon={<CreditCard size={20} />}
                name="paymentMethod"
                label="Cartão de crédito"
                required
              />
              <PaymentsMethodSelect
                icon={<Bank size={20} />}
                name="paymentMethod"
                label="Cartão de débito"
                required
              />
              <PaymentsMethodSelect
                icon={<Money size={20} />}
                name="paymentMethod"
                label="Dinheiro"
                required
              />
            </PaymentFieldset>
          </BaseCardComponent>
        </fieldset>
        <div>
          <h1>Cafés selecionados</h1>
          <OrderSumaryComponent />
        </div>
      </ContainerComponent>
    </Container>
  )
}
