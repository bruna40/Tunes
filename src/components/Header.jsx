import React, { useEffect, useState } from 'react';
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
        </header>
      )}
    </div>
  );
};

export default Header;
