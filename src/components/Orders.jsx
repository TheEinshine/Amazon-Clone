import React from 'react'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <div>
    <Link style={{color:'white'}} to='cart'>
    <li><p>Returns</p> 
    <p>  -</p><h4> & Orders</h4></li>
    </Link>
    </div>
    
    
  )
}

export default Orders