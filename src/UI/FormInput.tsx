import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Grid, TextField, GridSize } from "@mui/material";

interface FormInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: FieldErrors;
  type?: "textfield" | "textarea";
  xs?: GridSize;
  sm?: GridSize;
  minRows?: number;
  maxRows?: number;
}

const FormInput = ({
                     name,
                     label,
                     control,
                     errors,
                     type = "textfield",
                     xs = 12,
                     sm,
                     minRows,
                     maxRows,
                   }: FormInputProps) => (
  <Grid item xs={xs} sm={sm}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        type === "textarea" ? (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            error={!!errors[name]}
            helperText={errors[name]?.message as string}
            fullWidth
            multiline
            minRows={minRows}
            maxRows={maxRows}
            sx={{ backgroundColor: "white" }}
          />
        ) : (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            error={!!errors[name]}
            helperText={errors[name]?.message as string}
            fullWidth
            sx={{ backgroundColor: "white" }}
          />
        )
      )}
    />
  </Grid>
);

export { FormInput };
