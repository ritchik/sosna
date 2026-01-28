import Typography, { type TypographyProps } from '@mui/material/Typography';

interface LabelProps extends Omit<TypographyProps, 'variant'> {
    children: React.ReactNode;
    required?: boolean;
}

export const Label = ({ children, required, sx, ...props }: LabelProps) => {
    return (
        <Typography
            variant="caption"
            sx={{
                display: 'block',
                marginBottom: 0.5,
                fontWeight: 600,
                textTransform: 'uppercase',
                color: 'text.secondary',
                ...sx
            }}
            {...props}
        >
            {children}
            {required && <span style={{ color: 'red', marginLeft: 4 }}>*</span>}
        </Typography>
    );
};
