interface Billing {
  free: boolean;
  database: boolean;
}

interface Extra {}

interface Qsa {
  nome: string;
  qual: string;
}

interface Atividades {
  text: string;
  code: string;
}

export interface ICnpj {
  atividade_principal: Atividades[];
  data_situacao: string;
  complemento: string;
  tipo: string;
  nome: string;
  uf: string;
  telefone: string;
  atividades_secundarias: Atividades[];
  qsa: Qsa[];
  situacao: string;
  bairro: string;
  logradouro: string;
  numero: string;
  cep: string;
  municipio: string;
  fantasia: string;
  porte: string;
  abertura: string;
  natureza_juridica: string;
  cnpj: string;
  ultima_atualizacao: string;
  status: string;
  email: string;
  efr: string;
  motivo_situacao: string;
  situacao_especial: string;
  data_situacao_especial: string;
  capital_social: string;
  extra: Extra;
  billing: Billing;
}

