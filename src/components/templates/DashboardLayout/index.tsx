import Box from '@mui/material/Box';
import { Header } from '../../organisms/Header';
import { Sidebar } from '../../organisms/Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <Header />

                {/* Page Content */}
                <Box sx={{
                    flex: 1,
                    padding: 3,
                    backgroundColor: '#F5F5F5',
                    overflowY: 'auto'
                }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};