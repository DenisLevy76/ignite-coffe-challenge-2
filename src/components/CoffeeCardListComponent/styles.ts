import styled, { css } from 'styled-components'
import { ButtonComponent } from '../../pages/Checkout/components/OrderSumaryComponent/styles'

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
    gap: 0.5rem;
  }

  > .price {
    font-family: ${({ theme }) => theme.type.fontFamily};
    color: ${({ theme }) => theme.colors.baseText};
    width: 4rem;
    text-align: right;
    font-size: 1rem;
  }
`

export const RemoveFromCartButton = styled(ButtonComponent)`
  ${({ theme }) => css`
    background: ${theme.colors.baseButton};
    color: ${theme.colors.baseText};
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0 0.5rem;
    font-size: 0.75rem;

    > svg {
      color: ${theme.colors.purple};
    }

    &:hover {
      background: ${theme.colors.baseHover};
    }
  `}
`
