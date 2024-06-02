import { useDispatch } from "react-redux";
import {
  AccordionActions,
  Box,
  Container,
  IconButton, Tooltip,
  Typography,
} from "@mui/material";
import { setActiveProfile } from "../../store/profileSlice";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";
import {Link, useNavigate} from "react-router-dom";

export type ProfileDetailArgs = {
  id: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  notes?: string;
};

const maxNoteLines = 2;

const ProfileDetails = ({
  id,
  address,
  city,
  state,
  zip,
  notes,
}: ProfileDetailArgs) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function editProfile(data: number) {
    dispatch(setActiveProfile(data));
    navigate("/profile-form");
  }

  function viewProfile(id: number) {
    navigate(`/view-profile`);
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
            <Tooltip title="Notes">
              <DescriptionOutlinedIcon />
            </Tooltip>
          </Divider>
          <Typography
            variant="body1"
            sx={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: maxNoteLines,
            }}
          >
            {notes}
          </Typography>
          {notes.split('\n').length > maxNoteLines && (
            <Link
              to={`/profile/${id}`}
            >
              View Profile
            </Link>
          )}
        </Box>
      )}
      <AccordionActions>
        <Tooltip title="Edit Profile">
          <IconButton onClick={() => editProfile(id)} >
            <EditNoteSharpIcon />
          </IconButton>
        </Tooltip>
      </AccordionActions>
    </Container>
  );
};

export { ProfileDetails };
