import React from 'react'
import BasketItem from './BasketItem'
import styles from './style.module.css'
function Basket({basket,products,total,resetBasket,money}) {
  return (
    <>
    <div className="container">
   <div className={styles.basketContainer}>
    <h3 className={styles.itemTitle}>Alışveriş Detayları</h3>
   <ul>{
      basket.map(item =>(
        <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
      ))
    }</ul>
    <div className={styles.sonuc}>
    <div className={styles.total}>Total : - ${total}</div>
    <div className={styles.kalan}>Kalan : ${money-total}</div>
    </div>
    <button className={styles.removeBtn} onClick={resetBasket}>Sepeti Sıfırla</button>
 
   </div>
   </div>
    </>
  )
}

export default Basket