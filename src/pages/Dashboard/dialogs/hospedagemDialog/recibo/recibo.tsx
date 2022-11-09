import { Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { ReciboContainer } from './recibo.styles';
import type { DadosHospedagem } from 'service';
import { masks } from '@rm-monorepo/utils';
import { azulQD } from 'themes';

interface ReciboProps {
  hospedagem: DadosHospedagem;
}

const Recibo = ({ hospedagem }: ReciboProps) => {
  const qtdProdutos = hospedagem?.ProdutosHospedagem?.length || 0;
  const qtdServicos = hospedagem?.ServicosHospedagem?.length || 0;

  const _diasHospedagem = dayjs(hospedagem?.dataSaida).diff(dayjs(hospedagem?.dataEntrada), 'day');
  const _totalHospedagem = hospedagem.Quarto.diaria * _diasHospedagem;

  const _totalProdutos = hospedagem.ProdutosHospedagem?.reduce((acc, produto) => {
    return acc + produto.produtoPreco * produto.quantidade;
  }, 0);

  const _totalServicos = hospedagem.ServicosHospedagem?.reduce((acc, servico) => {
    return acc + servico.servicoPreco * servico.quantidade;
  }, 0);

  return (
    <ReciboContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">
            Recibo
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Nº {hospedagem?.id}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Typography variant="h5" fontWeight="bold">
                Hóspede
              </Typography>
              <div style={{ width: '100%', height: 1, backgroundColor: '#bebebe' }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Nome: <span style={{ fontWeight: 'normal' }}>{hospedagem?.Cliente?.nome}</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                CPF/CNPJ: <span style={{ fontWeight: 'normal' }}>{hospedagem?.Cliente?.cpfCnpj || '-'}</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Telefone: <span style={{ fontWeight: 'normal' }}>{masks.phone(hospedagem?.Cliente?.telefone)}</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                E-mail: <span style={{ fontWeight: 'normal' }}>{hospedagem?.Cliente?.email}</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Typography variant="h5" fontWeight="bold">
                Reserva
              </Typography>
              <div style={{ width: '100%', height: 1, backgroundColor: '#bebebe' }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Data de entrada:{' '}
                <span style={{ fontWeight: 'normal' }}>{dayjs(hospedagem?.dataEntrada).format('DD/MM/YYYY')}</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Quarto: <span style={{ fontWeight: 'normal' }}>{hospedagem?.Quarto?.identificacao}</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Data de saída:{' '}
                <span style={{ fontWeight: 'normal' }}>{dayjs(hospedagem?.dataSaida).format('DD/MM/YYYY')}</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontWeight="bold">
                Diária: <span style={{ fontWeight: 'normal' }}>{masks.valor(hospedagem?.Quarto.diaria)}</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Typography variant="h5" fontWeight="bold" noWrap overflow="unset">
                Produtos e serviços
              </Typography>
              <div style={{ width: '100%', height: 1, backgroundColor: '#bebebe' }} />
            </Grid>
            {qtdProdutos > 0 || qtdServicos > 0 ? (
              <>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container spacing={1} style={{ padding: '8px 8px' }}>
                        <Grid item xs={4}>
                          <Typography variant="body1" fontWeight="bold">
                            Nome
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body1" fontWeight="bold">
                            Quantidade
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body1" fontWeight="bold">
                            Valor unitário
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container gap={1}>
                        <Grid item xs={12}>
                          <Grid container>
                            {hospedagem?.ProdutosHospedagem?.map((produto, index) => (
                              <Grid
                                item
                                xs={12}
                                key={produto.id}
                                style={{
                                  backgroundColor: index % 2 === 0 ? `${azulQD}20` : `${azulQD}40`,
                                }}
                              >
                                <Grid container spacing={1} style={{ padding: '8px 8px' }}>
                                  <Grid item xs={4}>
                                    <Typography variant="body1">{produto.produtoNome}</Typography>
                                  </Grid>
                                  <Grid item xs={4}>
                                    <Typography variant="body1">{produto.quantidade}</Typography>
                                  </Grid>
                                  <Grid item xs={4}>
                                    <Typography variant="body1">{masks.valor(produto.produtoPreco)}</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container>
                            {hospedagem?.ServicosHospedagem?.map((servico, index) => (
                              <Grid
                                item
                                xs={12}
                                key={servico.id}
                                style={{
                                  backgroundColor: index % 2 === 0 ? `${azulQD}20` : `${azulQD}40`,
                                }}
                              >
                                <Grid container spacing={1} style={{ padding: '8px 8px' }}>
                                  <Grid item xs={4}>
                                    <Typography variant="body1">{servico.servicoNome}</Typography>
                                  </Grid>
                                  <Grid item xs={4}>
                                    <Typography variant="body1">{servico.quantidade}</Typography>
                                  </Grid>
                                  <Grid item xs={4}>
                                    <Typography variant="body1">{masks.valor(servico.servicoPreco)}</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight="bold">
                  Nenhum produto ou serviço adicionado
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Typography variant="h5" fontWeight="bold">
                Resumo
              </Typography>
              <div style={{ width: '100%', height: 1, backgroundColor: '#bebebe' }} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                fontWeight="bold"
                style={{ display: 'flex', width: 300, justifyContent: 'space-between' }}
              >
                <div style={{ width: 150 }}>Total reserva:</div>{' '}
                <div style={{ fontWeight: 'normal' }}>{masks.valor(_totalHospedagem)}</div>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                fontWeight="bold"
                style={{ display: 'flex', width: 300, justifyContent: 'space-between' }}
              >
                <div style={{ width: 150 }}>Total consumido:</div>{' '}
                <div style={{ fontWeight: 'normal' }}>{masks.valor(_totalProdutos + _totalServicos)}</div>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div style={{ width: 300, height: 1, backgroundColor: '#bebebe' }} />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                fontWeight="bold"
                style={{ display: 'flex', width: 300, justifyContent: 'space-between' }}
              >
                <div style={{ width: 150 }}>Total geral:</div>{' '}
                <div>{masks.valor(_totalHospedagem + _totalProdutos + _totalServicos)}</div>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'space-between',
            padding: 64,
            gap: 64,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 8,
            }}
          >
            <div style={{ width: '100%', height: 1, backgroundColor: '#000000' }} />
            <div>
              <Typography fontSize={18}>{hospedagem.Cliente.nome} (assinatura)</Typography>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 8,
            }}
          >
            <div style={{ width: '100%', height: 1, backgroundColor: '#000000' }} />
            <div>
              <Typography fontSize={18}>
                Total a pagar:{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {masks.valor(_totalHospedagem + _totalProdutos + _totalServicos)}
                </span>
              </Typography>
            </div>
          </div>
        </div>
      </Grid>
    </ReciboContainer>
  );
};

export { Recibo };
