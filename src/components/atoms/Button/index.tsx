import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';

type Variant = 'primary' | 'secondary' | 'text';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: Variant;
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  const muiVariant = variant === 'text' ? 'text' : variant === 'secondary' ? 'outlined' : 'contained';

  return (
    <MuiButton
      variant={muiVariant}
      sx={{ textTransform: 'none', borderRadius: 2, ...props.sx }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
