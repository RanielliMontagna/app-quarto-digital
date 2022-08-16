import { CardQuarto, PaginaBase } from 'components';
import { ContainerCards } from './dashboard.styles';

export const Dashboard = () => {
  return (
    <PaginaBase titulo="Dashboard">
      <ContainerCards>
        {new Array(10).fill(0).map((_, i) => (
          <CardQuarto key={i} identificador={i} />
        ))}
      </ContainerCards>
    </PaginaBase>
  );
};

export default Dashboard;

