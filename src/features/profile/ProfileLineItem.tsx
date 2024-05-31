import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Profile } from "./profileUtils";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileSummary } from "./ProfileSummary";

type ProfileLineItemArgs = {
  profile: Profile;
};

const ProfileLineItem = ({ profile }: ProfileLineItemArgs) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <ProfileSummary
          photo={profile.photo}
          firstName={profile.first_name}
          lastName={profile.last_name}
          email={profile.email}
          phone={profile.phone}
        />
      </AccordionSummary>
      <AccordionDetails>
        <ProfileDetails
          id={profile.id}
          address={profile.address}
          city={profile.city}
          state={profile.state}
          zip={profile.zip}
          notes={profile.notes}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export { ProfileLineItem };
