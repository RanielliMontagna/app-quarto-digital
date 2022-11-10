import { useState } from 'react';
import { throttle } from 'lodash';

import { toRem } from '@rm-monorepo/utils';
import { Grid, MenuItem, TextField } from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';

import { PaginaBase } from 'components';
import { HospedagensActions } from 'store/hospedagens';
import { useDispatch } from 'store/hooks';
import { IStatus } from 'service';
import { useTheme } from 'hooks';

import HospedagensProvider from 'store/hospedagens/hospedagensProvider/hospedagensProvider';
import ListagemHospedagens from './listagemHospedagens/listagemHospedagens';
import { selectOptions } from './hospedagens.static';

export const Hospedagens = () => {
  const _dispatch = useDispatch();
  const { cores } = useTheme();

  const [status, setStatus] = useState<IStatus | null>(null);
  const [search, setSearch] = useState<string>('');

  const handleSearch = throttle(
    async (term: string) =>
      await _dispatch(HospedagensActions.buscarHospedagens({ search: term, status: status || 0 })),
    500,
    { leading: false }
  );

  return (
    <PaginaBase
      titulo="Hospedagens"
      right={
        <Grid container gap={2}>
          <Grid item>
            <TextField
              select
              label="Status"
              defaultValue={selectOptions[0].value}
              InputProps={{
                style: {
                  fontSize: toRem(14),
                  width: 200,
                  height: 36,
                  backgroundColor: cores.terciaria,
                  transition: 'all 0.3s ease-in-out',
                },
              }}
              onChange={(e) => {
                setStatus(Number(e.target.value || 0) as IStatus);
                _dispatch(
                  HospedagensActions.buscarHospedagens({
                    status: Number(e.target.value || 0) as IStatus,
                    search,
                  })
                );
              }}
            >
              {selectOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              placeholder="Buscar hospedagens"
              onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <div style={{ display: 'flex', alignItems: 'center', width: '32px' }}>
                    <HiOutlineSearch size={18} />
                  </div>
                ),
                style: {
                  fontSize: toRem(14),
                  width: 250,
                  height: 36,
                  backgroundColor: cores.terciaria,
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            />
          </Grid>
        </Grid>
      }
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
