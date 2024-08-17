"use client";
import assets from '@/assets';
import { registerPatient } from '@/services/actions/registerPatient';
import { ModifyPayload } from '@/utils/ModifyPayload';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'sonner';

interface IPatientData {
    name: string;
    email: string;
    contactNumber: string;
    address: string;
}

interface IPatientRegisterFormData {
    password: string;
    patient: IPatientData;
}
const RegisterPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IPatientRegisterFormData>()
    const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
        const data = ModifyPayload(values)
        // console.log(data)

        try {
            const res = await registerPatient(data)
            if (res?.data?.id) {
                toast.success(res?.message)
                router.push("/login")
            }
        } catch (err: any) {
            console.error(err.message)
        }
    }

    return (
        <Container>
            <Stack
                sx={{
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        maxWidth: 600,
                        width: "100%",
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 4,
                        textAlign: "center",
                    }}
                >
                    <Stack
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Image src={assets.svgs.logo} width={50} height={50} alt="log" />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={600}>
                                Patient Register
                            </Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={3} my={2}>
                                <Grid item md={12}>
                                    <TextField
                                        label="Name"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                        {...register("patient.name")}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        size="small"
                                        fullWidth={true}
                                        {...register("patient.email")}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        size="small"
                                        fullWidth={true}
                                        {...register("password")}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Contact Number"
                                        type="tel"
                                        size="small"
                                        fullWidth={true}
                                        {...register("patient.contactNumber")}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField
                                        label="Address"
                                        type="text"
                                        size="small"
                                        fullWidth={true}
                                        {...register("patient.address")}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                fullWidth={true}
                                type="submit"
                                sx={{
                                    margin: "10px 0px",
                                }}
                            >
                                Register
                            </Button>
                        </form>
                        <Typography component="p" fontWeight={300}>
                            Do you already have an account?
                            <Link className="text-red-400" href="/login">
                                Login
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default RegisterPage;