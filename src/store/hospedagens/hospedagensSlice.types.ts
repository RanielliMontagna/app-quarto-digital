export interface IHospedagem {
  Cliente: {
    id: number;
    nome: string;
    telefone: string;
  };
  Financeiro: {
    valor: number;
  }[];
  Quarto: {
    id: number;
    identificacao: string;
    diaria: number;
  };
  Usuario: {
    nome: string;
  };
  alteradoEm: string;
  criadoEm: string;
  dataEntrada: string;
  dataSaida: string;
  id: number;
  observacao: string;
  status: number;
}

export interface HospedagensSlice {
  hospedagens: IHospedagem[] | null;
}

export interface HospedagensSliceWithCallbacks extends HospedagensSlice {}
