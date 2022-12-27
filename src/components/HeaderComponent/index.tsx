import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { ContainerComponent } from '../ContainerComponent'
import { CartLink, Container, HeaderNav } from './styles'

export const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <ContainerComponent>
        <img
          src="/icons/extendedLogo.svg"
          alt="Um copo de café, roxo, com um desenho de um foguete decolando."
        />

        <HeaderNav>
          <span>
            <MapPin size={22} weight="fill" />
            <p>Belém, PA</p>
          </span>
          <CartLink as={Link} to="/cart" title="Ir para o carrinho">
            <ShoppingCart size={24} weight="fill" />
          </CartLink>
        </HeaderNav>
      </ContainerComponent>
    </Container>
  )
}
