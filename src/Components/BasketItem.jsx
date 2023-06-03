import React from 'react'

function BasketItem({item,product}) {
  return (
     <li>
          {product.title} X {item.amount}
    </li>
   

  )
}

export default BasketItem