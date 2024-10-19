import { styled } from "@mui/system";
import { Box } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 16,
  paddingRight: 16,
  width: "100%",
  height: "100vh",
  backgroundColor: "#c6e8ff",
  // margin: auto,
}));

export default StyledBox;
