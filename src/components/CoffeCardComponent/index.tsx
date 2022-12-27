import { ShoppingCartSimple } from 'phosphor-react'
import { IconButtonComponent } from '../IconButtonComponent'
import { InputNumberComponent } from '../InputNumberComponent'
import {
  CardFooter,
  CoffeImage,
  CoffePrice,
  CoffeTags,
  CoffeWrapper,
  Container,
} from './styles'
import { CoffeCardComponentProps } from './types'

export const CoffeCardComponent: React.FC<CoffeCardComponentProps> = ({
  product: { imageUrl, price, shortDescription, tags, title, imageAlt, id },
}) => {
  return (
    <Container>
      <CoffeWrapper to={`/coffe/${id}`}>
        <CoffeImage src={imageUrl} alt={imageAlt} />
        <ul>
          {tags.map(
            (tag, index) =>
              index < 3 && (
                <li key={tag}>
                  <CoffeTags>{tag}</CoffeTags>
                </li>
              ),
          )}
        </ul>

        <h2 className="coffe__title">{title}</h2>
        <p className="coffe__description">{shortDescription}</p>
      </CoffeWrapper>
      <CardFooter>
        <CoffePrice>
          R$ <strong>{price.toFixed(2).replace('.', ',')}</strong>
        </CoffePrice>
        <div className="cart__button-wrapper">
          <InputNumberComponent />
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
