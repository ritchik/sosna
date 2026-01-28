import Typography, { type TypographyProps } from '@mui/material/Typography';

export type TextVariant = 'body1' | 'body2' | 'caption' | 'subtitle1' | 'subtitle2' | 'overline' | 'inherit';

interface TextProps extends Omit<TypographyProps, 'variant'> {
    variant?: TextVariant;
    weight?: 'regular' | 'medium' | 'bold';
    children: React.ReactNode;
}

export const Text = ({ variant = 'body1', weight = 'regular', children, sx, ...props }: TextProps) => {

    const getFontWeight = () => {
        if (weight === 'bold') return 700;
        if (weight === 'medium') return 500;
        return 400;
    };

    return (
        <Typography
            variant={variant}
            sx={{ fontWeight: getFontWeight(), ...sx }}
            {...props}
        >
            {children}
        </Typography>
    );
};
