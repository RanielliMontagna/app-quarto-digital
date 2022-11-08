import type { ThunkStatefulAction } from 'store/store';
import hospedagensActions from '../actions';

import appActions from '../../app/actions';
import { buscarHospedagens } from 'service';
import type { BuscarHospedagensOptions } from 'service';

const fetchHospedagens =
  (params: BuscarHospedagensOptions): ThunkStatefulAction =>
  async (dispatch) => {
    dispatch(appActions.toggleLoading(true));
    try {
      const { data } = await buscarHospedagens(params);

      if (data) {
        if (data.length === 0) {
          if (params.search) {
            dispatch(hospedagensActions.storeHospedagens(data));
          } else {
            dispatch(hospedagensActions.storeHospedagens(null));
          }
        } else {
          dispatch(hospedagensActions.storeHospedagens(data));
        }

        dispatch(appActions.toggleLoading(false));
      }
    } catch (err) {
      dispatch(appActions.handleErrors(err));
    }
  };

export default fetchHospedagens;
