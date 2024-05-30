import {useDispatch, useSelector} from "react-redux";
import {
  AccordionActions,
  Avatar,
  Box,
  Button,
  Container,
  Grid, IconButton,
  Paper,
  Typography,
} from "@mui/material";
import {currentProfile, setActiveProfile} from "./profileSlice";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';

type ProfileDetailArgs = {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  notes?: string;
};

const ProfileDetails = ({
  id,
  address,
  city,
  state,
  zip,
  notes,
}: ProfileDetailArgs) => {
  const dispatch = useDispatch();

  function trySetProfile(data: number) {
    dispatch(setActiveProfile(data));
    alert(`Should view profile id: ${data}`)
  }

  return (
    <Container maxWidth="md" sx={{ padding: 0 }}>
      <Box>
        <Box>
          <Box textAlign="center">
            <HomeIcon />
            <Typography variant="body1">{address}</Typography>
            <Typography variant="body1">
              {city}, {state} {zip}
            </Typography>
          </Box>
        </Box>
      </Box>
      {notes && (
        <Box marginTop={2}>
          <Divider aria-hidden="true">
            <DescriptionOutlinedIcon />
          </Divider>
          <Typography variant="body1">{notes}</Typography>
        </Box>
      )}
      <AccordionActions>
        <IconButton><EditNoteSharpIcon onClick={()=>trySetProfile(id)}/></IconButton>
      </AccordionActions>
    </Container>
  );
};

export { ProfileDetails };
