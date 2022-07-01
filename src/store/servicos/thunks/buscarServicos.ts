import type { ThunkStatefulAction } from 'store/store';
import produtosActions from '../actions';

import appActions from '../../app/actions';
import { buscarServicos } from 'service';
import type { BuscarServicosOptions } from 'service';

const fetchServicos =
  (params: BuscarServicosOptions): ThunkStatefulAction =>
  async (dispatch) => {
    dispatch(appActions.toggleLoading(true));
    try {
      const { data } = await buscarServicos(params);

      if (data) {
        if (data.length === 0) {
          if (params.search) {
            dispatch(produtosActions.storeServicos(data));
          } else {
            dispatch(produtosActions.storeServicos(null));
          }
        } else {
          dispatch(produtosActions.storeServicos(data));
        }

        dispatch(appActions.toggleLoading(false));
      }
    } catch (err) {
      dispatch(appActions.handleErrors(err));
    }
  };

export default fetchServicos;
