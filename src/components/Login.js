import React from 'react';
import { useStateValue } from '../StateProvider';

function Login({ setUser }) {
    const [store, dispatch] = useStateValue();

    const loginToApp = () => {
        // Do some Login stuff
        dispatch({
            type: "SET_USER",
            user: "Omaar_5",
        })
    }

    return (
        <div>
            <h1>I am the login Component</h1>
            <button onClick={loginToApp}>Login</button>
        </div>
    )
}

export default Login
