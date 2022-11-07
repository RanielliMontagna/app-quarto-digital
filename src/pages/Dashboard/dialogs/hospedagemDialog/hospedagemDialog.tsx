import dayjs from 'dayjs';

import type { HospedagemDialogProps } from './hospedagemDialog.types';

import { Grid, CircularProgress, Chip, Divider } from '@mui/material';
import { BiPlus } from 'react-icons/bi';

import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { masks } from '@rm-monorepo/utils';
import { Button } from '@rm-monorepo/button/lib/button/src';

import useHospedagemDialog from './useHospedagemDialog';
import { useTheme } from 'hooks';

import { AdicionarProdutoDialog } from './adicionarProdutoDialog/adicionarProdutoDialog';
import { AdicionarServicoDialog } from './adicionarServicoDialog/adicionarServicoDialog';

const HospedagemDialog = (props: HospedagemDialogProps) => {
  const { coresExtras } = useTheme();
  const {
    valoresHospedagem,
    hospedagem,
    adicionarProdutoDialog,
    adicionarServicoDialog,
    setAdicionarProdutoDialog,
    setAdicionarServicoDialog,
    atualizarHospedagem,
    handleCheckout,
  } = useHospedagemDialog(props);

  if (!hospedagem) return <CircularProgress />;

  return (
    <Modal
      open
      onClose={props.handleClose}
      titulo={`Hospedagem - Quarto ${props.quarto?.identificacao}`}
      size="lg"
      footer={{
        botaoPrimario: {
          children: 'Check-out',
          onClick: handleCheckout,
        },
        botaoSecundario: {
          children: 'Fechar',
          onClick: props.handleClose,
          variant: 'outlined',
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Grid container spacing={1}>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography>Situação da hospedagem:</Typography>
              <Chip label={dayjs(hospedagem?.dataSaida) > dayjs() ? 'Ativa' : 'Atrasada'} color="info" size="small" />
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography weight="bold">Hóspede:</Typography>
              <Typography>{hospedagem?.Cliente?.nome}</Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography weight="bold">Telefone:</Typography>
              <Typography>{masks.phone(hospedagem?.Cliente?.telefone)}</Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography weight="bold">Período:</Typography>
              <Typography>{`${dayjs(hospedagem?.dataEntrada).format('DD/MM/YYYY')} - ${dayjs(
                hospedagem?.dataSaida
              ).format('DD/MM/YYYY')}`}</Typography>
            </Grid>
            {hospedagem.observacao && (
              <Grid item xs={12} display="flex" alignItems="center" gap={1}>
                <Typography weight="bold">Observações:</Typography>
                <Typography>{hospedagem?.observacao}</Typography>
              </Grid>
            )}
            <Grid item xs={12} marginTop={2} display="flex" alignItems="center" gap={1}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<BiPlus size={18} />}
                onClick={() => setAdicionarServicoDialog(true)}
              >
                Serviço
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<BiPlus size={18} />}
                onClick={() => setAdicionarProdutoDialog(true)}
              >
                Produto
              </Button>
            </Grid>
            <Grid item xs={12} marginTop={2} display="flex" alignItems="center" gap={1} color={coresExtras.cinzaClaro}>
              <Typography>Criado em:</Typography>
              <Typography>
                {dayjs(hospedagem?.criadoEm).format('DD/MM/YYYY HH:mm')} por {hospedagem?.Usuario.nome}
              </Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1} color={coresExtras.cinzaClaro}>
              <Typography>Alterado em:</Typography>
              <Typography>
                {dayjs(hospedagem?.alteradoEm).format('DD/MM/YYYY HH:mm')} por {hospedagem?.Usuario.nome}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid container spacing={1}>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography weight="normal" size="lg">
                Resumo
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider orientation="horizontal" />
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography style={{ width: 120 }}>Nº de diárias:</Typography>
              <Typography>{valoresHospedagem.qtdDiarias}</Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography style={{ width: 120 }}>Valor da diária:</Typography>
              <Typography>{masks.valor(valoresHospedagem.diaria)}</Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography style={{ width: 120 }}>Produtos:</Typography>
              <Typography>{masks.valor(valoresHospedagem.produtos)}</Typography>
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography style={{ width: 120 }}>Serviços:</Typography>
              <Typography>{masks.valor(valoresHospedagem.servicos)}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider orientation="horizontal" />
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={1}>
              <Typography weight="bold" style={{ width: 120 }}>
                Total:
              </Typography>
              <Typography weight="bold">{masks.valor(valoresHospedagem.total)}</Typography>
            </Grid>
          </Grid>
        </Grid>
        {adicionarProdutoDialog && (
          <AdicionarProdutoDialog
            onClose={() => setAdicionarProdutoDialog(false)}
            atualizarHospedagem={atualizarHospedagem}
            idHospedagem={props.quarto?.hospedagem?.id}
          />
        )}
        {adicionarServicoDialog && (
          <AdicionarServicoDialog
            onClose={() => setAdicionarServicoDialog(false)}
            atualizarHospedagem={atualizarHospedagem}
            idHospedagem={props.quarto?.hospedagem?.id}
          />
        )}
      </Grid>
    </Modal>
  );
};

export { HospedagemDialog };
