import React from 'react';
import {Card} from 'react-bootstrap';
import  StarRatingComponent  from 'react-star-rating-component';

const Moviecard = (el,i) => {
    return (
       
            <div className="movies" key={i+1}>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} alt={"sahriya"}/>
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
     {el.descripton}
     

    </Card.Text>
    <StarRatingComponent starCount={5}
          value={el.rating} />
   
  </Card.Body>
</Card>

        </div>
    )
}

export default Moviecard



