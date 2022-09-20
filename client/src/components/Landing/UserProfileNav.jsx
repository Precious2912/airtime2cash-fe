import React, { useState } from "react";
import styled from "styled-components";
// import UserImg from "../../assets/images/user.jpeg";
import { FiChevronDown } from "react-icons/fi";
import ProfileIcon from "../../assets/icon/UserIcon.svg";
import SettingsIcon from "../../assets/icon/settings.svg";
import HelpIcon from "../../assets/icon/help.svg";
import LogoutIcon from "../../assets/icon/logout.svg";
import { Link } from "react-router-dom";

const UserProfileNav = ({ setLogout, dashboard }) => {
  //   const { getUser } = UseAuth();
  //   const [data, setData] = useState();
  const firstName = localStorage.getItem("firstName");
  const avatar = localStorage.getItem("avatar");

  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <Profile>
      <Link to="/dashboard/UpdateUser">
        <img src={avatar} alt="" />
      </Link>
      <span onClick={() => setShowDropdown(!showDropdown)}>
        <span>{firstName} </span>
        {dashboard && (
          <>
            <FiChevronDown />
            <Dropdown showDropdown={showDropdown}>
              <Link to="/dashboard/UpdateUser">
                <DropdownItem>
                  {" "}
                  <img src={ProfileIcon} alt="" /> <span>Account</span>{" "}
                </DropdownItem>
              </Link>
              <DropdownItem>
                {" "}
                <img src={SettingsIcon} alt="" /> <span>Settings</span>{" "}
              </DropdownItem>
              <DropdownItem>
                {" "}
                <img src={HelpIcon} alt="" /> <span>Help Center</span>{" "}
              </DropdownItem>
              <DropdownItem onClick={() => setLogout(false)}>
                {" "}
                <img src={LogoutIcon} alt="" /> <span>Logout</span>{" "}
              </DropdownItem>
            </Dropdown>
          </>
        )}
      </span>
    </Profile>
  );
};

export default UserProfileNav;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  & img {
    width: 36px;
    border-radius: 50%;
  }
`;
const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 10%;
  background-color: #fff;
  width: 226px;
  height: 180px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: ${({ showDropdown }) => (showDropdown ? "block" : "none")};
  transition: all 0.3s ease-in-out;
  &.active {
    display: block;
  }
`;
const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #21334f;
  font-weight: lighter;
  margin: 15px 20px;
  & img {
    width: 24px;
  }
`;
