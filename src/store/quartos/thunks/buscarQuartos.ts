import type { ThunkStatefulAction } from 'store/store';
import quartosActions from '../actions';

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
            dispatch(quartosActions.storeQuartos(data));
          } else {
            dispatch(quartosActions.storeQuartos(null));
          }
        } else {
          dispatch(quartosActions.storeQuartos(data));
        }

        dispatch(appActions.toggleLoading(false));
      }
    } catch (err) {
      dispatch(appActions.handleErrors(err));
    }
  };

export default fetchQuartos;
