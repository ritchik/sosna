import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { textStyles } from '../../../contexts/TextStyles';
import { useTheme } from '../../../contexts/ThemeContext';

type Variant = 'primary' | 'secondary' | 'onShadow' | 'text';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: Variant;
}

export function Button({ children, variant = 'primary', sx, ...props }: ButtonProps) {
  const { mode } = useTheme();
  const palette = mode === 'light' ? lightPalette : darkPalette;

  const variantStyles = {
    primary: {
      backgroundColor: palette.primary.main,
      color: '#fff',
      '&:hover': {
        backgroundColor: palette.primary.dark,
      },
    },
    secondary: {
      backgroundColor: palette.background.default,
      color: palette.text.primary,
      '&:hover': {
        backgroundColor: palette.shadow.main,
      },
    },
    onShadow: {
      backgroundColor: palette.widget.main,
      color: palette.text.primary,
      '&:hover': {
        backgroundColor: palette.shadow.main,
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: palette.primary.main,
      '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
      },
    },
  };
  return (
    <MuiButton
      sx={{
        ...textStyles.Filling,
        ...variantStyles[variant],
        padding: '22px',
        borderRadius: '10px',
        width: '100%',
        textTransform: 'none',
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
