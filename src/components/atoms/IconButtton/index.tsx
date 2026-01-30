import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { IconText } from '../IconText';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

interface IconButtonProps extends Omit<MuiButtonProps, 'color'> {
  icon: React.ReactElement;
  text: string;
  borderColor?: string;
  textColor?: string;
}

export function IconButton({
  icon,
  text,
  borderColor,
  textColor,
  sx,
  ...props
}: IconButtonProps) {
  const { mode } = useTheme();
  const palette = mode === 'light' ? lightPalette : darkPalette;

  const finalBorderColor = borderColor || palette.shadow.main;
  const finalTextColor = textColor || palette.text.primary;

  return (
    <MuiButton
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        border: `1px solid ${finalBorderColor}`,
        borderRadius: '10px',
        textTransform: 'none',
        minWidth: 'auto',
        ...sx,
      }}
      {...props}
    >
      <IconText icon={icon} text={text} variant="Label" color={finalTextColor} />
    </MuiButton>
  );
}