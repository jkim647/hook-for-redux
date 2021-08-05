import react, {useState} from 'react'

import {Page1} from '../src/component/page1';
import {Page2} from '../src/component/page2';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);



  return (
    <div className="App">
    <Page1/>
    <Page2/>
    </div>
  );
}

export default App
