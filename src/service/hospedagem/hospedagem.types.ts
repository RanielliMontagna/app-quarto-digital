export interface IAdicionarHospedagem {
  codigoCliente: number;
  codigoQuarto: number;
  dataEntrada: string;
  dataSaida: string;
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
