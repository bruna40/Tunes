import React from 'react';
import PropTypes from 'prop-types';

const MusicCards = (props) => {
  const { trackName, previewUrl, trackId } = props;
  return (
    <div>
      {trackName && (
        <>
          <h3>{trackName}</h3>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            <code>audio</code>
          </audio>
          <label htmlFor={ `checkbox-music-${trackId}` }>
            Favorita
            <input
              type="checkbox"
              id="track-name"
              data-testid={ `checkbox-music-${trackId}` }
            />
          </label>
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
