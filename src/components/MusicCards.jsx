import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

const MusicCards = (props) => {
  const { trackName, previewUrl, trackId, currSong } = props;
  const [ativo, setAtivo] = useState(false);
  const [favSongs, setFavSongs] = useState([]);

  const loadFavoritedSongs = () => {
    setFavSongs(JSON.parse(localStorage.getItem('favorite_songs')));
  };

  const handleCheckbox = async ({ target: { checked } }) => {
    setAtivo(true);
    if (checked) {
      await addSong(currSong);
    } else {
      await removeSong(currSong);
    }
    setFavSongs(JSON.parse(localStorage.getItem('favorite_songs')));
    setAtivo(false);
  };

  useEffect(() => {
    loadFavoritedSongs();
  }, []);
  return (
    <div>
      {trackName && (
        <>
          <h3>{trackName}</h3>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            <code>audio</code>
          </audio>
          {ativo ? (
            <Loading />
          ) : (
            <label htmlFor={ `checkbox-music-${trackId}` }>
              Favorita
              <input
                type="checkbox"
                data-testid={ `checkbox-music-${trackId}` }
                checked={ favSongs.some((item) => item.trackId === trackId) }
                onChange={ handleCheckbox }
              />
            </label>
          )}
        </>
      )}
    </div>
  );
};

export default MusicCards;

MusicCards.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  currSong: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};
