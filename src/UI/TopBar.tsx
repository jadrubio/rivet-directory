import {Box} from "@mui/material";

const TopBar = () => {
  function handleClickAdd() {
    console.log("Should add another profile!");
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
  )
}

export { TopBar }