import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';


interface specialtiesType {
    id: string;
    icon: string;
    title: string;
}

const Specialist = async () => {
    const res = await fetch("http://localhost:5000/api/v1/specialties", {
        next: {
            revalidate: 30
        }
    })
    const { data: specialties } = await res.json()

    return (
        <Box

            sx={{
                margin: "40px 0px",
                textAlign: "center"
            }}
        >
            <Box sx={{ textAlign: "start" }}>
                <Typography variant='h4' fontWeight={600}>Explore Treatments Across Specialties</Typography>
                <Typography component="p" fontWeight={300} fontSize={18}>Experienced Doctors Across All Specialties</Typography>
            </Box>


            <Stack direction="row" gap={4} mt={5}>
                {specialties.slice(0, 6).map((specialty: specialtiesType) => (
                    <Box key={specialty.id}
                        sx={{
                            flex: 1,
                            width: "150px",
                            backgroundColor: "rgba(245, 245, 245, 1 )",
                            border: "1px solid rgba(250, 250, 250, 1)",
                            borderRadius: "10px",
                            textAlign: "center",
                            padding: "40px 10px",
                            "& img": {
                                width: "50px",
                                height: "50px",
                                margin: "0 auto"
                            },
                            "&:hover": {
                                border: "1px solid blue",
                                padding: "40px 10px",
                                borderRadius: "10px",
                            }
                        }}
                    >
                        <Image src={specialty.icon} width={100} height={100} alt='specialty Image' />
                        <Box>
                            <Typography component="p" fontWeight={600} mt={2} fontSize={18}>{specialty.title}</Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>
            <Button href='/' variant='outlined' sx={{ marginTop: "20px" }}>View ALL</Button>
        </Box>
    );
};

export default Specialist;