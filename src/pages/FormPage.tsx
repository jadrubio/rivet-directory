import {ProfileForm} from "../features/profile/ProfileForm";
import withLoading from "../hoc/withLoading";

const FormPage = () => {
  return <ProfileForm />
}

export default withLoading(FormPage)