import "./Home.css";
import Product from './Product';
import {useState, useEffect} from "react";






function Home(){
const [inventory, setInventory] = useState([])





//setInventory(products)

useEffect(()=> {
    fetch("http://localhost:9292/products")
    .then((r) => r.json())
    .then((products) => 
    
    setInventory(products)
    );
}, []);


let firstSet = inventory.splice(0, 4)
let secondSet = inventory.splice(4,4)











    return(
        <div className="home">
            <button className="home_image_leftArrow"><img src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos3.png?raw=true" className="home_image_leftArrowIcon" alt="arrow"/></button>
            <img className="home_image" src="https://m.media-amazon.com/images/I/61+K24zuIAL._SX3000_.jpg" alt="amazon" />
            <button className="home_image_rightArrow"><img src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos3.png?raw=true"  className="home_image_rightArrowIcon" alt="arrow"/></button>
            <div className="home_row">{firstSet.map((product) => <Product key={product.index} id={product.id} price={product.price} title={product.name} rating={product.star_rating} imag={product.image} />)}
                
            </div>
            <div className="home_row_second">
            {secondSet.map((product) => <Product key={product.index} id={product.id} price={product.price} title={product.name} rating={product.star_rating} imag={product.image} />)}
                
            </div>
            
        </div>
    );
}




export default Home 