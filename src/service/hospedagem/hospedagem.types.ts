export interface IAdicionarHospedagem {
  codigoCliente: number;
  codigoQuarto: number;
  dataEntrada: string;
  dataSaida: string;
}

/**
 * 0 - Todos
 * 1 - Ativos
 * 2 - Reservados
 * 3 - Finalizados
 * 4 - Cancelados
 */
export type IStatus = 0 | 1 | 2 | 3 | 4;

export interface BuscarHospedagensOptions {
  search?: string;
  status?: IStatus;
}

export interface DadosHospedagem {
  id: number;
  dataEntrada: string;
  dataSaida: string;
  observacao: string;
  status: number;

  Cliente: {
    id: number;
    nome: string;
    telefone: string;
    cpfCnpj: string;
    email: string;
  };

  ProdutosHospedagem: {
    id: number;
    produtoNome: string;
    produtoPreco: number;
    quantidade: number;
  }[];

  ServicosHospedagem: {
    id: number;
    servicoNome: string;
    servicoPreco: number;
    quantidade: number;
  }[];

  Quarto: {
    identificacao: number;
    diaria: number;
  };

  alteradoEm: string;
  criadoEm: string;

  Usuario: {
    nome: string;
  };
}

export interface IAdicionarProduto {
  codigoHospedagem: number;
  codigoProduto: number;
  quantidade: number;
}

export interface IAdicionarServico {
  codigoHospedagem: number;
  codigoServico: number;
  quantidade: number;
}

export interface ICheckout {
  codigoHospedagem: number;
  valor: number;
}

export interface IAlterarStatusHospedagem {
  codigoHospedagem: number;
  status: number;
}
