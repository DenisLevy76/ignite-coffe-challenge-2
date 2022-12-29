import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { ContainerComponent } from '../ContainerComponent'
import { CartLink, Container, HeaderNav } from './styles'

export const HeaderComponent: React.FC = () => {
  const { cart } = useCart()
  return (
    <Container>
      <ContainerComponent>
        <Link to="/">
          <img
            src="/icons/extendedLogo.svg"
            alt="Um copo de café, roxo, com um desenho de um foguete decolando."
          />
        </Link>

        <HeaderNav>
          <span>
            <MapPin size={22} weight="fill" />
            <p>Belém, PA</p>
          </span>
          <CartLink as={Link} to="/checkout" title="Ir para o checkout">
            <ShoppingCart size={24} weight="fill" />
            {cart.length > 0 && (
              <span className="cart-length">{cart.length}</span>
            )}
          </CartLink>
        </HeaderNav>
      </ContainerComponent>
    </Container>
  )
}
