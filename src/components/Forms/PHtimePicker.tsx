import { SxProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface ITimePicker {
    name: string;
    size?: "small" | "medium";
    placeholder?: string;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
}


const PHtimePicker = ({name, size = "small", label, required, fullWidth = true, sx }:ITimePicker) => {
 const {control, formState}= useFormContext()
 const isError = formState.errors[name]!== undefined
    return (
        <Controller
        name={name}
        control={control}
        defaultValue={dayjs(new Date().toDateString())}
        render={({field:{onChange, value, ...field }}) => {
            return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                    {...field}
                    label={label}
                    value={value || Date.now()}
                    onChange={(time)=> onChange(time)}
                    timezone='system'
                    slotProps={{
                        textField:{
                            required: required,
                            size: size,
                            sx:{
                                ...sx,
                            },
                            variant:"outlined",
                            error: isError,
                            helperText: isError ? (formState.errors[name]?.message as string) : " ",
                            fullWidth: fullWidth,
                        }
                    }}
                    />
                </LocalizationProvider>
            )
        }}
    />
    );
};
export default PHtimePicker;