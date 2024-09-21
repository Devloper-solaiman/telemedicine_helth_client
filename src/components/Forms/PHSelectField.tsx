import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { SxProps, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface ITextField {
    name: string;
    size?: "small" | "medium";
    placeholder?: string;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
    items: string[]
}


const PHSelectField = ({
    items, name, label, size = "small", required, fullWidth = true, sx,
}: ITextField) => {
    const { control, formState } = useFormContext()
    const isError = formState.errors[name] !== undefined;
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField
                    {...field}
                    sx={{ ...sx }}
                    size={size}
                    select
                    label={label}
                    required={required}
                    fullWidth={fullWidth}
                    error={isError}
                    variant='outlined'
                    helperText={
                        isError ? (formState.errors[name]?.message as string) : ""
                    }
                >
                    {items.map((name) => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
}
export default PHSelectField;