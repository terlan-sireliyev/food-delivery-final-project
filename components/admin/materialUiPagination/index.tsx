import React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-outlined": {
            color: "#CD61ED",
            borderColor: "#CD61ED",
            width: "50px",
            height: "50px",
          },
          "& .Mui-selected": {
            backgroundColor: "#CD61ED",
            borderColor: "#CD61ED",
            color: "white",
            width: "50px",
            height: "50px",
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Pagination count={5} variant="outlined" />
    </ThemeProvider>
  );
}

export default App;
