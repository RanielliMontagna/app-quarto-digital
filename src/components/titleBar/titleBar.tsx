import { FC, memo } from 'react';
import { MenuItem } from '@szhsin/react-menu';
import { Menu, MenuItemConteudo } from 'components';
import { IoMenuSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import * as styled from './titleBar.styles';

interface TitleBarProps {
  rota: 'home' | 'contato' | 'login';
}

const TitleBar: FC<TitleBarProps> = ({ rota }) => {
  const navigate = useNavigate();

  return (
    <styled.TitleBar>
      <styled.DivInterna>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="quarto">Quarto</div>
          <div className="digital">Digital</div>
        </div>
        <styled.DivOpcoes className="menuWeb">
          <styled.Opcoes onClick={() => navigate('/')}>Home {rota === 'home' && <styled.Sublinhado />}</styled.Opcoes>
          <styled.Opcoes onClick={() => navigate('/contato')}>
            Contato {rota === 'contato' && <styled.Sublinhado />}
          </styled.Opcoes>
          <styled.Opcoes onClick={() => navigate('/login')}>
            Entrar {rota === 'login' && <styled.Sublinhado />}
          </styled.Opcoes>
        </styled.DivOpcoes>
        <styled.DivOpcoes className="menuMobile">
          <Menu
            align="end"
            menuButton={
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <IoMenuSharp size={24} />
              </div>
            }
          >
            <>
              {rota !== 'home' && <MenuItem onClick={() => navigate('/')}>{MenuItemConteudo('Home')}</MenuItem>}
              {rota !== 'contato' && (
                <MenuItem onClick={() => navigate('/contato')}>{MenuItemConteudo('Contato')}</MenuItem>
              )}
              <MenuItem onClick={() => navigate('/login')}>{MenuItemConteudo('Login')}</MenuItem>
            </>
          </Menu>
        </styled.DivOpcoes>
      </styled.DivInterna>
    </styled.TitleBar>
  );
};

export default memo(TitleBar);
