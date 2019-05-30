import React, { Component } from 'react';

export default class Content extends Component {

  componentDidMount() {
    return new Promise((resolve,reject)=>{
      fetch("./Data.js").then((res) => res.json()).then((Data) => {
        console.log(Data);
        this.setState({
            data: Data
        });
      })
    });
  }

  render() {
    return (
      <section>
          Main Content
      </section>
    )
  }
}
