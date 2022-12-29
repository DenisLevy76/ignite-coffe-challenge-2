import styled, { css } from 'styled-components'
import { ButtonComponent } from '../../pages/Checkout/components/OrderSumaryComponent/styles'
import { InputNumberComponent } from '../InputNumberComponent'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 0;

  > img {
    width: 4rem;
    height: 4rem;
  }

  > .coffee-list__data {
    > .coffee__name {
      color: ${({ theme }) => theme.colors.baseSubtitle};
      margin-bottom: 0.5rem;
    }
  }

  .controls {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  > .price {
    font-family: ${({ theme }) => theme.type.fontFamily};
    color: ${({ theme }) => theme.colors.baseText};
    width: 4rem;
    text-align: right;
    font-size: 1rem;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    gap: 1rem;

    > img {
      width: 6rem;
      height: 6rem;
    }

    .input-number {
      max-width: 100% !important;
    }

    .price {
      font-size: 1.3rem;
      width: 100%;
      text-align: center;
    }
  }
`

export const RemoveFromCartButton = styled(ButtonComponent)`
  ${({ theme }) => css`
    background: ${theme.colors.baseButton};
    color: ${theme.colors.baseText};
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    padding: 0.75rem 0.75rem;
    font-size: 1.25rem;

    > svg {
      color: ${theme.colors.purple};
    }

    &:hover {
      background: ${theme.colors.baseHover};
    }
  `}
`

export const QuantityInput = styled(InputNumberComponent)`
  @media (max-width: 850px) {
    font-size: 2rem;
  }
`
