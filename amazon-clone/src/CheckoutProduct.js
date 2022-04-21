import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const ratingArray = [0,0,0,0,0]






function CheckoutProduct({ id, title, price, image, rating, secondid, handleRemove}){
    // const [{ basket }, dispatch] = useStateValue
    
    
    
    
    
    function handleRemoveFromCart (secondid){
        handleRemove(secondid)
    }
return (
    <div className="checkout_product">
        <img className="checkout_product_image"src={image} alt=""/>
        <div className="checkout_product_info">
            <p className="checkout_product_title">{title}</p>
            <hr/>
            <p className="chaeckout_product_price">
            ${price}
        </p>
        </div>
        <div className="checkout_product_rating">
                    { Array.from(ratingArray )
                        .fill(1, 0, rating)
                        .map((integer, index) => {
                             if(integer===1){
                                return <p key={index}><StarRateIcon className="product_star" /></p>
                             }else{
                                return <p key={index}><StarBorderIcon className="product_star" /> </p>
                            }
                        })
        }
        </div> 
        <p className="delete_button"onClick={()=> handleRemoveFromCart(secondid)}>Delete</p>
    </div>
)}




export default CheckoutProduct