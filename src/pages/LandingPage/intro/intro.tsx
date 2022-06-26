import { FiArrowDown } from 'react-icons/fi';
import * as styled from './intro.styles';

const Intro = () => {
  return (
    <styled.Intro>
      <styled.Titulo>
        <span> O software para</span> <span className="primaria">gestão hoteleira</span>
      </styled.Titulo>
      <styled.Descricao>
        Controle suas acomodações, reservas e hóspedes de maneira simples, ágil e rápida com o sistema do Quarto
        Digital.
      </styled.Descricao>
      <styled.DivArrow>
        <a href="#sobre" style={{ color: 'inherit' }}>
          <styled.SaibaMais>
            <FiArrowDown size={32} />
          </styled.SaibaMais>
        </a>
      </styled.DivArrow>
    </styled.Intro>
  );
};

export default Intro;
