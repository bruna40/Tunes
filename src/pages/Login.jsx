import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Carregando from '../components/Carregando';

const Login = () => {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const HandleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const min = 3;
    if (name.length >= min) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name]);

  const Logar = async (event) => {
    setLoading(true);
    event.preventDefault();
    await createUser({ name });
    setLoading(false);
    setLogged(true);
  };

  return (
    <div data-testid="page-login">
      {loading ? (
        <Carregando />
      ) : (
        <form>
          <input
            type="text"
            data-testid="login-name-input"
            value={ name }
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
