import { Box, Button, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import solutionImg from "@/assets/how-it-works-img.png";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
const Solution = () => {
    return (
        <Container sx={{ mt: 5 }}>
            <Box>
                <Box sx={{ textAlign: "start" }}>
                    <Typography
                        color="primary"
                        variant="h6"
                        component="h3"
                        fontWeight={400}
                    >
                        How it Work
                    </Typography>
                    <Typography variant="h4" component="h1" fontWeight={700}>
                        4 Easy Steps to Get Your Solution
                    </Typography>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore! <br />
                        Lorem ipsum dolor sit amet.
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item md={6} sx={{
                        display: "flex",
                        marginTop: "25px"
                    }} >
                        <Box sx={{
                            margin: "0 auto",
                            justifyContent: "center",
                            mt: 2
                        }}>
                            <Image src={solutionImg} alt="chooseUs Img" width={450} />
                        </Box>
                    </Grid>
                    <Grid item md={6} width={100} my={5}>

                        <Stack direction="row" >
                            <Box sx={{
                                backgroundColor: "#fff",
                                padding: "10px",
                                borderRadius: "10px",
                            }}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Box>
                                            <DashboardCustomizeIcon sx={{ color: "primary.main" }} />
                                        </Box>
                                        <Typography variant="h6" component="h1">
                                            Search Doctor
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box sx={{
                                backgroundColor: "#fff",
                                padding: "10px",
                                borderRadius: "10px",
                            }}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Box>
                                            <DashboardCustomizeIcon sx={{ color: "primary.main" }} />
                                        </Box>
                                        <Typography variant="h6" component="h1">
                                            Search Doctor
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Stack>
                        <Stack direction="row" >
                            <Box sx={{
                                backgroundColor: "#fff",
                                padding: "10px",
                                borderRadius: "10px",
                            }}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Box>
                                            <DashboardCustomizeIcon sx={{ color: "primary.main" }} />
                                        </Box>
                                        <Typography variant="h6" component="h1">
                                            Search Doctor
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box sx={{
                                backgroundColor: "#fff",
                                padding: "10px",
                                borderRadius: "10px",
                            }}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Box>
                                            <DashboardCustomizeIcon sx={{ color: "primary.main" }} />
                                        </Box>
                                        <Typography variant="h6" component="h1">
                                            Search Doctor
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Stack>


                    </Grid>

                </Grid>
            </Box>

            <Stack direction="row" gap={20}
                sx={{
                    background: "linear-gradient(90deg, rgba(0,25,255,1) 0%, rgba(4,232,255,1) 100%)",
                    padding: "20px 10px",
                    borderRadius: "8px",
                    mb: 5,
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" component="h1" fontWeight={500}>
                        180+
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Expert Doctor
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" component="h1" fontWeight={500}>
                        26+
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Expert Doctor
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" component="h1" fontWeight={500}>
                        1K+
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Expert Doctor
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" component="h1" fontWeight={500}>
                        150+
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Expert Doctor
                    </Typography>
                </Box>
            </Stack>
        </Container>
    );
};

export default Solution;