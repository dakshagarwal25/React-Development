// import { createContext, useState } from 'react';

// export const ThemeContext = createContext();

// export const theme = {
//   dark: {
//     backgroundColor: 'black',
//     color: 'white',
//   },
//   light: {
//     backgroundColor: 'white',
//     color: 'black',
//   },
//   red: {
//     backgroundColor: 'lightsalmon',
//     color: 'red',
//   },
//   green: {
//     backgroundColor: 'lightgreen',
//     color: 'darkgreen',
//   },
// };

// export const ThemeProvider = ({ children }) => {
//   const [bgColor, setBgColor] = useState(theme.green.backgroundColor);
//   const [fontColor, setFontColor] = useState(theme.green.color);

//   const changeTheme = (background, font) => {
//     setBgColor(background);
//     setFontColor(font);
//   };

//   return (
//     <ThemeContext.Provider value={{ bgColor, fontColor, changeTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { createContext } from 'react';

export const ThemeContext = createContext();

export const theme = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
  red: {
    backgroundColor: 'lightsalmon',
    color: 'red',
  },
  green: {
    backgroundColor: 'lightgreen',
    color: 'darkgreen',
  },
};
