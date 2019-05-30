import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    //this.state = {};
  }

  componentDidMount() {
    return new Promise((resolve,reject)=>{
      fetch("./Data.js").then((res) => res.json()).then((Data) => {
        // console.log(data);
        this.setState({
            data: Data
        });
      })
    });
  }

  render() {
    console.log("Header.js");
    console.log(this.state);
    if (!this.state.data){
      return null;
    }
    return <div>
    <header key={this.props.id} className="row project">
      <div className="col-4 col-md-2">
        {Bikky}
      </div>
    </header>
    <section>

    </section>
    <footer>
    </footer>
    </div>
  }
}
