import'./Productpage.css';
import {useParams, useLocation} from 'react-router'
import {useState, useEffect} from 'react';
import Header from './Header.js';
import StarRating from './Starrating';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from "./StateProvider";

const ratingArray = [0,0,0,0,0]




function Productpage({props}){
  const[isOn, setIsON] = useState(false)
  const [starRating, setStarRating] = useState(0)
  const [inputReview, setInputReview] = useState("") 
  const {state} = useLocation();

console.log(state.product)
let name =state.product.name
let image = state.product.image 
let id = state.product.id
let price = state.product.price
console.log("hi" + name)
console.log("hi" + image)
console.log("hi" + id)
console.log("hi" + price)
  // const [reviews, setReviews] = useState([])

  



   
    
   let arrayOfReviews = [state.product.reviews]

  console.log(arrayOfReviews)
  

      function handleSubmit(){
        let data = {
          review: inputReview,
      star_rating: starRating, 
      user_id: null,
      product_id: state.product.id
        }
        setIsON((isOn) => !isOn)
        fetch("http://localhost:9292/reviews", {
          method: "POST",
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(res => {
          console.log("Request complete! response:", res);
        });
          
      }


    function handleTextInput(e){
      setInputReview(e.target.value)
    }
console.log(inputReview)

    function hadnleRating(value){
      setStarRating(value)
    }
    console.log(starRating)

   
    function hadndleClick(){
      setIsON((isOn) => !isOn)
    }
    console.log(isOn)
    return (
        <>
        <Header />
        <div className="container">
          <div className="product-content">
            <div>
              <div className="product-img">
                <img src={state.product.image} alt="product" width="100%"></img>
                
              </div>
              <p style={{ textAlign: "center" }}>Hover over image to zoom</p>

              {isOn? <div className="create_review"><StarRating className="star_rating" hadnleRating={hadnleRating}/><textarea onChange={(e) => handleTextInput(e)}type="text-area" /><button onClick={()=>handleSubmit()} >Submit</button></div> : null}
            
            </div>
            <div className="product-details">
              <h1>{state.product.name}</h1>
              <hr></hr>
              <p>
                Price:
                <span className="price"> ${state.product.price}</span>
              </p>
              <p>
                No Import Fees & Free Shipping Included
              </p>
              <hr></hr>
              <h3>About This Item</h3>
              <p>
                {state.product.description}
              </p>
            </div>
            <div className="purchase_details">
              <h1>{state.product.price}</h1>
              <hr/>
              <button className='product_details_button_1' >Add to Cart</button>
              <button className='product_details_button_2' onClick={() => hadndleClick()}>Review</button>
            </div>
            
          </div>
        </div>
        <div className="product_reviews">
          <h1>Reviews</h1>
{/* state.product. */}
          <div>{ state.product.reviews?.map((review) => <div key={review.index} className="product_review" >
            { Array.from(ratingArray )
                        .fill(1, 0, review.star_rating)
                        .map((integer, index) => {
                             if(integer===1){
                                return   <p key={index}><StarRateIcon className="product_star" /></p> 
                             }else{
                                return  <p key={index}><StarBorderIcon className="product_star" /> </p>
                            }
                            
                        })
        } 
            
            
            
            <p>{review.review}</p></div>)}</div>
        </div>
        </>
      )
      }
      



export default Productpage