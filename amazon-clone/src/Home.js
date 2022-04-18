import "./Home.css";
import Product from './Product';



function Home(){
    return(
        <div className="home">
            <button className="home_image_leftArrow"><img src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos3.png?raw=true" className="home_image_leftArrowIcon" alt="arrow"/></button>
            <img className="home_image" src="https://m.media-amazon.com/images/I/61+K24zuIAL._SX3000_.jpg" alt="amazon" />
            <button className="home_image_rightArrow"><img src="https://github.com/danielarmbruster0314/Phase-3-Coding-Project-Amazon-Clone-Client-Model/blob/main/amazon-clone/assets/amazon_logos3.png?raw=true"  className="home_image_rightArrowIcon" alt="arrow"/></button>
            <div className="home_row">
                <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            imag="https://images.philips.com/is/image/philipsconsumer/5c78c1657f514a97a6e3ad1e00ce1802"
            />
            <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            imag="https://images.philips.com/is/image/philipsconsumer/5c78c1657f514a97a6e3ad1e00ce1802"
            />
            <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            imag="https://images.philips.com/is/image/philipsconsumer/5c78c1657f514a97a6e3ad1e00ce1802"
            />
            <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            imag="https://images.philips.com/is/image/philipsconsumer/5c78c1657f514a97a6e3ad1e00ce1802"
            />
            </div>
            <div className="home_row_second">
            <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            imag="https://images.philips.com/is/image/philipsconsumer/5c78c1657f514a97a6e3ad1e00ce1802"
            />
            <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            imag="https://images.philips.com/is/image/philipsconsumer/5c78c1657f514a97a6e3ad1e00ce1802"
            />
            <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            imag="https://images.philips.com/is/image/philipsconsumer/5c78c1657f514a97a6e3ad1e00ce1802"
            />
            <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            imag="https://images.philips.com/is/image/philipsconsumer/5c78c1657f514a97a6e3ad1e00ce1802"
            />
            </div>
            
        </div>
    );
}




export default Home 