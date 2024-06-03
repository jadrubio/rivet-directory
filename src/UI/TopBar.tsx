import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import store from "../store";
import { setActiveProfile } from "../store/profileSlice";

const TopBar = () => {
  const navigate = useNavigate();

  function handleClickAdd() {
    store.dispatch(setActiveProfile(null));
    navigate("/profile-form");
  }
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          width: "32rem",
          padding: ".5em",
          margin: "0 auto",
          maxWidth: "100%",
          position: "absolute",
          left: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            border: "1px solid gray",
            backgroundColor: "white",
            padding: ".5em",
            width: "1em",
            height: "1em",
            float: "right",
            borderRadius: "4px",
            cursor: "pointer",
            lineHeight: "1.2em",
          }}
          onClick={() => handleClickAdd()}
        >
          ➕
        </Box>
      </Box>
      <h1>Welcome to Rivet</h1>
    </Box>
  );
};

export { TopBar };
