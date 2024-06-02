import {useEffect} from "react";
import { useSelector } from "react-redux";
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {Box, Button, Typography, Grid} from "@mui/material";
import {blankFormState, Profile, transformObjValNullToEmptyString, validationSchema} from "./profileUtils";
import store, { RootState } from "../../store";
import { createProfile, setActiveProfile, updateProfile } from "../../store/profileSlice";
import { FormInput } from "../../UI/FormInput";

type ProfileFormArgs = Omit<Profile, "id">;

const ProfileForm = () => {
  const profile = useSelector((state: RootState) => state.profile.inFocus);
  const loading = useSelector((state: RootState) => state.profile.loading);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormArgs>({
    resolver: yupResolver(validationSchema),
    defaultValues: profile ? transformObjValNullToEmptyString(profile) : blankFormState,
  });

  useEffect(() => {
    if (profile) {
      reset(profile);
    } else {
      reset(blankFormState);
    }
  }, [profile, reset]);

  const handleClear = () => {
    reset(blankFormState);
    store.dispatch(setActiveProfile(null));
  };

  const onSubmit = (data: ProfileFormArgs) => {
    if (profile && profile?.id) {
      store.dispatch(
        updateProfile({ id: profile.id, data: { id: profile.id, ...data } }),
      );
    } else {
      store.dispatch(createProfile(data));
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3, width: "100%", maxWidth: "600px", mx: "auto" }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ textAlign: "center" }}
      >
        {profile?.id ? "Update Profile" : "Create Profile"}
      </Typography>
      {loading && <Typography variant="h6">Loading...</Typography>}
      {!loading && (
        <Grid container spacing={2}>
          <FormInput
            name="first_name"
            label="First Name"
            control={control}
            errors={errors}
            sm={6}
          />
          <FormInput
            name="last_name"
            label="Last Name"
            control={control}
            errors={errors}
            sm={6}
          />
          <FormInput
            name="photo"
            label="Photo URL"
            control={control}
            errors={errors}
          />
          <FormInput
            name="address"
            label="Address"
            control={control}
            errors={errors}
          />
          <FormInput
            name="city"
            label="City"
            control={control}
            errors={errors}
            sm={6}
          />
          <FormInput
            name="state"
            label="State"
            control={control}
            errors={errors}
            sm={3}
          />
          <FormInput
            name="zip"
            label="ZIP"
            control={control}
            errors={errors}
            sm={3}
          />
          <FormInput
            name="phone"
            label="Phone"
            control={control}
            errors={errors}
          />
          <FormInput
            name="email"
            label="Email"
            control={control}
            errors={errors}
          />
          <FormInput
            name="notes"
            label="Notes"
            control={control}
            errors={errors}
            type="textarea"
            minRows={4}
            maxRows={12}
          />
          <Grid item xs={12} sm={4}>
            <Button
              variant="text"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              type="button"
              variant="contained"
              color="error"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleClear}
            >
              Clear Form
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              {profile?.id ? "Update Profile" : "Create Profile"}
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export { ProfileForm };
