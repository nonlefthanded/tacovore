import React from 'react';
import parse from 'html-react-parser';

const Location = (allData) => {
    // console.log(allData);

    let _ = allData.data.locations[allData.props.match.params.location];
    _.links.email = "mailto:" + _.email;
    _.links.phone   = "tel:" + _.phone.replace(/[^0-9]/g, '');
    _.links.map = "https://maps.google.com/?q=Tacovore%20" + _.address.replace(/ /g,'%20') + '%20' + _.city + '%20' + _.state + '%20' + _.zip;

    // console.log(_);

    return (
        <div className="container location">
          <div className="row">
            <div className="col-lg-12 text-center">
            <h1>{_.name}</h1>

            <h3>{_.address} <a href={_.links.map}>[map]</a></h3>

            <p>{parse(_.hours)}</p>

            <p><a href={_.menu} target="_blank">Menu [pdf]</a></p>

            <p>{parse(_.blurb)}</p>

            <p>
              <a href={_.links.facebook}>
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a href={_.links.instagram}>
                <span className="fa-stack fa-2x">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </p>

            <p><a href={_.links.email}>{_.email}</a> / <a href={_.links.phone}>{_.phone}</a></p>
            </div>
          </div>
        </div>
    );
}

export default Location;
