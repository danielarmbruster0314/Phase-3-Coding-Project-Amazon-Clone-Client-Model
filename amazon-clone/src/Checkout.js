import './Checkout.css';

function Checkoutout() {
    // const [{ basket }] = useStateValue();

    return( <div className="checkout">
        <img classNAme="checkout_add" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/CBCC/wfm/card-info_desktop_wf-unrecnp.jpg" alt="amazon_add"/>
        {basket?.length === 0 (
            <div>
                <h2>Your Shopping Basket is empty</h2>
            </div>
        ) : ( <div>
            <h2>
                Your shopping 
            </h2>
        </div>)
        )}
    </div>
    )}


export default Checkoutout