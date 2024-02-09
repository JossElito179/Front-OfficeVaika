import { createContext, useReducer } from 'react';
import themeList from '../data/themeList';

const ThemeContext = createContext();
const lightTheme = themeList.light;
const darkTheme = themeList.dark;

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      localStorage.setItem(
        'theme',
        state.theme === lightTheme ? darkTheme : lightTheme
      );
      return {
        theme: state.theme === darkTheme ? lightTheme : darkTheme,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const getInitialTheme = () => {
    return darkTheme;
  };

  const initialState = {
    theme: getInitialTheme(),
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);
  const value = {
    theme: state.theme,
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeContextProvider };
