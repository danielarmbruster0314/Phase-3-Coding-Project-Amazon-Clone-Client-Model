import "./Home.css";
import Product from './Product';
import {useState, useEffect} from "react";



const imagesForHomePage = [
    "https://m.media-amazon.com/images/I/61+K24zuIAL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71+6X396igL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61A8fR8doxL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61G5d3CxqwL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/611YB+hYM3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61NRC-a1N7L._SX3000_.jpg"
]


function Home(){
const [inventory, setInventory] = useState([])
const [ imageDisplayPosition, setImageDisplayPosition] = useState(0)



  





useEffect(()=> {
    fetch("http://localhost:9292/products")
    .then((r) => r.json())
    .then((products) => 
    
    setInventory(products)
    );
}, []);


let firstSet = inventory.splice(0, 4)
let secondSet = inventory.splice(4,4)
let timeDelayUntilNextImage = 70000;


    setTimeout( ()=>{
        setImageDisplayPosition((imageDisplayPosition + 1) % imagesForHomePage.length);
    }, timeDelayUntilNextImage )

function handleImageBackward() {
    setImageDisplayPosition((imageDisplayPosition - 1) % imagesForHomePage.length);
}

function  handleImageForward() {
    setImageDisplayPosition((imageDisplayPosition + 1) % imagesForHomePage.length);
}



    return(
        <div className="home">
            <button className="home_image_leftArrow" onClick={() => handleImageBackward()}><img src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos3.png?raw=true" className="home_image_leftArrowIcon" alt="arrow"/></button>
           
            <img className="home_image" src={imagesForHomePage.slice(imageDisplayPosition, imageDisplayPosition + 1)} alt="amazon" />
        
            <button className="home_image_rightArrow" onClick={() => handleImageForward()}><img src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos3.png?raw=true"  className="home_image_rightArrowIcon" alt="arrow"/></button>
            <div className="home_row">{firstSet.map((product) => <Product key={product.index} product={product} id={product.id} price={product.price} title={product.name} rating={product.star_rating} imag={product.image} />)}
                
            </div>
            <div className="home_row_second">
            {secondSet.map((product) => <Product key={product.index} id={product.id} price={product.price} title={product.name} rating={product.star_rating} imag={product.image} />)}
                
            </div>
            
        </div>
    );
}




export default Home 