import React from 'react'
import { Button, Card} from 'react-bootstrap';
import box from'../asset/black-beans.jpg'
import './Productcard.css'

function Productcard() {
  return (
    <div>
        <Card style={{ width: '18rem' }} id="card-main">
            <Card.Img variant="top" src={box} />
            <Card.Body>
                <Card.Title className="black">Black-Beans</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary" id="button" >Add to Cart</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Productcard