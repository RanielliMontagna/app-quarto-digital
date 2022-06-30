import { EmptyState } from 'components';
import { IoAdd } from 'react-icons/io5';
import { useProdutos } from 'store/produtos';

export const EmptyStateSemProdutos = () => {
  const emptyState = './assets/svgs/produtos/emptyState.svg';
  const { setAdicionarEditarProduto } = useProdutos();

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhum produto cadastrado"
      descricao={
        <>
          Adicione produtos para fazer o controle <br />
          dos seus gastos e acompanhar suas despesas.
        </>
      }
      botao={{
        children: 'Novo produto',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setAdicionarEditarProduto({ open: true }),
      }}
    />
  );
};

export const EmptyStateSearch = () => {
  const emptyState = './assets/svgs/produtos/emptyStateSearch.svg';

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhum produto encontrado"
      descricao={
        <>
          Não foi possível encontrar o produto que você está procurando.
          <br />
          Verifique se o nome está correto e tente novamente.
        </>
      }
    />
  );
};
