import {
  AccordionActions,
  Box,
  Button,
  Container,
  Tooltip,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useNavigate } from "react-router-dom";
import { EditProfileLink } from "../../UI/EditProfileLink";

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
  const navigate = useNavigate();

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
              overflow: "hidden",
              display: "-webkit-box",
              whiteSpace: "pre-wrap",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: maxNoteLines,
            }}
          >
            {notes}
          </Typography>
        </Box>
      )}
      <AccordionActions>
        <Button variant="text" onClick={() => navigate(`profile/${id}`)}>
          View Profile
        </Button>
        <EditProfileLink id={id} />
      </AccordionActions>
    </Container>
  );
};

export { ProfileDetails };
