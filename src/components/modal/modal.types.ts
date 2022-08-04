import { ButtonProps } from '@rm-monorepo/button/lib/button/src';
import { Size } from 'shared';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  titulo: string;
  size?: Size;
  children: React.ReactElement;
  footer?: {
    botaoPrimario?: ButtonProps;
    botaoSecundario?: ButtonProps;
    extra?: React.ReactElement;
  };
}

