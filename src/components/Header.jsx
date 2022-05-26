<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header data-testid="header-component">
        <h4>TrybeTunes</h4>
        <nav>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </nav>
      </header>
    );
  }
}
=======
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../styles/Header.scss';

const Header = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const recuperaNome = async () => {
    setUser(await getUser().then((usuario) => usuario.name));
    setLoading(false);
  };

  useEffect(() => {
    recuperaNome();
  }, []);

  return (
    <div data-testid="header-component">
      {loading ? (
        <Loading />
      ) : (
        <header className="header-component">
          <section className="header-component__user">
            <h2 data-testid="header-user-name">{user}</h2>
          </section>
          <section className="header-component__links">
            <Link to="/search" className="link" data-testid="link-to-search">
              Search
            </Link>
            <Link to="/favorites" className="link" data-testid="link-to-favorites">
              Favorites
            </Link>
            <Link to="/profile" className="link" data-testid="link-to-profile">
              Profile
            </Link>
          </section>
        </header>
      )}
    </div>
  );
};

export default Header;
>>>>>>> lucas-ferreira-pinto-a-project-trybetunes
