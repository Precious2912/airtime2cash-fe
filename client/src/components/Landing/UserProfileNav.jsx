import React from 'react'
import styled from 'styled-components'
import UserImg from '../../assets/images/user.jpeg'
import { FiChevronDown } from 'react-icons/fi';
import  ProfileIcon  from '../../assets/icon/UserIcon.svg'
import  SettingsIcon  from '../../assets/icon/settings.svg'
import  HelpIcon  from '../../assets/icon/help.svg'
import  LogoutIcon  from '../../assets/icon/logout.svg'


const UserProfileNav = ({setLogout}) => {
    const [showDropdown, setShowDropdown] = React.useState(false)
  return (
    <Profile onClick={()=>setShowDropdown(!showDropdown)}>
        <img src={UserImg} alt="" />
        <span>Davids </span>
        <FiChevronDown />
        <Dropdown showDropdown={showDropdown}>
            <DropdownItem>  <img src={ProfileIcon} alt="" /> <span>Account</span> </DropdownItem>
            <DropdownItem>  <img src={SettingsIcon} alt="" /> <span>Settings</span> </DropdownItem>
            <DropdownItem>  <img src={HelpIcon} alt="" /> <span>Help Center</span> </DropdownItem>
            <DropdownItem onClick={()=>setLogout(false)}>  <img src={LogoutIcon} alt="" /> <span>Logout</span> </DropdownItem>
        </Dropdown>
    </Profile>
  )
}

export default UserProfileNav
const Profile = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    cursor: pointer;
    & img {
        width: 36px;
        border-radius: 50%;
    }
`
const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    width: 226px;
    height: 180px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 100;
    display: ${({showDropdown})=>(showDropdown ? 'block' : 'none')};
    transition: all 0.3s ease-in-out;  
    &.active {
        display: block;
    }
`
const DropdownItem = styled.div`
display: flex;
align-items: center;
gap: 15px;
color: #21334F;
font-weight: lighter;
margin: 15px 20px;
 & img {
        width: 24px;
 }
`
