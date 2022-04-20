
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Productpage from './Productpage';
import Categories from './Categories'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/checkout">
             <Header />
             <Checkout />
             
            </Route>
             <Route path="/product" component={(routeProps) => <Productpage {...routeProps}/>}>

{/* <Route exact path="/private/orders" name="Orders" component={(routeProps) => <PrivateOrders {...routeProps} />} /> */}
              
              <Productpage />
          </Route>
          <Route path="/categories">
             <Header />
              <Categories />
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
