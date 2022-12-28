import styled from 'styled-components'

export const BaseCard = styled.fieldset`
  background-color: ${({ theme }) => theme.colors.baseCard};
  padding: 2.5rem;
  border-radius: 8px;

  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`
