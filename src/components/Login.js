import React from 'react';

function Login({ setUser }) {

    const loginToApp = () => {
        // Do some Login stuff
        setUser("Sanik");
    }

    return (
        <div>
            <h1>I am the login Component</h1>
            <button onClick={loginToApp}>Login</button>
        </div>
    )
}

export default Login
