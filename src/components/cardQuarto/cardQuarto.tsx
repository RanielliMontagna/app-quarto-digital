import { memo, useMemo } from 'react';
import { BiCalendar, BiCalendarX, BiCheck, BiPhone, BiUser } from 'react-icons/bi';
import dayjs from 'dayjs';

import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { masks } from '@rm-monorepo/utils';

import { CardBody, CardHeader, ContainerCard, TypographyWithEllipis } from './cardQuarto.styles';
import type { CardQuartoProps } from './cardQuarto.types';

const CardQuarto = ({ identificacao, status, hospedagem, novaHospedagem, id, onClick }: CardQuartoProps) => {
  const conteudoCard = useMemo(() => {
    if (hospedagem === null) {
      return (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div>
              <BiCheck size="24" />
            </div>
            <TypographyWithEllipis weight="bold" style={{ whiteSpace: 'nowrap' }}>
              Quarto vago
            </TypographyWithEllipis>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div>
              <BiCalendarX size="24" />
            </div>
            <TypographyWithEllipis style={{ whiteSpace: 'nowrap' }}>Sem reserva</TypographyWithEllipis>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div>
              <BiUser size="24" />
            </div>
            <TypographyWithEllipis weight="bold" style={{ whiteSpace: 'nowrap' }}>
              {hospedagem.Cliente.nome}
            </TypographyWithEllipis>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div>
              <BiPhone size="24" />
            </div>
            <TypographyWithEllipis style={{ whiteSpace: 'nowrap' }}>
              {masks.phone(hospedagem.Cliente.telefone)}
            </TypographyWithEllipis>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div>
              <BiCalendar size="24" />
            </div>
            <TypographyWithEllipis size="sm">
              {dayjs(hospedagem.dataEntrada).format('DD/MM/YYYY')} - {dayjs(hospedagem.dataSaida).format('DD/MM/YYYY')}
            </TypographyWithEllipis>
          </div>
        </>
      );
    }
  }, [hospedagem]);

  return (
    <ContainerCard
      status={status}
      novaHospedagem={novaHospedagem?.open}
      onClick={onClick}
      selecionado={novaHospedagem?.quarto?.id === id}
    >
      <CardHeader status={status}>
        <Typography weight="bold">{String(identificacao).padStart(3, '0')}</Typography>
      </CardHeader>
      <CardBody>{conteudoCard}</CardBody>
    </ContainerCard>
  );
};

export default memo(CardQuarto);
