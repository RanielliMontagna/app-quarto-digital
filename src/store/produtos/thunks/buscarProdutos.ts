import type { ThunkStatefulAction } from 'store/store';
import produtosActions from '../actions';

import appActions from '../../app/actions';
import { buscarProdutos } from 'service';
import type { BuscarProdutosOptions } from 'service';

const fetchProdutos =
  (params: BuscarProdutosOptions): ThunkStatefulAction =>
  async (dispatch) => {
    dispatch(appActions.toggleLoading(true));
    try {
      const { data } = await buscarProdutos(params);

      if (data) {
        if (data.length === 0) {
          if (params.search) {
            dispatch(produtosActions.storeProdutos(data));
          } else {
            dispatch(produtosActions.storeProdutos(null));
          }
        } else {
          dispatch(produtosActions.storeProdutos(data));
        }

        dispatch(appActions.toggleLoading(false));
      }
    } catch (err) {
      dispatch(appActions.handleErrors(err));
    }
  };

export default fetchProdutos;
