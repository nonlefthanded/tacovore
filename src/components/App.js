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
  // Switch,
  // Redirect
} from 'react-router-dom'


class App extends Component {

  componentDidMount() {
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

  render() {
    if (!this.state) return false;
    console.log(this.state);
    const active = {"EUG":"","PDX":"","COR":""};

    // if (!match) {} else {};
    return (
      <Router>
        <div className="App">
          <header>
            <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
              <h4>{this.state.data.tagline.header}</h4>
              <ul className="list-inline">
                <li className="list-inline-item"><Link className={active.EUG} to="/eugene"   >Eugene</Link></li>
                <li className="list-inline-item"><Link className={active.PDX} to="/portland" >Portland</Link></li>
                <li className="list-inline-item"><Link className={active.COR} to="/corvallis">Corvallis</Link></li>
              </ul>
            </div>
            </div>
            </div>
          </header>
          <section className="text-center">
            <h1><Link to="/"><img alt="Tacovore Logo" src={this.state.data.logo} /></Link></h1>
            <h2>{parse(this.state.data.tagline.body)}</h2>
            <Route exact={true} path="/" component={Home} />
            <Route path="/:location" component={Location} />
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
