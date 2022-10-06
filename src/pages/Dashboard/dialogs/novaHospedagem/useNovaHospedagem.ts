import { useNovaHospedagemContext } from './novaHospedagem.context';
import type { NovaHospedagemProps } from './novaHospedagem.types';

const useNovaHospedagem = ({ handleCloseNovaHospedagem }: NovaHospedagemProps) => {
  const { step, setStep } = useNovaHospedagemContext();

  const onSubmit = (data: any) => {
    if (step !== 3) {
      setStep((step) => step + 1);
    } else {
      console.log(data);
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

