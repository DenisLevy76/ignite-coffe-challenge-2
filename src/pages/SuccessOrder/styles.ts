import styled from 'styled-components'

export const Container = styled.main`
  > section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    column-gap: 7rem;
    grid-template-areas:
      'title title'
      'subtitle subtitle'
      'order__data img';

    > h1 {
      grid-area: title;
      color: ${({ theme }) => theme.colors.yellowDark};
      font-size: 2rem;
    }

    > p {
      grid-area: subtitle;
      margin-bottom: 2.5rem;
    }

    > img {
      width: 100%;
    }
  }
`

export const OrderDataWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(219, 172, 44, 1) 0%,
    rgba(128, 71, 248, 1) 100%
  );
  border-radius: 6px 36px;
  overflow: hidden;

  padding: 1px;

  > .order__data {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 6px 36px;
    padding: 2.5rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > p {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      > .success__order-data__icon {
        padding: 0.5rem;
        border-radius: 50%;
        font-size: 0;
        color: ${({ theme }) => theme.colors.white};
      }

      strong {
        font-size: 1rem;
        font-family: ${({ theme }) => theme.type.fontFamily};
        color: ${({ theme }) => theme.colors.baseText};
      }
    }
  }
`
