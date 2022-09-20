import { useState } from "react";
import { useField } from "formik";
import { FiEyeOff, FiEye } from "react-icons/fi";
import styled from "styled-components";


export const colors = {
    theme: '#FF5C8D',
    light1: '#F3F4F6',
    light2: '#E5E7EB',
    dark1: '#1F2937',
    dark2: '#B7C4CF',
    dark3: '#9CA3AF',
    dark4: '#6B7280',
    red: '#DC2626',
}

export const StyledIcon = styled.p`
color: ${colors.dark1};
position: absolute;
font-size: 20px;
top: 35%;
${(props) => props.right && `right: 15%;`}
${(props) => props.left && `left: 15%;`}
`;

export const ErrorMsg = styled.div`
font-size: 12px;
color: ${colors.red};
margin-top: -5px;
margin-bottom: 10px;
text-align: left;
`; 

export const StyledLabel = styled.p`
text-align: left;
font-size: 15px;
font-weight: bold;
`;

export const StyledTextInput = styled.input`
width: 280px;
padding: 15px;
padding-left: 50px;
font-size: 17px;
letter-spacing: 1px;
color: ${colors.dark1};
background-color: ${colors.light2};
border: 0;
outline: 0;
display: block;
margin: 5px auto, 10px auto;
transition: ease-in-out 0.3s;

${(props) => props.onInvalid && `background-color: ${colors.red}; color: ${colors.theme};`}

&:focus {
    background-color: ${colors.light};
    color: ${colors.theme};
    outline: none;
}
`;



export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>

           {props.type !== "password" && (
            <StyledTextInput 
            {...field} 
            {...props} 
            />
            )}

            {props.type === "password" && (
                <StyledTextInput 
                invalid = { meta.touched && meta.error }
                {...field} 
                {...props}
                type={show ? "text" : "password"}
                />
            )}

            <StyledIcon>{icon}</StyledIcon>
           
            {props.type === "password" && (
            <StyledIcon onClick={() => setShow(!show)}right>
                    {show && <FiEye />}
                    {!show && <FiEyeOff />}
                </StyledIcon>
            )}

          {!meta.touched && meta.error ? (
             <ErrorMsg>(meta.error)</ErrorMsg>
          ): (
            <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
          )}
        </div>
    );
}