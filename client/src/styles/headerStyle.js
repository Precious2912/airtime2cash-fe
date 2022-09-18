import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: linear-gradient(101.31deg, #de3d6d 42.62%, #f5844c 104.19%);
  border-radius: 4px;
  width: 100%;
  height: 96px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 342px;
  justify-content: space-evenly;

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 30px;

    width: 490px;
    height: 39px;

    flex: none;
    order: 1;
    flex-grow: 0;

    img {
    }

    .login {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1.2rem;
      color: #ffffff;
      gap: 10px;
      background: linear-gradient(101.31deg, #de3d6d 42.62%, #f5844c 104.19%);
      border-radius: 4px;
    }

    .home {
      color: #de3d6d;
    }
  }

  .profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 91px;
    height: 36px;
    left: 1199px;
    top: 30px;

    img {
      width: 36px;
      height: 36px;
    }

    p {
      width: 47px;
      height: 19px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      text-align: center;

      color: #012a4a;
    }
  }
`;
