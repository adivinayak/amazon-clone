import React from 'react'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct' 
import './Checkout.css'
import Dubtotal from './Dubtotal'

function Checkout() {
    const [{basket},dispatch] = useStateValue()
                     
    return (
        <div className='checkout'>
            <div className='checkout_left'>
            <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png' alt='' />
            {basket.length === 0 ?
           (
              <div>
                  <h1>Your shopping cart is empty</h1>
              </div>): 

               (<div>
                   <h1 className='checkout_title'>
                       Your shopping Basket
                       </h1>
                       {basket.map(item=>(

                     <CheckoutProduct 
                     id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      />

                  ))}
               </div>
               )}
            </div>
             {basket.length>0 && (
                 <div className='checkout_right'>
                     <h1>Subtotal</h1>
                     <Dubtotal/>
                 </div>
             )}
        </div>
    )

}

export default Checkout
