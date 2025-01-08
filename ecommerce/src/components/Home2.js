import React from 'react'
import { Product } from './Product';
export const Home2 = (username) => {
  return (
    <div>
        <h2>I am home component and my pop value is {username} </h2>
        <Product uname = {username}/>
    </div>
  );
};
