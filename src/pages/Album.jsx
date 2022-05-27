import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import MusicCards from '../components/MusicCards';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';

const Album = () => {
  const { id } = useParams();

  const [musica, setMusica] = useState([]);
  const [musicasMarcadas, setMusicasMarcadas] = useState([]);
  const [exist, setExist] = useState(false);

  const pegarMusicas = async () => {
    setMusicasMarcadas(await getFavoriteSongs());
    const music = await getMusics(id);
    setMusica(music);
    setExist(true);
  };

  useEffect(() => {
    setMusica([]);
    pegarMusicas();
  }, [id]);

  return (
    <>
      <Header />
      {exist && (
        <div data-testid="page-album">
          <h1 data-testid="artist-name">{musica[0].artistName}</h1>
          <h2 data-testid="album-name">{musica[0].collectionName}</h2>
          {musica.map((song) => (
            <MusicCards
              key={ song.collectionId }
              trackName={ song.trackName }
              previewUrl={ song.previewUrl }
              trackId={ song.trackId }
              marcados={ musicasMarcadas }
              currSong={ { ...song } }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Album;
