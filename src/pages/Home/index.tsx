import { CoffeCardComponent } from '../../components/CoffeCardComponent'
import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <CoffeCardComponent
        product={{
          imageUrl: '/images/coffe/Americano.png',
          title: 'Americano',
          shortDescription: 'Expresso diluído, menos intenso que o tradicional',
          price: 9.9,
          tags: ['Tradicional', 'com leite', 'gelado'],
          imageAlt:
            'Foto de uma xicara de café vista de cima mostrando o café com um pouco de espuma de leite por cima',
        }}
      />
    </Container>
  )
}
