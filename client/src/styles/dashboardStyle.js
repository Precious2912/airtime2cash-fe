import styled from "styled-components";

export const DashboardStyle = styled.div`
  .top {
    width: 1440px;
    height: 271px;
    left: 0px;
    top: 96px;

    background: rgba(222, 61, 109, 0.1);
  }

  .dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    gap: 60px;

    position: absolute;
    width: 50%;
    height: 1106px;
    left: 300px;
    top: 176px;

    background: #ffffff;
    border: 1px solid #d9d9d9;

    h1 {
      width: 169px;
      height: 39px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      /* identical to box height */

      color: #012a4a;
    }

    .balance {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 24px;
      gap: 4px;

      width: 551px;
      height: 151px;

      background: #de3d6d;
      border-radius: 24px;
    }
  }
`;