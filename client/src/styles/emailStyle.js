import styled from 'styled-components'
import { Link } from 'react-router-dom';

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

export const ExtraText = styled.p`

position: absolute;
width: 331px;
height: 20px;
margin-left: 200px;
margin-top: 20px;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;

color: #012A4A;
`;

export const TextLink = styled(Link)`
position: absolute;
width: 331px;
height: 20px;
margin-left: -95px;
margin-top: 1px;

font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;

color: 
rgba(223, 62, 110, 1)
`;


export const StyledContainer = styled.div`
justify-content: center;
align-items: center;
display: grid;
background: #E5E5E5;
height: 100vh;
`;

export const StyledTitle = styled.h2`
/* position: absolute; */
width: 252px;
height: 39px;
left: 304px;
margin-top: 203px;
margin-left: 270px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height */


color: #03435F;
`;



export const StyledSubTitle = styled.p`
width: 432px;
height: 38px;
margin-left: 200px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #03435F;
flex: none;
order: 1;
flex-grow: 0;
`;

export const StyledFormButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 122px;
gap: 10px;
position: absolute;
width: 204px;
height: 54px;
margin-left: 300px;
margin-top: 75px;

background: linear-gradient(104.22deg, #DE3D6D 38.86%, #F5844C 82.71%)
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
/* position: absolute; */
width: 860px;
height: 527px;
left: 0px;
top: 0px;

background: #FFFFFF;
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
width: 263px;
height: 39px;
margin-left: -275px;
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
