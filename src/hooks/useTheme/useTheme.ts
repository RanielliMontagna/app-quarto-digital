import { useTheme as useThemeST } from 'styled-components';
import { ThemeType } from 'themes';

const useTheme = () => {
  const theme = useThemeST();

  return theme as ThemeType;
};

export default useTheme;
