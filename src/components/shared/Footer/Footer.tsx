import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import facebookImg from "@/assets/landing_page/facebook.png"
import instagramImg from "@/assets/landing_page/instagram.png"
import linkedinImg from "@/assets/landing_page/linkedin.png"
import twitterImg from "@/assets/landing_page/twitter.png"

const FooterPage = () => {
    return (
        <Box bgcolor="rgb(17, 26, 34)" py={5}>
            <Container>
                <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
                    <Typography color="#FFF" component={Link} href="consultation">Consultation</Typography>
                    <Typography color="#FFF" component={Link} href="healthPlan">Health Plans</Typography>
                    <Typography color="#FFF" component={Link} href="medicine">Medicine</Typography>
                    <Typography color="#FFF" component={Link} href="diagnostics">Diagnostics</Typography>
                    <Typography color="#FFF" component={Link} href="ngo">NGOs</Typography>
                </Stack>
                <Stack direction="row" py={2} justifyContent="center" alignItems="center" gap={4}>
                    <Link href="https://www.facebook.com" passHref>
                        <Image src={facebookImg} alt='facebook' height={30} width={30} />
                    </Link>
                    <Link href="https://www.instagram.com" passHref>
                        <Image src={instagramImg} alt='instagram' height={30} width={30} />
                    </Link>
                    <Link href="https://www.twitter.com" passHref>
                        <Image src={twitterImg} alt='twitter' height={30} width={30} />
                    </Link>
                    <Link href="https://www.linkedin.com" passHref>
                        <Image src={linkedinImg} alt='linkedin' height={30} width={30} />
                    </Link>
                </Stack>
                <Box borderBottom="1px dashed lightgray"></Box>
                <Stack color="#FFF" direction="row" justifyContent="space-between" py={3} alignItems="center" gap={2}>
                    <Typography color="#FFF" component="p">&copy;2024 Ph HealthCare. All Right Resolve  </Typography>
                    <Typography color="#FFF" variant="h4" component={Link} href="/" fontWeight={600}>
                        P<Box component="span" color="primary.main">H</Box>{" "} Health Care
                    </Typography>
                    <Typography color="#FFF" component="p">Privacy Policy! Terms & Condition  </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default FooterPage;