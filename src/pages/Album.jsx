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
