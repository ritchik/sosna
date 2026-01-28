import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Logo } from '../../atoms/Logo';
import { Heading } from '../../atoms/Heading';

interface AuthLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5'
        }}>
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    maxWidth: 400,
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                {/* Logo */}
                <Logo sx={{ marginBottom: 1 }} />

                {/* Title */}
                {title && (
                    <Heading variant="h6" sx={{ marginBottom: 3, color: 'text.secondary' }}>
                        {title}
                    </Heading>
                )}

                {/* Content (Login Form, etc.) */}
                {children}
            </Paper>
        </Box>
    );
};