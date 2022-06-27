import type { ThunkStatefulAction } from 'store/store';
import produtosActions from '../actions';

import appActions from '../../app/actions';
import { buscarProdutos } from 'service';

const fetchProdutos = (): ThunkStatefulAction => async (dispatch) => {
  dispatch(appActions.toggleLoading(true));
  try {
    const { data } = await buscarProdutos();
    if (data) {
      dispatch(produtosActions.storeProdutos(data));
      dispatch(appActions.toggleLoading(false));
    }
  } catch (err) {
    dispatch(appActions.handleErrors(err));
  }
};

export default fetchProdutos;
