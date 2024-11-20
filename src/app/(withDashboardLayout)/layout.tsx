"use client"
import SidebarDrawer from '@/components/dashboard/DashboardDrawer/DashboadSidebar';
import { isLoggedIn } from '@/services/auth.service';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   const router = useRouter()
   if (!isLoggedIn()) {
    return router.push("/login")
   }
    return (
        <SidebarDrawer>
            {children}
        </SidebarDrawer>
    );
};

export default DashboardLayout;