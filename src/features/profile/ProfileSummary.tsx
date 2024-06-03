import { Box, Stack } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import {ProfilePic} from "../../UI/ProfilePic";

export type ProfileSummaryArgs = {
  photo?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const ProfileSummary = ({
  photo,
  firstName,
  lastName,
  email,
  phone,
}: ProfileSummaryArgs) => {
  return (
    <Stack direction={"row"} spacing={1}>
     <ProfilePic photo={photo} />
      <Stack spacing={1} style={{ padding: ".5em" }}>
        <Box>
          <h3 style={{ margin: 0 }}>
            {firstName} {lastName}
          </h3>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <MailOutlineIcon sx={{ margin: "0 5px" }} />
          {email} -{" "}
          <PhoneIcon sx={{ margin: "0 5px" }} />
          {phone}
        </Box>
      </Stack>
    </Stack>
  );
};

export { ProfileSummary };
