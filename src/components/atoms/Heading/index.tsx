import Typography, { type TypographyProps } from '@mui/material/Typography';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends Omit<TypographyProps, 'variant'> {
    variant?: HeadingVariant;
    children: React.ReactNode;
}

export const Heading = ({ variant = 'h4', children, ...props }: HeadingProps) => {
    return (
        <Typography variant={variant} fontWeight={700} {...props}>
            {children}
        </Typography>
    );
};
