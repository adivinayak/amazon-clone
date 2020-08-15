import React from 'react'
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css'

function CheckoutProduct({id,title,image,rating,price}) {
    const [{basket},dispatch]=useStateValue()
   
    const removeBasket=()=>{
            dispatch({
                type:'REMOVE_FROM_BASKET',
                id:id
            })
   }
    return (
        <div className='checkoutProduct'>
            
            <img  className='checkoutProduct_image'src={image} alt=''/>

           
<div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        
        <p className='checkoutProduct_price'>
            <strong>
                {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR'}).format(price)}
            </strong>
        </p>

        <div className='checkoutProduct_rating'>
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p><StarOutlinedIcon style={{ color: 'yellow' }} /></p>
                ))
            }
        </div>
        <button onClick={removeBasket}>Remove</button>
    </div>

            </div>
       
    )
}

export default CheckoutProduct
