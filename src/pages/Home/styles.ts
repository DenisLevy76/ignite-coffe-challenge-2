import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 4rem;
  > section {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`

export const AboutSection = styled.section`
  padding: 5rem 0;
  background: url(/images/Background.png);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    .home__title {
      font-size: 3rem;
      line-height: 130%;
    }

    .home__description {
      font-size: 1.25rem;
    }

    .home__image {
      width: 44%;
    }

    .home_characteristics {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      margin-top: 4rem;
    }

    @media (max-width: 850px) {
      .home__image {
        visibility: hidden;
        height: 0;
        width: 0;
      }
    }
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

export const Characteristics = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
    background: red;
    color: ${({ theme }) => theme.colors.white};
  }
`
