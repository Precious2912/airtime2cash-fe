import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UseAuth } from "../../../context/useAuth";
import {
  BackDiv,
  Container,
  ModalStyle,
  UpdateUserPageStyle,
} from "./UpdateUserStyles";

import { Back, HeaderAndButton } from "../../../styles/registerStyle";



import logo from "../../../assets/icon/logo2.svg";
import backicon from "../../../assets/icon/backicon.svg";

export const UpdateUserSetting = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);

  const [setImage, setSetImage] = useState({});



  const { updateProfile } = UseAuth({});
  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalState(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
  const [lastName, setLastName] = useState(localStorage.getItem("lastName"));
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber")
  );
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));

  const handleChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;
      case "userName":
        setUserName(e.target.value);
        break;
      case "avatar":
        setAvatar(e.target.value);
        break;
      default:
    }
  };

  const formData = {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    phoneNumber: phoneNumber,
    avatar: avatar,
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateProfile(formData);
    navigate("/dashboard");
  };

  return (
    <UpdateUserPageStyle>
      <BackDiv />

      <Container>
        <HeaderAndButton>
          <Link to="/dashboard">
            <Back>
              <img src={backicon} alt=" " />
              Go back
            </Back>
          </Link>
        </HeaderAndButton>
        <div className="container">
          <img src={logo} alt=" " className="logo" />

          <h2 className="header-text">Basic Infomation</h2>

          <form action="" className="form-group" onSubmit={handleUpdate}>
            <div className="input-element">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-element">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-element">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="input-element">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                value={userName}
                onChange={handleChange}
              />
            </div>

            <div className="input-element">
              <label htmlFor="">Avatar</label>
              <input
                type="text"
                name="avatar"
                placeholder="Enter avatar url here"
                value={avatar}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="save-btn">
              Save
            </button>
          </form>
        </div>
      </Container>
    </UpdateUserPageStyle>
  );
};
