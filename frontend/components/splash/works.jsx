import React from 'react';
import { Link } from 'react-router';

const Works = props => (
  <div className='works'>
    <h1>The Prediction Market for your favorite TV Shows</h1>
    <p>Predictive is a play-money prediction market, a stock market for your favorite TV shows.</p>
    <p>So you think maybe you know better than the rest of us? Sign Up to test your wits and be a part of this select group. Lets Play Politics!</p>
    <Link to='contract'>Check it out!</Link>
  </div>
);

export default Works;
