import { useState } from "react";
import './Starrating.css'
import StarRateIcon from '@mui/icons-material/StarRate';

const StarRating = ({hadnleRating}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    function handleClick(value){
        setRating(value)
        hadnleRating(value)
    }
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => handleClick(index)}
              
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star"><StarRateIcon/></span>
            </button>
          );
        })}
      </div>
    );
  };



  export default StarRating