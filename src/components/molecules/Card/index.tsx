import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Heading } from '../../atoms/Heading';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    action?: React.ReactNode;
}

export const Card = ({ title, children, action }: CardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                padding: 3,
                borderRadius: 2,
                border: '1px solid #E0E0E0',
                backgroundColor: 'white'
            }}
        >
            {title && (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 2
                }}>
                    <Heading variant="h6">
                        {title}
                    </Heading>
                    {action}
                </Box>
            )}
            {children}
        </Paper>
    );
};