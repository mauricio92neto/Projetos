import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      music: [],
      nameArtist: '',
      albumArtist: '',

    };
  }

  componentDidMount() {
    this.newMusics();
  }

  newMusics = async () => {
    const { match: { params: { id } } } = this.props;
    const musicNew = await getMusics(id);
    const [indice, ...music] = musicNew;
    console.log(this.props);
    this.setState({ music,
      nameArtist: indice.artistName,
      albumArtist: indice.collectionName });
  }

  render() {
    const { albumArtist, nameArtist, music } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        Album
        <p data-testid="artist-name">{nameArtist}</p>
        <p data-testid="album-name">{albumArtist}</p>
        <div>
          {music.map((mus) => (
            <MusicCard
              key={ mus.trackId }
              trackId={ mus.trackId }
              trackName={ mus.trackName }
              src={ mus.previewUrl }
              data={ mus }
            />
          ))}
        </div>
      </div>
    );
  }
}
Album.propTypes = {
  match: PropTypes.string,
}.isRequered;
export default Album;
