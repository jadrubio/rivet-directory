import { useDispatch } from "react-redux";
import {
  AccordionActions,
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { setActiveProfile } from "./profileSlice";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";

export type ProfileDetailArgs = {
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
  }

  return (
    <Container>
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
        <IconButton onClick={() => trySetProfile(id)} >
          <EditNoteSharpIcon />
        </IconButton>
      </AccordionActions>
    </Container>
  );
};

export { ProfileDetails };
