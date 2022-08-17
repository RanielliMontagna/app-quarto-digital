import { CardQuarto, PaginaBase } from 'components';

import { ContainerCards } from './dashboard.styles';
import { QuartosProvider } from 'store/quartos';
import useDashboard from './useDashboard';

const Dashboard = () => {
  const { quartos } = useDashboard();

  return (
    <PaginaBase titulo="Dashboard">
      <ContainerCards>
        {quartos?.map((quarto) => (
          <CardQuarto key={quarto.id} {...quarto} />
        ))}
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

