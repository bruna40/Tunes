import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MusicCards from '../components/MusicCards';
import getMusics from '../services/musicsAPI';

const Album = () => {
  const { id } = useParams();

  const [idMusica, setIdMusica] = useState([]);
  const [existe, setExiste] = useState(false);

  const pegarMusicas = async () => {
    const musica = await getMusics(id);
    setIdMusica(musica);
    setExiste(true);
  };

  useEffect(() => {
    pegarMusicas();
  }, []);

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
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Album;
