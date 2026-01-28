import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Definiuj własne warianty
export type CustomVariant =
  | 'primary'      // Fioletowy główny (All, Most purchased)
  | 'secondary'    // Szary/biały (Positive, Negative, View all)
  | 'outlined'     // Obramowanie (Least purchased)
  | 'text'         // Bez tła (Learn more)
  | 'toggle';      // Toggle (PL/Dark mode)

interface CustomButtonProps extends Omit<MuiButtonProps, 'variant'> {
  customVariant?: CustomVariant;
}

export const Button = ({
  children,
  customVariant = 'primary',
  ...props
}: CustomButtonProps) => {

  // Mapuj custom variant na MUI variant
  const getMuiVariant = (): MuiButtonProps['variant'] => {
    switch (customVariant) {
      case 'primary': return 'contained';
      case 'secondary': return 'outlined';
      case 'outlined': return 'outlined';
      case 'text': return 'text';
      case 'toggle': return 'outlined';
      default: return 'contained';
    }
  };

  // Kolory dla twoich wariantów
  const getColor = (): MuiButtonProps['color'] => {
    switch (customVariant) {
      case 'primary': return 'primary';
      case 'secondary': return 'inherit';
      case 'toggle': return 'primary';
      default: return 'primary';
    }
  };

  return (
    <MuiButton
      variant={getMuiVariant()}
      color={getColor()}
      sx={{
        textTransform: 'none', // Wyłącz UPPERCASE
        borderRadius: customVariant === 'toggle' ? 1 : 2,
        fontWeight: customVariant === 'primary' ? 600 : 500,
        ...props.sx
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};