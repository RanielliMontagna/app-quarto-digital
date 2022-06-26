import { Dispatch } from 'react';
import { useDispatch as useReduxDispatch } from 'react-redux';

import type { DispatchFunction } from '../../store';

const useDispatch = () => useReduxDispatch<Dispatch<DispatchFunction>>();

export default useDispatch;
