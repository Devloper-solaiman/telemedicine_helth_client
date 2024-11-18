import { Box, List, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import { drawerItems } from '@/utils/drawerItems';
import { UserRole } from '@/types';
import SideBarItems from './SideBarItems';
import { getUserInfo } from '@/services/auth.service';
import { useEffect, useState } from 'react';

const SideBar = () => {
    const [userRole, setUserRole] = useState("")
    useEffect(() => {
        const { role } = getUserInfo() as any
        console.log(role)
        setUserRole(role)
    }, [])


    return (
        <Box>
            <Stack
                sx={{
                    py: 1,
                    mt: 1,
                    cursor: "pointer"
                }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap={1}
                component={Link}
                href="/"

            >
                <Image src={assets.svgs.logo} width={40} alt='logo' />
                <Typography variant='h6' component="h1">Telemedicine</Typography>
            </Stack>
            <List>
                {drawerItems(userRole as UserRole).map((item, index) => (
                    <SideBarItems key={index} item={item} />
                ))}
            </List>
        </Box>
    );
};

export default SideBar;