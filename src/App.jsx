import { ThemeProvider } from "@emotion/react";
import StartPage from "./pages/start/Start";
import TopicList from "./pages/topicList/TopicList";
import { createTheme, CssBaseline } from "@mui/material";
import StyledBox from "./components/themeYellow";
import HandleFilter from "./components/function/filter";
const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: "2rem",
      fontWeight: 500,
      color: "#ffff",
    },
    h2: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: "1rem",
      fontWeight: 500,
      color: "#0E54CD",
    },
    subtitle1: {
      // EN, UK
      fontSize: "1rem",
      color: "#17161C",
      fontWeight: "400",
      textTransform: "uppercase",
    },
    subtitle2: {
      fontSize: "1rem",
      color: "#17161C",
      fontWeight: 500,
    },
    body1: {
      // Translate word in card
      fontSize: "1rem",
      color: "#17161C",
      fontWeight: 600,
    },
    body2: {
      // example sentence in card
      fontSize: "1rem",
      color: "#17161C",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledBox>
          {/* <HandleFilter /> */}
          {/* <StartPage /> */}
          <TopicList />
        </StyledBox>
      </ThemeProvider>
    </>
  );
}

export default App;
