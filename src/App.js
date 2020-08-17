import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './fonts/Inconsolata/stylesheet.css';
import CardList from './components/cardList';
import CardDisplay from './components/cardDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CardList} />
          <Route path="/display" component={CardDisplay} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
