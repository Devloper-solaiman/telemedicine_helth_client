import SidebarDrawer from '@/components/dashboard/DashboardDrawer/DashboadSidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarDrawer>
            {children}
        </SidebarDrawer>
    );
};

export default DashboardLayout;