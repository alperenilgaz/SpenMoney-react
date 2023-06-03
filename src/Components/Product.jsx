import React from 'react'
import styles from './style.module.css'
import {moneyFormat} from '../helper'
function Product({product,basket,setBasket,total,money}) {
  const basketItem = basket.find(item => item.id === product.id) // sor
  const addBasket = (e) =>{
  const checkBasket = basket.find(item=> item.id === product.id)
  if(checkBasket){
    checkBasket.amount +=1
    setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
  }else{
    setBasket([...basket,{
      id:product.id,
      amount:1
    }])
  }
  }
  const removeBasket = () => { // sor
   const currentBasket = basket.find(item => item.id ===product.id)
   const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
   currentBasket.amount-=1
   if(currentBasket.amount === 0)
   {
      setBasket([...basketWithoutCurrent])
   }else{
      setBasket([...basketWithoutCurrent,currentBasket])
   }
   
  }
  return (
    <>
      <div className={styles.product}>
        <img className={styles.image} src={product.image}/>
      <h3 className={styles.title}>{product.title}</h3>
      <div className={styles.price}>${moneyFormat(product.price)}</div>
      <div className={styles.action}>
        <button className={styles.sellbtn} disabled={!basketItem} onClick={removeBasket}>Çıkart</button>
        <span className={styles.amount}>{basketItem && basketItem.amount || 0}</span>
        <button className={styles.buybtn} disabled={total + product.price  > money} onClick={addBasket}>Ekle</button>
      </div>
    </div>
    </>

  )
}

export default Product