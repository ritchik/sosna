import Typography, { type TypographyProps } from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface LogoProps extends Omit<TypographyProps, 'variant'> {
    text?: string;
    variant?: 'default' | 'small';
}

export const Logo = ({ text = 'Marketplace', variant = 'default', sx, ...props }: LogoProps) => {
    const isSmall = variant === 'small';

    return (
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
            <Typography
                variant={isSmall ? 'h6' : 'h4'}
                sx={{
                    fontWeight: 700,
                    color: '#5B4EF5',
                    ...sx
                }}
                {...props}
            >
                🛍️ {text}
            </Typography>
        </Box>
    );
};
