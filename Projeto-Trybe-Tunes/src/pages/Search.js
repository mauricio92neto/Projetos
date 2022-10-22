import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Cards from '../components/Cards';

class Search extends Component {
    state = {
      artistName: '',
      outro: '',
      desabilitar: true,
      array: [],
    };

    componentDidMount() {
      this.newAlbumSerchApi();
    }

   btnValid = (event) => {
     const numb = event.target.value;
     const nummax = 2;
     if (numb.length >= nummax) {
       this.setState({
         desabilitar: false,
         artistName: numb,
         outro: numb,
       });
     } else {
       this.setState({
         desabilitar: true,
         artistName: numb,
       });
     }
   }

 newAlbumSerchApi = async () => {
   this.setState({ artistName: '' });
   const { artistName } = this.state;
   const newApi = await searchAlbumsAPI(artistName);
   this.setState({ array: newApi });
 }

 render() {
   const { artistName, array, outro, desabilitar } = this.state;
   return (
     <div data-testid="page-search">
       <Header />
       <label htmlFor="Pesquisar">
         digitar artista ou banda

         <input
           data-testid="search-artist-input"
           type="text"
           value={ artistName }
           onChange={ this.btnValid }
           placeholder="name"
         />
       </label>
       <button
         data-testid="search-artist-button"
         name="button"
         type="button"
         disabled={ desabilitar }
         onClick={ this.newAlbumSerchApi }
       >
         Pesquisar
       </button>
       <section>
         {array.length !== 0
           ? <Cards array={ array } outro={ outro } /> : 'Nenhum álbum foi encontrado'}
       </section>
     </div>

   );
 }
}
export default Search;
