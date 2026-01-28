import Box from '@mui/material/Box';
import { Header } from '../../organisms/Header';

interface FullWidthLayoutProps {
    children: React.ReactNode;
}

export const FullWidthLayout = ({ children }: FullWidthLayoutProps) => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Header />

            {/* Full Width Content */}
            <Box sx={{
                flex: 1,
                padding: 3,
                backgroundColor: '#F5F5F5'
            }}>
                {children}
            </Box>
        </Box>
    );
};