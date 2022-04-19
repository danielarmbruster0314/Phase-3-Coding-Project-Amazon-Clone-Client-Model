
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Productpage from './Productpage';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
          < Header />
            <Checkout />
          </Route>
          <Route path="/product">
            < Header />
            <Productpage />
          </Route>
          <Route path ="/login">

          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
