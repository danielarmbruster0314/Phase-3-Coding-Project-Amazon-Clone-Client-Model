import'./Productpage.css';
import {useParams, useLocation} from 'react-router'
import Header from './Header.js';
function Productpage({props}){
    const location = useLocation();
    console.log(location);
    console.log(props)
    return (
        <>
        <Header />
        <div className="container">
          <div className="product-content">
            <div>
              <div className="product-img">
                {/* <img src={state.image} alt="product" width="100%"></img> */}
              </div>
              <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
            </div>
            <div className="product-details">
              {/* <h1>{state.name}</h1> */}
              <hr></hr>
              <p>
                Price:
                {/* <span className="price"> ${state.price}</span> */}
              </p>
              <p>
                No Import Fees & Free Shipping Included
              </p>
              <hr></hr>
              <h3>About This Item</h3>
              <p>
                {/* {state.about} */}
              </p>
            </div>
            <div className="purchase-details">
            </div>
          </div>
        </div>
        </>
      )
      }
      



export default Productpage