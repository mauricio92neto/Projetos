import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardlist, removefunc, filterInput, onInputChange, nomeFilter } = this.props;
    const filtraPeloNome = cardlist.filter((card) => (
      card.name.includes(filterInput)
    ));
    const cards = nomeFilter === 'todas' ? filtraPeloNome
      : filtraPeloNome.filter((carta) => (
        carta.rare === nomeFilter
      ));
    return (
      <div>
        <h2>cardList</h2>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ onInputChange }
          name="filterInput"
          value={ filterInput }
        />
        <select
          onChange={ onInputChange }
          name="nomeFilter"
          value={ nomeFilter }
          data-testid="rare-filter"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>

        </select>

        {cards.length > 0 ? cards.map((card) => (
          <div key={ card.name }>
            <Card
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.image }
              cardRare={ card.rare }
              cardTrunfo={ card.supertrunfo }
            />
            <button
              onClick={ () => removefunc(card) }
              data-testid="delete-button"
              type="button"
            >
              Excluir

            </button>

          </div>
        )) : <p>vazio</p>}
      </div>//     );
    );
  }
}

CardList.propTypes = {
  nomeFilter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  filterInput: PropTypes.string.isRequired,
  removefunc: PropTypes.func.isRequired,
  cardlist: PropTypes.arrayOf(PropTypes.shape({
    cardname: PropTypes.string.isRequired,
    carddescription: PropTypes.string.isRequired,
    cardattr1: PropTypes.number.isRequired,
    cardattr2: PropTypes.number.isRequired,
    cardattr3: PropTypes.number.isRequired,
    cardimage: PropTypes.string.isRequired,
    cardrarity: PropTypes.string.isRequired,
    superTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};
export default CardList;

// CardList.propTypes = {
//   listCard: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
