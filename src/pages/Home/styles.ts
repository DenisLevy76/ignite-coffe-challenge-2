import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 2rem auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const CoffesTitle = styled.h2`
  font-size: 2rem;
`

export const CoffeList = styled.ul`
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
