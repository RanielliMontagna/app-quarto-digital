import { EmptyState } from 'components';
import { IoAdd } from 'react-icons/io5';
import { useServicos } from 'store/servicos';

export const EmptyStateSemServicos = () => {
  const emptyState = './assets/svgs/servicos/emptyState.svg';
  const { setAdicionarEditarServico } = useServicos();

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhum serviço cadastrado"
      descricao={
        <>
          Adicione serviços para fazer o controle <br />
          dos seus gastos e acompanhar suas despesas.
        </>
      }
      botao={{
        children: 'Novo serviço',
        variant: 'outlined',
        startIcon: <IoAdd size="18" />,
        onClick: () => setAdicionarEditarServico({ open: true }),
      }}
    />
  );
};

export const EmptyStateSearch = () => {
  const emptyState = './assets/svgs/servicos/emptyStateSearch.svg';

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhum serviço encontrado"
      descricao={
        <>
          Não foi possível encontrar o serviço que você está procurando.
          <br />
          Verifique se o nome está correto e tente novamente.
        </>
      }
    />
  );
};
