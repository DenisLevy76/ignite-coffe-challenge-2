import { CoffeCardComponent } from '../../components/CoffeCardComponent'
import { CoffeList, CoffesTitle, Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <CoffesTitle>Nossos cafés</CoffesTitle>
      <CoffeList>
        <li>
          <CoffeCardComponent
            product={{
              id: crypto.randomUUID(),
              imageUrl: '/images/coffes/ChocolateQuente.png',
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
          <CoffeCardComponent
            product={{
              id: crypto.randomUUID(),
              imageUrl: '/images/coffes/Americano.png',
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
          <CoffeCardComponent
            product={{
              id: crypto.randomUUID(),
              imageUrl: '/images/coffes/CafecomLeite.png',
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
          <CoffeCardComponent
            product={{
              id: crypto.randomUUID(),
              imageUrl: '/images/coffes/Capuccino.png',
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
      </CoffeList>
    </Container>
  )
}
