import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage('id');

  return (
    <div className="App">
      {id}
      <Login onIdSubmit={setId} />
      19.33
    </div>
  );
}

export default App;
