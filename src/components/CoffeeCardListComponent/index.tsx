import { Trash } from 'phosphor-react'
import { InputNumberComponent } from '../InputNumberComponent'
import { Container, RemoveFromCartButton } from './styles'
import { ICoffee } from '../../@types/ICoffee'

export const CoffeeCardListComponent: React.FC<{ coffee: ICoffee }> = ({
  coffee,
}) => {
  return (
    <Container>
      <img src={coffee.imageUrl} alt={coffee.imageAlt} />
      <div className="coffee-list__data">
        <p className="coffee__name">{coffee.title}</p>
        <div className="controls">
          <InputNumberComponent
            ariaLabel="Quantidade de Americanos"
            id="american-quantity"
          />
          <RemoveFromCartButton>
            <Trash size={20} /> Remover
          </RemoveFromCartButton>
        </div>
      </div>
      <strong className="price">{coffee.price}</strong>
    </Container>
  )
}
