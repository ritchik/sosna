import Box from '@mui/material/Box';
import { textStyles } from '../../../contexts/TextStyles';
import { lightPalette, darkPalette } from '../../../contexts/colors';
import { useTheme } from '../../../contexts/ThemeContext';

type Variant = 'Comment' | 'Filling' | 'Label' | 'Banner';

interface IconTextProps {
  icon: React.ReactNode;
  text: string;
  variant?: Variant;
  color?: string;
}

const variantConfig = {
  Comment: { style: textStyles.Comment, gap: 10 },
  Filling: { style: textStyles.Filling, gap: 14 },
  Label: { style: textStyles.Label, gap: 14 },
  Banner: { style: textStyles.Banner, gap: 14 },
};

export function IconText({ icon, text, variant = 'Comment', color }: IconTextProps) {
  const { mode } = useTheme();
  const palette = mode === 'light' ? lightPalette : darkPalette;
  const config = variantConfig[variant];
  const textColor = color || palette.text.primary;

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: `${config.gap}px`, color: textColor }}>
      {icon}
      <span style={{ ...config.style, color: 'inherit' }}>{text}</span>
    </Box>
  );
}