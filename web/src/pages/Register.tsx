
// https://www.youtube.com/watch?v=MH2MO9eivoc&t=213s&ab_channel=JovemProgramador

import { useState } from 'react';
import '../styles/login.css';
import {api} from "../services/api";

function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");

    const handleSaveUser = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const data = {
          email,
          password,
          name
      };

      const response = await api.post("/create", data);
      console.log(response.data)
    };
  

  return (
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={handleSaveUser} className="login-form">

                <span className="login-form-title">Bem Vindo!</span>

                <span className="login-form-title"><img src="" alt="" /></span>
    
                <div className="wrap-input">
                    <input 
                    className={name !== "" ? 'has-val input' : 'input'} 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Name"></span>
                </div>
                
                <div className="wrap-input">
                    <input 
                    className={email !== "" ? 'has-val input' : 'input'} 
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input 
                    className={password !== "" ? 'has-val input' : 'input'} 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-login-form-btn">
                    <button type="submit" className="login-form-btn">Cadastrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta?</span>

                    <a href="#" className="txt2">Criar conta.</a>
                </div>

            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
