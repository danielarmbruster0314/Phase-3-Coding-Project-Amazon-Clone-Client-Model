import {useState} from 'react';
import'./Productpage.css';

function EditReview ({item, review, onUpdateMessage,setIsEditing}){
const [thisreview, setThisReview] = useState(review)



    function handleSubmit(e,id){
        e.preventDefault();
        fetch(`http://localhost:9292/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: thisreview,
      }),
    })
      .then((r) => r.json())
      .then((updatedreview) => onUpdateMessage(updatedreview));
      setIsEditing(false)
  }
    
    return (
        <form className="product_review_edit" onSubmit={(e)=>handleSubmit(e,item[0].id)}>
          <input
          className="edit_submit_text"
            type="text"
            name="body"
            autoComplete="off"
            value={review}
            onChange={(e) => setThisReview(e.target.value)}
          />
          <input className="edit_submit_button" type="submit" value="Save" />
        </form>
      );
    }


    export default EditReview