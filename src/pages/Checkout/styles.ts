import styled from 'styled-components'

export const Container = styled.main`
  > form {
    display: grid;
    grid-template-columns: 1fr 448px;
    gap: 2rem;

    > fieldset {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`

export const AddressDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    'cep empty empty'
    'street street street'
    'number complement complement'
    'district city state';

  .input-wrapper-CEP {
    grid-area: cep;
  }

  .input-wrapper-street {
    grid-area: street;
  }

  .input-wrapper-streetNumber {
    grid-area: number;
  }
  .input-wrapper-complement {
    grid-area: complement;
  }
  .input-wrapper-district {
    grid-area: district;
  }
  .input-wrapper-city {
    grid-area: city;
  }
  .input-wrapper-state {
    grid-area: state;
  }
  .input-wrapper-complement {
    grid-area: complement;
  }
`
export const PaymentFieldset = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`
