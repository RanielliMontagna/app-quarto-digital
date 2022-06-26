import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { State } from 'store/store';

const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export default useSelector;
