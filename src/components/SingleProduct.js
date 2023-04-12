import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'

const SingleProduct = ({prod}) => {
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}></Card.Img>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom: 10}}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ):(
              <div>5 Days Delivery</div>
            )}
            <Rating rating={prod.ratings}></Rating>
          </Card.Subtitle>
          <Button variant='danger'>Remove from Cart</Button>
          <Button disabled={!prod.inStock}>
              {!prod.inStock ? "Out Of Stock": "Add To Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct