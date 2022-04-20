import "./Product.css"
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from "./StateProvider";
import { Link  } from "react-router-dom";
const ratingArray = [0,0,0,0,0]



function Product({ product, id, title, imag, price, rating }){

// const [ {basket}, dispatch] = useStateValue


//     const addToBasket = () => {
//         dispatch({
//             type: 'ADD_TO_BASKET',
//             item: {
//                 id: id,
//                 title: title,
//                 image: imag,
//                 price: price,
//                 rating: rating
//             }
//         })
//     }


    return (
       
        <Link className="product"   to={{
            pathname: `/product/${product.name}`,
            search: `?sort=${product.category}`,
            state: { fromHomePage: true, product: product }
          }}  >
    <div className="product">
        <img className="product_image" src={imag} alt="hi" />
        <div className="product_info">
            <p className="product_title">{title}</p>
            <br/>
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
        <p className="product_price">
            ${price}
        </p>
        </div>
    </div>
    </Link> 
    )}


    export default Product;