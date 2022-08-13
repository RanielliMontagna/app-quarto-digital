import React from 'react';
import { UseWindowSizeHookResult, UseWindowSizeProps } from './useWindowSize.types';

const useWindowSize = ({ defaultValue }: UseWindowSizeProps = {}) => {
  const isClient = typeof window !== 'undefined';

  const _getSize = React.useCallback(() => {
    if (!isClient) {
      if (defaultValue) {
        const { width = 0, height = 0 } = defaultValue;
        return { width, height };
      }
      return { width: 0, height: 0 };
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, [isClient, defaultValue]);

  const [_windowSize, _setWindowSize] = React.useState<UseWindowSizeHookResult>(_getSize());

  const _handleResize = React.useCallback(() => {
    _setWindowSize(_getSize());
  }, [_setWindowSize, _getSize]);

  React.useEffect(() => {
    if (!isClient) {
      return () => {};
    }

    window.addEventListener('resize', _handleResize);

    return () => {
      window.removeEventListener('resize', _handleResize);
    };
  }, [_handleResize, isClient]);

  return _windowSize;
};

export default useWindowSize;
