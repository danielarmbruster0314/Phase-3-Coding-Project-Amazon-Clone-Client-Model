import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './CheckoutProduct.css';
const ratingArray = [0,0,0,0,0]


function handleRemoveFromCart (){

}





function CheckoutProduct({ item, title, price, image, rating}){
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
        <p onClick={handleRemoveFromCart}>Delete</p>
    </div>
)}




export default CheckoutProduct