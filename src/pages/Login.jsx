import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

const Login = () => {
  const [nome, setNome] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const HandleChange = (event) => {
    setNome(event.target.value);
  };

  useEffect(() => {
    const numeroDeLetrasParaHabilitarButton = 3;
    if (nome.length >= numeroDeLetrasParaHabilitarButton) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nome]);

  const Logar = async (event) => {
    setLoading(true);
    event.preventDefault();
    await createUser({ name: nome });
    setLoading(false);
    setLogged(true);
  };

  return (
    <div data-testid="page-login">
      {loading ? (
        <Loading />
      ) : (
        <form>
          <input
            type="text"
            data-testid="login-name-input"
            value={ nome }
            onChange={ HandleChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            onClick={ Logar }
            disabled={ disabled }
          >
            Entrar
          </button>
        </form>
      )}
      {logged && <Redirect to="/search" />}
    </div>
  );
};

export default Login;
