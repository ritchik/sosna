import Typography, { type TypographyProps } from '@mui/material/Typography';

interface TextProps extends TypographyProps {
  weight?: 'regular' | 'medium' | 'bold';
}

export function Text({ weight = 'regular', children, sx, ...props }: TextProps) {
  const fontWeight = weight === 'bold' ? 700 : weight === 'medium' ? 500 : 400;

  return (
    <Typography sx={{ fontWeight, ...sx }} {...props}>
      {children}
    </Typography>
  );
}
