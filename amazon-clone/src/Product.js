import "./Product.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ratingArray = [0,0,0,0,0]

function Product({ id, title, imgae, price, rating }){
    return (
    <div className="product">
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
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
    </div>
    )}


export default Product