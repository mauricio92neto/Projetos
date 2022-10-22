import React from 'react';
import Title from './Title';

class Mission extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="missions" />
        <Title headline="Missões" />
      </section>
    );
  }
}
export default Mission;
