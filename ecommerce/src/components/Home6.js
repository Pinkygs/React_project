import React from 'react'
import { product6 } from './product6'
export const Home6 = ({uname}) => {
  return (
    <div>
      <h2> hi i am child component and user 
        is {uname} </h2>
        <product6 un = {uname} />
    </div>
  )
}
