import { getUserInfo, removeUser } from '@/services/auth.service';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AuthButton = () => {
    const userInfo = getUserInfo()
    const router = useRouter()
    const handleLogout = () => {
        removeUser()
        router.refresh()
    }
    return (
        <>
            {userInfo?.userId ? (
                <Button color="error" onClick={handleLogout}>LogOut</Button>
            ) : (
                <Button component={Link} href="/login" >Login</Button>
            )}
        </>
    );
};

export default AuthButton;