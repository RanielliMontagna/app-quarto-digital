import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';

import type { HospedagemDialogProps } from './hospedagemDialog.types';

import { Grid, CircularProgress, Chip, Divider } from '@mui/material';
import { BiPlus, BiPrinter } from 'react-icons/bi';
import { MdBlock } from 'react-icons/md';
import { IoCheckmarkOutline } from 'react-icons/io5';

import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { masks } from '@rm-monorepo/utils';
import { Button } from '@rm-monorepo/button/lib/button/src';

import useHospedagemDialog from './useHospedagemDialog';
import { useTheme } from 'hooks';

import { AdicionarProdutoDialog } from './adicionarProdutoDialog/adicionarProdutoDialog';
import { AdicionarServicoDialog } from './adicionarServicoDialog/adicionarServicoDialog';
import { CancelarHospedagemDialog } from './cancelarHospedagemDialog/cancelarHospedagemDialog';
import { Recibo } from './recibo/recibo';
import { useWindowSize } from 'utils';

const HospedagemDialog = (props: HospedagemDialogProps) => {
  const { coresExtras } = useTheme();
  const { width } = useWindowSize();

  const {
    valoresHospedagem,
    hospedagem,
    adicionarProdutoDialog,
    adicionarServicoDialog,
    cancelarHospedagemDialog,
    setAdicionarProdutoDialog,
    setAdicionarServicoDialog,
    setCancelarHospedagemDialog,
    atualizarHospedagem,
    handleCheckout,
    handleCancelarHospedagem,
    handleGerarRecibo,
  } = useHospedagemDialog(props);

  const _generateRootImage = useCallback(() => {
    if (!hospedagem?.id) return;
    ReactDOM.render(<Recibo hospedagem={hospedagem} />, document.getElementById('recibo'));
  }, [hospedagem]);

  useEffect(() => {
    _generateRootImage();
  }, [_generateRootImage, hospedagem]);

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
          startIcon: <IoCheckmarkOutline size={18} />,
        },
        botaoSecundario: {
          children: 'Fechar',
          onClick: props.handleClose,
          variant: 'outlined',
          hide: width < 600,
        },
        extra: (
          <Button
            variant="outlined"
            color="danger"
            onClick={handleCancelarHospedagem}
            startIcon={<MdBlock size={18} />}
          >
            {width < 600 ? 'Cancelar' : 'Cancelar hospedagem'}
          </Button>
        ),
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
            <Grid item xs={12} display="flex" alignItems="center" gap={1} justifyContent="space-between">
              <Typography weight="normal" size="lg">
                Resumo
              </Typography>
              <Button size="md" variant="outlined" startIcon={<BiPrinter size={18} />} onClick={handleGerarRecibo}>
                Recibo
              </Button>
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
        {cancelarHospedagemDialog.open && (
          <CancelarHospedagemDialog
            onClose={() => setCancelarHospedagemDialog({ open: false })}
            onCloseHospedagem={props.handleClose}
            hospedagem={hospedagem}
          />
        )}
      </Grid>
    </Modal>
  );
};

export { HospedagemDialog };
