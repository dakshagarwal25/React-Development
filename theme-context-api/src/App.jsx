// import React from 'react';
// import MainContent from './contextapi/MainContent';
// import { ThemeProvider } from './contextapi/ThemeContext';

// const App = () => {
//   return (
//     <ThemeProvider>
//       <MainContent />
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import MainContent from './contextapi/MainContent';
import { ThemeContext, theme } from './contextapi/ThemeContext';

const App = () => {
  const [bgColor, setBgColor] = useState(theme.green.backgroundColor);
  const [fontColor, setFontColor] = useState(theme.green.color);

  const [formBgColor, setFormBgColor] = useState(theme.green.backgroundColor);
  const [formFontColor, setFormFontColor] = useState(theme.green.color);

  const handleBgColorChange = (e) => {
    setFormBgColor(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFormFontColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBgColor(formBgColor);
    setFontColor(formFontColor);
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div>
        <MainContent bgColor={bgColor} fontColor={fontColor} />
        <form onSubmit={handleSubmit}>
          <label>
            Select background color:
            <input type="color" value={formBgColor} onChange={handleBgColorChange} />
          </label>
          <br />
          <label>
            Select font color:
            <input type="color" value={formFontColor} onChange={handleFontColorChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
