import "./Home.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Product from './Product';



function Home(){
    return(
        <div className="home">
            <button className="home_image_leftArrow"><ChevronLeftIcon className="home_image_leftArrowIcon"/></button>
            <img className="home_image" src="https://m.media-amazon.com/images/I/61+K24zuIAL._SX3000_.jpg" alt="amazon-image" />
            <button className="home_image_rightArrow"><ChevronRightIcon className="home_image_rightArrowIcon"/></button>
            <Product 
            id={1}
            title="air  fryer"
            price={100.21}
            rating={3}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTSxxejwfXH_39XHRFn2iX_B8tl5_IQbHmhEhVgv0igO8YMJKIsH5oMCOtohirdzj5AcUcrwJXVzE&usqp=CAc"
            />
        </div>
    );
}




export default Home 