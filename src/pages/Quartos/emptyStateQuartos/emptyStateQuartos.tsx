import { EmptyState } from 'components';
import { IoAdd } from 'react-icons/io5';
import { useQuartos } from 'store/quartos';

export const EmptyStateSemQuartos = () => {
  const emptyState = './assets/svgs/quartos/emptyState.svg';
  const { setAdicionarEditarQuarto } = useQuartos();

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhum quarto cadastrado"
      descricao={
        <>
          Adicione um novo quarto para controlar o seu estabelecimento. <br />
        </>
      }
      botao={{
        children: 'Novo quarto',
        variant: 'outlined',
        startIcon: <IoAdd size="18" />,
        onClick: () => setAdicionarEditarQuarto({ open: true }),
      }}
    />
  );
};

export const EmptyStateSearch = () => {
  const emptyState = './assets/svgs/quartos/emptyStateSearch.svg';

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhum quarto encontrado"
      descricao={
        <>
          Não foi possível encontrar o quarto que você está procurando.
          <br />
          Verifique se a identificação está correto e tente novamente.
        </>
      }
    />
  );
};
