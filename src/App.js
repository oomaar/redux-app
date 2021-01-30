import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Login setUser={setUser} />
    </div>
  );
}

export default App;
