import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';

import { CardQuarto, PaginaBase } from 'components';
import { ContainerCards } from './dashboard.styles';

import { QuartosProvider } from 'store/quartos';
import { ClientesProvider } from 'store/clientes';

import useDashboard from './useDashboard';
import { NovaHospedagem } from './dialogs/novaHospedagem/novaHospedagem';

const Dashboard = () => {
  const { quartos } = useDashboard();

  const [_novaHospedagem, setNovaHospedagem] = useState(false);
  const handleClose = () => setNovaHospedagem(false);

  return (
    <PaginaBase
      titulo="Dashboard"
      button={{
        children: 'Nova hospedagem',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovaHospedagem(true),
      }}
    >
      <ContainerCards>
        <div>
          {quartos?.map((quarto) => (
            <CardQuarto key={quarto.id} {...quarto} />
          ))}
        </div>
        {_novaHospedagem && <NovaHospedagem handleCloseNovaHospedagem={handleClose} />}
      </ContainerCards>
    </PaginaBase>
  );
};

const DashboardProvider = () => {
  return (
    <QuartosProvider>
      <ClientesProvider>
        <Dashboard />
      </ClientesProvider>
    </QuartosProvider>
  );
};

export default DashboardProvider;

