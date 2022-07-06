import styled from 'styled-components';

//TODO: responsivar o tamanho do emptyState em telas menores

export const DivEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 8px;
  text-align: center;

  @media (max-width: 576px) {
    img {
      width: 70%;
    }
  }

  @media (max-height: 550px) {
    justify-content: initial;
  }
`;
