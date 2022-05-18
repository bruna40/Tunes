import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MusicCards from '../components/MusicCards';
import getMusics from '../services/musicsAPI';

const Album = () => {
  const { id } = useParams();

  const [idMusica, setIdMusica] = useState([]);

  const pegarMusicas = async () => {
    setIdMusica(await getMusics(id));
  };

  useEffect(() => {
    pegarMusicas();
  }, []);

  return (
    <>
      <Header />
      {idMusica.length !== 0 && (
        <div data-testid="page-album">
          <h1 data-testid="artist-name">{idMusica[0].artistName}</h1>
          <h2 data-testid="album-name">{idMusica[0].collectionName}</h2>
          {idMusica.map((item) => (
            <MusicCards
              key={ item.collectionId }
              trackName={ item.trackName }
              previewUrl={ item.previewUrl }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Album;
