import type { ThunkStatefulAction } from 'store/store';
import produtosActions from '../actions';

import appActions from '../../app/actions';
import { buscarQuartos } from 'service';
import type { BuscarQuartosOptions } from 'service';

const fetchQuartos =
  (params: BuscarQuartosOptions): ThunkStatefulAction =>
  async (dispatch) => {
    dispatch(appActions.toggleLoading(true));
    try {
      const { data } = await buscarQuartos(params);

      if (data) {
        if (data.length === 0) {
          if (params.search) {
            dispatch(produtosActions.storeQuartos(data));
          } else {
            dispatch(produtosActions.storeQuartos(null));
          }
        } else {
          dispatch(produtosActions.storeQuartos(data));
        }

        dispatch(appActions.toggleLoading(false));
      }
    } catch (err) {
      dispatch(appActions.handleErrors(err));
    }
  };

export default fetchQuartos;

