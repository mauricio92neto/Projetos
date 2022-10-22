import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <div>
          {planets.map((novo) => (
            <PlanetCard
              key={ novo.name }
              planetName={ novo.name }
              planetImage={ novo.image }
            />
          ))}
        </div>
      </section>
    );
  }
}
export default SolarSystem;
