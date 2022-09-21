import styled from 'styled-components';

export const colors = {
    theme: 'lemon',
    light1: 'antiquewhite',
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
margin-left: 275px;
top: 35%;
${(props) => props.right && `right: 15%;`}
${(props) => props.left && `left: 15%;`}
`;


export const StyledSubTitle = styled.p`
width: 432px;
height: 38px;
margin-left: 275px; 
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #C4C4C4;
display: flex;
order: 1;
flex-grow: 0;
`;


export const ResetPassword = styled.span`
font-size: 12px;
font-weight: lighter;
`


export const CopyrightText = styled.p`
padding: 5px;
margin: 20px;
text-align: center;
color: ${colors.light2};
`;
















// RESPONSIVE DESIGN ======================
export const StyledContainer = styled.div`
background: #E5E5E5;
justify-content: center;
display: flex;
min-height: 100vh;
align-items: center;
width: 100vw;

`;

export const StyledFormArea = styled.div`
background-color: white;
/* padding: 6% calc(30%/3); */
min-width: 50%;
max-width: 100%;
margin:0; 
display: flex;
flex-direction: column;
align-items: center;
padding: 6% 2%;
`;



export const Logo = styled.div`
width: 100%;
text-align: center;
& img{
    width: 11rem;
}
`

export const StyledTitle = styled.h2` 
 
font-weight: 700;
font-size: 18px;
margin: 12% 0 14% 0;
color: #21334F;
`;

export const RestForm = styled.form`
 margin: 16px ;
`


export const FormLabel = styled.label`
    font-size: 12px;
    color: #21334F;
    /* font-weight: lighter; */
`

export const FormInput = styled.input`
height: 48px;
border:1px solid #D9D9D9;
padding: 0 5%;
margin : 10px 0 23px 0;
& ::placeholder {
    color: #C4C4C4;
    font-size: 12px;
    font-weight: lighter;
}
`



// export const StyledLabel = styled.p`
// text-align: left;
// font-size: 15px;
// font-weight: bold;
// margin-right: 250px;
// `;


