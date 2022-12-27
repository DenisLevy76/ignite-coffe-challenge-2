import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { CoffeeCardComponent } from '../../components/CoffeeCardComponent'
import { ContainerComponent } from '../../components/ContainerComponent'
import { COFFEES } from './data/coffees'
import {
  AboutSection,
  Characteristics,
  CoffeeList,
  CoffeesTitle,
  Container,
} from './styles'

export const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Container>
      <AboutSection>
        <ContainerComponent>
          <div>
            <h1 className="home__title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="home__description">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul className="home_characteristics">
              <li>
                <Characteristics>
                  <span style={{ backgroundColor: colors.yellowDark }}>
                    <ShoppingCart size={16} weight="fill" />
                  </span>
                  <p>Compra simples e segura</p>
                </Characteristics>
              </li>

              <li>
                <Characteristics>
                  <span style={{ backgroundColor: colors.baseText }}>
                    <Package size={16} weight="fill" />
                  </span>
                  <p>Compra simples e segura</p>
                </Characteristics>
              </li>
              <li>
                <Characteristics>
                  <span style={{ backgroundColor: colors.yellow }}>
                    <Timer size={16} weight="fill" />
                  </span>
                  <p>Compra simples e segura</p>
                </Characteristics>
              </li>
              <li>
                <Characteristics>
                  <span style={{ backgroundColor: colors.purple }}>
                    <Coffee size={16} weight="fill" />
                  </span>
                  <p>Compra simples e segura</p>
                </Characteristics>
              </li>
            </ul>
          </div>

          <img src="/images/coffeeDeliveryBanner.png" className="home__image" />
        </ContainerComponent>
      </AboutSection>
      <ContainerComponent as={'section'}>
        <CoffeesTitle>Nossos cafés</CoffeesTitle>
        <CoffeeList>
          {COFFEES.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeCardComponent product={coffee} />
            </li>
          ))}
        </CoffeeList>
      </ContainerComponent>
    </Container>
  )
}
