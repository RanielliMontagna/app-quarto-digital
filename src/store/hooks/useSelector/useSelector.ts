import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';

import type { State } from '../../store';

const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

export default useSelector;
