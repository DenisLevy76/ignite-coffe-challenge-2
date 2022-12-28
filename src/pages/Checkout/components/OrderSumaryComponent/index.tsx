import { CoffeeCardListComponent } from '../../../../components/CoffeeCardListComponent'
import { COFFEES } from '../../../Home/data/coffees'
import {
  CoffeesList,
  ConfirmOrderButton,
  Container,
  OrderPrices,
} from './styles'

export const OrderSumaryComponent: React.FC = () => {
  return (
    <Container>
      <CoffeesList>
        {COFFEES.map((coffee, index) => {
          if (index < 3)
            return (
              <li key={coffee.id}>
                <CoffeeCardListComponent coffee={coffee} />
              </li>
            )
          else return null
        })}
      </CoffeesList>
      <OrderPrices>
        <span>
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </span>
        <span>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </span>
        <span>
          <strong>Entrega</strong>
          <strong>R$ 3,50</strong>
        </span>
      </OrderPrices>
      <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
    </Container>
  )
}
