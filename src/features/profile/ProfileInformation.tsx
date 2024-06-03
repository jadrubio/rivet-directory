import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Profile } from "./profileUtils";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import { ProfilePic } from "../../UI/ProfilePic";
import { EditProfileLink } from "../../UI/EditProfileLink";

const ProfileInformation = () => {
  const { id = "-1" } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const profile = useSelector((state: RootState) =>
    state.profile.profiles.find((p: Profile) => p.id === parseInt(id, 10)),
  );

  if (!profile) {
    return <Typography variant="h6">Profile not found</Typography>;
  }

  return (
    <Container
      component={Paper}
      sx={{ p: 4, mt: 4 }}
      style={{ paddingBottom: 20 }}
    >
      <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
        <ProfilePic photo={profile.photo} width="10em" height="10em" />
        <Box textAlign="center" mb={4}>
          <Typography variant="h2">
            {profile.first_name} {profile.last_name}
          </Typography>
        </Box>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <strong>Phone:</strong> {profile.phone}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <strong>Email:</strong> {profile.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <strong>Address:</strong> {profile.address}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <strong>City:</strong> {profile.city}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <strong>State:</strong> {profile.state}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <strong>ZIP:</strong> {profile.zip}
          </Typography>
        </Grid>
        {profile.notes && (
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
              <strong>Notes:</strong> {profile.notes}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button variant="text" onClick={() => navigate("/")}>
          Back to Directory
        </Button>
        <EditProfileLink id={parseInt(id)} />
      </Box>
    </Container>
  );
};

export { ProfileInformation };
