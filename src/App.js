import React from 'react';
import { RocketLaunch } from './Components/RocketLaunch';
import { Header } from './Components/Header';
import { LaunchInfo } from './Components/LaunchInfo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header/>
      <Router basename={'/rocket-launch'}>
        <Route exact path="/" component={RocketLaunch}/>
        <Route path="/launches/:id" component={LaunchInfo}/>
      </Router>
    </div>
  );
}

export default App;
