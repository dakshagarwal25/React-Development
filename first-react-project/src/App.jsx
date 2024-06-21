import React from 'react';
import './App.css';

function App() {
  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">
          I know quite certainly that I <br /> myself have no special talent;<br /> curiosity, 
          <span className="highlight">obsession</span> and <br /> dogged endurance, combined <br />
          with self-criticism have <br /> brought me to my ideas.
        </p>
        <p className="quote-author"><i>Albert Einstein</i></p>
      </div>
    </div>
  );
}

export default App;
