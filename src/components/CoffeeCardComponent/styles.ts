import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.baseCard};
    border-radius: 6px 36px;
    padding: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `}
`
export const CoffeeWrapper = styled.article`
  margin-top: calc(0px - 7rem / 2);
  outline: none !important;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 200px;

  align-items: center;
  text-align: center;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    gap: 0.5rem;

    justify-content: center;

    margin-top: 0.75rem;
    margin-bottom: 1rem;
  }

  > .coffee__title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .coffee__description {
    font-size: 0.875rem;

    line-height: 130%;
    height: 55px;
    color: ${({ theme }) => theme.colors.baseLabel};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &:focus,
  &:active {
    outline: none !important;
  }
`
export const CardFooter = styled.footer`
  width: 100%;

  display: flex;
  justify-content: space-between;

  .cart__button-wrapper {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.5rem;

    text-align: center;
  }
`

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  object-fit: cover;
`
export const CoffeeTags = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.yellowLight};
    color: ${theme.colors.yellowDark};
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    white-space: nowrap;
    display: flex;
    text-transform: uppercase;
    font-size: 0.625rem;
  `}
`
export const CoffeePrice = styled.span`
  ${({ theme }) => css`
    font-size: 0.875rem;

    > strong {
      color: ${theme.colors.baseText};
      font-weight: 800;
      font-size: 1.5rem;
    }
  `}
`
