import { CoffeeCardComponent } from '../../components/CoffeeCardComponent'
import { ContainerComponent } from '../../components/ContainerComponent'
import { CoffeeList, CoffeesTitle, Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <ContainerComponent as={'section'}>
        <CoffeesTitle>Nossos cafés</CoffeesTitle>
        <CoffeeList>
          <li>
            <CoffeeCardComponent
              product={{
                id: crypto.randomUUID(),
                imageUrl: '/images/coffees/ChocolateQuente.png',
                title:
                  'Chocolate Quente Chocolate Quente Chocolate Quente Chocolate Quente',
                shortDescription:
                  'Bebida feita com chocolate dissolvido no leite quente e café',
                price: 1,
                tags: ['Com leite', 'Gelado', 'Com leite', 'Gelado'],
                imageAlt:
                  'Foto de uma xicara de café vista de cima mostrando o café com um pouco de espuma de leite por cima',
              }}
            />
          </li>
          <li>
            <CoffeeCardComponent
              product={{
                id: crypto.randomUUID(),
                imageUrl: '/images/coffees/Americano.png',
                title: 'Expresso Americano',
                shortDescription:
                  'Expresso diluído, menos intenso que o tradicional',
                price: 15.99,
                tags: ['Com leite', 'Gelado'],
                imageAlt:
                  'Foto de uma xicara de café vista de cima mostrando o café com um pouco de espuma de leite por cima',
              }}
            />
          </li>
          <li>
            <CoffeeCardComponent
              product={{
                id: crypto.randomUUID(),
                imageUrl: '/images/coffees/CafecomLeite.png',
                title: 'Café com Leite',
                shortDescription:
                  'Meio a meio de expresso tradicional com leite vaporizado',
                price: 19.9,
                tags: ['Com leite', 'Gelado'],
                imageAlt:
                  'Foto de uma xicara de café vista de cima mostrando o café com um pouco de espuma de leite por cima',
              }}
            />
          </li>
          <li>
            <CoffeeCardComponent
              product={{
                id: crypto.randomUUID(),
                imageUrl: '/images/coffees/Capuccino.png',
                title: 'Capuccino',
                shortDescription:
                  'Bebida com canela feita de doses iguais de café, leite e espuma',
                price: 9.9,
                tags: ['Com leite', 'Gelado'],
                imageAlt:
                  'Foto de uma xicara de café vista de cima mostrando o café com um pouco de espuma de leite por cima',
              }}
            />
          </li>
        </CoffeeList>
      </ContainerComponent>
    </Container>
  )
}
