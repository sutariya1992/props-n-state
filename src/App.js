import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// import './styles.css';

function App() {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText('');
  };

  return (
    <div className='inputbox'>
      <input type="text" value={text} onChange={handleInputChange} />
      <h2>{text}</h2>
      <button onClick={handleClearClick}>CLEAR</button>
    </div>
  );
}

export default App;
