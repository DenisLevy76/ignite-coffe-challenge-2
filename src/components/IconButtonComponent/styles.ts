import styled, { css } from 'styled-components'

export const Container = styled.button<{
  background?: boolean
}>`
  ${({ theme, background = true }) => css`
    padding: ${background && '0.5rem'};
    background: ${background ? theme.colors.purpleDark : 'transparent'};
    color: ${background ? theme.colors.baseCard : theme.colors.purpleDark};
    border-radius: 8px;
    font-size: 0;

    cursor: pointer;
    transition: 0.15s;

    &:hover {
      background: ${background ? theme.colors.purple : 'transparent'};
      color: ${!background && theme.colors.purple};
    }
  `}
`
