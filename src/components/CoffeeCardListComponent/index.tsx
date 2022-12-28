import { Trash } from 'phosphor-react'
import { InputNumberComponent } from '../InputNumberComponent'
import { Container, RemoveFromCartButton } from './styles'
import { useCart } from '../../hooks/useCart'
import { ICoffeeCart } from '../../contexts/CartContext/types'
import { numberToPrice } from '../../pages/utils/numberToPrice'

export const CoffeeCardListComponent: React.FC<{ coffee: ICoffeeCart }> = ({
  coffee,
}) => {
  const { removeCoffeeFromCart, updateCoffeeQuantity } = useCart()
  return (
    <Container>
      <img src={coffee.imageUrl} alt={coffee.imageAlt} />
      <div className="coffee-list__data">
        <p className="coffee__name">{coffee.title}</p>
        <div className="controls">
          <InputNumberComponent
            ariaLabel="Quantidade de Americanos"
            id="american-quantity"
            value={coffee.quantity}
            onValueChange={(value) => updateCoffeeQuantity(coffee.id, value)}
          />
          <RemoveFromCartButton
            type="button"
            onClick={() => removeCoffeeFromCart(coffee.id)}
          >
            <Trash size={20} /> Remover
          </RemoveFromCartButton>
        </div>
      </div>
      <strong className="price">{numberToPrice(coffee.price)}</strong>
    </Container>
  )
}
