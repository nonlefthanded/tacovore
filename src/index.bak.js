import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.location}</h3>
  </div>
)

const Routing = (
  <Router>
  <ul>
    <li><a href="/">Home</a></li>
    <li><Link to="/Eugene">Eugene</Link></li>
    <li><Link to="/Portland">Portland</Link></li>
    <li><Link to="/Corvallis">Corvallis</Link></li>
  </ul>
  <Route path="/:location" component={Child}/>
  </Router>
)



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
