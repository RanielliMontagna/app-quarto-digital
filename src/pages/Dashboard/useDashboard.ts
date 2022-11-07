import { useEffect, useState } from 'react';

import { useDispatch } from 'store/hooks';
import { IQuarto, QuartosActions, useQuartos } from 'store/quartos';
import type { HospedagemDialogState } from './dialogs/hospedagemDialog/hospedagemDialog.types';

const useDashboard = () => {
  const _dispatch = useDispatch();
  const { quartos } = useQuartos();

  const [novaHospedagem, _setNovaHospedagem] = useState(false);
  const handleCloseNovaHospedagem = () => _setNovaHospedagem(false);
  const openNovaHospedagem = () => _setNovaHospedagem(true);

  const [hospedagem, _setHospedagem] = useState<HospedagemDialogState>({ open: false });
  const handleCloseHospedagem = () => _setHospedagem({ open: false });
  const handleOpenHospedagem = (quarto: IQuarto) => _setHospedagem({ open: true, quarto });

  useEffect(() => {
    if (quartos === null || quartos?.length === 0) {
      _dispatch(QuartosActions.buscarQuartos({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    quartos,
    novaHospedagem,
    handleCloseNovaHospedagem,
    openNovaHospedagem,
    hospedagem,
    handleCloseHospedagem,
    handleOpenHospedagem,
  };
};

export default useDashboard;
