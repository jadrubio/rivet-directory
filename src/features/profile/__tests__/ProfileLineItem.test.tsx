import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ProfileLineItem } from "../ProfileLineItem";
import { Profile } from "../profileUtils";
import profileReducer from "../profileSlice";

const mockProfile: Profile = {
  id: 1,
  first_name: "Amanda",
  last_name: "Anderson",
  phone: "111-111-1111",
  email: "aa@example.com",
  address: "1 Anderson Ave",
  city: "Anytown",
  state: "CA",
  zip: "11111",
  photo: "https://static.rivet.work/codechallenge/aa.jpg",
  notes: "Early bird",
};

const renderWithProvider = (component: React.ReactNode) => {
  const store = configureStore({
    reducer: {
      profile: profileReducer,
    },
  });

  return render(<Provider store={store}>{component}</Provider>);
};

describe("ProfileLineItem component", () => {
  it("displays the correct profile summary information", () => {
    renderWithProvider(<ProfileLineItem profile={mockProfile} />);
    expect(screen.getByText("Amanda Anderson")).toBeInTheDocument();
    expect(screen.getByText("aa@example.com - 111-111-1111")).toBeInTheDocument();
  });

  it("displays the correct profile details information", () => {
    renderWithProvider(<ProfileLineItem profile={mockProfile} />);
    expect(screen.getByText("1 Anderson Ave")).toBeInTheDocument();
    expect(screen.getByText("Anytown, CA 11111")).toBeInTheDocument();
  });
});
