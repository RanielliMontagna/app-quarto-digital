import { CardQuarto, PaginaBase } from 'components';

import { ContainerCards } from './dashboard.styles';
import { QuartosProvider } from 'store/quartos';
import useDashboard from './useDashboard';

import { IoAdd } from 'react-icons/io5';

const Dashboard = () => {
  const { quartos } = useDashboard();

  return (
    <PaginaBase
      titulo="Dashboard"
      button={{
        children: 'Nova hospedagem',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => null,
      }}
    >
      <ContainerCards>
        <div>
          {quartos?.map((quarto) => (
            <CardQuarto key={quarto.id} {...quarto} />
          ))}
        </div>
      </ContainerCards>
    </PaginaBase>
  );
};

const DashboardProvider = () => {
  return (
    <QuartosProvider>
      <Dashboard />
    </QuartosProvider>
  );
};

export default DashboardProvider;

