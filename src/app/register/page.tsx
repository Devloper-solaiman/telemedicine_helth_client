"use client";
import assets from '@/assets';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import { registerPatient } from '@/services/actions/registerPatient';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.service';
import { ModifyPayload } from '@/utils/ModifyPayload';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from "react-hook-form"
import { toast } from 'sonner';
import { z } from 'zod';

export const RegisterValidationSchema = z.object({
    name: z.string().min(1, "Please Enter yor Name.").max(50, "Name cannot exceed 50 characters."),
    email: z.string().email("Please enter a valid email address."),
    contactNumber: z.string().min(11, "Please provide a valid Phone number .").max(15, "Contact number cannot exceed 15 digits.").regex(/^\d{11}$/, "Contact number should only contain digits."),
    address: z.string().min(5, "Address is required and should be at least 5 characters long.").max(100, "Address cannot exceed 100 characters."),
});
export const validationSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters long.").max(100, "Password cannot exceed 100 characters."),
    patient: RegisterValidationSchema
})

export const defaultValues = {
    password: "",
    patient: {
        name: "",
        email: "",
        contactNumber: "",
        address: "",
    }
}

const RegisterPage = () => {
    const router = useRouter()
    const [error, setError] = useState("")
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
            } else {
                setError(res.message)
                console.log(res.message)
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
                        <PHForm onSubmit={handleRegister}
                            resolver={zodResolver(validationSchema)}
                            defaultValues={defaultValues}
                        >
                            <Grid container spacing={3} my={2}>
                                <Grid item md={12}>
                                    <PHInput
                                        label="Name"
                                        fullWidth={true}
                                        name="patient.name"

                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Email"
                                        type="email"
                                        fullWidth={true}
                                        name="patient.email"

                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Password"
                                        type="password"
                                        fullWidth={true}
                                        name="password"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Contact Number"
                                        type="tel"
                                        fullWidth={true}
                                        name="patient.contactNumber"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput
                                        label="Address"
                                        fullWidth={true}
                                        name="patient.address"
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
                            <Link href="/login">
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