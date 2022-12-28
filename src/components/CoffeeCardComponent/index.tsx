import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { IconButtonComponent } from '../IconButtonComponent'
import { InputNumberComponent } from '../InputNumberComponent'
import {
  CardFooter,
  CoffeeImage,
  CoffeePrice,
  CoffeeTags,
  CoffeeWrapper,
  Container,
} from './styles'
import { coffeeCardComponentProps } from './types'

export const CoffeeCardComponent: React.FC<coffeeCardComponentProps> = ({
  product,
}) => {
  const { addCoffeeToCart } = useCart()

  const [quantity, setQuantity] = useState<number>(0)
  return (
    <Container>
      <CoffeeWrapper>
        <CoffeeImage src={product.imageUrl} alt={product.imageAlt} />
        <ul>
          {product.tags.map(
            (tag, index) =>
              index < 3 && (
                <li key={tag}>
                  <CoffeeTags>{tag}</CoffeeTags>
                </li>
              ),
          )}
        </ul>

        <h2 className="coffee__title">{product.title}</h2>
        <p className="coffee__description">{product.shortDescription}</p>
      </CoffeeWrapper>
      <CardFooter>
        <CoffeePrice>
          R$ <strong>{product.price.toFixed(2).replace('.', ',')}</strong>
        </CoffeePrice>
        <div className="cart__button-wrapper">
          <InputNumberComponent
            id={`${product.id}Quantity`}
            ariaLabel="Quantidade"
            onValueChange={(value) => setQuantity(value)}
            readOnly
          />
          <IconButtonComponent
            type="button"
            ariaLabel="Adicionar ao carrinho"
            title="Adicionar ao carrinho"
            onClick={() => addCoffeeToCart({ ...product, quantity })}
          >
            <ShoppingCartSimple size={24} weight="fill" />
          </IconButtonComponent>
        </div>
      </CardFooter>
    </Container>
  )
}
