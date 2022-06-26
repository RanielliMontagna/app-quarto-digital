import { Divider, TitleBar } from 'components';
import { DivConteudo, DivGeral } from './contato.styles';
import Formulario from './formulario/formulario';
import Informacoes from './informacoes/informacoes';

const Contato = () => {
  return (
    <DivGeral>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <TitleBar rota="contato" />
        <DivConteudo>
          <h1>Entre em contato</h1>
          <Divider styles={{ margin: '16px 0px', width: '200px' }} />
          <p>
            Conheça o <span>Quarto Digital</span>, entre em contato e nos conte suas dúvidas, críticas ou sugestões.
            Preencha o formulário abaixo ou entre em contato através de um dos nossos contatos.
          </p>
        </DivConteudo>
        <div style={{ display: 'flex', width: '1000px' }}>
          <Informacoes />
          <Formulario />
        </div>
      </div>
    </DivGeral>
  );
};

export default Contato;
