import { memo } from 'react';

import { Typography } from '@rm-monorepo/typography/lib/typography/src';

import { CardBody, CardHeader, ContainerCard, TypographyWithEllipis } from './cardQuarto.styles';

import { IQuarto } from 'store/quartos';
import { BiCalendar, BiUser } from 'react-icons/bi';
import dayjs from 'dayjs';

const CardQuarto = ({ identificacao }: IQuarto) => {
  return (
    <ContainerCard>
      <CardHeader>
        <Typography weight="bold">{String(identificacao).padStart(3, '0')}</Typography>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div>
            <BiUser size="24" />
          </div>
          <TypographyWithEllipis weight="bold" style={{ whiteSpace: 'nowrap' }}>
            Oscar no flamengo
          </TypographyWithEllipis>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div>
            <BiCalendar size="24" />
          </div>
          <TypographyWithEllipis size="sm">{dayjs().format('DD/MM/YYYY')}</TypographyWithEllipis>
        </div>
      </CardBody>
    </ContainerCard>
  );
};

export default memo(CardQuarto);

