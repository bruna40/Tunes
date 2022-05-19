import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <form>
          <input type="text" data-testid="login-name-input" />
          <button type="button" data-testid="login-submit-button">
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
