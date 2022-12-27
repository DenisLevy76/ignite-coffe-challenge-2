import styled from 'styled-components'

export const Container = styled.div`
  > section {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`

export const CoffeesTitle = styled.h2`
  font-size: 2rem;
`

export const CoffeeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  row-gap: 3rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`
