import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';

const Home = () => {
    const {state : {products}} = CartState(); // destructing one layer
    console.log(products);
  return (
    <div className='home'>
        {/* <FIlters/> */}
        <div className='productContainer'>
            {products.map((prod) => {
                return <SingleProduct prod={prod} key={prod.id} />
            })}
        </div>
    </div>
  )
}

export default Home