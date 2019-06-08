import React, { Component } from 'react';

import parse from 'html-react-parser';

import '../styles/App.css';

import Home     from './HomeComponent';
import Location from './LocationComponent';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
  // Redirect
} from 'react-router-dom'

let match;
class App extends Component {

  componentDidMount() {
    return new Promise((resolve,reject)=>{
      fetch("./Data.js").then((res) => res.json()).then((Data) => {
        Data.thisYear = new Date().getFullYear();
        this.setState({
            data: Data
        });
      })
    });
  }


  render() {

    if (!this.state) return false;
    // console.log(this.state);

    if (!match) {};
    return (
      <Router>
        <div className="App">
          <header>
            <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
              <h4>{this.state.data.tagline.header}</h4>
              <ul id="" className="list-inline mainNav">
                <li className="list-inline-item"><NavLink state="4" to={{ pathname:"/eugene" ,pass: 'some data' }}  >Eugene</NavLink></li>
                <li className="list-inline-item"><NavLink to="/portland" sups="hello" >Portland</NavLink></li>
                <li className="list-inline-item"><NavLink to="/corvallis" sups="hello">Corvallis</NavLink></li>
              </ul>
            </div>
            </div>
            </div>
          </header>
          <section className="text-center">
            <h2>{parse(this.state.data.tagline.body)}</h2>
            <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/:location" render={(props)=><Location props={props} data={this.state.data}/>} />
            </Switch>
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
