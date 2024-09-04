"use client"

import assets from '@/assets';
import { storeUserInfo } from '@/services/auth.service';
import { userLogin } from '@/services/actions/userLogin';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const validationSchema = z.object({
    email: z.string().email("please enter a valid Email address!!"),
    password: z.string().min(6, "Must be at letest 6 carecters")
})

const LoginPage = () => {
    const [error, setError] = useState("")
    const router = useRouter()
    const handleLogin = async (values: FieldValues) => {
        // console.log(values);
        try {
            const res = await userLogin(values);
            if (res?.data?.accessToken) {
                toast.success(res?.message);
                storeUserInfo({ accessToken: res?.data?.accessToken });
                router.push('/');
            } else {
                setError(res.message)
            }

        } catch (err: any) {
            console.error(err.message);
        }
    };
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

                    {error && <Box>
                        <Typography sx={{
                            backgroundColor: "red",
                            padding: "1px",
                            color: "white",
                            borderRadius: "5px"
                        }}>
                            {error}
                        </Typography>
                    </Box>}


                    <Box>
                        <PHForm onSubmit={handleLogin}
                            resolver={zodResolver(validationSchema)}
                            defaultValues={{
                                email: "",
                                password: "",
                            }}
                        >
                            <Grid container spacing={3} my={2}>
                                <Grid item md={6}>
                                    <PHInput
                                        name='email'
                                        label="Email"
                                        type="email"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        name='password'
                                        label="Password"
                                        type="password"
                                        fullWidth={true}

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
                        </PHForm>
                        <Typography component="p" fontWeight={300}>
                            Don&apos;t have an account?{" "}
                            <Link href="/register">
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