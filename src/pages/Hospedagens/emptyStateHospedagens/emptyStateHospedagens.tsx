import { EmptyState } from 'components';
import { useNavigate } from 'react-router-dom';

export const EmptyStateSemHospedagens = () => {
  const emptyState = './assets/svgs/hospedagens/emptyState.svg';
  const _navigate = useNavigate();

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhuma hospedagem cadastrada"
      descricao={
        <>
          Adicione um nova hospedagem para controlar o seu estabelecimento. Para isso volta para a <b>dashboard</b>!
          <br />
        </>
      }
      botao={{
        children: 'Voltar para a dashboard',
        onClick: () => _navigate('/dashboard'),
      }}
    />
  );
};

export const EmptyStateSearch = () => {
  const emptyState = './assets/svgs/hospedagens/emptyStateSearch.svg';

  return (
    <EmptyState
      imagem={emptyState}
      titulo="Nenhuma hospedagem encontrada"
      descricao={
        <>
          Não foi possível encontrar a hospedagem que você está procurando.
          <br />
          Verifique se o nome está correto e tente novamente.
        </>
      }
    />
  );
};
