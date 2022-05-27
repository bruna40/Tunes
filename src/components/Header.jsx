import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

const Header = () => {
  const [user, setUser] = useState({});
  const [carregou, setCarregou] = useState(true);

  const recuperaNome = async () => {
    setUser(await getUser().then((usuario) => usuario.name));
    setCarregou(false);
  };

  useEffect(() => {
    recuperaNome();
  }, []);

  return (
    <div data-testid="header-component">
      {carregou ? (
        <Carregando />
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
