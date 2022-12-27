import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseButton};
    border-radius: 8px;
    display: flex;
    padding: 0.75rem 0.5rem;
    max-width: 4.5rem;

    > input {
      width: 100%;
      background: transparent;
      text-align: center;

      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  `}
`
