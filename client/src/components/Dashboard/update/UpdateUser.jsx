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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    avatar: "",
  });
  const { updateProfile } = UseAuth({});

  const [modalState, setModalState] = useState(false);

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [userName, setUserName] = useState("");

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

  // const handleChange = (e) => {
  //   switch (e.target.name) {
  //     case "firstName":
  //       setFirstName(e.target.value);
  //       break;
  //     case "lastName":
  //       setLastName(e.target.value);
  //       break;
  //     case "phoneNumber":
  //       setPhoneNumber(e.target.value);
  //       break;
  //     case "userName":
  //       setUserName(e.target.value);
  //       break;
  //     default:
  //   }
  // };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateProfile(formData);
    navigate("/dashboard");
  };
  console.log(formData);
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
                // value={firstName}
                // onChange={handleChange}

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value.trim(),
                  })
                }
              />
            </div>
            <div className="input-element">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                // value={lastName}
                // onChange={handleChange}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value.trim(),
                  })
                }
              />
            </div>
            <div className="input-element">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                // value={phoneNumber}
                // onChange={handleChange}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value.trim(),
                  })
                }
              />
            </div>

            <div className="input-element">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                // value={userName}
                // onChange={handleChange}

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value.trim(),
                  })
                }
              />
            </div>
            <div className="input-element">
              <label htmlFor="">Avatar</label>
              <input
                type="text"
                name="avatar"
                placeholder="Avatar"
                // value={avatar}
                // onChange={handleChange}

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value.trim(),
                  })
                }
              />
            </div>
            {/* <div className="input-element">
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
            </div> */}

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
                <h3>Upload your Photo</h3>
                <input type="file" name="" id="" className="modal-input" />
                <p className="allowed-text">
                  *Allowed formats: jpeg, jpg, png and svg*{" "}
                </p>
                <button
                  className="save-btn-modal"
                  onClick={() => {
                    setModalState(false);
                  }}
                >
                  Add Photo
                </button>
              </div>
            </div>
          </ModalStyle>
        )}
      </Container>
    </UpdateUserPageStyle>
  );
};
