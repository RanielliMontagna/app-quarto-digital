import { IoAdd } from 'react-icons/io5';

import { Button } from '@rm-monorepo/button/lib/button/src';
import { CardQuarto, PaginaBase } from 'components';
import { ContainerCards } from './dashboard.styles';

import { QuartosProvider, useQuartos } from 'store/quartos';
import { ClientesProvider } from 'store/clientes';

import useDashboard from './useDashboard';
import { NovaHospedagem } from './dialogs/novaHospedagem/novaHospedagem';
import { center } from 'themes/globalStyles';
import { Typography } from '@mui/material';
import { useWindowSize } from 'utils';
import { HospedagemDialog } from './dialogs/hospedagemDialog/hospedagemDialog';
import { ServicosProvider } from 'store/servicos';
import { ProdutosProvider } from 'store/produtos';

const Dashboard = () => {
  const emptyState = './assets/svgs/dashboard/emptyState.svg';
  const { width } = useWindowSize();

  const {
    quartos,
    novaHospedagem,
    handleCloseNovaHospedagem,
    openNovaHospedagem,
    hospedagem,
    handleCloseHospedagem,
    handleOpenHospedagem,
  } = useDashboard();
  const { setAdicionarEditarQuarto } = useQuartos();

  const _conteudo = () => {
    if (!quartos?.length) {
      return (
        <div style={{ ...center, flexDirection: 'column', height: '100%', textAlign: 'center', gap: 16 }}>
          <img src={emptyState} alt="Nenhum quarto cadastrado" style={{ maxWidth: 300, width: '80%' }} />
          <div>
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              Bem-vindo ao Quarto Digital!
            </Typography>
            <Typography variant="body1" style={{ fontWeight: 400 }}>
              Para começar a usar o sistema, cadastre um quarto clicando no botão abaixo.
            </Typography>
          </div>
          <Button startIcon={<IoAdd size="18" />} onClick={() => setAdicionarEditarQuarto({ open: true })}>
            Novo quarto
          </Button>
        </div>
      );
    }

    return (
      <div>
        {quartos?.map((quarto) => (
          <CardQuarto
            key={quarto.id}
            {...quarto}
            onClick={() => {
              if (quarto?.hospedagem?.id) handleOpenHospedagem(quarto);
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <PaginaBase
      titulo="Dashboard"
      button={{
        children: 'Nova hospedagem',
        variant: 'outlined',
        startIcon: <IoAdd size="18" />,
        onClick: openNovaHospedagem,
        hide: !quartos?.length,
      }}
      right={
        quartos?.length &&
        width > 650 && (
          <Button
            startIcon={<IoAdd size="18" />}
            variant="outlined"
            onClick={() => setAdicionarEditarQuarto({ open: true })}
          >
            Novo quarto
          </Button>
        )
      }
    >
      <ContainerCards>
        {_conteudo()}
        {novaHospedagem && <NovaHospedagem handleCloseNovaHospedagem={handleCloseNovaHospedagem} />}
        {hospedagem.open && <HospedagemDialog handleClose={handleCloseHospedagem} quarto={hospedagem.quarto} />}
      </ContainerCards>
    </PaginaBase>
  );
};

const DashboardProvider = () => {
  return (
    <QuartosProvider>
      <ClientesProvider>
        <ProdutosProvider>
          <ServicosProvider>
            <Dashboard />
          </ServicosProvider>
        </ProdutosProvider>
      </ClientesProvider>
    </QuartosProvider>
  );
};

export default DashboardProvider;
