import React from 'react';
import './App.css';
import { Login } from './components/Login';

function App() {
  const [id, setId] = React.useState();

  return (
    <div className="App">
      {console.log(id)}

      <Login onIdSubmit={setId} />
    </div>
  );
}

export default App;
