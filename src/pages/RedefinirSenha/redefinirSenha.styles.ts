import styled from 'styled-components';

//Login
export const DivResetPassword = styled.div`
  width: calc(50% - 128px);
  height: 100vh;
  background-color: ${({ theme }) => theme?.coresExtras?.branco};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: 16px;
  padding: 0px 64px;

  > img {
    padding: 16px 0px 0px 0px;
  }

  @media (max-width: 950px) {
    width: 100%;
    overflow: auto;
    padding: 0px 16px;
  }

  @media (max-height: 600px) {
    justify-content: unset;
  }
`;

//Layout
export const DivLayout = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: ${({ theme }) => theme?.cores?.primaria};

  @media (max-width: 950px) {
    display: none;
  }

  h1 {
    color: ${({ theme }) => theme?.coresExtras?.branco};
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 32px;

    @media (max-height: 350px) {
      margin-top: 0px;
    }
  }

  h2 {
    color: ${({ theme }) => theme?.coresExtras?.branco};
    font-weight: 300;
    text-align: center;
    padding: 0px 10px;
    font-size: 20px;
  }
`;

export const DivIlustracao = styled.div`
  > img {
    width: 50vh;
  }

  @media (max-height: 350px) {
    display: none;
  }
`;

