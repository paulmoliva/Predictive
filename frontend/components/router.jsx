import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// import components here
import App from './app';
import SplashContainer from './splash/splash_container';
import ContractContainer from './contract/contract_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
  	return (
  		<Router history={hashHistory}>
        <Route path="/" component={ App }>
          <IndexRoute component={ SplashContainer } />
          <Route path='contract' component={ ContractContainer } />
        </Route>
  		</Router>
  	);
  }
}

export default AppRouter;
