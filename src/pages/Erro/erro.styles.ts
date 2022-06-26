import styled from 'styled-components';

export const DivErro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  inset: 0;

  gap: 16px;
  overflow: auto;

  img {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    padding: 16px;

    > img {
      width: 80%;
      max-width: 400px;
    }
  }

  @media (max-height: 480px) {
    justify-content: initial;
    padding: 16px;
  }
`;
