import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

const MusicCards = (props) => {
  const { trackName, previewUrl, trackId } = props;
  const [ativo, setAtivo] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = async () => {
    setIsChecked(!isChecked);
    setAtivo(true);
    await addSong(trackId);
    setAtivo(false);
  };
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
                checked={ isChecked }
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
};
