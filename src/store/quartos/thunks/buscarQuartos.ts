import dayjs from 'dayjs';
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

      const quartosWithStatus = data?.map((quarto) => {
        let status = 0;

        if (quarto.hospedagem === null) {
          status = 0;
        } else if (quarto.hospedagem?.status !== 0) {
          status = 0;
        } else if (dayjs(quarto.hospedagem?.dataEntrada).isBefore(dayjs())) {
          status = 1;
        }

        return {
          ...quarto,
          status,
        };
      });

      if (data) {
        if (data.length === 0) {
          if (params.search) {
            dispatch(quartosActions.storeQuartos(quartosWithStatus));
          } else {
            dispatch(quartosActions.storeQuartos(null));
          }
        } else {
          dispatch(quartosActions.storeQuartos(quartosWithStatus));
        }

        dispatch(appActions.toggleLoading(false));
      }
    } catch (err) {
      dispatch(appActions.handleErrors(err));
    }
  };

export default fetchQuartos;
