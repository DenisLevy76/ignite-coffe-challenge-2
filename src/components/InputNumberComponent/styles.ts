import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.baseButton};
    border-radius: 8px;
    > input {
      background: transparent;
      width: 4.5rem;
      padding: 0.75rem 0.5rem;
    }
  `}
`
