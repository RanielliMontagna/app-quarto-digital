import styled from 'styled-components';
import { pretoQD, brancoQD } from 'themes';

export const ReciboContainer = styled.div`
  display: flex;
  flex-direction: column;

  //a4 page
  width: 21cm;
  height: 29.7cm;

  //padding
  padding: 1cm;

  * {
    color: ${pretoQD};
  }
  background-color: ${brancoQD};
`;
