"use client";
import assets from '@/assets';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import { registerPatient } from '@/services/actions/registerPatient';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.service';
import { ModifyPayload } from '@/utils/ModifyPayload';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { toast } from 'sonner';


const RegisterPage = () => {
    const router = useRouter()

    const handleRegister = async (values: FieldValues) => {
        const data = ModifyPayload(values)
        // console.log(data)

        try {
            const res = await registerPatient(data)
            if (res?.data?.id) {
                toast.success(res?.message)
                const result = await userLogin({ password: values.password, email: values.patient.email });
                if (result?.data?.accessToken) {
                    storeUserInfo({ accessToken: result?.data?.accessToken });
                    router.push('/');
                }
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
                        <PHForm onSubmit={handleRegister}>
                            <Grid container spacing={3} my={2}>
                                <Grid item md={12}>
                                    <PHInput
                                        label="Name"
                                        fullWidth={true}
                                        name="patient.name"
                                        required={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Email"
                                        type="email"
                                        fullWidth={true}
                                        name="patient.email"
                                        required={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Password"
                                        type="password"
                                        fullWidth={true}
                                        name="password"
                                        required={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Contact Number"
                                        type="tel"
                                        fullWidth={true}
                                        name="patient.contactNumber"
                                        required={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Address"
                                        fullWidth={true}
                                        name="patient.address"
                                        required={true}
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
                        </PHForm>
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