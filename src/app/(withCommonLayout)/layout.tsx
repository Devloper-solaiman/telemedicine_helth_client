import FooterPage from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Box } from "@mui/material";
import { Toaster } from "sonner";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <Box sx={{ minHeight: '100vh' }} >
                <>
                    <Toaster position="top-center" />
                    {children}
                </>
            </Box>
            <FooterPage />
        </>
    );
};

export default CommonLayout;