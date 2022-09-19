import React, { useEffect, useRef } from "react";
import {
  BackDiv,
  Container,
  ModalStyle,
  UpdateUserPageStyle,
} from "./UpdateUserStyles";
// import logo from "./assets/updateLogo.svg";
import logo from "../../../assets/icon/logo2.svg";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useAuth } from "../../context/auth/authState";

export const UpdateUserSetting = () => {
  // const [formData, setFormData] = useState({});
  const [modalState, setModalState] = useState(false);

  // const [userInfo, setUserInfo] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  // const [avatar, setAvatar] = useState("");
  // const [email] = useState("");
  // const [toastMessage, setToastMessage] = useState("");
  // const [toasti, setToasti] = useState([]);
  // const [poasti, setPoasti] = useState([]);

  // const infooo = async () => {
  //   const res = await axios.get(`${url}/allUsers`);

  //   setToasti(res.data.users);
  // };
  // useEffect(() => {
  //   infooo();
  // }, []);

  // console.log(toasti);
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
      default:
    }
  };

  return (
    <UpdateUserPageStyle>
      <BackDiv />
      <Container>
        <div className="container">
          <img src={logo} alt="logo" className="logo" />

          <h2 className="header-text">Basic Infomation</h2>

          <form action="" className="form-group">
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
              <label htmlFor="avatar">Avatar</label>
              <input
                type="button"
                placeholder="Avatar"
                value={"Upload Photo"}
                className="avatar-upload"
                onClick={() => {
                  setModalState(true);
                }}
              />
            </div>

            <button type="submit" className="save-btn">
              Save
            </button>
          </form>
        </div>
        {modalState && (
          <ModalStyle>
            <div className="modal-content" ref={wrapperRef}>
              <div
                className="close-btn"
                onClick={() => {
                  setModalState(false);
                }}
              >
                <FaTimes />
              </div>
              <img src={logo} alt="logo" className="modal-logo" />
              <div className="upload-section">
                <h3>Upload a Photo</h3>
                <input type="file" name="" id="" className="modal-input" />
                <p className="allowed-text">
                  *Allowed formats: jpeg, jpg, png and svg*{" "}
                </p>
                <button className="save-btn-modal">Add Photo</button>
              </div>
            </div>
          </ModalStyle>
        )}
      </Container>
    </UpdateUserPageStyle>
  );
};
