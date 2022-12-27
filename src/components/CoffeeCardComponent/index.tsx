import { ShoppingCartSimple } from 'phosphor-react'
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
  product: { imageUrl, price, shortDescription, tags, title, imageAlt, id },
}) => {
  return (
    <Container>
      <CoffeeWrapper>
        <CoffeeImage src={imageUrl} alt={imageAlt} />
        <ul>
          {tags.map(
            (tag, index) =>
              index < 3 && (
                <li key={tag}>
                  <CoffeeTags>{tag}</CoffeeTags>
                </li>
              ),
          )}
        </ul>

        <h2 className="coffee__title">{title}</h2>
        <p className="coffee__description">{shortDescription}</p>
      </CoffeeWrapper>
      <CardFooter>
        <CoffeePrice>
          R$ <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </CoffeePrice>
        <div className="cart__button-wrapper">
          <InputNumberComponent
            id={`${id}Quantity`}
            ariaLabel="Quantidade"
            readOnly
          />
          <IconButtonComponent
            ariaLabel="Adicionar ao carrinho"
            title="Adicionar ao carrinho"
          >
            <ShoppingCartSimple size={24} weight="fill" />
          </IconButtonComponent>
        </div>
      </CardFooter>
    </Container>
  )
}
