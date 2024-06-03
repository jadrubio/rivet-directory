import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ProfileState,
  makeFakeUserList,
  Profile,
} from "../features/profile/profileUtils";
import { RootState } from "../store";
import { isArray } from "lodash";

const BASE_URL = "https://codechallenge.rivet.work/api/v1";
const initialState = {
  profiles: [],
  inFocus: null,
  loading: false,
} as ProfileState;

function returnFakeProfiles() {
  const profiles = makeFakeUserList();
  console.log("got some [fake] data", profiles);
  return profiles;
}

async function returnNetworkProfileById(id: string) {
  return await fetch(`${BASE_URL}/profile/1`, {
    headers: {
      token: process.env.REACT_APP_API_TOKEN || "",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

async function returnNetworkProfiles() {
  const profiles = await fetch(`${BASE_URL}/profiles`, {
    headers: {
      token: process.env.REACT_APP_API_TOKEN || "",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  if (isArray(profiles)) {
    return profiles;
  }
  return [profiles];
}

async function createNetworkProfile(data: Omit<Profile, "id">) {
  const response = await fetch(`${BASE_URL}/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: process.env.REACT_APP_API_TOKEN || "",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function updateNetworkProfile(data: Profile) {
  const response = await fetch(`${BASE_URL}/profile/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: process.env.REACT_APP_API_TOKEN || "",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export const fetchProfiles = createAsyncThunk("profiles/fetchProfiles", () => {
  // return returnFakeProfiles()
  return returnNetworkProfiles();
});

export const createProfile = createAsyncThunk(
  "profiles/createProfile",
  async (data: Omit<Profile, "id">) => {
    return await createNetworkProfile(data);
  },
);

export const updateProfile = createAsyncThunk(
  "profiles/updateProfile",
  async ({ data }: { data: Profile }) => {
    return await updateNetworkProfile(data);
  },
);

export const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    setActiveProfile: (state, action) => {
      const id = action.payload;
      console.log("should set active profile ID", action.payload);

      const found = state.profiles.find((item) => item.id === id);
      state.inFocus = found || null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProfiles.fulfilled, (state, action) => {
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    });
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfiles.rejected, (state) => {
        state.loading = false;
      });

    builder.addCase(createProfile.fulfilled, (state, action) => {
      state.profiles.push(action.payload);
      state.loading = false;
    });
    builder
      .addCase(createProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProfile.rejected, (state) => {
        state.loading = false;
      });

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      const updatedProfile = action.payload;
      state.profiles = state.profiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile,
      );
      state.loading = false;
    });
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setActiveProfile } = profileSlice.actions;
export const profileList = (state: RootState) => state.profile.profiles;
export const countProfiles = (state: RootState) =>
  state.profile.profiles.length as number;
export const currentProfile = (state: RootState) => state.profile.inFocus;
export const loading = (state: RootState) => state.profile.loading;

export default profileSlice.reducer;
