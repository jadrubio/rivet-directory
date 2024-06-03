import withLoading from "../hoc/withLoading";
import {ProfileInformation} from "../features/profile/ProfileInformation";

const FormPage = () => {
  return <ProfileInformation />
}

export default withLoading(FormPage)