import './Checkout.css';
import { Link } from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";


function Checkoutout() {
    const [{ basket }] = useStateValue();

    return( <div className="checkout">
                <img className="checkout_add" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/CBCC/wfm/card-info_desktop_wf-unrecnp.jpg" alt="amazon_add"/>
                    {basket?.length === 0 ? (
                        <div className="checkout_emptyCart">
                            <img className="checkout_emptyCartImg" src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="icons" />
                            <div className="checkout_emptyCartText">
                                <h2>Your Amazon Cart is empty</h2>
                                    <Link to="/">
                                        <p>Shop today's deals</p>
                                    </Link>
                                        <div className='checkout_emptyCartLink'>
                                            <Link className="link" to="/login">
                                                <p className="checkout_emptyCartSignIn">Sign in to your account</p>
                                            </Link>
                                            <Link className="link" to="/login">
                                                <p className='checkout_emptyCartSignUp'>Sign up now</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                    ) : ( 
                                    <div>
                                        <h2 classNAme="checkout_title">
                                            Your shopping Basket
                                        </h2>
                                        {basket.map( item =>( <CheckoutProduct item={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />))}
                                    </div>
                                    )}
                </div>
    )}


export default Checkoutout