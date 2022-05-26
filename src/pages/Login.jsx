<<<<<<< HEAD
import React, { Component } from 'react';
import Carregando from '../components/Carregando';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  state ={
    name: '',
    loading: false,
    disabled: true,
    history: [],
  }

  async componentDidMount() {
    const { name, history } = this.state;
    this.setState({ loading: true });
    await createUser({ name });
    this.setState({ loading: false });
    history.push('/search');
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ name: value}, () => {
      this.validateName();
    });
  }

  validateName() {
    const { name } = this.state;
    const numberName = 3;
    if (name.length >= numberName) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { loading, name, disabled } = this.state;
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
              onChange={ this.handleChange }
            />
            <button
              type="submit"
              data-testid="login-submit-button"
              onClick={ this.handleChange }
              disabled={ disabled }
            >
              Entrar
            </button>
          </form>
        )}

      </div>
    );
  }
}
=======
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
>>>>>>> lucas-ferreira-pinto-a-project-trybetunes
