import { useState, useEffect } from 'react';
import { addSong, removeSong } from '../../services/favoriteSongsAPI.js';
import PropTypes from 'prop-types';
import { MusicCard, MusicTitle, MusicAudio, MusicCheckbox } from './style.js';

export function MusicCards({ trackName, previewUrl, trackId, currSong }) {

  const [favSongs, setFavSongs] = useState([]);

  const loadFavoritedSongs = () => {
    setFavSongs(JSON.parse(localStorage.getItem('favorite_songs')));
  };

  const handleCheck = async ({ target: { checked } }) => {
    if (checked) {
      await addSong(currSong);
    } else {
      await removeSong(currSong);
    }
    setFavSongs(JSON.parse(localStorage.getItem('favorite_songs')));
  };

  useEffect(() => {
    loadFavoritedSongs();
  }, []);
  return (
    <MusicCard>
      {trackName && (
        <>
          <MusicTitle>{trackName}</MusicTitle>
          <MusicAudio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            <code>audio</code>
          </MusicAudio>
          { favSongs && (
            <MusicCheckbox
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              checked={ favSongs.some((item) => item.trackId === trackId) }
              onChange={ handleCheck }
            />
          )}
        </>
      )}
    </MusicCard>
  );
}

MusicCards.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  currSong: PropTypes.object.isRequired,
};