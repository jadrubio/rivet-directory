import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProfileLineItem } from "../ProfileLineItem";
import { Profile } from "../profileUtils";
import { mockProfileDetails, mockProfileSummary } from "./mocks";

jest.mock("../ProfileSummary", () => {
  return mockProfileSummary();
});
jest.mock("../ProfileDetails", () => {
  return mockProfileDetails();
});

describe("ProfileLineItem component", () => {
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

  test("renders without crashing", () => {
    render(<ProfileLineItem profile={mockProfile} />);
    expect(screen.getByTestId("profile-summary")).toBeInTheDocument();
    expect(screen.getByTestId("profile-details")).toBeInTheDocument();
  });

  test("displays the correct profile summary information", () => {
    render(<ProfileLineItem profile={mockProfile} />);
    expect(screen.getByAltText("Amanda Anderson")).toBeInTheDocument();
    expect(screen.getByText("Amanda")).toBeInTheDocument();
    expect(screen.getByText("Anderson")).toBeInTheDocument();
    expect(screen.getByText("aa@example.com")).toBeInTheDocument();
    expect(screen.getByText("111-111-1111")).toBeInTheDocument();
  });

  test("displays the correct profile details information", () => {
    render(<ProfileLineItem profile={mockProfile} />);
    expect(screen.getByText("1 Anderson Ave")).toBeInTheDocument();
    expect(screen.getByText("Anytown")).toBeInTheDocument();
    expect(screen.getByText("CA")).toBeInTheDocument();
    expect(screen.getByText("11111")).toBeInTheDocument();
    expect(screen.getByText("Early bird")).toBeInTheDocument();
  });
});
