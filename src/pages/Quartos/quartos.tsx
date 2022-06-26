import { PaginaBase } from 'components';
import { IoAdd } from 'react-icons/io5';
import { QuartosProvider, useQuartos } from 'store/quartos';
import NovoQuarto from './modais/novoQuarto/novoQuarto';

export const Quartos = () => {
  const { setNovoQuarto } = useQuartos();

  return (
    <PaginaBase
      titulo="Quartos"
      button={{
        children: 'Novo quarto',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovoQuarto(true),
      }}
    >
      <NovoQuarto />
    </PaginaBase>
  );
};

const QuartosWrapper: React.FC = () => {
  return (
    <QuartosProvider>
      <Quartos />
    </QuartosProvider>
  );
};

export default QuartosWrapper;
