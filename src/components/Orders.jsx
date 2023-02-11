import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div>
    <Link style={{color:'white'}} to='cart'>
    <li><p>Returns</p> 
    <p>  -</p><h5> & Orders</h5></li>
    </Link>
    </div>
    
    
  )
}

export default Orders