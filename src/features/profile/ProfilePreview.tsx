import { Box } from "@mui/material";
import { ProfileList } from "./ProfileList";
import { Status } from "./Status";

const ProfilePreview = () => {
  return (
    <>
      <Box
        sx={{
          width: "40em",
          boxSizing: "border-box",
          padding: ".5em",
          margin: "0 auto",
          maxWidth: "100%",
        }}
      >
        <ProfileList />
      </Box>
      <Status />
    </>
  );
};

export { ProfilePreview };
