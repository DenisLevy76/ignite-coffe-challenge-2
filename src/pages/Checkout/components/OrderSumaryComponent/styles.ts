import styled, { css } from 'styled-components'

export const Container = styled.div`
  border-radius: 6px 44px;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.baseCard};

  @media (max-width: 850px) {
    padding: 1.5rem;
  }

  @media (max-width: 350px) {
    padding: 0.5rem;
    border-radius: 8px;
  }
`

export const CoffeesList = styled.ul`
  display: flex;
  flex-direction: column;

  > li + li {
    border-top: 1px solid ${({ theme }) => theme.colors.baseButton};
  }
`

export const OrderPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.baseButton};

  > span {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    > strong {
      font-family: ${({ theme }) => theme.type.fontFamily};
    }
  }
`
export const ButtonComponent = styled.button`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-weight: bold;
    background: ${theme.colors.purple};
    padding: 0.75rem;
    width: 100%;
    border-radius: 8px;

    &:hover:not(:disabled) {
      background: ${theme.colors.purpleDark};
      cursor: pointer;
    }

    &:disabled {
      filter: opacity(0.5);
      cursor: not-allowed;
    }
  `}
`

export const ConfirmOrderButton = styled(ButtonComponent)`
  background: ${({ theme }) => theme.colors.yellow};
  margin-top: 1.5rem;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.yellowDark};
  }
`
