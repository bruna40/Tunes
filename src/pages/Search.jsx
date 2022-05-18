import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';

const Search = () => {
  const [artista, setArtista] = useState('');
  const [disabled, setDisabled] = useState(true);

  const HandleChange = (event) => {
    setArtista(event.target.value);
  };

  const Logar = async (event) => {
    setLoading(true);
    event.preventDefault();
    await createUser({ name: nome });
    setLoading(false);
    setLogged(true);
  };

  useEffect(() => {
    const numeroDeLetrasParaHabilitarButton = 2;
    if (artista.length >= numeroDeLetrasParaHabilitarButton) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [artista]);

  return (
    <>
      <Header />
      <form>
        <input
          type="text"
          data-testid="search-artist-input"
          value={ artista }
          onChange={ HandleChange }
        />
        <button
          type="submit"
          data-testid="search-artist-button"
          onClick={ Logar }
          disabled={ disabled }
        >
          Procurar
        </button>
      </form>
    </>
  );
};

export default Search;
