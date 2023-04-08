import './App.css';
import {useEffect, useState} from 'react';
import {init, subscribe} from './socketApi';
import Palette from './components/Palette';

function App() {
  const [activeColor, setActiveColor] = useState('#282c34');

  useEffect (() => {
    init();
    subscribe((color) => {
      setActiveColor(color);
    });
  }, [])

  return (
    <div className="App flex flex-col items-center justify-center" style={{backgroundColor: activeColor}}>
      <div className='content__text'>
        <h1>{activeColor}</h1>
      </div>
      <Palette activeColor={activeColor} />
    </div>
  );
}

export default App;
