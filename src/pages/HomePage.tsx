import { TopBar } from "../UI/TopBar";
import { ProfilePreview } from "../features/profile/ProfilePreview";
import withLoading from "../hoc/withLoading";

const HomePage = () => {
  return (
    <header className="App-header" style={{ textAlign: "center" }}>
      <TopBar />
      <ProfilePreview />
    </header>
  );
};

export default withLoading(HomePage);
