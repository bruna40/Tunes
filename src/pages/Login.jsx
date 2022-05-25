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
