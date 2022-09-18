import styled from "styled-components";

export const DashboardStyle = styled.div`
  .top {
    width: 90rem;
    height: 16.938rem;
    background: rgba(222, 61, 109, 0.1);
  }

  .dashboard {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.75rem;
    gap: 3.75rem;
    width: 42.438rem;
    height: 69.125rem;
    margin: -8rem auto 0 auto;
    background: #ffffff;
    border: 1px solid #d9d9d9;

    h1 {
      width: 10.563rem;
      height: 2.438rem;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.438rem;
      color: #012a4a;
    }

    .balance-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      gap: 0.25rem;

      width: 34.438rem;
      height: 9.438rem;

      background: #de3d6d;
      border-radius: 24px;
    }

    .balance {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0rem;
      gap: 0.25rem;

      width: 183px;
      height: 106px;
    }
  }
`;
