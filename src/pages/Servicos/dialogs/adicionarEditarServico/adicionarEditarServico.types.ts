export interface AdicionarEditarServicoFormValues {
  nome: string;
  preco: number;
}

export interface AdicionarServico extends AdicionarEditarServicoFormValues {}
export interface EditarServico extends AdicionarEditarServicoFormValues {
  id: number;
}
