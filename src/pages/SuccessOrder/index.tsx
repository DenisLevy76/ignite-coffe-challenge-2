import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ContainerComponent } from '../../components/ContainerComponent'
import { useUserAddress } from '../../hooks/useUserAddress'
import { Container, OrderDataWrapper } from './styles'

export const SuccessOrder: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  const { address } = useUserAddress()
  return (
    <Container>
      <ContainerComponent as="section">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        {address && (
          <OrderDataWrapper>
            <div className="order__data">
              <p>
                <span
                  style={{ background: colors.purple }}
                  className="success__order-data__icon"
                >
                  <MapPin size={20} weight="fill" />
                </span>
                <span>
                  Entrega em <strong>{address.street}</strong>
                  <br />
                  {address.district} - {address.city}, {address.state}
                </span>
              </p>
              <p>
                <span
                  style={{ background: colors.yellow }}
                  className="success__order-data__icon"
                >
                  <Timer size={20} weight="fill" />
                </span>
                <span>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </span>
              </p>
              <p>
                <span
                  style={{ background: colors.yellowDark }}
                  className="success__order-data__icon"
                >
                  <CurrencyDollar size={20} />
                </span>
                <span>
                  Pagamento na entrega
                  <br />
                  <strong>Cartão de Crédito</strong>
                </span>
              </p>
            </div>
          </OrderDataWrapper>
        )}
        <img
          src="/images/deliveryIllustration.png"
          alt="Ilustração de um homem dirigindo uma moto para fazer a entrega do café"
        />
      </ContainerComponent>
    </Container>
  )
}
