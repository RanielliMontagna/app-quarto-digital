import { IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';

export const ItemsMenuAppBar = [
  {
    label: 'Configurações',
    route: '/configuracoes',
    icon: <IoSettingsOutline size={16} />,
  },
  {
    label: 'Minha conta',
    route: '/minha-conta',
    icon: <IoPersonOutline size={16} />,
  },
];

