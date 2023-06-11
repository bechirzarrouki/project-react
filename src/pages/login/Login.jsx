import React, { useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const handleSubmit = (event) => {
    setLogin('');
    setPassword('');
    if(login == 1 && password ==1)
      history('/admin');
    else
      if(login == 2 && password == 2)
        history('/designer');
      else
        if(login == 3 && password == 3)
          history('/chefprojet');
        else 
          if(login == 4 && password ==4)
            history('/community')
          else{
            alert('changer les inputs');
            return false;
          }
  };

  return (
    <div class="conteudo">
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div class="conteudo__cartao">
        <h1 class="login">login</h1>
        <div class="caixa__input">
        <span >Login</span>
        <input
          type="text"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        </div>
        <br></br>
        <div class="caixa__input">
        <span>Password</span>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <br></br>
        <input type="submit" class="btn__acessar" value="LOGIN" />
        </div>
      </form>
    </div>
  );
}
