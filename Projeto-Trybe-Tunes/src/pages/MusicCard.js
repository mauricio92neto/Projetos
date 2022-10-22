import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      carregando: false,
      checkar: false,
    };
  }

  musicFavorite = async () => {
    const { data } = this.props;
    this.setState({ carregando: true });
    await addSong(data);
    this.setState({ carregando: false, checkar: true });
    this.musicSong();
  }

  musicSong = async () => {
    const { data } = this.props;
    this.setState({ checkar: true });
    await getFavoriteSongs(data);
  }

  render() {
    const { carregando, checkar } = this.state;
    const { trackId, previewUrl, trackName } = this.props;
    return (

      <div>
        {carregando ? <Loading /> : (
          <p>
            <p>
              {trackName}
            </p>
            <audio
              data-testid="audio-component"
              src={ previewUrl }
              controls
            >
              <track
                kind="captions"
              />
              o seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
            <label htmlFor="label-favorita">
              <input
                text="Favorita"
                type="checkbox"
                onChange={ this.musicFavorite }
                checked={ checkar }
                data-testid={ `checkbox-music-${trackId}` }
              />
              Favorita
            </label>
          </p>
        )}
      </div>
    );
  }
}
MusicCard.propTypes = {
  key: PropTypes.string,
  previewUrl: PropTypes.string,
  trackName: PropTypes.string,
  carregando: PropTypes.bool,
}.isRequered;
export default MusicCard;
