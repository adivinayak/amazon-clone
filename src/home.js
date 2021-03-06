import React from 'react'
import './home.css'
import Product from './Product.js'
function Home() {
    return (
        <div className='home'>
            <img className='home_image' src="https://www.amazon.in/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/1X_AuCC_Music._CB428379140_.jpg"
            alt=""/>
           <div className='home_row'>
           <Product
                    id='1'
                    title='OnePlus 8 5G (Glacial Green 6GB RAM+128GB Storage)'
                    image='https://www.amazon.in/images/I/619iTNHSCGL._SL1500_.jpg'
                    rating={5}
                    price={41999}
                /> 
                       <Product
                    id='2'
                    title='Apple iPhone 11 Pro Max (64GB) - Midnight Green'
                    image='https://www.amazon.in/images/I/61ers6OzvUL._SL1024_.jpg'
                    rating={5}
                    price={117100}
                
                /> 
           </div>

           <div className='home_row'>
                <Product
                    id='3'
                    title='DELL XPS 9300 13.3-inch FHD Laptop, Silver'
                    image='https://www.amazon.in/images/I/61ieRrVEJXL._SL1000_.jpg'
                    rating={4}
                    price={144990}
                />
                <Product
                    id='4'
                    title='ASUS ROG Zephyrus M GU502GU-ES003T 15.6-inch FHD 144Hz Gaming Laptop'
                    image='https://www.amazon.in/images/I/81YV9uenExL._SL1500_.jpg'
                    rating={5}
                    price={129990}
                />
                <Product
                    id='5'
                    title='
                    Apple MacBook Pro (16-inch, 2.6GHz 9th Gen Intel Core i7) - Space Grey'
                    image='https://www.amazon.in/images/I/71L2iBSyyOL._SL1500_.jpg'
                    rating={5}
                    price={199900}
                />
            </div>
            <div className='home_row'>
                <Product
                    id='6'
                    title='Dell Alienware M15 R2 15.6-inch FHD Laptop, Lunar Light'
                    image='https://www.amazon.in/images/I/61FjdoHidqL._SL1000_.jpg'
                    rating={5}
                    price={322899}
                />
            </div>
             
        </div>
    )
}

export default Home
