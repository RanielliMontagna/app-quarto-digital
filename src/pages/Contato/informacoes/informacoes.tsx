import { email, linkedin, site } from 'shared';
import { DivInformacoes } from './informacoes.styles';
import ItensInfo from './itensInfo/itensInfo';

import { RiLinkedinBoxLine, RiMailSendLine, RiPagesLine } from 'react-icons/ri';

const Informacoes = () => {
  return (
    <DivInformacoes>
      <ItensInfo icone={<RiMailSendLine size={32} />} texto="contato@ranimontagna.com" link={email} />
      <ItensInfo icone={<RiLinkedinBoxLine size={32} />} texto="Ranielli Montagna" link={linkedin} />
      <ItensInfo icone={<RiPagesLine size={32} />} texto="ranimontagna.com" link={site} />
    </DivInformacoes>
  );
};

export default Informacoes;
