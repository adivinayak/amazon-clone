import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subtotal.css'
import { useStateValue } from './StateProvider'
import {getBasketTotal} from './Reducer'

function Dubtotal() {
    const [{ basket }] = useStateValue();
    return (
        <div className='subtotal'>
             <p>
                Subtotal ({basket.length} items) : <strong>{ 
                                                        new Intl.NumberFormat('en-IN', {
                                                        style: 'currency',
                                                        currency: 'INR'}).format(getBasketTotal(basket)) 
                                                    }</strong>
            </p>
            <small className='subtotal_gift'>
                <input type='checkbox' />This order contains a gift
            </small>
        
           
            <button className='subtotal_button'>Proceed to checkout</button>
        </div>
    )
}

export default Dubtotal
