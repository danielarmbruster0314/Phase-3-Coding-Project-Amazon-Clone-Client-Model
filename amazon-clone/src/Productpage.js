import'./Productpage.css';
import { useLocation} from 'react-router'
import {useState, useEffect} from 'react';
import Header from './Header.js';
import StarRating from './Starrating';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EditReview from './EditReview';

const ratingArray = [0,0,0,0,0]




function Productpage({ handleCart, cart}){


  const[isOn, setIsON] = useState(false)
  const [starRating, setStarRating] = useState(0)
  const [inputReview, setInputReview] = useState("") 
  const {state} = useLocation();
  const [newid , setNewId] = useState(0)
  const [reviews, setReviews] = useState([])
  const[isEditing, setIsEditing] = useState(false)


let name =state.product.name
let image = state.product.image 
let id = state.product.id
let price = state.product.price


  
 
  


function addItemsToCart(){
setNewId((newid) => newid + 1)

  handleCart({
    id,
    image,
    name,
    price,
    newid: newid
  })
}

useEffect(() => {
  
setReviews(state.product.reviews)
},[]);

    
   
function handleUpdateMessage(updatedMessageObj) {
  const updatedMessages = reviews.map((review) => {
    if (review.id === updatedMessageObj.id) {
      return updatedMessageObj;
    } else {
      return review;
    }
  });
  setReviews(updatedMessages);
}








  
  

      function handleSubmit(){
        setIsON((isOn) => !isOn)
        let data = {
          review: inputReview,
      star_rating: starRating, 
      user_id: null,
      product_id: state.product.id
        }
        
        fetch("http://localhost:9292/reviews", {
          method: "POST",
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(res => {
          console.log(res)
          setReviews([...reviews,res]);
        });
          
      }
            let nonmutableratings = reviews.slice(0,-1)
            let mutablerating = reviews.slice(-1)
    function handleTextInput(e){
      setInputReview(e.target.value)
    }


    function hadnleRating(value){
      setStarRating(value)
    }
    

   
    function hadndleClick(){
      setIsON((isOn) => !isOn)
    }
  
    return (
        <>
        <Header cart={cart}/>
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
              <button className='product_details_button_1' onClick={() => addItemsToCart()}>Add to Cart</button>
              <button className='product_details_button_2' onClick={() => hadndleClick()}>Review</button>
            </div>
            
          </div>
        </div>
        <div className="product_reviews">
          <h1>Reviews</h1>
{/* state.product. */}
          <div>
            {isEditing?
            <EditReview item={mutablerating} review={mutablerating.review} onUpdateMessage={handleUpdateMessage} setIsEditing={setIsEditing}/> :
            mutablerating?.map((review) => <div key={review.index} className="product_review" >
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
            <p>{review.review}</p><button onClick={()=>setIsEditing(!isEditing)}>✏️</button></div>)}</div>
      
        
          <div>
            { nonmutableratings?.map((review) => <div key={review.index} className="product_review" >
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