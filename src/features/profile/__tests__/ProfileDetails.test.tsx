import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ProfileDetails } from "../ProfileDetails";
import { setActiveProfile } from "../profileSlice";
import { Store, AnyAction, Dispatch} from "@reduxjs/toolkit";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("ProfileDetails component", () => {
  let store: Store<unknown, AnyAction>;
  let mockDispatch: Dispatch<AnyAction> | jest.Mock<any, any>;

  beforeEach(() => {
    store = mockStore({});
    mockDispatch = jest.fn();
    store.dispatch = mockDispatch;
  });

  const renderWithProviders = (ui: any) => {
    return render(<Provider store={store}>{ui}</Provider>);
  };

  it("renders", () => {
    renderWithProviders(
      <ProfileDetails
        id={1}
        address="123 Main St"
        city="Test City"
        state="CA"
        zip="12345"
      />,
    );
    const profileDetailElement = screen.getByText("123 Main St");
    expect(profileDetailElement).toBeInTheDocument();
  });

  it("displays the address correctly", () => {
    renderWithProviders(
      <ProfileDetails
        id={1}
        address="123 Main St"
        city="Test City"
        state="CA"
        zip="12345"
      />,
    );
    expect(screen.getByText("123 Main St")).toBeInTheDocument();
    expect(screen.getByText("Test City, CA 12345")).toBeInTheDocument();
  });

  it("displays notes if provided", () => {
    renderWithProviders(
      <ProfileDetails
        id={1}
        address="123 Main St"
        city="Test City"
        state="CA"
        zip="12345"
        notes="Some important notes"
      />,
    );
    expect(screen.getByText("Some important notes")).toBeInTheDocument();
  });

  it("does not display notes if not provided", () => {
    renderWithProviders(
      <ProfileDetails
        id={1}
        address="123 Main St"
        city="Test City"
        state="CA"
        zip="12345"
      />,
    );
    expect(screen.queryByText("Some important notes")).not.toBeInTheDocument();
  });

  it("clicking the edit button triggers trySetProfile", () => {
    renderWithProviders(
      <ProfileDetails
        id={1}
        address="1 Anderson Ave"
        city="Anytown"
        state="CA"
        zip="11111"
      />,
    );
    const editButton = screen.getByRole("button");
    fireEvent.click(editButton);
    expect(mockDispatch).toHaveBeenCalledWith(setActiveProfile(1));
  });
});
