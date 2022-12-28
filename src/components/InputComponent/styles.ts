import styled, { css } from 'styled-components'

export const Container = styled.label`
  ${({ theme }) => css`
    background: ${theme.colors.baseButton};
    border-radius: 8px;
    display: flex;

    display: flex;
    align-items: center;
    padding-right: 0.75rem;

    &:focus-within {
      outline: ${({ theme }) => theme.colors.outline};
    }

    > input {
      padding: 0.75rem 0.75rem;
      width: 100%;
      background: transparent;

      &:focus {
        outline: none;
      }
    }

    i {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.baseLabel};
    }
  `}
`
