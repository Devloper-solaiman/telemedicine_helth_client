import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';

const SideBar = () => {
    const drawer = (
        <div>

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

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
            {drawer}
        </Box>
    );
};

export default SideBar;