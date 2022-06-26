import { PaginaBase } from 'components';
import { IoAdd } from 'react-icons/io5';
import { ServicosProvider, useServicos } from 'store/servicos';
import NovoServico from './modais/novoServico/novoServico';

export const Servicos = () => {
  const { setNovoServico } = useServicos();

  return (
    <PaginaBase
      titulo="Servicos"
      button={{
        children: 'Novo serviço',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovoServico(true),
      }}
    >
      <NovoServico />
    </PaginaBase>
  );
};

const ServicosWrapper: React.FC = () => {
  return (
    <ServicosProvider>
      <Servicos />
    </ServicosProvider>
  );
};

export default ServicosWrapper;
