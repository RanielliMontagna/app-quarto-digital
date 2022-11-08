import { useCallback, useMemo } from 'react';
import dayjs from 'dayjs';

import { DataTable } from '@rm-monorepo/data-table/lib/dataTable/src';

import { PaperDataTable } from 'components';
import { useHospedagens } from 'store/hospedagens';
import { EmptyStateSearch, EmptyStateSemHospedagens } from '../emptyStateHospedagens/emptyStateHospedagens';
import { colunasHospedagens } from './listagemHospedagens.static';
import { useListagemHospedagens } from './useListagemHospedagens';
import { Chip } from '@mui/material';
import { masks } from '@rm-monorepo/utils';

const ListagemHospedagens = () => {
  const { dataHospedagens } = useListagemHospedagens();
  const { hospedagens } = useHospedagens();

  const _renderEmptyState = useMemo(() => {
    if (hospedagens === null) {
      return <EmptyStateSemHospedagens />;
    } else {
      return <EmptyStateSearch />;
    }
  }, [hospedagens]);

  const _status = useCallback((status: number) => {
    switch (status) {
      case 0:
        return <Chip style={{ width: 100 }} label="Ativo" color="info" />;
      case 1:
        return <Chip style={{ width: 100 }} label="Finalizado" color="success" />;
      default:
        return <Chip style={{ width: 100 }} label="Cancelado" color="error" />;
    }
  }, []);

  return (
    <PaperDataTable>
      {dataHospedagens && dataHospedagens?.length > 0 ? (
        <DataTable
          colunas={colunasHospedagens}
          data={dataHospedagens.map((hospedagem) => {
            const valorTotal = hospedagem.Financeiro.reduce((acc, curr) => {
              return acc + curr.valor;
            }, 0);

            return {
              ...hospedagem,
              cliente: hospedagem?.Cliente?.nome,
              quarto: hospedagem?.Quarto?.identificacao,
              dataEntrada: dayjs(hospedagem?.dataEntrada).format('DD/MM/YYYY'),
              dataSaida: dayjs(hospedagem?.dataSaida).format('DD/MM/YYYY'),
              status: _status(hospedagem?.status),
              valor: masks.valor(valorTotal),
            };
          })}
        />
      ) : (
        _renderEmptyState
      )}
    </PaperDataTable>
  );
};

export default ListagemHospedagens;
