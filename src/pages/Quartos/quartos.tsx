import { throttle } from 'lodash';
import { IoAdd } from 'react-icons/io5';

import { PaginaBase } from 'components';
import { QuartosActions, QuartosProvider, useQuartos } from 'store/quartos';
import { useDispatch } from 'store/hooks';
import { SearchField } from '@rm-monorepo/fields';

import ListagemQuartos from './listagemQuartos/listagemQuartos';
import AdicionarEditarQuarto from './modais/adicionarEditarQuarto/adicionarEditarQuarto';
import ExcluirQuarto from './modais/excluirQuarto/excluirQuarto';

export const Quartos = () => {
  const { adicionarEditarQuarto, excluirQuarto, setAdicionarEditarQuarto, quartos } = useQuartos();
  const _dispatch = useDispatch();

  const handleSearch = throttle(
    async (term: string) => await _dispatch(QuartosActions.buscarQuartos({ search: term })),
    500,
    { leading: false }
  );

  return (
    <PaginaBase
      titulo="Quartos"
      button={{
        children: 'Novo quarto',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setAdicionarEditarQuarto({ open: true }),
        hide: quartos === null,
      }}
      right={<SearchField placeholder="Buscar quartos" handleSearch={handleSearch} />}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <ListagemQuartos />
        {adicionarEditarQuarto.open && <AdicionarEditarQuarto />}
        {excluirQuarto.open && <ExcluirQuarto />}
      </div>
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

