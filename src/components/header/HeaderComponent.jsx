import React from 'react'
import  "./headerComponent.scss"
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'

const HeaderComponent = ({currentUser}) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option'  to='/shop'>SHOP</Link>
        <Link  className='option' to = '/'>CONTACT</Link>
        {currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGNOUT</div> : <div>
        <Link  className='option' to = '/signin'>SIGNIN</Link></div>}
        
      </div>
    </div>
  )
}

export default HeaderComponent
