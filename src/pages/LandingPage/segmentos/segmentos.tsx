import { AiOutlineAreaChart, AiOutlineDropbox } from 'react-icons/ai';
import { IoBedSharp } from 'react-icons/io5';
import { MdRoomService } from 'react-icons/md';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';
import Card from './card/card';
import * as styled from './segmentos.styles';

const Segmentos = () => {
  return (
    <styled.Segmentos id="segmento">
      <div>
        <h1>
          O software de <span>gestão hoteleira</span>
          <br />
          completo para você!
        </h1>
      </div>
      <div style={{ margin: '16px 0px' }}>
        <styled.DivCards>
          <Card icone={<IoBedSharp size={128} />} titulo="Quartos" />
          <Card icone={<AiOutlineAreaChart size={128} />} titulo="Indicadores" />
          <Card icone={<AiOutlineDropbox size={128} />} titulo="Produtos" />
        </styled.DivCards>
        <styled.DivCards>
          <Card icone={<MdRoomService size={128} />} titulo="Serviços" />
          <Card icone={<GiReceiveMoney size={128} />} titulo="Receitas" />
          <Card icone={<GiPayMoney size={128} />} titulo="Despesas" />
        </styled.DivCards>
      </div>
    </styled.Segmentos>
  );
};

export default Segmentos;
