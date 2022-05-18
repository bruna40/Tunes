import React from 'react';
import PropTypes from 'prop-types';

const MusicCards = (props) => {
  const { trackName, previewUrl } = props;
  return (
    <div>
      {trackName && (
        <>
          <h3>{trackName}</h3>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            <code>audio</code>
          </audio>
        </>
      )}
    </div>
  );
};

export default MusicCards;

MusicCards.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};
