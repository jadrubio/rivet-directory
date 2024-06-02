import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Grid, TextField, GridSize } from "@mui/material";

interface FormInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: FieldErrors;
  xs?: GridSize;
  sm?: GridSize;
}

const FormInput = ({ name, label, control, errors, xs = 12, sm }: FormInputProps) => (
  <Grid item xs={xs} sm={sm}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
          fullWidth
          sx={{ backgroundColor: "white" }}
        />
      )}
    />
  </Grid>
);

export { FormInput };
