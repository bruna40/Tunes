<<<<<<< HEAD
import React, { Component } from 'react';
import Header from '../components/Header';
import { getMusics } from '../services/musicsAPI';
import MusicCard from '../components/Carregando';

export default class Album extends Component {
  state = { 
    artist:{},
    musicList: [],
  }

  render() {
    const { artist, musicList } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        Album
        <ul>
          {musicList.map((artists, index) => (
            <li key={ index }>
              <MusicCard
                trackName={ artists.trackName }
                previewUrl={ artists.previewUrl }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
=======
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MusicCards from '../components/MusicCards';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';

const Album = () => {
  const { id } = useParams();

  const [idMusica, setIdMusica] = useState([]);
  const [musicasMarcadas, setMusicasMarcadas] = useState([]);
  const [existe, setExiste] = useState(false);

  const pegarMusicas = async () => {
    setMusicasMarcadas(await getFavoriteSongs());
    const musica = await getMusics(id);
    setIdMusica(musica);
    setExiste(true);
  };

  useEffect(() => {
    setIdMusica([]);
    pegarMusicas();
  }, [id]);

  return (
    <>
      <Header />
      {existe && (
        <div data-testid="page-album">
          <h1 data-testid="artist-name">{idMusica[0].artistName}</h1>
          <h2 data-testid="album-name">{idMusica[0].collectionName}</h2>
          {idMusica.map((item) => (
            <MusicCards
              key={ item.collectionId }
              trackName={ item.trackName }
              previewUrl={ item.previewUrl }
              trackId={ item.trackId }
              marcados={ musicasMarcadas }
              currSong={ { ...item } }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Album;
>>>>>>> lucas-ferreira-pinto-a-project-trybetunes
