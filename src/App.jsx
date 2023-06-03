import Header from './Components/Header';
import {useState,useEffect} from 'react';
import Product from './Components/Product';
import products from "./products.json"
import Basket from './Components/Basket';
import styles from './Components/style.module.css'
function App() {
  const [money, setMoney] = useState(100000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const resetBasket = () => {
    setBasket([])
  }
   useEffect(()=>{
    setTotal( basket.reduce((acc,item)=>{
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0), 
    )
  
  },[basket])
  return (
    <div className="App">
      <Header total={total} money={money}/>
      <div className="container products">
      {products.map(product =>
        <Product money={money} total={total} key={product.id} basket={basket} setBasket={setBasket} product={product}/>
        )}
      </div>
        {total > 0 && (
          <Basket money={money} resetBasket={resetBasket} total={total} products={products} basket={basket}/>
        
        )}
        <br />
     
        
    </div>
  );
}

export default App;
