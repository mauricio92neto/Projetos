import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cards extends Component {
  render() {
    const { array, outro } = this.props;
    return (
      <div>
        <p>
          {`Resultado de álbuns de: ${outro}`}

        </p>
        {array.map((musc) => (
          <div key={ musc.artistName }>
            <Link
              data-testid={ `link-to-album-${musc.collectionId}` }
              to={ `/album/${musc.collectionId}` }
            >
              Detalhes
            </Link>
            <p>{musc.artistName}</p>
            <p>{musc.image}</p>
            <p>{musc.collectionName}</p>

            <img
              src={ musc.artworkUrl100 }
              alt={ `Capa do album ${musc.artworkUrl100} de ${musc.artistName}` }
            />
          </div>
        ))}
      </div>
    );
  }
}
Cards.propTypes = {
  artistName: PropTypes.string,
  artworkUrl100: PropTypes.string,
  collectionName: PropTypes.string,
  collectionPrice: PropTypes.string,
  array: PropTypes.array,
}.isRequered;
export default Cards;
