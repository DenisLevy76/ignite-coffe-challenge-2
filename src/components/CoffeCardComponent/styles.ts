import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.baseCard};
    border-radius: 6px 36px;
    padding: 1.25rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;
  `}
`
export const CoffeWrapper = styled(Link)`
  margin-top: calc(0px - 7rem / 2);
  outline: none !important;
  padding-bottom: 2rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 0.5rem;

    justify-content: center;

    margin-top: 0.75rem;
    margin-bottom: 1rem;
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
  }
`

export const CoffeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  object-fit: cover;
`
export const CoffeTags = styled.span`
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
export const CoffePrice = styled.span`
  ${({ theme }) => css`
    font-size: 0.875rem;

    > strong {
      color: ${theme.colors.baseText};
      font-weight: 800;
      font-size: 1.5rem;
    }
  `}
`

export const QuantityInputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseButton};
    border-radius: 8px;
    > input {
      background: transparent;
      width: 4.5rem;
      padding: 0.75rem 0.5rem;
      text-align: center;
    }
  `}
`

export const IconButton = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem;
    background: ${theme.colors.purpleDark};
    color: ${theme.colors.baseCard};
    border-radius: 8px;
    font-size: 0;

    cursor: pointer;
    transition: 0.15s;

    &:hover {
      background: ${theme.colors.purple};
    }
  `}
`
