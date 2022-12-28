import styled, { css } from 'styled-components'

export const Container = styled.div`
  border-radius: 6px 44px;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.baseCard};
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

    &:hover {
      background: ${theme.colors.purpleDark};
      cursor: pointer;
    }
  `}
`

export const ConfirmOrderButton = styled(ButtonComponent)`
  background: ${({ theme }) => theme.colors.yellow};
  margin-top: 1.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.yellowDark};
  }
`
