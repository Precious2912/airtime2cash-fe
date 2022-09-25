import styled from "styled-components";
export const WithdrawWrapper = styled.div`
margin-top:4%;
 font-weight: 400;
& form {
    margin: 5% auto;
}

& .form-group{
    margin-top: 1%;
    /* display: flex;
    flex-direction: column; */
    /* border: 2px solid red; */
}
& label {
     font-size: 14px;
 color:#012A4A;
 font-weight: 400;

   }

& select, & input {
    padding: 15px;
     margin-bottom: 10px;
     margin-top: 10px;
     width: 100%;
     border:1px solid #D9D9D9;
     color: #C4C4C4;
     box-sizing: border-box;
   }
   & input{
    width:100%;

   }
& select:focus, & input:focus {
    outline: none; 
}

& ::placeholder {
    color: #C4C4C4;
}

`
export const ButtonWrapper = styled.div`
margin-top: 4%;
`
export const TabTitle = styled.small`
font-size: 14px;
 color:#012A4A; 
`