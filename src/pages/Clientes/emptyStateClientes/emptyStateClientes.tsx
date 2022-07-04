import { EmptyState } from 'components';
import { IoAdd } from 'react-icons/io5';
import { useClientes } from 'store/clientes';

export const EmptyStateSemClientes = () => {
  const emptyState = './assets/svgs/clientes/emptyState.svg';
  const { setAdicionarEditarCliente } = useClientes();

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhum cliente cadastrado"
      descricao={
        <>
          Adicione clientes para fazer o controle de suas reservas <br />e acompanhar o andamento do seu negócio.
        </>
      }
      botao={{
        children: 'Novo cliente',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setAdicionarEditarCliente({ open: true }),
      }}
    />
  );
};

export const EmptyStateSearch = () => {
  const emptyState = './assets/svgs/clientes/emptyStateSearch.svg';

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhum cliente encontrado"
      descricao={
        <>
          Não foi possível encontrar o cliente que você está procurando.
          <br />
          Verifique se o nome está correto e tente novamente.
        </>
      }
    />
  );
};
