import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
const ratingArray = [0,0,0,0,0]






function CheckoutProduct({ id, title, price, image, rating}){
    const [{ basket }, dispatch] = useStateValue
    
    
    
    
    
    function handleRemoveFromCart (id){
        dispatch(
            {
                type: "REMOVE_FROM_BASKET",
                id: id,
            }
        )
    }
return (
    <div className="checkout_product">
        <img className="checkout_product_image"src={image} alt=""/>
        <div className="checkout_product_info">
            <p className="checkout_product_title">{title}</p>
            <p className="chaeckout_product_price">
            ${price}
        </p>
        </div>
        <div className="checkout_product_rating">
                    { ratingArray
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
        <p onClick={()=> handleRemoveFromCart(id)}>Delete</p>
    </div>
)}




export default CheckoutProduct