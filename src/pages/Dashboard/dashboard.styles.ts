import styled from 'styled-components';

export const ContainerCards = styled.div`
  height: calc(100% - 56px);
  padding: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.cores.terciaria};
  transition: all 0.3s ease-in-out;
  overflow: auto;

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

