import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">Study Point</div>
        <div className="course-card">
          <div className="course-info">
            <div className="Course">Course</div>
            <div className="course-title">JavaScript <br /> Fundamentals</div>
            <div className="view-all">View all chapters {'>'}</div>
          </div>
          <div className="chapter-info">
            <div className="chapter-title">Chapter 1</div>
            <div className="chapter-description">JavaScript Introduction...</div>
            <button className="continue-button">Continue</button>
          </div>
        </div>
        <button className="explore-more">Explore more</button>
      </div>
    </div>
  );
}

export default App
