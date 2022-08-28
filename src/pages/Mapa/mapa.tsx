import { MapaContainer } from './mapa.styles';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { PaginaBase } from 'components';

const Mapa = () => {
  return (
    <PaginaBase titulo="Mapa">
      <MapaContainer>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" height="100%" />
      </MapaContainer>
    </PaginaBase>
  );
};

export default Mapa;

