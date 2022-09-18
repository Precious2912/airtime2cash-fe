import React from 'react'
import { HeaderStyle } from '../../styles/headerStyle'
import Logo from '../../assets/logo.svg'
import ProfileImage from '../../assets/profile.svg'

export const Header = ({landing, dashboard}) => {
  return (
    <HeaderStyle>
    <img src={Logo} alt="Airtime to Cash" />
    {landing &&  <div className='navbar'>
      <p className='home'>Home</p>
      <p>About Us</p>
      <p>Products</p>
      <p>Contact Us</p>
      <p className='login'>Login</p>
    </div>
    }

    {dashboard && 
      <div className='profile'>
        <img src={ProfileImage} alt="" />
        <p>Tunde</p>
      </div>
    }
   
    </HeaderStyle>
  )
}