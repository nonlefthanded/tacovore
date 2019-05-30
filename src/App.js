import React from 'react';
import Page  from './Page';

class App extends Component {
  render(){
    return <Router>
    <ul>
      <li><Link to="/hello">Hello</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/books">Books</Link></li>
    </ul>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Eugene" component={Location} />
      <Route exact path="/Portland" component={Location} />
      <Route exact path="/Corvallis" component={Location} />
      <Route component={NoMatch} />
    </Switch>

    </Router>
  }
}

export default App;
