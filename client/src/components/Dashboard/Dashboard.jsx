import React from "react";
import { ThemeProvider } from "styled-components";

import UpdateUser from './update/UpdateUser';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

export function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <UpdateUser />
      </>
    </ThemeProvider>
  );
}

// export default Dashboard;
