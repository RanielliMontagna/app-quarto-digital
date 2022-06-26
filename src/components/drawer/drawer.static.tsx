import { VscPackage } from 'react-icons/vsc';
import { AiOutlineAppstore } from 'react-icons/ai';
import { MdOutlineRoomService, MdPeopleOutline } from 'react-icons/md';
import { IoBedOutline } from 'react-icons/io5';
import { BiLineChart } from 'react-icons/bi';

export const OpcoesMenu = [
  {
    titulo: 'Dashboard',
    caminho: '/dashboard',
    icone: <AiOutlineAppstore size={24} />,
  },
  {
    titulo: 'Indicadores',
    caminho: '/indicadores',
    icone: <BiLineChart size={24} />,
  },
  {
    titulo: 'Quartos',
    caminho: '/quartos',
    icone: <IoBedOutline size={24} />,
  },
  {
    titulo: 'Clientes',
    caminho: '/clientes',
    icone: <MdPeopleOutline size={24} />,
  },
  {
    titulo: 'Produtos',
    caminho: '/produtos',
    icone: <VscPackage size={24} />,
  },
  {
    titulo: 'Serviços',
    caminho: '/servicos',
    icone: <MdOutlineRoomService size={24} />,
  },
];
