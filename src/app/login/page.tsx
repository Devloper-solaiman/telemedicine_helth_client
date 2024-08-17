"use client"
import assets from '@/assets';
import { storeUserInfo } from '@/services/actions/auth.service';
import { userLogin } from '@/services/actions/userLogin';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type FormValues = {
    email: string;
    password: string
}



const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        // console.log(values);


        try {
            const res = await userLogin(values)
            if (res?.data?.accessToken) {
                storeUserInfo({ accessToken: res?.data?.accessToken })
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
                                Login PH Healthcare
                            </Typography>
                        </Box>
                    </Stack>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={3} my={2}>
                                <Grid item md={6}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        size="small"
                                        fullWidth={true}
                                        {...register("email")}
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
                            </Grid>
                            <Typography textAlign="end" component="p" fontWeight={300}>
                                <Link href="/login">Forgot Password ?</Link>
                            </Typography>
                            <Button
                                fullWidth={true}
                                sx={{
                                    margin: "10px 0px",
                                }}
                                type="submit"
                            >
                                Login
                            </Button>
                        </form>
                        <Typography component="p" fontWeight={300}>
                            Dont have an account?{" "}
                            <Link className="text-red-400" href="/register">
                                Create an account
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default LoginPage;