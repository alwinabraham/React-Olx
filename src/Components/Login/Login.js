import React, { useState, useContext,useEffect } from 'react';
import {AuthContext,FirebaseContext} from '../../store/FirebaseContext'

import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const { user } = useContext(AuthContext)

  useEffect(()=>{
    const checkLogin = () => {
    if(user){
      history.push("/")
    }else{
      history.push("/login")
    }
    }
    checkLogin();
  })

  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/');
    }).catch((error) => {
      alert(error.message)
    })
  }

  const signup = () =>{
    history.push("/signup");
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
}

export default Login;
