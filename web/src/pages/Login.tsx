import { FormEvent, useContext, useState } from 'react';
import '../styles/login.css';
import { AuthContext } from '../interfaces/IAuthContext';
import { Link, Navigate } from 'react-router-dom';

function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { SignIn, Signed } = useContext(AuthContext);

    const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
      // Se o usuário não estiver autenticado, chame a função de SignIn
      e.preventDefault();
      const data = {
        email,
        password
      };

      await SignIn(data);
    };

    if(Signed) {
      return <Navigate to="/home"/>
    } else {
        return (
            <div className="container">
              <div className="container-login">
                <div className="wrap-login">
                  <form onSubmit={handleSignIn} className="login-form">

                      <span className="login-form-title">Bem Vindo!</span>

                      <span className="login-form-title"><img src="" alt="" /></span>
          
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
                          <button type='submit' className="login-form-btn">Login</button>
                      </div>

                      <div className="text-center">
                          <span className="txt1">Não possui conta?</span>
                          <Link className="txt2" to='/register'>Criar conta.</Link>
                      </div>

                  </form>
                </div>
              </div>
            </div>
        );
      };
};

export default Login;
