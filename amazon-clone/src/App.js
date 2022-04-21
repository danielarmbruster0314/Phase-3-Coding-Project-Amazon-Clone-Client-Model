
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Productpage from './Productpage';
import Categories from './Categories'
import {useState, useEffect} from 'react';
import Login from "./Login"
function App() {
const [cart, setCart] = useState([])


useEffect(()=> {
  fetch("http://localhost:9292/oders")
  .then((r) => r.json())
  .then((orders) => 
  setCart(orders)
  );
}, []);




function handleCart(obj){
  setCart([...cart,obj])
  let data = {
    order_number: obj.newid,
      user_id: null,
      product_id: obj.id
  }
  fetch("http://localhost:9292/orders", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(res => {
    console.log("Request complete! response:", res);
  });
  
}

function handleRemoveFromCart(id){
  const newcart = cart.filter((item) => item.id != id)
  fetch(`http://localhost:9292/orders/${id}`,{
    method: 'DELETE'
})
.then(res => res.json())
.then(data => {
    console.log(data)
    
    setCart(newcart)
})
   console.log(newcart)
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
