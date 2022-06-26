export type Cliente = {};

export interface ClientesSlice {
  clientes: Cliente[];
}

export interface ClientesSliceWithCallbacks extends ClientesSlice {
  novoCliente: boolean;
  setNovoCliente: React.Dispatch<React.SetStateAction<boolean>>;
}
