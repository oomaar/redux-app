import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <h1>This is my fancy app</h1>
      <h3>{user ? `User loggedin as ${user}` : "No user Logged in"}</h3>
      <Login setUser={setUser} />
    </div>
  );
}

export default App;
