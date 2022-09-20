import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Back = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-weight: lighter;
  color: #21334f;
  border: none;
  width: 70px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 40px;
  & img {
    margin-right: 10px;
    width: 13;
    height: 13;
  }
`;



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



export const StyledContainer = styled.div`
margin: 0 auto;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #E5E5E5;
`;

export const StyledTitle = styled.h2`
width: 263px;
height: 39px;
margin-left: 285px;
margin-top: 100px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #21334F;
flex: none;
order: 0;
flex-grow: 0;
`;



export const StyledSubTitle = styled.p`
width: 432px;
height: 38px;
margin-left: 275px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #C4C4C4;
flex: none;
order: 1;
flex-grow: 0;
`;

export const StyledFormButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 24px;
margin-left: 275px;
gap: 16px;
width: 320px;
height: 48px;
background: linear-gradient(101.99deg, #DE3D6D 55.72%, #F5844C 103.65%);
border-radius: 6px;
flex: none;
order: 2;
flex-grow: 0;
border: none;
`;

export const StyledButton = styled(Link)`
width: 104px;
height: 19px;
margin-left: 295px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
background-color: #D8D8D8;
`;


export const Avatar = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-image: url(${(props) => props.image});
background-size: cover;
background-position: center;
margin: 0 auto;
`;

export const CopyrightText = styled.p`
padding: 5px;
margin: 20px;
text-align: center;
color: ${colors.light2};
`;

export const StyledFormArea = styled.div`
 /* position: absolute;  */
width: 860px;
height: 527px;
left: 0px;
top: 0px;
background: #FFFFFF;
justify-content: center;
align-items: center;

`;


export const StyledLabel = styled.p`
text-align: left;
font-size: 15px;
font-weight: bold;
`;

export const ButtonGroup = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
margin-top: 25px;
`;

export const StyledTextInput = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 10px;
justify-content: center;
width: 320px;
height: 408px;
margin-left: -275px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
flex: none;
order: 1;
flex-grow: 0;
`;
