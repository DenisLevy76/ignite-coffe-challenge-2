import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ThemeContext } from 'styled-components'
import { ContainerComponent } from '../../components/ContainerComponent'
import { InputComponent } from '../../components/InputComponent'
import { useCart } from '../../hooks/useCart'
import { useUserAddress } from '../../hooks/useUserAddress'
import { BaseCardComponent } from './components/BaseCard'
import { OrderSumaryComponent } from './components/OrderSumaryComponent'
import { PaymentsMethodSelect } from './components/PaymentsMethodSelect'
import { AddressDiv, Container, PaymentFieldset } from './styles'

export const Checkout: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  const { register, handleSubmit } = useForm()
  const { cart } = useCart()
  const { setAddress } = useUserAddress()

  const handleCreateOrder = (data: any) => {
    if (cart.length > 0 && data.paymentMethod) setAddress(data)
  }

  return (
    <Container>
      <ContainerComponent
        as={'form'}
        onSubmit={handleSubmit(handleCreateOrder)}
      >
        <fieldset>
          <h2>Complete seu pedido</h2>
          <BaseCardComponent
            icon={<MapPinLine size={24} color={colors.yellowDark} />}
            title="Endereço de entrega"
            description="Informe o endereço onde deseja receber seu pedido"
          >
            <AddressDiv>
              <InputComponent
                id="CEP"
                type="number"
                placeholder="CEP"
                required
                {...register('CEP')}
              />
              <InputComponent
                id="street"
                type="text"
                {...register('street')}
                placeholder="Rua"
                required
              />
              <InputComponent
                id="streetNumber"
                type="number"
                {...register('streetNumber')}
                placeholder="Número"
                required
              />
              <InputComponent
                id="complement"
                type="text"
                {...register('complement')}
                placeholder="Complemento"
              />

              <InputComponent
                id="district"
                type="text"
                {...register('district')}
                placeholder="Bairro"
                required
              />
              <InputComponent
                id="city"
                type="text"
                {...register('city')}
                placeholder="Cidade"
                required
              />

              <InputComponent
                id="state"
                type="text"
                {...register('state')}
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
                {...register('paymentMethod')}
                label="Cartão de crédito"
                value="creditCard"
              />
              <PaymentsMethodSelect
                icon={<Bank size={20} />}
                {...register('paymentMethod')}
                label="Cartão de débito"
                value="debitCard"
              />

              <PaymentsMethodSelect
                icon={<Money size={20} />}
                {...register('paymentMethod')}
                label="Dinheiro"
                value="money"
              />
            </PaymentFieldset>
          </BaseCardComponent>
        </fieldset>
        <div className="checkout__order-sumary">
          <h2>Cafés selecionados</h2>
          <OrderSumaryComponent />
        </div>
      </ContainerComponent>
    </Container>
  )
}
