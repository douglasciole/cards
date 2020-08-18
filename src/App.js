import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import './fonts/Inconsolata/stylesheet.css';
import CardList from './components/cardList';
import CardDisplay from './components/cardDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/display'} component={CardDisplay} />
          <Route exact path={'/'} component={CardList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
