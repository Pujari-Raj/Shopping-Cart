import React, { createContext, useContext, useReducer } from 'react';
// Using (https://fakerjs.dev/) bcz faker is no more wokring
import  {faker} from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducer';

const Cart = createContext();
faker.seed(99);

const Context = ({children}) => {

    /*Craeting Array of 20 products and taking the values from faker API*/
    const products = [...Array(50)].map(() => ({
        id: faker.datatype.uuid(), //  for productid
        name: faker.commerce.productName(), // for productname
        price: faker.commerce.price(), // for product-price
        image: faker.image.abstract(), // for product-image
        inStock: faker.random.numeric({'min': 1, 'max': 5}), // for product-availability
        fastDelivery: faker.datatype.boolean(), // is product-fastDelivery
        ratings: faker.datatype.number({'min': 1, 'max': 5}) // product ratings(1-5)
    }));

    console.log(products);
    const [state, dispatch] = useReducer(cartReducer,{
        products: products,
        cart : [],
    });

    const [productState, productDispatch] = useReducer(productReducer,{
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    })

  return <Cart.Provider value={{ state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}