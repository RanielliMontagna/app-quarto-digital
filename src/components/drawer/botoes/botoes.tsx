import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { OpcoesMenu } from '../drawer.static';
import * as styled from '../drawer.styles';
import crypto from 'crypto';

const Botoes = () => {
  const titleTooltip = (title: string) => <h3 style={{ fontWeight: 500, fontSize: '16px' }}>{title}</h3>;
  const navigate = useNavigate();

  return (
    <styled.DivBotoes>
      <div>
        {OpcoesMenu.map((value) => {
          return (
            <Tooltip
              key={crypto.randomBytes(8).toString('hex')}
              title={titleTooltip(value.titulo)}
              placement="right"
              arrow
            >
              <styled.BotaoDrawer onClick={() => navigate(value.caminho)}>{value.icone}</styled.BotaoDrawer>
            </Tooltip>
          );
        })}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}></div>
    </styled.DivBotoes>
  );
};

export default Botoes;
