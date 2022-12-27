import styled from 'styled-components'
import { IconButtonContainer } from '../IconButtonComponent/styles'

export const Container = styled.header`
  width: 100%;
  padding: 2rem 0;

  position: sticky;
  top: 0;

  background: ${({ theme }) => theme.colors.background};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 10px 8px;
    background: ${({ theme }) => theme.colors.purpleLight};
    color: ${({ theme }) => theme.colors.purpleDark};
    border-radius: 8px;
  }
`

export const CartLink = styled(IconButtonContainer)`
  font-size: 1rem;
  display: flex;

  background: ${({ theme }) => theme.colors.yellowLight};
  color: ${({ theme }) => theme.colors.yellowDark};

  position: relative;

  > .cart-length {
    position: absolute;
    top: -10px;
    right: -10px;

    padding: 0.25rem 0.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.yellowDark};
    font-size: 0.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.yellowLight} !important;
    color: ${({ theme }) => theme.colors.yellowDark};
  }
`
