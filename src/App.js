import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage();

  return (
    <div className="App">
      {id}
      <Login onIdSubmit={setId} />
    </div>
  );
}

export default App;
