import styled from 'styled-components'

export const Container = styled.label`
  background: ${({ theme }) => theme.colors.baseButton};
  padding: 1rem;
  border-radius: 8px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  white-space: nowrap;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.baseHover};
    cursor: pointer;
  }

  &:has(input:checked),
  &.active {
    background: ${({ theme }) => theme.colors.purpleLight};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.purple};
  }
`
