import React from 'react';

// Components
import Hero from './hero';
import Works from './works';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Hero />
        <Works />
      </div>
    );
  }
}

export default Splash;
