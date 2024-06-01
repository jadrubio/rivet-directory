import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, TextField, Typography, Stack, Grid } from "@mui/material";
import { Profile } from "./profileUtils";

type ProfileForm = Omit<Profile, "id">;

const validationSchema = yup.object().shape({
  first_name: yup.string().max(255).required("First name is required"),
  last_name: yup.string().max(255).required("Last name is required"),
  phone: yup.string().max(255).required("Phone is required"),
  email: yup
    .string()
    .max(255)
    .email("Invalid email format")
    .required("Email is required"),
  address: yup.string().max(255).required("Address is required"),
  city: yup.string().max(255).required("City is required"),
  state: yup.string().max(255).required("State is required"),
  zip: yup.string().max(255).required("ZIP is required"),
  photo: yup.string().max(255).url("Invalid URL format").optional(),
  notes: yup
    .string()
    .max(4 * 1024 * 1024 * 1024)
    .optional(), // 4GB max
});

const ProfileForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      photo: "",
      notes: "",
    },
  });

  const onSubmit = (data: ProfileForm) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3, width: "100%", maxWidth: "600px", mx: "auto" }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Profile Form
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="first_name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                error={!!errors.first_name}
                helperText={errors.first_name?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="last_name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="photo"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Photo URL"
                variant="outlined"
                error={!!errors.photo}
                helperText={errors.photo?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Address"
                variant="outlined"
                error={!!errors.address}
                helperText={errors.address?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="City"
                variant="outlined"
                error={!!errors.city}
                helperText={errors.city?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="State"
                variant="outlined"
                error={!!errors.state}
                helperText={errors.state?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Controller
            name="zip"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="ZIP"
                variant="outlined"
                error={!!errors.zip}
                helperText={errors.zip?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone"
                variant="outlined"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="notes"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Notes"
                variant="outlined"
                multiline
                rows={4}
                error={!!errors.notes}
                helperText={errors.notes?.message}
                fullWidth
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export { ProfileForm };
