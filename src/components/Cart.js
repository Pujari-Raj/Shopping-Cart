import React, { useState, useEffect } from 'react'
import { CartState } from '../context/Context';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {

  //state of context
  const {state: {cart}, dispatch} = CartState();
  
  //state for price of all items
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)* curr.qty, 0));
  }, [cart]);
  


  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
         {cart.map((prod) => (
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col>
                <Image src={prod.image} alt={prod.name} fluid rounded></Image>
              </Col>
              <Col md={2}>
              <span>{prod.name}</span>
              </Col>
              <Col md={2}>₹ {prod.price}</Col>
              <Col>
                <Rating rating={prod.rating}></Rating>
              </Col>
              <Col md={2}>
              {/* // for adding the product qty of cart page */}
                <Form.Control as='select' value={prod.qty}
                  onChange={(e) =>
                  dispatch({
                    type:"CHANGE_CART_QUANTITY",
                    payload:{
                      id: prod.id,
                      qty: e.target.value,
                    }
                  })}
                >
                  {[...Array(prod.inStock).keys()].map((x) =>(
                    <option key={x+1}>{x+1}</option>
                  ))};
                </Form.Control>
              </Col>
              <Col md={2}>
              <Button 
               type='button'
               variant='light'
               onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
               }}> 
                <AiFillDelete fontSize='20px' /> 
              </Button>
              </Col>
            </Row>
          </ListGroup.Item>
         ))}
        </ListGroup>
      </div>
      <div className='filters cart-summary'>
        <span className='title'>Subtotal- ({cart.length}) items</span>
        <span style={{fontWeight: 700, fontSize: 20}}>Total: ₹{total}</span>
        <Button type='button' disabled={cart.length === 0}>
          Proceed To Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart