import dayjs from 'dayjs';

import type { NovaHospedagemProps, INovaHospedagemFormValues } from './novaHospedagem.types';

import { adicionarHospedagem } from 'service/hospedagem/hospedagem';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { useNovaHospedagemContext } from './novaHospedagem.context';
import { QuartosActions } from 'store/quartos';

const useNovaHospedagem = ({ handleCloseNovaHospedagem }: NovaHospedagemProps) => {
  const _dispatch = useDispatch();
  const { step, setStep } = useNovaHospedagemContext();

  const _handleAdicionarNovaHospedagem = async (values: INovaHospedagemFormValues) => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      const response = await adicionarHospedagem({
        codigoCliente: Number(values.hospede?.value),
        codigoQuarto: Number(values.quarto?.id),
        dataEntrada: dayjs(values.dataEntrada).format('YYYY-MM-DDTHH:mm:ssZ'),
        dataSaida: dayjs(values.dataSaida).format('YYYY-MM-DDTHH:mm:ssZ'),
      });

      if (response.data) {
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Hospedagem adicionada com sucesso!',
          })
        );
        _dispatch(QuartosActions.buscarQuartos({}));
        handleCloseNovaHospedagem();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    } finally {
      _dispatch(AppActions.toggleLoading(false));
    }
  };

  const onSubmit = (data: INovaHospedagemFormValues) => {
    if (step !== 3) {
      setStep((step) => step + 1);
    } else {
      _handleAdicionarNovaHospedagem(data);
    }
  };

  const onBack = () => {
    if (step !== 0) {
      setStep((step) => step - 1);
    } else {
      handleCloseNovaHospedagem();
    }
  };

  return {
    onSubmit,
    onBack,
  };
};

export { useNovaHospedagem };
