import React from 'react'
import './Header.css'
import as from './img/amazon_PNG11.png'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from './StateProvider'
import { auth } from './Firebase'

function Header() {
    const [{basket,user}]=useStateValue()
    console.log(basket)
   const login=()=>{
       if(user){
           auth.signOut()
       }
   }
    return (
        <nav className="header">
        <Link to="/">
        <img  className="header_logo" src={as}
            alt=""/>
            </Link>
       
       <div className='header_search'>
        <input type="text" className='header_searchInput'/>
        <SearchIcon className='header_searchIcon'/>
    </div>

    <div className="header_nav">
        <Link to={!user &&'/login'} className='header_link'>
            <div onClick={login} className='header_options'>
    <span className='header_optionlineone'>Hello {user?.email}</span>
            <span className='header_optionlinetwo'>{user?'Sign Out':'sign In'}</span>
       </div>
        </Link>

        <Link to='/' className='header_link'>
            <div className='header_options'>
            <span className='header_optionlineone'>Return </span>
            <span className='header_optionlinetwo'>& orders</span>
       </div>


        </Link>

        <Link to='/' className='header_link'>
            <div className='header_options'>
            <span className='header_optionlineone'>Your</span>
            <span className='header_optionlinetwo'>prime</span>
       </div>
        </Link>
        <Link to='/checkout' className='header_link'>
            <div className='header_optionBasket'>
            <ShoppingBasketIcon/>
    <span className='header_optionlinetwo header_basketcount'>{basket.length}</span>
            
       </div>
        </Link>
        
    </div>


        </nav>
    )
}

export default Header
