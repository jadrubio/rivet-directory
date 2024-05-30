import { Box, Stack } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

type ProfileSummaryArgs = {
  photo: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const spectrum =
  "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)";

const ProfileSummary = ({
  photo,
  firstName,
  lastName,
  email,
  phone,
}: ProfileSummaryArgs) => {
  return (
    <Stack direction={"row"} spacing={1}>
      {photo ? (
        <Box
          sx={{
            width: "5em",
            height: "5em",
            backgroundImage: `url("${photo}")`,
            backgroundSize: "cover",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "5em",
            height: "5em",
            background: spectrum,
          }}
        />
      )}
      <Stack spacing={1} style={{ padding: ".5em" }}>
        <Box>
          <h3 style={{ margin: 0 }}>
            {firstName} {lastName}
          </h3>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <MailOutlineIcon sx={{ margin: "0 5px" }} /> {email} -{" "}
          <PhoneIcon sx={{ margin: "0 5px" }} /> {phone}
        </Box>
      </Stack>
    </Stack>
  );
};

export { ProfileSummary };
