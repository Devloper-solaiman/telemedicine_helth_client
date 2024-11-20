"use client"

import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { Gender } from "@/types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TParams = {
    params: {
        doctorId: string
    }
}
const DoctorUpdatePage = ({params}:TParams) => {
    // console.log(params.doctorId)
    const handleFormSubmit = async (values: FieldValues) => {

        try {

        } catch (err: any) {
            console.error(err)
        }

    }

    const defaultValues = {
        doctor: {
            email: "",
            name: "",
            contactNumber: "",
            address: "",
            registrationNumber: "",
            gender: "",
            experience: 0,
            apointmentFee: 0,
            qualification: "",
            currentWorkingPlace: "",
            designation: "",
            profilePhoto: ""
        },
        password: ""
    }
    return (
        <Box>
            <Typography component="h5" variant="h5">update doctor info = {params.doctorId} </Typography>
            <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
                <Grid container spacing={2} sx={{ my: 5 }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.name'
                            label='Name'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.email'
                            type='email'
                            label='Email'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='password'
                            type='password'
                            label='Password'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.contactNumber'
                            label='Contact Number'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.address'
                            label='Address'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.registrationNumber'
                            label='Registration Number'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.experience'
                            type='number'
                            label='Experience'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHSelectField
                            items={Gender}
                            name='doctor.gender'
                            label='Gender'
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.apointmentFee'
                            type='number'
                            label='AppointmentFee'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.qualification'
                            label='Qualification'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.currentWorkingPlace'
                            label='Current Working Place'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name='doctor.designation'
                            label='Designation'
                            fullWidth={true}
                            sx={{ md: 2 }}
                        />
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={4}>
                        <PHFileUploader name='file' label='File Uploader' />
                    </Grid> */}
                </Grid>
                <Button sx={{ mt: 1 }} type='submit'>Update</Button>
            </PHForm>

        </Box>
    );
};

export default DoctorUpdatePage;