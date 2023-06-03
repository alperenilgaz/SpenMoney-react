import React from 'react'
import { moneyFormat } from '../helper'
import {useState} from 'react'
import styles from './style.module.css'
function Header({money,total}) {
  return (
    <> 
        
          {total > 0 && money-total !==0 && (
            <div className={styles.header}>Harcayacak <span className={styles.money}>${moneyFormat(money-total)} </span> paranız kaldi! </div>
          )}
          {total === 0 && (
            <div className={styles.header}>Harcayacak <span className={styles.money}>${moneyFormat(money)}</span> paranız var</div>
          )}
          {money-total === 0 && (
            <div className={styles.header}>Paraniz bitti</div>
          )}
        
        
    </>


  )
}

export default Header