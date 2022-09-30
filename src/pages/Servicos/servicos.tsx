import { IoAdd } from 'react-icons/io5';
import throttle from 'lodash.throttle';

import { SearchField } from '@rm-monorepo/fields/lib/fields/src';

import { PaginaBase } from 'components';
import { useDispatch } from 'store/hooks';
import { ServicosActions, ServicosProvider, useServicos } from 'store/servicos';

import ListagemServicos from './listagemServicos/listagemServicos';
import ExcluirServico from './dialogs/excluirServico/excluirServico';
import AdicionarEditarServico from './dialogs/adicionarEditarServico/adicionarEditarServico';

const Servicos = () => {
  const { setAdicionarEditarServico, adicionarEditarServico, excluirServico, servicos } = useServicos();
  const _dispatch = useDispatch();

  const handleSearch = throttle(
    async (term: string) => {
      await _dispatch(
        ServicosActions.buscarServicos({
          search: term,
        })
      );
    },
    500,
    { leading: false }
  );

  return (
    <PaginaBase
      titulo="Serviços"
      button={{
        children: 'Novo serviço',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setAdicionarEditarServico({ open: true }),
        hide: servicos === null,
      }}
      right={<SearchField placeholder="Buscar serviços" handleSearch={handleSearch} />}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <ListagemServicos />
        {adicionarEditarServico.open && <AdicionarEditarServico />}
        {excluirServico.open && <ExcluirServico />}
      </div>
    </PaginaBase>
  );
};

const ServicosWrapper = () => {
  return (
    <ServicosProvider>
      <Servicos />
    </ServicosProvider>
  );
};

export default ServicosWrapper;

