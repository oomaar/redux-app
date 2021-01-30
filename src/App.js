import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import { useStateValue } from './StateProvider';


function App() {
  // const [user, setUser] = useState(null);
  const [store, dispatch] = useStateValue();
  // const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <h1>This is my fancy app</h1>
      <h3>{store.user ? `User loggedin as ${store.user}` : "No user Logged in"}</h3>
      <Login />
    </div>
  );
}

export default App;
