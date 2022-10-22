import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    //  objetos: [],
    cardlist: [],
    filterInput: '',
    nomeFilter: 'todas',
  };

  addCardiList = () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.state;
    const objeto = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      supertrunfo: cardTrunfo,
    };
    this.setState((prevState) => ({
      cardlist: [...prevState.cardlist, objeto],
    }));
  }

  onInputChange = (event) => {
    const valor = event.target.type === 'checkbox' ? event
      .target.checked : event.target.value;

    this.setState({ [event.target.name]: valor }, () => {
      this.isSaveButtonCheck();
    });
  };

  verifySuperTrunfo = (cardTrunfo) => {
    if (cardTrunfo === true) this.setState({ hasTrunfo: true });
  }

  removeOffCardList = (cartaclicada) => {
    const { cardlist } = this.state;
    const newList = cardlist.filter((carta) => (
      carta.description !== cartaclicada.description));
    this.setState({
      cardlist: newList,
    }, () => {
      if (cartaclicada.supertrunfo === true) {
        this.setState({
          hasTrunfo: false,
        });
      }
    });
  }

  isSaveButtonCheck = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage } = this.state;
    const maxtotal = 210;
    const maxcada = 90;
    if (cardName.length > 0 && cardDescription.length > 0 && cardImage.length > 0
      && parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10) <= maxtotal
      && parseInt(cardAttr1, 10) <= maxcada
      && parseInt(cardAttr1, 10) >= 0
      && parseInt(cardAttr2, 10) <= maxcada
      && parseInt(cardAttr2, 10) >= 0
      && parseInt(cardAttr3, 10) <= maxcada
      && parseInt(cardAttr3, 10) >= 0) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onSaveButtonClick = () => {
    const {
      cardTrunfo,
    } = this.state;

    this.verifySuperTrunfo(cardTrunfo);
    this.addCardiList();

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, cardlist, isSaveButtonDisabled,
      filterInput, nomeFilter,
    } = this.state;

    return (
      <div>
        <h1>Cartas</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <CardList
          filterInput={ filterInput }
          removefunc={ this.removeOffCardList }
          cardlist={ cardlist }
          onInputChange={ this.onInputChange }
          nomeFilter={ nomeFilter }
        />

      </div>

    );
  }
}

export default App;
