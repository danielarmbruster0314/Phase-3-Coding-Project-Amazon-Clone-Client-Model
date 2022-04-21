import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';




function Subtotal({cart}) {



     const getBasketTotal = (Cart) => {
        return cart?.reduce((amount, item) => item.product.price + amount, 0);
        
        }
    
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                
                </>
            )}
               decimalScale={2}             
                value={getBasketTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
            <button>Proceed to Checkout</button>
        </div>
    )
}




export default Subtotal;