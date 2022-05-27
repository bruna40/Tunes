//  trocando class por function com ajuda da rockeseat e de colegas
import React, { useState, useEffect } from 'react';
// useEffect e useState são hooks do react, o useEffect recebe dois parametros
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from '../components/Carregando';

const Search = () => {
  const [name, setName] = useState('');
  const [nameSave, setNameSave] = useState('');
  const [listMusic, setListMusic] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [carregou, setCarregou] = useState(false);
  const [musica, setMusica] = useState(false);

  const HandleChange = (event) => {
    setName(event.target.value);
    setNameSave(event.target.value);
  };

  const validaNome = async (event) => {
    event.preventDefault();
    setCarregou(true);

    setListMusic(await searchAlbumsAPI(name));
    setCarregou(false);
    setMusica(true);
    setName('');
  };

  useEffect(() => {
    const min = 2;
    if (name.length >= min) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name]);

  return (
    <>
      <Header />
      {carregou ? (
        <Carregando />
      ) : (
        <>
          <form data-testid="page-search">
            <input
              type="text"
              data-testid="search-artist-input"
              value={ name }
              onChange={ HandleChange }
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              onClick={ validaNome }
              disabled={ disabled }
            >
              Procurar
            </button>
          </form>
          {musica && (
            <div>
              <p>
                { `Resultado de álbuns de: ${nameSave}`}
              </p>
              {listMusic.map((song) => (
                <Link
                  to={ `/album/${song.collectionId}` }
                  data-testid={ `link-to-album-${song.collectionId}` }
                  key={ song.collectionId }
                >
                  <img
                    src={ song.artworkUrl100 }
                    alt={ song.collectionName }
                  />
                  <p>
                    {song.artistName}
                  </p>
                  <p>
                    {song.artistId}
                  </p>
                  <p>
                    {song.collectionName}
                  </p>
                  <p>
                    {song.collectionPrice}
                  </p>
                </Link>
              ))}
              {listMusic.length === 0 && <p>Nenhum álbum foi encontrado</p>}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Search;
