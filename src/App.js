import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import { createContext, useState } from 'react';

export const COUNTER_CONTEXT = createContext()

function App() {

  const [counter, setCount] = useState(0);
  const value = { counter, setCount }

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        <Parent></Parent>
      </div>
    </COUNTER_CONTEXT.Provider>

  );
}

export default App;
