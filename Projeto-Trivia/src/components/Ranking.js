import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
//   constructor() {
//     super();

  //     this.state = {
  //       users: [],
  //     };
  //   }

  render() {
    return (
      <div>
        <div data-testid="ranking-title">Ranking</div>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">
            Home
          </button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
