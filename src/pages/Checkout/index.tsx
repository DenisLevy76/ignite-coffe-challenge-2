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
import { BaseCardComponent } from './components/BaseCard'
import { OrderSumaryComponent } from './components/OrderSumaryComponent'
import { PaymentsMethodSelect } from './components/PaymentsMethodSelect'
import { AddressDiv, Container, PaymentFieldset } from './styles'

export const Checkout: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  const { register, handleSubmit } = useForm()

  const handleCreateOrder = (data: any) => {
    console.log(data)
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
                placeholder="CEP"
                required
                {...register('CEP')}
              />
              <InputComponent
                id="street"
                {...register('street')}
                placeholder="Rua"
                required
              />
              <InputComponent
                id="streetNumber"
                {...register('streetNumber')}
                placeholder="Número"
                required
              />
              <InputComponent
                id="complement"
                {...register('complement')}
                placeholder="Complemento"
              />

              <InputComponent
                id="district"
                {...register('district')}
                placeholder="Bairro"
                required
              />
              <InputComponent
                id="city"
                {...register('city')}
                placeholder="Cidade"
                required
              />

              <InputComponent
                id="state"
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
                required
              />
              <PaymentsMethodSelect
                icon={<Bank size={20} />}
                {...register('paymentMethod')}
                label="debitCard"
                value="debitCard"
                required
              />

              <PaymentsMethodSelect
                icon={<Money size={20} />}
                {...register('paymentMethod')}
                label="Dinheiro"
                value="money"
                required
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
