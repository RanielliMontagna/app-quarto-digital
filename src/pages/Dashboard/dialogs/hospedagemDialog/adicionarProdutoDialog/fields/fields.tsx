import { useEffect } from 'react';

import { Grid } from '@mui/material';
import { Autocomplete, TextField } from '@rm-monorepo/fields/lib/fields/src';

import { ProdutosActions, useProdutos } from 'store/produtos';
import { useDispatch } from 'store/hooks';
import { useFormContext } from 'react-hook-form';
import { AdicionarProdutoDialogFormValues } from '../adicionarProdutoDialog.types';
import { masks } from '@rm-monorepo/utils';
import { required } from '@rm-monorepo/utils/lib/rules/rules';

const Fields = () => {
  const _dispatch = useDispatch();
  const { produtos } = useProdutos();
  const {
    watch,
    formState: { errors },
  } = useFormContext<AdicionarProdutoDialogFormValues>();

  useEffect(() => {
    if (!produtos?.length) {
      _dispatch(ProdutosActions.buscarProdutos({}));
    }
  }, [_dispatch, produtos]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Autocomplete
          name="produto"
          label="Produto"
          variant="outlined"
          options={
            produtos?.map((produto) => ({
              label: produto.nome,
              value: produto.id,
              preco: produto.preco,
              nome: produto.nome,
            })) || []
          }
          required
          rules={required}
          error={Boolean(errors.produto)}
          helperText={errors.produto?.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="quantidade"
          label="Quantidade"
          mask="numero"
          required
          rules={required}
          error={Boolean(errors?.quantidade)}
          helperText={errors?.quantidade?.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="preco"
          label="Preço"
          mask="valor"
          value={watch()?.produto?.preco ? masks.valor(watch()?.produto?.preco) : ''}
          disabled
        />
      </Grid>
    </Grid>
  );
};

export { Fields };
