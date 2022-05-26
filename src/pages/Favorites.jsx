<<<<<<< HEAD
import React, { Component } from 'react';
import Header from '../components/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        Favorites
      </div>
    );
  }
}
=======
import React from 'react';
import Header from '../components/Header';

const Favorites = () => (
  <>
    <Header />
    <div data-testid="page-favorites" />
  </>
);

export default Favorites;
>>>>>>> lucas-ferreira-pinto-a-project-trybetunes
