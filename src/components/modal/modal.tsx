import { FC, memo } from 'react';
import { Button } from 'components';
import { MdClose } from 'react-icons/md';
import { useApp } from 'store';
import * as styled from './modal.styles';
import { ModalProps } from './modal.types';

const Modal: FC<ModalProps> = ({ titulo, size, onClose, children, open, footer }) => {
  const { tema } = useApp();

  return (
    <>
      {open && (
        <styled.Backdrop>
          <styled.Modal size={size ?? 'md'} tema={tema}>
            <styled.ModalHeader>
              <styled.TituloModal>{titulo}</styled.TituloModal>
              <styled.DivBotaoFechar onClick={onClose}>
                <MdClose size={32} />
              </styled.DivBotaoFechar>
            </styled.ModalHeader>
            <styled.Conteudo>{children}</styled.Conteudo>
            {footer && (
              <styled.Footer>
                <div>{footer.extra}</div>
                {(footer?.botaoPrimario || footer?.botaoSecundario) && (
                  <styled.BotoesPrincipais>
                    {footer.botaoSecundario && (
                      <div style={{ marginLeft: '16px' }}>
                        <Button {...footer.botaoSecundario} />
                      </div>
                    )}
                    {footer.botaoPrimario && (
                      <div style={{ marginLeft: '16px' }}>
                        <Button type="submit" {...footer.botaoPrimario} />
                      </div>
                    )}
                  </styled.BotoesPrincipais>
                )}
              </styled.Footer>
            )}
          </styled.Modal>
        </styled.Backdrop>
      )}
    </>
  );
};

export default memo(Modal);
