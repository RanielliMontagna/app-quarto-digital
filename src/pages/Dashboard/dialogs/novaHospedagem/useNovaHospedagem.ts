import { useNovaHospedagemContext } from './novaHospedagem.context';
import type { NovaHospedagemProps } from './novaHospedagem.types';

const useNovaHospedagem = ({ handleCloseNovaHospedagem }: NovaHospedagemProps) => {
  const { handleSubmit, step, setStep } = useNovaHospedagemContext();

  const onSubmit = handleSubmit((data) => {
    if (step !== 2) {
      setStep((step) => step + 1);
    } else {
      console.log(data);
    }
  });

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

