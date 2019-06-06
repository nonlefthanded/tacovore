import React, { Component } from 'react';

import { setGlobal } from 'reactn';
import parse from 'html-react-parser';

import '../styles/App.css';

import Home     from './HomeComponent';
import Location from './LocationComponent';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
  // Switch,
  // Redirect
} from 'react-router-dom'

let match;
class App extends Component {

  componentDidMount() {
    console.log('component_Did_Mount');
    return new Promise((resolve,reject)=>{
      fetch("./Data.js").then((res) => res.json()).then((Data) => {

        // console.log(Data);
        Data.thisYear = new Date().getFullYear();
        this.setState({
            data: Data
        });
        setGlobal({ data: Data });
        // console.log('something');
      })
    });
  }

  componentDidUpdate() {
    console.log("component_Did_Update");
  }

  render() {

    if (!this.state) return false;
    console.log(this.state);
    const active = {"EUG":"","PDX":"","COR":""};

    if (!match) {console.log('yep')} else {console.log('nope')};
    return (
      <Router>
        <div className="App">
          <header>
            <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
              <h4>{this.state.data.tagline.header}</h4>
              <ul id="" className="list-inline mainNav">
                <li className="list-inline-item"><NavLink to="/eugene"   >Eugene</NavLink></li>
                <li className="list-inline-item"><NavLink to="/portland" >Portland</NavLink></li>
                <li className="list-inline-item"><NavLink to="/corvallis">Corvallis</NavLink></li>
              </ul>
            </div>
            </div>
            </div>
          </header>
          <section className="text-center">
            <h2>{parse(this.state.data.tagline.body)}</h2>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/:location" component={Location} />
          </section>
          <footer>
            <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
              <small>{parse(this.state.data.tagline.footer).replace("CURRENTYEAR",this.state.data.thisYear)}</small>
            </div>
            </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
