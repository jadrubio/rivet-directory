import { IconButton, Tooltip } from "@mui/material";
import EditNoteSharpIcon from "@mui/icons-material/EditNoteSharp";
import store from "../store";
import { setActiveProfile } from "../store/profileSlice";
import { useNavigate } from "react-router-dom";

type EditProfileLinkArgs = {
  id: number
}
const EditProfileLink = ({ id }: EditProfileLinkArgs) => {
  const navigate = useNavigate();

  function editProfile(data: number) {
    store.dispatch(setActiveProfile(data));
    navigate("/profile-form");
  }

  return (
    <Tooltip title="Edit Profile">
      <IconButton onClick={() => editProfile(id)}>
        <EditNoteSharpIcon />
      </IconButton>
    </Tooltip>
  );
};

export { EditProfileLink };
