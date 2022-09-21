// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import swal from "sweetalert2-react";
// function VerifyStatus() {
//   const { token } = useParams();

//   //   const verifyEmail = async () => {
//   //     try {
//   //       const res = await axios.get(
//   //         `http://localhost:7000/user/verify/${token}`,
//   //         {
//   //           token,
//   //         }
//   //       );
//   //       console.log(token);
//   //       console.log(res.data);
//   //       if (res.data.message ==== "Email Verified") {
//   //         alert("Email Verified");
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   //   useEffect(() => {
//   //     return () => {
//   //       verifyEmail();
//   //     };
//   //   }, []);
//   return <></>;
// }

// export default VerifyStatus;

import React, { useState } from "react";
//eslint-disable-next-line
import axios from "axios";
import "./uploadAvatar.css";

export default function UploadAvatar() {
  //eslint-disable-next-line
  const [fileImage, setFileImage] = useState("");

  //   //   // Get the modal
  //   const modal = document.getElementById("myModal");

  //   //   // Get the button that opens the modal
  //   const btn = document.getElementById("myBtn");

  //   //   // Get the <span> element that closes the modal
  //   const span = document.getElementsByClassName("close")[0];

  //   //   // When the user clicks the button, open the modal
  //   btn.onclick = function () {
  //     modal.style.display = "block";
  //   };

  //   //   // When the user clicks on <span> (x), close the modal
  //   span.onclick = function () {
  //     modal.style.display = "none";
  //   };

  //   // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };

  //   const uploadAvatar = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("avatar", e.target.files[0]);
  //     try {
  //       const res = await axios.post(
  //         "http://localhost:7000/user/uploadAvatar",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  const uploadAvatar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", fileImage);
    formData.append("upload_preset", "sprint2");
    //   formData.append("myAvatar", "uujk0ogg");
    console.log(fileImage);
    console.log(formData);
    try {
      const res = await axios.post(
        "http://api.cloudinary.com/v1_1/podf-live-project/image/upload",
        formData
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Upload Avatar</h2>

      {/* <button id="myBtn">Change Avatar</button> */}

      {/* <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span> */}
      <form>
        <input
          type={"file"}
          onChange={(e) => setFileImage(e.target.files[0])}
        />
        <button type={"submit"} onClick={uploadAvatar}>
          Upload
        </button>
      </form>
      {/* </div> */}
      {/* //   </div> */}
    </>
  );
}
