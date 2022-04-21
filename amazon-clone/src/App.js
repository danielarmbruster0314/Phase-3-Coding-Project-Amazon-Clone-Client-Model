
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Productpage from './Productpage';
import Categories from './Categories'
import {useState} from 'react';
import Login from "./Login"
function App() {
const [cart, setCart] = useState([])
function handleCart(obj){

  setCart([...cart,obj])
  console.log(cart)
  
}

function handleRemoveFromCart(id){
  const newcart = cart.filter((item) => item.newid != id)
   setCart(newcart)
}

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/checkout">
             <Header cart={cart}/>
             <Checkout handleRemoveFromCart={handleRemoveFromCart} cart={cart}/>
             
            </Route>
             <Route path="/product" component={(routeProps) => <Productpage {...routeProps}/>}>

{/* <Route exact path="/private/orders" name="Orders" component={(routeProps) => <PrivateOrders {...routeProps} />} /> */}
              
              <Productpage  cart={cart} handleCart={handleCart}/>
          </Route>
          <Route path="/categories">
             <Header cart={cart}/>
              <Categories />
          </Route>
          <Route path ="/login">
          <Login />
          </Route>
          <Route exact path="/">
            <Header cart={cart}/>
            <Home />
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
