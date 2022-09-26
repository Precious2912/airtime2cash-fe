import React, { useEffect, useState } from "react";

import Tabs from "./Tabs";
export const Dashboard = () => {
  // eslint-disable-next-line
  // const [isLogin, setIsLogin] = useState(false);
  // const id = localStorage.getItem("id");

  // const apiCall = async () => {
  //   const result = await axios.get(
  //     `${process.env.REACT_APP_BACKEND_URL}/user/singleUser/${id}`
  //   );
  //   localStorage.setItem("firstName", result.data.user.firstName);
  //   localStorage.setItem("lastName", result.data.user.lastName);
  //   localStorage.setItem("phoneNumber", result.data.user.phoneNumber);
  //   localStorage.setItem("avatar", result.data.user.avatar);
  //   localStorage.setItem("userName", result.data.user.userName);
  //   localStorage.setItem("email", result.data.user.email);
  // };

  // useEffect(() => {
  //   apiCall();
  // }, []);

  return (
    <>
      <Tabs />
    </>
  );
};
