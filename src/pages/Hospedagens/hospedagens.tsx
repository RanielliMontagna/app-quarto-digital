import { throttle } from 'lodash';

import { PaginaBase } from 'components';
import { HospedagensActions } from 'store/hospedagens';
import { useDispatch } from 'store/hooks';
import { SearchField } from '@rm-monorepo/fields/lib/fields/src';
import HospedagensProvider from 'store/hospedagens/hospedagensProvider/hospedagensProvider';
import ListagemHospedagens from './listagemHospedagens/listagemHospedagens';

export const Hospedagens = () => {
  const _dispatch = useDispatch();

  const handleSearch = throttle(
    async (term: string) => await _dispatch(HospedagensActions.buscarHospedagens({ search: term })),
    500,
    { leading: false }
  );

  return (
    <PaginaBase
      titulo="Hospedagens"
      right={<SearchField placeholder="Buscar hospedagens" handleSearch={handleSearch} />}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <ListagemHospedagens />
      </div>
    </PaginaBase>
  );
};

const HospedagensWrapper: React.FC = () => {
  return (
    <HospedagensProvider>
      <Hospedagens />
    </HospedagensProvider>
  );
};

export default HospedagensWrapper;
