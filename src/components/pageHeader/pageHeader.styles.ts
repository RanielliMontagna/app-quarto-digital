import styled from 'styled-components';

export const DivPageHeader = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    text-transform: capitalize;
  }

  .botaoMobile {
    display: none;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    > div {
      margin-bottom: 8px;
    }

    .botaoWeb {
      display: none;
    }

    .botaoMobile {
      display: block;
      position: absolute;
      right: 12px;
      bottom: 12px;
      width: 40px;
      height: 40px;
    }

    .botaoMobile button {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.cores.secundaria};
      color: ${({ theme }) => theme.cores.terciaria};
      border: none;
      box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;
