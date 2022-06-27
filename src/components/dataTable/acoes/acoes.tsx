import { IAcoes } from '../dataTable.types';

import { MenuItem, Tooltip } from '@mui/material';
import { RiMenu4Fill } from 'react-icons/ri';

import { Menu, MenuItemConteudo } from 'components';

const Acoes = ({ acoes }: { acoes: IAcoes[] }) => {
  return (
    <Tooltip title="Ações" placement="left" arrow enterDelay={500}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
        <Menu
          align="start"
          menuButton={
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <RiMenu4Fill size={18} />
            </div>
          }
        >
          <>
            {acoes?.map(({ id, label, onClick, startNode }) => (
              <MenuItem key={id} onClick={onClick}>
                {MenuItemConteudo(label, startNode)}
              </MenuItem>
            ))}
          </>
        </Menu>
      </div>
    </Tooltip>
  );
};

export default Acoes;
