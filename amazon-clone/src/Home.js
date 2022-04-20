import "./Home.css";
import Product from './Product';
import {useState, useEffect} from "react";






function Home(){
const [inventory, setInventory] = useState([])
const [ imageDisplayPosition, setImageDisplayPosition] = useState(0)


const imagesForHomePage = [
    "https://m.media-amazon.com/images/I/61+K24zuIAL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71+6X396igL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61A8fR8doxL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61G5d3CxqwL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/611YB+hYM3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61NRC-a1N7L._SX3000_.jpg"
]
  





useEffect(()=> {
    fetch("http://localhost:9292/products")
    .then((r) => r.json())
    .then((products) => 
    
    setInventory(products)
    );
}, []);

console.log(inventory)

let firstSet = inventory.slice(0, 4)
let secondSet = inventory.slice(5,9)


let timeDelayUntilNextImage = 35000;


    setTimeout( ()=>{
        setImageDisplayPosition( (imageDisplayPosition) => (imageDisplayPosition + 1) % imagesForHomePage.length);
    }, timeDelayUntilNextImage )

function handleImageBackward() {
    setImageDisplayPosition((imageDisplayPosition - 1) % imagesForHomePage.length);
}

function  handleImageForward() {
    setImageDisplayPosition( (imageDisplayPosition) => (imageDisplayPosition + 1) % imagesForHomePage.length);
}



    return(
        <div className="home">
            <button className="home_image_leftArrow" onClick={() => handleImageBackward()}><img src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos3.png?raw=true" className="home_image_leftArrowIcon" alt="arrow"/></button>
           <div className="home_imageContainer">
            <img className="home_image" src={imagesForHomePage[imageDisplayPosition]} alt="amazon" />
            </div>
            <button className="home_image_rightArrow" onClick={() => handleImageForward()}><img src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos3.png?raw=true"  className="home_image_rightArrowIcon" alt="arrow"/></button>
            <div className="home_row">
            {firstSet.map((product) => <Product key={product.id} product={product} id={product.id} price={product.price} title={product.name} rating={product.star_rating} imag={product.image} />)}
                
            </div>
            <div className="home_row_second">
            {secondSet.map((product) => <Product key={product.id} id={product.id} product={product} price={product.price} title={product.name} rating={product.star_rating} imag={product.image} />)}
                
            </div>
            
        </div>
    );
}




export default Home 