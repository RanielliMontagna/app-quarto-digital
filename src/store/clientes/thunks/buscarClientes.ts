import type { ThunkStatefulAction } from 'store/store';
import clientesActions from '../actions';

import appActions from '../../app/actions';
import { buscarClientes } from 'service';
import type { BuscarClientesOptions } from 'service';

const fetchClientes =
  (params: BuscarClientesOptions): ThunkStatefulAction =>
  async (dispatch) => {
    dispatch(appActions.toggleLoading(true));
    try {
      const { data } = await buscarClientes(params);

      if (data) {
        if (data.length === 0) {
          if (params.search) {
            dispatch(clientesActions.storeClientes(data));
          } else {
            dispatch(clientesActions.storeClientes(null));
          }
        } else {
          dispatch(clientesActions.storeClientes(data));
        }

        dispatch(appActions.toggleLoading(false));
      }
    } catch (err) {
      dispatch(appActions.handleErrors(err));
    }
  };

export default fetchClientes;
