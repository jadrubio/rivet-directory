import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ProfileList } from "../ProfileList";
import { Profile } from "../profileUtils";
import profileReducer from "../../../store/profileSlice";

jest.mock("../ProfileLineItem", () => ({
  ProfileLineItem: ({ profile }: { profile: Profile }) => (
    <div data-testid="profile-line-item">
      {profile.first_name} {profile.last_name}
    </div>
  ),
}));

const mockProfiles: Profile[] = [
  {
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
  },
  {
    id: 2,
    first_name: "John",
    last_name: "Doe",
    phone: "222-222-2222",
    email: "jd@example.com",
    address: "2 Doe St",
    city: "Othertown",
    state: "NY",
    zip: "22222",
    photo: "https://static.rivet.work/codechallenge/jd.jpg",
    notes: "Night owl",
  },
];

const renderWithProvider = (
  component: React.ReactNode,
  initialState = {
    profile: { profiles: mockProfiles, inFocus: null, loading: false },
  },
) => {
  const store = configureStore({
    reducer: {
      profile: profileReducer,
    },
    preloadedState: initialState,
  });

  return render(<Provider store={store}>{component}</Provider>);
};

describe("ProfileList component", () => {
  it("displays the correct number of profile line items", () => {
    renderWithProvider(<ProfileList />);
    expect(screen.getAllByTestId("profile-line-item")).toHaveLength(
      mockProfiles.length,
    );
  });

  it("displays the correct profile information for each profile", () => {
    renderWithProvider(<ProfileList />);
    mockProfiles.forEach((profile) => {
      expect(
        screen.getByText(`${profile.first_name} ${profile.last_name}`),
      ).toBeInTheDocument();
    });
  });

  it("renders correctly with an empty profile list", () => {
    renderWithProvider(<ProfileList />, {
      profile: { profiles: [], inFocus: null, loading: false },
    });
    expect(screen.queryByTestId("profile-line-item")).toBeNull();
  });
});
