import React from 'react'
import logo from '../../assets/icon/logo2.svg'
// import { NavLink } from 'react-router-dom'
import {useState} from 'react'
import {Wrapper, Nav, Logo,Hamburger,Menu,MenuLinks } from './LandingStyles'
import StyleButton from '../Button.styles.jsx'
import UserProfileNav from './UserProfileNav'
import { Link } from 'react-router-dom'

export const Navbar=()=> {
    const [open, setOpen] = useState(false) 
    const [isLogin, setIsLogin] = useState(false)
  return ( 
    <Wrapper>
    <Nav><a href='/'><Logo src={logo} alt="" /></a>
    <Hamburger onClick={()=> setOpen(!open)}>
        <span />
        <span />
        <span />
    </Hamburger> 
    <Menu open={open}>
        <MenuLinks><a href='/'>Home</a></MenuLinks>
        <MenuLinks><a  href='/#about'>About Us</a></MenuLinks>
        <MenuLinks><a href='/#product'>Products</a></MenuLinks>
        <MenuLinks><a href='/#contactUs'>Contact Us</a></MenuLinks>
        {isLogin ? <UserProfileNav setLogout={setIsLogin}/> : <StyleButton onClick={()=>setIsLogin(true)} width='20%'><Link to="/login">Login</Link></StyleButton>}
    </Menu>
    </Nav>
    </Wrapper>
  )
}


// activeClassName="active" 