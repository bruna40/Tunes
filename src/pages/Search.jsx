<<<<<<< HEAD
// import React, { Component } from 'react';
// import Header from '../components/Header';

// export default class Search extends Component {
//   state = {
//     name:'',
//   }

// habilitaBotao = () => {
//   const { name } = this.state;
//   const numeroDois = 2;
//   if (name.length >= numeroDois) {
// }
// }

//   render() {
//     return (
//       <div data-testid="page-search">
//         <Header />
//         <form>
//           <input type="text" data-testid="search-artist-input" />
//           <button
//             type="submit"
//             data-testid="search-artist-button"
//           >
//             Pesquisar
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const Search = () => {
  const [artista, setArtista] = useState('');
  const [artistaSave, setArtistaSave] = useState('');
  const [mostraMusica, setMostraMusica] = useState(false);
  const [listaDeMusica, setListaDeMusica] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const HandleChange = (event) => {
    setArtista(event.target.value);
    setArtistaSave(event.target.value);
  };

  const Procurar = async (event) => {
    event.preventDefault();
    setLoading(true);

    setListaDeMusica(await searchAlbumsAPI(artista));
    setLoading(false);
    setMostraMusica(true);
    setArtista('');
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <form data-testid="page-search">
            <input
              type="text"
              data-testid="search-artist-input"
              value={ artista }
              onChange={ HandleChange }
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              onClick={ Procurar }
              disabled={ disabled }
            >
              Procurar
            </button>
          </form>
          {mostraMusica && (
            <div>
              <h1>
                { `Resultado de álbuns de: ${artistaSave}`}
              </h1>
              {listaDeMusica.map((musica) => (
                <Link
                  to={ `/album/${musica.collectionId}` }
                  data-testid={ `link-to-album-${musica.collectionId}` }
                  key={ musica.collectionId }
                >
                  <li>
                    <img
                      src={ musica.artworkUrl100 }
                      alt={ musica.collectionName }
                    />
                    <h2>
                      Artista:
                      {' '}
                      {musica.artistName}
                    </h2>
                    <h2>
                      ID:
                      {' '}
                      {musica.artistId}
                    </h2>
                    <h3>
                      Album:
                      {' '}
                      {musica.collectionName}
                    </h3>
                    <h3>
                      Preço:
                      {' '}
                      {musica.collectionPrice}
                    </h3>
                  </li>
                </Link>
              ))}
              {listaDeMusica.length === 0 && <h1>Nenhum álbum foi encontrado</h1>}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Search;
>>>>>>> lucas-ferreira-pinto-a-project-trybetunes
